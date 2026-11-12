/* 3D Manga Studios docs — 歪み補正の3Dデモ（Three.js を CDN から必要なときだけ読み込む）
   サンプルシーンのキャラクター（ジオンレ）を 18mm のカメラで撮る。キャラはドラッグ（または赤い矢印）で左右に動かせる。
   「顔だけのレンズ」を上げると、頭の頂点だけを別のレンズ（望遠）で撮ったように投影し直す。
   アドオンの歪み補正と同じ考え方：顔の中心を画面上の同じ位置に保ったまま、顔の形だけパースを弱め、
   首から下は「なじませる幅」で元の投影へ戻す。見た目はスクリーントーン（網点）＋輪郭線の白黒漫画。 */
(function(){
const CDN='https://cdn.jsdelivr.net/npm/three@0.160.0/';
const THREE_URL=CDN+'+esm', GLTF_URL=CDN+'examples/jsm/loaders/GLTFLoader.js/+esm';
const CAM_MM=18, SENSOR=36;

const VERT_HEAD='uniform vec3 uC;uniform float uRatio;uniform float uFadeLo;uniform float uFadeHi;uniform float uLine;varying float vDfW;\n';
const VERT_PROJECT=`
vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
vec4 dfWorld = modelMatrix * vec4( transformed, 1.0 );
float dfW = smoothstep( uFadeLo, uFadeHi, dfWorld.y );
vDfW = dfW;
vec4 dfReal = projectionMatrix * mvPosition;
float dfL = length( uC );
vec3 dfCh = uC / dfL;
vec3 dfR = normalize( cross( dfCh, vec3( 0.0, 1.0, 0.0 ) ) );
vec3 dfU = cross( dfR, dfCh );
vec3 dfD = mvPosition.xyz - uC;
float dfDist = dfL * uRatio;
float dfDep = max( dfDist + dot( dfD, dfCh ), 0.01 );
vec4 dfCc = projectionMatrix * vec4( uC, 1.0 );
vec2 dfFix = dfCc.xy / dfCc.w + vec2( dot( dfD, dfR ) * projectionMatrix[0][0], dot( dfD, dfU ) * projectionMatrix[1][1] ) * ( dfDist / dfDep ) / dfL;
float dfK = dfW * smoothstep( 1.0, 1.45, uRatio );
gl_Position = vec4( mix( dfReal.xy / dfReal.w, dfFix, dfK ) * dfReal.w, dfReal.z, dfReal.w );
`;
// 明るさ → 網点（45°の点の大きさ）。白・ベタは塗りのまま
const HALFTONE=`
float msLum = dot( gl_FragColor.rgb, vec3( 0.299, 0.587, 0.114 ) );
vec2 msQ = mat2( 0.7071, -0.7071, 0.7071, 0.7071 ) * ( gl_FragCoord.xy / uDot );
float msR = sqrt( clamp( ( 0.92 - msLum ) / 0.8, 0.0, 1.0 ) ) * 0.64;
float msInk = 1.0 - smoothstep( msR - 0.07, msR + 0.07, length( fract( msQ ) - 0.5 ) );
vec3 msCol = msLum > 0.9 ? vec3( 1.0 ) : ( msLum < 0.1 ? vec3( 0.08 ) : vec3( 1.0 - msInk * 0.92 ) );
gl_FragColor.rgb = mix( msCol, vec3( 0.35, 0.72, 0.89 ), vDfW * uShowW * 0.55 );
`;

function build(T, GLTFLoader, el){
  const W=()=>el.clientWidth, H=()=>Math.round(el.clientWidth*9/16);
  const renderer=new T.WebGLRenderer({antialias:true});
  const PR=Math.min(2,window.devicePixelRatio||1);
  renderer.setPixelRatio(PR); renderer.setSize(W(),H());
  el.appendChild(renderer.domElement);

  const scene=new T.Scene(); scene.background=new T.Color('#ffffff');
  const aspect=16/9, hfov=2*Math.atan(SENSOR/2/CAM_MM);
  const cam=new T.PerspectiveCamera(2*Math.atan(Math.tan(hfov/2)/aspect)*180/Math.PI,aspect,0.03,60);
  scene.add(new T.HemisphereLight('#ffffff','#8d939c',0.9));
  const sun=new T.DirectionalLight('#ffffff',2.4); sun.position.set(-2.5,4,3); scene.add(sun);
  const g=new Uint8Array([70,70,70,255, 150,150,150,255, 255,255,255,255]);
  const grad=new T.DataTexture(g,3,1,T.RGBAFormat); grad.magFilter=grad.minFilter=T.NearestFilter; grad.needsUpdate=true;
  const uDot={value:5.5*PR};
  const NOFX={uC:{value:new T.Vector3(0,0,-1)},uRatio:{value:1},uFadeLo:{value:99},uFadeHi:{value:100},uShowW:{value:0},uLine:{value:0}};

  function tone(color,U){
    const m=new T.MeshToonMaterial({color,gradientMap:grad});
    m.onBeforeCompile=sh=>{Object.assign(sh.uniforms,U,{uDot});
      sh.vertexShader=VERT_HEAD+sh.vertexShader.replace('#include <project_vertex>',VERT_PROJECT);
      sh.fragmentShader='uniform float uShowW;uniform float uDot;varying float vDfW;\n'+sh.fragmentShader.replace('#include <dithering_fragment>','#include <dithering_fragment>\n'+HALFTONE);};
    m.customProgramCacheKey=()=>'mstone'; return m;
  }
  function ink(U){
    const m=new T.MeshBasicMaterial({color:'#141519',side:T.BackSide});
    m.onBeforeCompile=sh=>{Object.assign(sh.uniforms,U);
      sh.vertexShader=VERT_HEAD+sh.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\n transformed += normal * uLine;').replace('#include <project_vertex>',VERT_PROJECT);};
    m.customProgramCacheKey=()=>'msink'; return m;
  }
  function face(kind,U,map){   // 目は Blender（EEVEE）で焼き付けたテクスチャ、口は形だけ描く
    const frag=map?`vec4 t=texture2D(uMap,vUv); if(t.a<0.5) discard;
      float e=1.0; for(int k=0;k<12;k++){ float an=float(k)*0.5236; vec2 o=vec2(cos(an),sin(an)); float w=o.y>0.0?0.05:0.03; e=min(e,texture2D(uMap,vUv+o*w).a); }
      float lum=dot(t.rgb,vec3(0.299,0.587,0.114));
      vec2 q=mat2(0.7071,-0.7071,0.7071,0.7071)*(gl_FragCoord.xy/uDot); float r=sqrt(clamp((0.92-lum)/0.8,0.0,1.0))*0.64;
      float ink=1.0-smoothstep(r-0.07,r+0.07,length(fract(q)-0.5));
      vec3 c=lum>0.9?vec3(1.0):(lum<0.12?vec3(0.06):vec3(1.0-ink*0.92));
      if(e<0.5) c=vec3(0.06);`
     :`vec2 p=vUv-0.5; float d=length(p*vec2(2.1,3.4)); if(d>1.0) discard; vec3 c=d>0.78?vec3(0.08):vec3(0.3);`;
    const uni=Object.assign({},U,{uMap:{value:map||null},uDot});
    if(map) map.colorSpace=T.NoColorSpace;
    return new T.ShaderMaterial({uniforms:uni,side:T.DoubleSide,
      vertexShader:VERT_HEAD+'varying vec2 vUv;void main(){vUv=uv;vec3 transformed=position;'+VERT_PROJECT+'}',
      fragmentShader:'uniform float uShowW;uniform float uDot;uniform sampler2D uMap;varying float vDfW;varying vec2 vUv;void main(){'+frag+'gl_FragColor=vec4(mix(c,vec3(0.35,0.72,0.89),vDfW*uShowW*0.55),1.0);}'});
  }

  // 床（補正しない＝元のパースの比較用）
  const floor=new T.Mesh(new T.PlaneGeometry(40,40),tone('#f2f2f2',NOFX)); floor.rotation.x=-Math.PI/2; scene.add(floor);
  const fl=new T.GridHelper(40,80,'#141519','#141519'); fl.material.opacity=0.2; fl.material.transparent=true; fl.position.y=0.002; scene.add(fl);

  const lens=document.getElementById('dfLens'), lensOut=document.getElementById('dfLensOut'), faceLab=document.getElementById('dfFaceLab');
  const show=document.getElementById('dfShow');
  let P=null, headH=1, neckH=0.8, charX=null, charZ=-1.5, limit=1;
  const tmp=new T.Vector3(), headLocal=new T.Vector3();

  function person(src){
    const U={uC:{value:new T.Vector3()},uRatio:{value:1},uFadeLo:{value:0},uFadeHi:{value:1},uShowW:{value:0},uLine:{value:0.006}};
    const root=new T.Group(), grp=src.clone(true); root.add(grp);
    const meshes=[]; grp.traverse(o=>{if(o.isMesh) meshes.push(o);});
    const inkM=ink(U), pick=[];
    for(const o of meshes){
      const n=o.material.name||'';
      if(n.startsWith('MS_eye')||n.startsWith('MS_mouth')){o.material=face(n.startsWith('MS_eye')?'eye':'mouth',U,o.material.map);o.renderOrder=2;continue;}
      o.material=tone(o.material.color.clone(),U); pick.push(o);
      const h=new T.Mesh(o.geometry,inkM); h.position.copy(o.position); h.quaternion.copy(o.quaternion); h.scale.copy(o.scale); o.parent.add(h);
    }
    scene.add(root);
    return {root,U,pick};
  }

  // Blender 風の移動ギズモ（X 軸の赤い矢印＋中心の丸）。いつも手前に描き、画面上で同じ大きさ
  const giz=new T.Group(); giz.renderOrder=10;
  const gm=c=>new T.MeshBasicMaterial({color:c,depthTest:false,depthWrite:false,transparent:true});
  const red=gm('#e8423f'), ring=gm('#ffffff');
  const shaft=new T.Mesh(new T.CylinderGeometry(0.012,0.012,0.7,10),red); shaft.rotation.z=-Math.PI/2; shaft.position.x=0.45;
  const tip=new T.Mesh(new T.ConeGeometry(0.05,0.16,16),red); tip.rotation.z=-Math.PI/2; tip.position.x=0.86;
  const hitA=new T.Mesh(new T.CylinderGeometry(0.08,0.08,0.9,8),new T.MeshBasicMaterial({visible:false})); hitA.rotation.z=-Math.PI/2; hitA.position.x=0.5;
  const dot=new T.Mesh(new T.RingGeometry(0.045,0.07,32),ring);
  const dotIn=new T.Mesh(new T.CircleGeometry(0.045,32),gm('#141519')); dotIn.material.opacity=0.35;
  [shaft,tip,dot,dotIn].forEach(m=>{m.renderOrder=10;giz.add(m);}); giz.add(hitA); scene.add(giz);
  function gizHover(on){red.color.set(on?'#ffd23d':'#e8423f');}

  function layout(){
    cam.position.set(0,headH*0.98,0); cam.lookAt(0,headH*0.88,-10);
    charZ=-headH*1.5; limit=Math.tan(hfov/2)*-charZ*0.92;
    if(charX===null) charX=0;
    P.root.position.set(charX,0,charZ);
    giz.position.set(charX,headH*0.45,charZ);
    giz.quaternion.copy(cam.quaternion); giz.rotation.set(0,0,0);   // 軸はワールド X
    const d=giz.position.distanceTo(cam.position); giz.scale.setScalar(d*0.22);
    dot.quaternion.copy(cam.quaternion); dotIn.quaternion.copy(cam.quaternion);
  }
  function render(){
    if(!P) return;
    layout();
    const mm=+lens.value, ratio=mm/CAM_MM;
    lensOut.textContent=mm+'mm'; faceLab.textContent='face '+mm+'mm';
    scene.updateMatrixWorld(); cam.updateMatrixWorld();
    tmp.copy(headLocal).applyMatrix4(P.root.matrixWorld).applyMatrix4(cam.matrixWorldInverse);
    P.U.uC.value.copy(tmp); P.U.uRatio.value=ratio; P.U.uShowW.value=show.checked?1:0;
    P.U.uFadeLo.value=neckH-headH*0.02; P.U.uFadeHi.value=neckH+headH*0.07;
    renderer.render(scene,cam);
  }
  [lens,show].forEach(i=>i.addEventListener('input',render));
  const reset=document.getElementById('dfReset'); if(reset) reset.addEventListener('click',()=>{charX=null; render();});
  if('ResizeObserver' in window){new ResizeObserver(()=>{renderer.setSize(W(),H());render();}).observe(el);}

  // ドラッグで左右に動かす（キャラ本体か赤い矢印をつかむ）
  const ray=new T.Raycaster(), ndc=new T.Vector2(), plane=new T.Plane(), hitP=new T.Vector3();
  const cv=renderer.domElement; cv.style.touchAction='none';
  let drag=null;
  function setRay(e){const r=cv.getBoundingClientRect(); ndc.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1); ray.setFromCamera(ndc,cam);}
  function hit(){return P&&ray.intersectObjects([hitA,dot,...P.pick],false).length>0;}
  function planeX(){plane.setFromNormalAndCoplanarPoint(new T.Vector3(0,0,1),new T.Vector3(0,0,charZ)); return ray.ray.intersectPlane(plane,hitP)?hitP.x:null;}
  cv.addEventListener('pointerdown',e=>{setRay(e); if(!hit()) return; const x=planeX(); if(x===null) return;
    drag={off:charX-x}; cv.setPointerCapture(e.pointerId); cv.style.cursor='grabbing'; gizHover(true); render(); e.preventDefault();});
  cv.addEventListener('pointermove',e=>{setRay(e);
    if(drag){const x=planeX(); if(x!==null){charX=Math.max(-limit,Math.min(limit,x+drag.off)); render();} return;}
    const h=hit(); cv.style.cursor=h?'grab':''; if(h!==cv._h){cv._h=h; gizHover(h); render();}});
  const end=e=>{if(!drag) return; drag=null; cv.style.cursor='grab'; try{cv.releasePointerCapture(e.pointerId);}catch(_){} };
  cv.addEventListener('pointerup',end); cv.addEventListener('pointercancel',end);
  cv.addEventListener('pointerleave',()=>{if(!drag&&cv._h){cv._h=false;gizHover(false);render();}});

  new GLTFLoader().load(el.dataset.model,gl=>{
    const src=gl.scene;
    // 足元を原点、体の中心を x=z=0 に
    const box=new T.Box3(); src.updateMatrixWorld(true); src.traverse(o=>{if(o.isMesh) box.expandByObject(o);});
    const c=box.getCenter(new T.Vector3());
    src.position.set(-c.x,-box.min.y,-c.z); src.updateMatrixWorld(true);
    src.getObjectByName('HeadCenter').getWorldPosition(headLocal);
    neckH=src.getObjectByName('NeckBase').getWorldPosition(new T.Vector3()).y; headH=headLocal.y;
    const wrap=new T.Group(); wrap.add(src);
    P=person(wrap);
    el.classList.add('is-ready'); render();
  },undefined,e=>{el.insertAdjacentHTML('beforeend',(window.msT||(s=>s))('<p class="ms-df3d__err">モデルを読み込めませんでした。</p>'));console.error(e);});
}

window.msDfDemo=function(el){
  if(!el||el.dataset.b) return; el.dataset.b=1;
  const go=()=>Promise.all([import(THREE_URL),import(GLTF_URL)]).then(([T,L])=>{
    try{build(T,L.GLTFLoader,el);}catch(e){el.insertAdjacentHTML('beforeend',(window.msT||(s=>s))('<p class="ms-df3d__err">3D の表示に対応していないブラウザです。</p>'));console.error(e);}
  }).catch(e=>{el.insertAdjacentHTML('beforeend',(window.msT||(s=>s))('<p class="ms-df3d__err">3D デモを読み込めませんでした（オフライン？）。</p>'));console.error(e);});
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();go();}},{rootMargin:'200px'});io.observe(el);}else go();
};
})();

/* ---------- ライト：RGB の3灯（Three.js） ----------
   球に キー（赤）・フィル（緑）・バック（青）の3灯。シェーダーは色の成分を読み分けて、
   赤＝いちばん明るい面、緑＝影の中の中間調、青＝輪郭のリム として網点トーンに置き換える。
   ライトの玉はドラッグで動かせる（Shift＋ドラッグで高さ）。 */
(function(){
const THREE_URL='https://cdn.jsdelivr.net/npm/three@0.160.0/+esm', ORBIT_URL='https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js/+esm';
const INIT=[{key:'key',get name(){return (window.msT||(s=>s))('キー（赤）')},col:'#e04a3f',a:140,r:2.3,h:1.5},{key:'fill',get name(){return (window.msT||(s=>s))('フィル（緑）')},col:'#2f9e57',a:35,r:2.3,h:0.9},{key:'back',get name(){return (window.msT||(s=>s))('バック（青）')},col:'#3b6fd6',a:-70,r:2.3,h:0.6}];
function build(T,OrbitControls,el){
  const W=()=>el.clientWidth, H=()=>Math.round(el.clientWidth*9/16);
  const PR=Math.min(2,window.devicePixelRatio||1);
  const renderer=new T.WebGLRenderer({antialias:true}); renderer.setPixelRatio(PR); renderer.setSize(W(),H());
  el.appendChild(renderer.domElement);
  const scene=new T.Scene(); scene.background=new T.Color('#ffffff');
  const cam=new T.PerspectiveCamera(34,16/9,0.1,50); cam.position.set(0,4.4,7.2); cam.lookAt(0,0.35,0);
  const L=INIT.map(o=>Object.assign({},o));
  const uL={value:[new T.Vector3(),new T.Vector3(),new T.Vector3()]}, uMode={value:1}, uDot={value:5*PR};
  const ball=new T.Mesh(new T.SphereGeometry(1,96,64),new T.ShaderMaterial({uniforms:{uL,uMode,uDot},
    vertexShader:'varying vec3 vN;varying vec3 vP;void main(){vN=normalize(mat3(modelMatrix)*normal);vec4 w=modelMatrix*vec4(position,1.0);vP=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
    fragmentShader:`uniform vec3 uL[3];uniform float uMode;uniform float uDot;varying vec3 vN;varying vec3 vP;
    void main(){vec3 n=normalize(vN);vec3 v=normalize(cameraPosition-vP);
      float k=max(dot(n,normalize(uL[0]-vP)),0.0), f=max(dot(n,normalize(uL[1]-vP)),0.0), b=max(dot(n,normalize(uL[2]-vP)),0.0);
      // 境界をくっきり：しきい値をまたぐ所だけ 1px ぶんなめらかに（アンチエイリアス）
      float aK=fwidth(k)*0.75, aF=fwidth(f)*0.75;
      float K=smoothstep(0.30-aK,0.30+aK,k), F=smoothstep(0.22-aF,0.22+aF,f);
      float aB=fwidth(b)*0.75; float B=smoothstep(0.22-aB,0.22+aB,b);
      // 照り（キーライトのハイライト）：はっきりした白い形
      vec3 lk=normalize(uL[0]-vP); float sp=max(dot(reflect(-lk,n),v),0.0); float aS=fwidth(sp)*0.75;
      float S=smoothstep(0.86-aS,0.86+aS,sp)*K;
      // RGB：足し合わせず、フィル（緑）→ キー（赤）→ バック（青）の順に上書き
      if(uMode<0.5){ vec3 c=vec3(0.06); c=mix(c,vec3(0.0,0.85,0.25),F); c=mix(c,vec3(0.95,0.1,0.08),K); c=mix(c,vec3(0.15,0.35,1.0),B); gl_FragColor=vec4(c,1.0); return; }
      float lum=mix(mix(0.14,0.58,F),1.0,K);
      vec2 q=mat2(0.7071,-0.7071,0.7071,0.7071)*(gl_FragCoord.xy/uDot); float r=sqrt(clamp((0.92-lum)/0.8,0.0,1.0))*0.66;
      float ink=1.0-smoothstep(r-0.05,r+0.05,length(fract(q)-0.5));
      vec3 c=lum>0.9?vec3(1.0):vec3(1.0-ink*0.96);
      c=mix(c,vec3(1.0),B);
      gl_FragColor=vec4(c,1.0);}`}));
  ball.position.y=0.35; scene.add(ball);
  const hull=new T.Mesh(new T.SphereGeometry(1.035,64,48),new T.MeshBasicMaterial({color:'#141519',side:T.BackSide})); hull.position.copy(ball.position); scene.add(hull);
  // 床の影の代わりに薄い円と、ライトが回る点線の円
  const pts=[]; for(let i=0;i<=128;i++){const a=i/128*Math.PI*2; pts.push(new T.Vector3(Math.cos(a)*2.3,0.35,Math.sin(a)*2.3));}
  const orbit=new T.Line(new T.BufferGeometry().setFromPoints(pts),new T.LineDashedMaterial({color:'#58b7e2',dashSize:0.12,gapSize:0.09})); orbit.computeLineDistances(); scene.add(orbit);
  const grid=new T.GridHelper(12,24,'#141519','#141519'); grid.material.opacity=0.12; grid.material.transparent=true; grid.position.y=-0.66; scene.add(grid);
  const handles=L.map(o=>{
    const g=new T.Group();
    const m=new T.Mesh(new T.SphereGeometry(0.17,32,24),new T.MeshBasicMaterial({color:o.col})); g.add(m);
    const ol=new T.Mesh(new T.SphereGeometry(0.2,32,24),new T.MeshBasicMaterial({color:'#141519',side:T.BackSide})); g.add(ol);
    const beam=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3()]),new T.LineBasicMaterial({color:o.col,linewidth:2})); scene.add(beam);
    const drop=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3()]),new T.LineDashedMaterial({color:o.col,dashSize:0.06,gapSize:0.06,transparent:true,opacity:0.7})); scene.add(drop);
    const lab=document.createElement('span'); lab.className='ms-lt-lab'; lab.textContent=o.name; lab.style.color='#141519'; el.appendChild(lab);
    scene.add(g); return {g,m,beam,drop,lab,o};
  });
  const tmp=new T.Vector3(), c0=ball.position;
  function place(){
    L.forEach((o,i)=>{const a=o.a*Math.PI/180; const p=new T.Vector3(Math.cos(a)*o.r,0.35+o.h,Math.sin(a)*o.r); uL.value[i].copy(p);
      const h=handles[i]; h.g.position.copy(p);
      const dir=tmp.copy(c0).sub(p).normalize(); const end=c0.clone().sub(dir.clone().multiplyScalar(1.05));
      h.beam.geometry.setFromPoints([p.clone().add(dir.clone().multiplyScalar(0.2)),end]);
      h.drop.geometry.setFromPoints([p,new T.Vector3(p.x,0.35,p.z)]); h.drop.computeLineDistances();});
  }
  function labels(){
    const r=el.getBoundingClientRect();
    handles.forEach(h=>{const v=h.g.position.clone().add(new T.Vector3(0,0.24,0)).project(cam); h.lab.style.left=((v.x+1)/2*r.width)+'px'; h.lab.style.top=((1-v.y)/2*r.height-24)+'px';});
  }
  // Blender 風のナビゲーションギズモ（右上）。軸の丸をクリックでその向きから見る、ドラッグで回す
  const gz=document.createElement('canvas'); gz.className='ms-navgiz'; el.appendChild(gz);
  const GZ=88; gz.width=GZ*PR; gz.height=GZ*PR; gz.style.width=gz.style.height=GZ+'px';
  const gx=gz.getContext('2d');
  // Blender の軸（Z が上）→ three の向き
  const AX=[['X','#e8423f',new T.Vector3(1,0,0)],['Y','#7fbf3f',new T.Vector3(0,0,-1)],['Z','#3d82e8',new T.Vector3(0,1,0)]];
  let gzHits=[];
  function drawGiz(){
    const c=GZ/2, R=GZ*0.34; gx.setTransform(PR,0,0,PR,0,0); gx.clearRect(0,0,GZ,GZ);
    gx.fillStyle='rgba(20,21,25,.08)'; gx.beginPath(); gx.arc(c,c,GZ/2-2,0,Math.PI*2); gx.fill();
    const inv=cam.quaternion.clone().invert(); const items=[];
    AX.forEach(([n,col,d])=>{for(const sgn of [1,-1]){const v=d.clone().multiplyScalar(sgn).applyQuaternion(inv); items.push({n,col,sgn,d:d.clone().multiplyScalar(sgn),x:c+v.x*R,y:c-v.y*R,z:v.z});}});
    items.sort((a,b)=>a.z-b.z); gzHits=[];
    for(const it of items){
      if(it.sgn>0){gx.strokeStyle=it.col; gx.lineWidth=2; gx.beginPath(); gx.moveTo(c,c); gx.lineTo(it.x,it.y); gx.stroke();}
      gx.beginPath(); gx.arc(it.x,it.y,it.sgn>0?9:7,0,Math.PI*2);
      gx.fillStyle=it.sgn>0?it.col:'rgba(255,255,255,.9)'; gx.fill(); gx.lineWidth=1.5; gx.strokeStyle=it.col; gx.stroke();
      if(it.sgn>0){gx.fillStyle='#141519'; gx.font='700 10px sans-serif'; gx.textAlign='center'; gx.textBaseline='middle'; gx.fillText(it.n,it.x,it.y+0.5);}
      gzHits.push(it);
    }
  }
  let gd=null;
  gz.addEventListener('pointerdown',e=>{gd={x:e.clientX,y:e.clientY,moved:false}; gz.setPointerCapture(e.pointerId); e.stopPropagation();});
  gz.addEventListener('pointermove',e=>{if(!gd) return; const dx=e.clientX-gd.x, dy=e.clientY-gd.y; if(Math.abs(dx)+Math.abs(dy)>2) gd.moved=true; if(!gd.moved) return;
    const off=cam.position.clone().sub(ctl.target), sp=new T.Spherical().setFromVector3(off);
    sp.theta-=dx*0.012; sp.phi=Math.max(0.05,Math.min(Math.PI*0.49,sp.phi-dy*0.012)); cam.position.copy(ctl.target).add(new T.Vector3().setFromSpherical(sp)); ctl.update(); gd.x=e.clientX; gd.y=e.clientY;});
  gz.addEventListener('pointerup',e=>{if(gd&&!gd.moved){const r=gz.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top;
      const hit=[...gzHits].reverse().find(it=>Math.hypot(it.x-x,it.y-y)<10);
      if(hit){const dist=cam.position.distanceTo(ctl.target); const d=hit.d.clone(); if(d.y>0.5) d.set(0,1,0.02).normalize(); if(d.y<-0.5) d.set(0,0.2,1).normalize();
        cam.position.copy(ctl.target).add(d.multiplyScalar(dist)); ctl.update();}}
    gd=null;});
  function render(){place(); renderer.render(scene,cam); labels(); drawGiz();}

  // ドラッグ：玉をつかんで床と平行に動かす。Shift で高さ
  const ray=new T.Raycaster(), ndc=new T.Vector2(), plane=new T.Plane(), hp=new T.Vector3();
  const cv=renderer.domElement; cv.style.touchAction='none'; let drag=null;
  const setRay=e=>{const r=cv.getBoundingClientRect(); ndc.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1); ray.setFromCamera(ndc,cam);};
  const pick=()=>{const hs=ray.intersectObjects(handles.map(h=>h.m),false); return hs.length?handles.findIndex(h=>h.m===hs[0].object):-1;};
  cv.addEventListener('pointerdown',e=>{setRay(e); const i=pick(); if(i<0) return; ctl.enabled=false; drag={i,y:e.clientY,h:L[i].h}; cv.setPointerCapture(e.pointerId); cv.style.cursor='grabbing'; e.preventDefault(); e.stopImmediatePropagation();},true);
  cv.addEventListener('pointermove',e=>{setRay(e);
    if(!drag){cv.style.cursor=pick()>=0?'grab':''; return;}
    const o=L[drag.i];
    // ふつうのドラッグ：青い点線の円に沿って回る（距離はそのまま）。Shift＋ドラッグ：高さだけ変える
    if(e.shiftKey){o.h=Math.max(-0.6,Math.min(2.6,o.h+(drag.y-e.clientY)*0.012));}
    else{plane.set(new T.Vector3(0,1,0),-(0.35+o.h)); if(ray.ray.intersectPlane(plane,hp)){o.a=Math.atan2(hp.z,hp.x)*180/Math.PI;}}
    drag.y=e.clientY;
    render();});
  const end=e=>{if(!drag)return; drag=null; ctl.enabled=true; cv.style.cursor='grab'; try{cv.releasePointerCapture(e.pointerId);}catch(_){} };
  cv.addEventListener('pointerup',end); cv.addEventListener('pointercancel',end);
  // 何もない所をドラッグ＝カメラを回す、ホイール＝ズーム（ライトの玉をつかんだときは回さない）
  const ctl=new OrbitControls(cam,cv); ctl.target.set(0,0.35,0); ctl.enablePan=false; ctl.enableDamping=false; ctl.zoomSpeed=0.9;
  ctl.minDistance=4.5; ctl.maxDistance=14; ctl.maxPolarAngle=Math.PI*0.49; ctl.update();
  ctl.addEventListener('change',render);
  const q=id=>document.getElementById(id);
  q('ltAlign')&&q('ltAlign').addEventListener('click',()=>{L.forEach(o=>o.h=L[0].h); render();});
  q('ltEven')&&q('ltEven').addEventListener('click',()=>{const r=L[0].r; L.forEach((o,i)=>{o.a=L[0].a-i*120; o.r=r;}); render();});
  q('ltReset')&&q('ltReset').addEventListener('click',()=>{INIT.forEach((o,i)=>Object.assign(L[i],o)); render();});
  q('ltCam')&&q('ltCam').addEventListener('click',()=>{cam.position.set(0,4.4,7.2); ctl.target.set(0,0.35,0); ctl.update(); render();});
  el.querySelectorAll('[data-m]').forEach(b=>b.addEventListener('click',()=>{uMode.value=+b.dataset.m; el.querySelectorAll('[data-m]').forEach(x=>x.classList.toggle('on',x===b)); render();}));
  if('ResizeObserver' in window){new ResizeObserver(()=>{renderer.setSize(W(),H());render();}).observe(el);}
  render();
}
window.msLightDemo=function(el){
  if(!el||el.dataset.b) return; el.dataset.b=1;
  const go=()=>Promise.all([import(THREE_URL),import(ORBIT_URL)]).then(([T,O])=>{try{build(T,O.OrbitControls,el);}catch(e){el.insertAdjacentHTML('beforeend',(window.msT||(s=>s))('<p class="ms-df3d__err">3D の表示に対応していないブラウザです。</p>'));console.error(e);}})
    .catch(e=>{el.insertAdjacentHTML('beforeend',(window.msT||(s=>s))('<p class="ms-df3d__err">3D デモを読み込めませんでした（オフライン？）。</p>'));console.error(e);});
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{if(es.some(x=>x.isIntersecting)){io.disconnect();go();}},{rootMargin:'200px'});io.observe(el);}else go();
};
})();
