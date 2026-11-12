/* 3D Manga Studios docs — interactive bits (works with navigation.instant) */
// ---------- English labels for the interactive bits (used when <html lang="en">) ----------
const MS_TR={"透過": "Over", "乗算": "Multiply", "加算": "Add", "スクリーン": "Screen", "マスク": "Mask", "切替": "Switch", "加工": "Adjust", "固定": "Fixed", "上に重なる": "On top", "土台": "Base", "レイヤー（上ほど手前）": "Layers (top = front)", "合成": "Blend", "進み具合 0 → 1": "Progress 0 → 1", "レイヤーの重なり順の図": "Diagram of the layer order", "上に重ねる（通常のミックス）": "Lays on top (normal mix)", "下の色を暗くする": "Darkens the color below", "下の色に明るさを足す": "Adds brightness to the color below", "明るく重ねる": "Lays on top, brightening", "形の外を隠し、中だけを見せる": "Hides outside the shape, shows only inside", "設定の値で切り替える": "Switches by a setting", "全体の色を調整する": "Adjusts the overall color", "照明には使わない": "Not used for lighting", "ベーストーン": "Base Tone", "キートーン": "Key Tone", "フィルトーン": "Fill Tone", "バックトーン": "Back Tone", "AO（アンビエントオクルージョン）": "AO (Ambient Occlusion)", "光沢": "Gloss", "異方性": "Anisotropy", "マット": "Matte", "リムライト": "Rim Light", "サブ輪郭線": "Sub Outline", "水彩": "Watercolor", "にじみ・縁のたまり・粒状感": "Bleed, edge pooling, granulation", "色ゆらぎ・紙": "Color Variation & Paper", "面ごとの色ムラと紙の目": "Per-patch color variation and paper grain", "筆のタッチとノーマルマップは層ではなく、明暗の境目（法線）を変えます。": "Brush strokes and normal maps are not layers; they change the light/shadow border (the normals).", "白目": "Sclera", "黒目の色（グラデーション）": "Iris Color (gradient)", "黒目の模様": "Iris Pattern", "黒目のテクスチャ": "Iris Texture", "通常／乗算を切替": "Normal / Multiply switch", "下の反射": "Lower Reflection", "黒目の縁": "Iris Rim", "瞳孔": "Pupil", "黒目の輪郭線": "Iris Outline", "まぶたの影": "Lid Shadow", "ライトの陰影": "Light Shading", "RGB の3灯を読む": "Reads the 3 RGB lights", "ハイライト 1〜3": "Highlights 1–3", "スクリーントーン": "Screentone", "漫画調のときだけ": "Manga style only", "このあと「エフェクト」（キラキラ・ハートなどの画像）が一番上に重なります。": "After these, the \"Eye Effect\" (sparkle, heart and other images) goes on top of everything.", "口の中の壁": "Mouth Inside Wall", "奥ほど暗く（乗算）": "Darker toward the back (multiply)", "奥の喉": "Throat", "舌": "Tongue", "下の歯": "Lower Teeth", "上の歯": "Upper Teeth", "歯の影": "Teeth Shadow", "口の形（クリップマスク）": "Mouth Shape (clip mask)", "口の外は隠し、中だけを見せる": "Hides outside the mouth, shows only inside", "口の中のジオメトリ（GN「MTS Mouth Inner」）を使うときは、喉・舌・歯は実際の形として板ポリの奥に置かれます。": "When you use the mouth inside geometry (GN \"MTS Mouth Inner\"), the throat, tongue and teeth are real shapes placed behind the mouth plane.", "空のグラデーション": "Sky Gradient", "地平線 → 天頂・地面": "Horizon → zenith & ground", "夕焼けのにじみ": "Sunset Glow", "雲（遠い → 近い）": "Clouds (far → near)", "太陽の光と円": "Sun Glow & Disc", "満ち欠け・模様": "Phase & surface", "薄明光線": "Crepuscular Rays", "日暈": "Halo", "レンズフレア": "Lens Flare", "アニメ側だけ": "Anime style only", "漫画調（トーン・線）": "Manga Style (tone & lines)", "画風 0 で白黒": "Black & white at Art Style 0", "色の調整": "Color Adjust", "彩度・白黒のコントラスト": "Saturation, B&W contrast", "カメラにだけ映す": "Camera Only", "ライトパス": "Light Path", "照明・反射としては黒になるので、背景を変えてもキャラクターの陰影は変わりません。": "It counts as black for lighting and reflections, so changing the background does not change the shading on your characters.", "地面の色": "Ground Color", "トーンのマテリアルも入れられる": "A tone material can go here too", "上から見て並べて貼る": "Tiled as seen from above", "凹凸の陰": "Bump Shade", "光に背を向けた側（テクスチャの溝）": "Sides facing away from the light (texture grooves)", "凹凸の照り": "Bump Highlight", "光に向いた側を明るく": "Brightens sides facing the light", "キーライトの影": "Key Light Shadow", "オン・オフできる（既定オン）": "Can be turned on/off (default on)", "フィルライトの影": "Fill Light Shadow", "オン・オフできる（既定オフ）": "Can be turned on/off (default off)", "バックライトの影": "Back Light Shadow", "接地の陰（AO）": "Contact Shade (AO)", "物の近く・接地しているところ": "Near objects and where they touch the ground", "端を消す": "Fade Edges", "遠くを透明にして背景になじませる": "Makes the far part transparent to blend into the background", "影だけ": "Shadows Only", "地面を透明にし、影を背景に掛ける": "Makes the ground transparent and lays the shadows over the background", "影は3灯それぞれオン・オフでき、重なった所ほど濃くなります。出力は発光（漫画の平らな塗り）。地面を照らすのは「地面の影用ライト」だけなので、影のぼかしはキャラクターには効きません。": "Each of the 3 lights can cast a shadow on or off, and shadows get darker where they overlap. The output is emission (flat manga fill). Only the \"Light for Ground Shadows\" lights the ground, so Shadow Blur does not affect your characters.", "空白の半径": "Blank Radius", "中心の線を描かない範囲": "Area in the center with no lines", "放射状の線": "Radial Lines", "本数・長さ／間隔のばらつき": "Count, length / spacing randomness", "入り抜き・線の太さ": "Taper & Line Width", "画面の端ほど太く（画面の高さに対する割合）": "Thicker toward the screen edge (ratio of screen height)", "MTS FX Ink（発光で平らに）": "MTS FX Ink (flat emission)", "ボイル間隔": "Boil Interval", "N フレームごとに描き直す": "Redraws every N frames", "画面に貼る": "Stuck to the Screen", "カメラの子・奥行きで前後": "Child of the camera; depth sets front/back", "スピード線・タレ線も同じ作りです。中心 X・Y で線の集まる位置を動かせます。": "Speed Lines and Gloom Lines are built the same way. Center X / Y moves the point where the lines meet.", "中の色": "Fill Color", "塗りのある漫符だけ": "Only symbols with a fill", "線・フチ": "Line & Rim", "太さは画面の高さに対する割合": "Width is a ratio of screen height", "例：ハート。白黒の線画（MTS FX Ink）で描き、カメラから離れても線は画面上で同じ太さです。": "Example: Heart. Drawn as black-and-white line art (MTS FX Ink); the lines keep the same width on screen however far the camera is.", "影（ドロップシャドウ）": "Drop Shadow", "明るい背景で見やすく": "Easier to see on bright backgrounds", "閃光": "Flash", "火の玉": "Fireball", "衝撃波リング": "Shockwave Ring", "火花": "Sparks", "黒煙": "Black Smoke", "破片": "Debris", "残り火": "Embers", "例：爆発。帯は「進み具合」0 → 1 のうち、その層が出ている範囲です。見た目はすべてマテリアル MTS FX Glow 1つで、色・発光・加算／通常・溶け具合を層ごとに渡します。": "Example: Blast. Each bar shows the part of Progress 0 → 1 where that layer is visible. Everything uses the single material MTS FX Glow; color, emission, add/normal and dissolve are passed per layer.", "筆跡の形": "Stroke Shape", "S 字・円相・直線、またはパスで描く": "S-curve, ensō, straight, or along a path", "入り・抜き": "Taper In / Out", "筆の入りと、抜け（筆を上げる）": "Brush entry and lift-off", "手ぶれ": "Hand Shake", "手の揺れ": "Hand wobble", "かすれ": "Dry Brush", "筆の終わりほど強い・毛の筋": "Stronger toward the end, bristle streaks", "しぶき": "Splatter", "筆から飛ぶ小さな墨の粒": "Small ink drops flying from the brush", "墨の色・不透明度": "Ink Color & Opacity", "光らない（加算なし）": "No glow (no add)", "例：筆跡。墨は光らず、描き終わっても紙に残るので消えません。": "Example: Brush Stroke. Ink does not glow, and it stays on the paper after the stroke ends, so it does not fade out.", "トゲ・もこもこ・角の丸み": "Spikes, bumps, corner roundness", "数・長さ・ばらつき": "Count, length, randomness", "しっぽ": "Tail", "まっすぐ・ギザギザ・パス（思考は小さな丸）": "Straight, zigzag, path (thought = small circles)", "白 = ふつう、黒 = ベタの吹き出し": "White = normal, black = solid black balloon", "カメラの子・位置は画面の 0〜1": "Child of the camera; position is 0–1 on screen", "板はレンダーのカメラ（画面）を表します。吹き出しの輪郭線は、吹き出しには含まれません。線は「輪郭線」パネルで付けます。": "The plate stands for the render camera (the screen). The balloon outline is not part of the balloon; add it in the Outlines panel.", "なし": "None", "ハル": "Hull", "レイキャスト": "Raycast", "ラインアート": "Line Art", "アルファ": "Alpha", "レイキャスト内側": "Raycast (inner)", "ラインアート内側": "Line Art (inner)", "構成:": "Setup:", "（内側の線は透過の形に沿わないためオフ）": " (inner lines are off because they do not follow the alpha shape)", "集中線": "Focus Lines", "スピード線": "Speed Lines", "タレ線": "Gloom Lines", "ウニフラ": "Impact Burst", "ベタフラッシュ": "Beta Flash", "気付き線": "Notice Lines", "衝撃線": "Shock Lines", "震え線": "Tremble Lines", "動きの線": "Swoosh Lines", "魔法陣": "Magic Circle", "キラキラ": "Sparkles", "照れ線": "Blush Lines", "怒りマーク": "Anger Mark", "汗": "Sweat Drops", "湯気（プンスカ）": "Steam Puffs", "モジャモジャ": "Scribble", "オーラ（メラメラ）": "Manga Aura", "描き文字": "Sound Effect Text", "！": "!", "？": "?", "！？": "!?", "音符": "Music Notes", "ハート": "Heart", "ヒットスパーク": "Hit Spark", "斬撃": "Slash", "稲妻": "Lightning Bolt", "爆発": "Blast", "炎": "Flames", "氷の結晶": "Ice Crystals", "電撃の玉": "Electric Orb", "毒": "Poison", "闇の渦": "Dark Vortex", "聖なる光": "Holy Light", "チャージ": "Charge Up", "オーラ": "Aura", "回復": "Heal", "バリア": "Barrier", "ビーム": "Beam", "煙・土煙": "Smoke Cloud", "着地の土煙": "Landing Dust", "地割れ": "Ground Crack", "マズルフラッシュ": "Muzzle Flash", "水しぶき": "Water Splash", "範囲予告（円）": "Warning Circle", "範囲予告（扇）": "Warning Fan", "光の柱": "Light Pillar", "筆跡": "Brush Stroke", "墨しぶき": "Ink Splatter", "墨のたれ": "Ink Drips", "墨のにじみ": "Ink Wash", "筆の放射線": "Brush Burst", "すべて": "All", "効果線": "Effect Lines", "漫符・描き文字": "Manga Symbols & SFX", "攻撃・属性": "Attacks & Elements", "スキル・状態": "Skills & Status", "環境・アクション": "Environment & Action", "警告・UI": "Warnings & UI", "墨・筆": "Ink & Brush", " 語": " terms", "影": "Shadow", "星": "Stars", "月": "Moon", "色": "Color", "テクスチャ": "Texture", "＋": "+", "モデルを読み込めませんでした。": "Could not load the model.", "3D の表示に対応していないブラウザです。": "This browser does not support 3D display.", "3D デモを読み込めませんでした（オフライン？）。": "Could not load the 3D demo (offline?).", "キー（赤）": "Key (red)", "フィル（緑）": "Fill (green)", "バック（青）": "Back (blue)"};
const MS_TRK=Object.keys(MS_TR).sort((a,b)=>b.length-a.length);
function msT(s){if(document.documentElement.lang!=='en'||typeof s!=='string')return s;for(const k of MS_TRK){if(s.indexOf(k)>=0)s=s.split(k).join(MS_TR[k]);}return s;}
window.msT=msT;
// ---------- layer stack diagrams (v2: 分解図スタイル) ----------
const WC_TEX='data:image/webp;base64,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';
const BL={'透過':['#e4e7ec','#2a2e36'],'乗算':['#24262c','#ffffff'],'加算':['#fff1c2','#5a4300'],'スクリーン':['#d6ebff','#1b3b66'],'マスク':['#f3d36b','#3a2c00'],'切替':['#ddd2ff','#2b1a66'],'加工':['#ffdcc2','#5a2a00'],'固定':['#c6eedb','#0f4030']};
function grad(id,c1,c2,h){return '<linearGradient id="'+id+'" x1="0" y1="0" x2="'+(h?1:0)+'" y2="'+(h?0:1)+'"><stop offset="0" stop-color="'+c1+'"/><stop offset="1" stop-color="'+c2+'"/></linearGradient>'}
function plateInner(p,cx,cy,rx,ry,uid){
  const E=(x,y,a,b,f,st,sw,op)=>'<ellipse cx="'+x+'" cy="'+y+'" rx="'+a+'" ry="'+b+'" fill="'+(f||'none')+'" stroke="'+(st||'none')+'" stroke-width="'+(sw||0)+'"'+(op!=null?' opacity="'+op+'"':'')+'/>';
  switch(p.t){
    case 'fill': return E(cx,cy,rx,ry,p.c,0,0,p.o);
    case 'quad': return '<rect x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+rx+'" height="'+ry+'" fill="'+p.c[2]+'"/><rect x="'+cx+'" y="'+(cy-ry)+'" width="'+rx+'" height="'+ry+'" fill="'+p.c[1]+'"/><rect x="'+cx+'" y="'+cy+'" width="'+rx+'" height="'+ry+'" fill="'+p.c[0]+'"/><path d="M'+(cx-rx)+' '+cy+'H'+(cx+rx)+'M'+cx+' '+(cy-ry)+'V'+(cy+ry)+'" stroke="#fff" stroke-width="2" opacity=".8"/>';
    case 'ring': {const w=(p.w||14)*1.8, r=p.r||1; return E(cx,cy,rx*r-w/2,ry*r-w/2*ry/rx,'none',p.c,w,p.o);}
    case 'outline': {const w=(p.w||5)*1.8; return E(cx,cy,rx-w/2,ry-w/2,'none',p.c||'#000',w);}
    case 'circle': return (p.bg?E(cx,cy,rx,ry,p.bg,0,0,p.bgo):'')+'<defs><radialGradient id="rg'+uid+'" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>'+E(cx+(p.dx||0)*rx,cy+(p.dy||0)*ry,rx*p.r,ry*p.r,p.c,p.st||'none',(p.sw||0)*1.8,p.o)+E(cx+(p.dx||0)*rx,cy+(p.dy||0)*ry,rx*p.r,ry*p.r,'url(#rg'+uid+')');
    case 'half': return '<rect x="'+(cx-rx)+'" y="'+(cy-ry*(p.top?1:0))+'" width="'+(2*rx)+'" height="'+(ry*(p.h||1))+'" fill="'+p.c+'" opacity="'+(p.o||1)+'"/>';
    case 'band': return '<rect x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+(2*rx)+'" height="'+(ry*(p.h||0.5))+'" fill="'+p.c+'" opacity="'+(p.o||1)+'"/>';
    case 'dots': {let d=''; const n=p.n||18; for(let i=0;i<n;i++){const a=i*2.399, r=Math.sqrt((i+.5)/n); d+='<circle cx="'+(cx+Math.cos(a)*r*rx*.9).toFixed(1)+'" cy="'+(cy+Math.sin(a)*r*ry*.9).toFixed(1)+'" r="'+((p.s||3)*1.8).toFixed(1)+'" fill="'+p.c+'"/>'} return d;}
    case 'halftone': {const g=p.g||18, r=p.r||3.6; return '<defs><pattern id="ht'+uid+'" width="'+g+'" height="'+g+'" patternUnits="userSpaceOnUse" patternTransform="rotate(45 '+cx+' '+cy+')"><circle cx="'+(g/2)+'" cy="'+(g/2)+'" r="'+r+'" fill="'+p.c+'"/></pattern></defs><ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="url(#ht'+uid+')"/>';}
    case 'grid': {let d=''; const k=7; for(let i=-k;i<=k;i++){const x=cx+i*rx/k*1.0; d+='<line x1="'+(x-ry*.6).toFixed(1)+'" y1="'+(cy-ry)+'" x2="'+(x+ry*.6).toFixed(1)+'" y2="'+(cy+ry)+'" stroke="'+(p.c||'#8a8f98')+'" stroke-width="3"/>'; const y=cy+i*ry/k*1.4; d+='<line x1="'+(cx-rx)+'" y1="'+y.toFixed(1)+'" x2="'+(cx+rx)+'" y2="'+y.toFixed(1)+'" stroke="'+(p.c||'#8a8f98')+'" stroke-width="3"/>'} return d;}
    case 'blob': return '<ellipse cx="'+(cx+(p.dx||-.3)*rx).toFixed(1)+'" cy="'+(cy+(p.dy||-.05)*ry).toFixed(1)+'" rx="'+(rx*(p.r||.34)).toFixed(1)+'" ry="'+(ry*(p.r||.34)*1.5).toFixed(1)+'" fill="'+(p.c||'#555')+'" opacity="'+(p.o||.7)+'"/>'+(p.more?p.more.map(q=>'<ellipse cx="'+(cx+q[0]*rx).toFixed(1)+'" cy="'+(cy+q[1]*ry).toFixed(1)+'" rx="'+(rx*q[2]).toFixed(1)+'" ry="'+(ry*q[2]*1.5).toFixed(1)+'" fill="'+(p.c||'#555')+'" opacity="'+(p.o||.7)+'"/>').join(''):'');
    case 'radial': return '<defs><radialGradient id="rd'+uid+'" cx=".5" cy=".5" r=".5"><stop offset=".45" stop-color="'+(p.c||'#141519')+'" stop-opacity="0"/><stop offset="1" stop-color="'+(p.c||'#141519')+'" stop-opacity=".75"/></radialGradient></defs><ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="url(#rd'+uid+')"/>';
    case 'dashblob': return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(rx-8)+'" ry="'+(ry-6)+'" fill="none" stroke="#141519" stroke-width="3" stroke-dasharray="12 9" opacity=".55"/><ellipse cx="'+(cx-.3*rx).toFixed(1)+'" cy="'+(cy-.04*ry).toFixed(1)+'" rx="'+(rx*.3).toFixed(1)+'" ry="'+(ry*.45).toFixed(1)+'" fill="#555" opacity=".7"/>';
    case 'paper': {
      const f='pp'+uid, c='pc'+uid;
      let fib=''; for(let i=0;i<26;i++){const a=(i*137.5)%360*Math.PI/180, r=Math.sqrt((i*.618)%1), x=cx+Math.cos(a)*r*rx*.9, y=cy+Math.sin(a)*r*ry*.85, L=18+((i*53)%30), t=(i*71)%180*Math.PI/180; fib+='<path d="M'+(x-Math.cos(t)*L).toFixed(1)+' '+(y-Math.sin(t)*L*.35).toFixed(1)+' q'+(Math.cos(t)*L*.6).toFixed(1)+' '+(-6+(i%5)*3)+' '+(Math.cos(t)*L*2).toFixed(1)+' '+(Math.sin(t)*L*.7).toFixed(1)+'" fill="none" stroke="#a8916c" stroke-width="1.6" opacity=".55"/>'}
      return '<defs><filter id="'+f+'" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="4"/><feColorMatrix values="0 0 0 0 .52  0 0 0 0 .44  0 0 0 0 .33  0 0 0 -2.2 1.25"/></filter>'
        +'<filter id="'+c+'" x="0" y="0" width="1" height="1"><feTurbulence type="fractalNoise" baseFrequency=".011 .02" numOctaves="3" seed="11"/><feColorMatrix values="1.4 0 0 0 -.15  0 1.1 0 0 -.05  0 0 1.6 0 -.3  0 0 0 0 .2"/></filter></defs>'
        +'<rect x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+(2*rx)+'" height="'+(2*ry)+'" fill="#f3ead8"/>'
        +'<rect x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+(2*rx)+'" height="'+(2*ry)+'" filter="url(#'+c+')"/>'
        +'<rect x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+(2*rx)+'" height="'+(2*ry)+'" filter="url(#'+f+')"/>'+fib;}
    case 'watercolor': return '<rect x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+(2*rx)+'" height="'+(2*ry)+'" fill="#ffffff" opacity=".55"/><image href="'+WC_TEX+'" x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+(2*rx)+'" height="'+(2*ry)+'" preserveAspectRatio="xMidYMid slice" style="mix-blend-mode:multiply"/>';
    case 'stars': {let d=''; const n=p.n||24, s=p.s||9; const star=(x,y,r)=>{let q=''; for(let k=0;k<10;k++){const a=-Math.PI/2+k*Math.PI/5, rr=k%2?r*.42:r; q+=(k?'L':'M')+(x+Math.cos(a)*rr).toFixed(1)+' '+(y+Math.sin(a)*rr).toFixed(1)} return '<path d="'+q+'Z" fill="'+p.c+'"/>'};
      for(let i=0;i<n;i++){const a=i*2.399, r=Math.sqrt((i+.5)/n); d+=star(cx+Math.cos(a)*r*rx*.88, cy+Math.sin(a)*r*ry*.85, s*(.6+((i*37)%10)/14))} return d;}
    case 'gridbump': {let d=''; const k=7, o=(p.side||1)*4, col=p.side>0?'#ffffff':'#5f6470', w=p.side>0?3:4; for(let i=-k;i<=k;i++){const x=cx+i*rx/k; d+='<line x1="'+(x-ry*.6+o).toFixed(1)+'" y1="'+(cy-ry)+'" x2="'+(x+ry*.6+o).toFixed(1)+'" y2="'+(cy+ry)+'" stroke="'+col+'" stroke-width="'+w+'" opacity=".9"/>'; const y=cy+i*ry/k*1.4+o*.6; d+='<line x1="'+(cx-rx)+'" y1="'+y.toFixed(1)+'" x2="'+(cx+rx)+'" y2="'+y.toFixed(1)+'" stroke="'+col+'" stroke-width="'+w+'" opacity=".9"/>'}
      d+='<line x1="0" y1="0" x2="0" y2="0"/>'; return (p.side>0?'':'<rect x="'+(cx-rx)+'" y="'+(cy-ry)+'" width="'+(2*rx)+'" height="'+(2*ry)+'" fill="none"/>')+d;}
    case 'focus': {let d=''; const n=p.n||44, r0=p.r0||.34, f=v=>v.toFixed(1);
      for(let i=0;i<n;i++){const a=i*2*Math.PI/n+((i*37)%7)*.012, j=r0*(1+((i*53)%9)/22), w=p.taper?(.012+((i*29)%5)*.004):.006;
        const x1=cx+Math.cos(a)*rx*j, y1=cy+Math.sin(a)*ry*j, x2=cx+Math.cos(a)*rx, y2=cy+Math.sin(a)*ry;
        if(p.taper){const px=-Math.sin(a), py=Math.cos(a); d+='<path d="M'+f(x1)+' '+f(y1)+' L'+f(x2+px*rx*w)+' '+f(y2+py*ry*w*2)+' L'+f(x2-px*rx*w)+' '+f(y2-py*ry*w*2)+'Z" fill="'+(p.c||'#141519')+'"/>';}
        else d+='<line x1="'+f(x1)+'" y1="'+f(y1)+'" x2="'+f(x2)+'" y2="'+f(y2)+'" stroke="'+(p.c||'#141519')+'" stroke-width="'+(p.w||3)+'" opacity="'+(p.o||1)+'"/>';}
      if(p.boil){for(let i=0;i<n;i++){const a=(i+.5)*2*Math.PI/n, j=r0*1.1; d+='<line x1="'+f(cx+Math.cos(a)*rx*j)+'" y1="'+f(cy+Math.sin(a)*ry*j)+'" x2="'+f(cx+Math.cos(a)*rx)+'" y2="'+f(cy+Math.sin(a)*ry)+'" stroke="#3b6fd6" stroke-width="3" opacity=".55"/>'}}
      return d;}
    case 'blank': return '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="'+ry+'" fill="#141519" opacity=".18"/><ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(rx*(p.r||.36))+'" ry="'+(ry*(p.r||.36))+'" fill="#fff" stroke="#141519" stroke-width="3" stroke-dasharray="10 8"/>';
    case 'frame': {const w=rx*1.1, h=w*9/16*.55; return '<rect x="'+(cx-w/2)+'" y="'+(cy-h/2)+'" width="'+w+'" height="'+h+'" fill="none" stroke="'+(p.c||'#1f7a52')+'" stroke-width="5"/><path d="M'+(cx-w/2)+' '+(cy-h/2-14)+' h40 M'+(cx+w/2-40)+' '+(cy-h/2-14)+' h40" stroke="'+(p.c||'#1f7a52')+'" stroke-width="4"/>'+(p.inner?'<ellipse cx="'+(cx+w*.18)+'" cy="'+(cy-h*.12)+'" rx="'+(w*.2)+'" ry="'+(h*.24)+'" fill="#fff" stroke="#bbb" stroke-width="2"/>':'');}
    case 'heart': {const s=ry*(p.s||.75), f=v=>v.toFixed(1), y=cy+s*.15, path='M'+f(cx)+' '+f(y+s*.55)+' C'+f(cx-s*1.3)+' '+f(y-s*.1)+' '+f(cx-s*.75)+' '+f(y-s*.95)+' '+f(cx)+' '+f(y-s*.45)+' C'+f(cx+s*.75)+' '+f(y-s*.95)+' '+f(cx+s*1.3)+' '+f(y-s*.1)+' '+f(cx)+' '+f(y+s*.55)+'Z';
      if(p.mode==='fill') return '<path d="'+path+'" fill="'+(p.c||'#f06a8c')+'"/>';
      if(p.mode==='edge') return '<path d="'+path+'" fill="none" stroke="#141519" stroke-width="'+(p.w||9)+'" stroke-linejoin="round"/>';
      {const kx=cx+s*2.2, ky=cy+s*.75; return '<path d="'+path+'" fill="#fff" stroke="#141519" stroke-width="5" stroke-linejoin="round"/>'
        +'<line x1="'+f(cx+s*.35)+'" y1="'+f(y)+'" x2="'+f(kx-s*.5)+'" y2="'+f(ky)+'" stroke="#3b6fd6" stroke-width="3" stroke-dasharray="7 6"/>'
        +'<g fill="#3b6fd6"><rect x="'+f(kx-s*.5)+'" y="'+f(ky-s*.32)+'" width="'+f(s*.8)+'" height="'+f(s*.64)+'" rx="'+f(s*.1)+'"/><path d="M'+f(kx+s*.3)+' '+f(ky)+' L'+f(kx+s*.62)+' '+f(ky-s*.26)+' L'+f(kx+s*.62)+' '+f(ky+s*.26)+'Z"/></g>'
        +'<circle cx="'+f(kx-s*.1)+'" cy="'+f(ky)+'" r="'+f(s*.17)+'" fill="#fff"/>';}}
    case 'glow': return '<defs><radialGradient id="gw'+uid+'" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset=".25" stop-color="'+(p.c||'#ffe9a0')+'"/><stop offset="1" stop-color="'+(p.c||'#ffe9a0')+'" stop-opacity="0"/></radialGradient></defs><ellipse cx="'+cx+'" cy="'+cy+'" rx="'+(rx*(p.r||.6))+'" ry="'+(ry*(p.r||.6)*1.4)+'" fill="url(#gw'+uid+')"/>';
    case 'puffs': return '<g opacity="'+(p.o||.85)+'"'+(p.soft?' filter="url(#sm'+uid+')"':'')+'>'+(p.soft?'<defs><filter id="sm'+uid+'" x="-30%" y="-50%" width="160%" height="200%"><feTurbulence type="fractalNoise" baseFrequency=".03" numOctaves="2" seed="5"/><feDisplacementMap in="SourceGraphic" scale="18" xChannelSelector="R" yChannelSelector="G"/><feGaussianBlur stdDeviation="1.5"/></filter></defs>':'')+[[-.25,.1,.22],[.12,-.15,.26],[.32,.18,.2],[-.02,.3,.2],[-.38,-.12,.15],[.45,-.2,.14],[.05,.08,.22]].map(q=>'<ellipse cx="'+(cx+q[0]*rx*(p.sp||1)).toFixed(1)+'" cy="'+(cy+q[1]*ry*(p.sp||1)).toFixed(1)+'" rx="'+(rx*q[2]*(p.sz||1)).toFixed(1)+'" ry="'+(ry*q[2]*1.6*(p.sz||1)).toFixed(1)+'" fill="'+p.c+'"/>').join('')+'</g>';
    case 'sparks': {let d=''; const n=p.n||22, f=v=>v.toFixed(1); for(let i=0;i<n;i++){const a=i*2.399, r1=.3+((i*13)%7)/20, r2=r1+.18+((i*7)%5)/30; d+='<line x1="'+f(cx+Math.cos(a)*rx*r1)+'" y1="'+f(cy+Math.sin(a)*ry*r1)+'" x2="'+f(cx+Math.cos(a)*rx*r2)+'" y2="'+f(cy+Math.sin(a)*ry*r2)+'" stroke="'+(p.c||'#ffb347')+'" stroke-width="5" stroke-linecap="round"/>'} return d;}
    case 'shards': {let d=''; const n=p.n||14, f=v=>v.toFixed(1); for(let i=0;i<n;i++){const a=i*2.399, r=.25+((i*17)%11)/16, x=cx+Math.cos(a)*rx*r*.9, y=cy+Math.sin(a)*ry*r*.9, s=8+(i%4)*4; d+='<path d="M'+f(x)+' '+f(y-s)+' L'+f(x+s*1.2)+' '+f(y+s*.4)+' L'+f(x-s*.6)+' '+f(y+s*.8)+'Z" fill="'+(p.c||'#4a4e58')+'" transform="rotate('+(i*47)+' '+f(x)+' '+f(y)+')"/>'} return d;}
    case 'brush': {const f=v=>v.toFixed(1), L=rx*1.2, x0=cx-L/2, W=ry*(p.w||.5), n=40; let top='', bot=''; const pts=[];
      for(let i=0;i<=n;i++){const t=i/n, x=x0+L*t, y=cy+Math.sin(t*Math.PI*2)*ry*.32+(p.wob?Math.sin(t*37)*ry*.05:0); let w=W; if(p.taper){w*=Math.min(1,t/.12)*Math.min(1,(1-t)/.45+.08);} pts.push([x,y,w]);}
      pts.forEach((q,i)=>{top+=(i?'L':'M')+f(q[0])+' '+f(q[1]-q[2]/2)}); for(let i=pts.length-1;i>=0;i--){bot+='L'+f(pts[i][0])+' '+f(pts[i][1]+pts[i][2]/2)}
      let d='<path d="'+top+bot+'Z" fill="'+(p.c||'#141519')+'"'+(p.o?' opacity="'+p.o+'"':'')+'/>';
      if(p.dry){for(let k=0;k<7;k++){const yy=-.35+k*.11; let q=''; pts.forEach((pt,i)=>{if(i>n*.45) q+=(q?'L':'M')+f(pt[0])+' '+f(pt[1]+yy*pt[2])}); d+='<path d="'+q+'" fill="none" stroke="#fff" stroke-width="'+(2+(k%3))+'" stroke-dasharray="'+(18+k*5)+' '+(9+k*3)+'" opacity=".95"/>'}}
      if(p.splat){for(let k=0;k<16;k++){const t=(k*.137)%1, pt=pts[Math.round(t*n)], ox=((k*31)%13-6)*7, oy=((k*17)%11-5)*6; d+='<circle cx="'+f(pt[0]+ox)+'" cy="'+f(pt[1]+oy)+'" r="'+(2+(k%4)*1.5)+'" fill="#141519"/>'}}
      return d;}
    case 'bshapes': {const f=v=>v.toFixed(1), s=ry*.42, xs=[-.62,-.21,.21,.62]; let d='';
      xs.forEach((u,k)=>{const x=cx+u*rx, y=cy;
        if(k===0) d+='<ellipse cx="'+f(x)+'" cy="'+f(y)+'" rx="'+f(s*1.35)+'" ry="'+f(s)+'" fill="#fff" stroke="#9aa0a8" stroke-width="2.5"/>';
        if(k===1){let q=''; for(let i=0;i<28;i++){const a=i*Math.PI/14, r=i%2?.72:1.12; q+=(i?'L':'M')+f(x+Math.cos(a)*s*1.35*r)+' '+f(y+Math.sin(a)*s*r)} d+='<path d="'+q+'Z" fill="#fff" stroke="#9aa0a8" stroke-width="2.5"/>';}
        if(k===2){for(let i=0;i<9;i++){const a=i*2*Math.PI/9; d+='<ellipse cx="'+f(x+Math.cos(a)*s*1.05)+'" cy="'+f(y+Math.sin(a)*s*.75)+'" rx="'+f(s*.45)+'" ry="'+f(s*.38)+'" fill="#fff" stroke="#9aa0a8" stroke-width="2.5"/>'} d+='<ellipse cx="'+f(x)+'" cy="'+f(y)+'" rx="'+f(s*1.05)+'" ry="'+f(s*.75)+'" fill="#fff"/>';}
        if(k===3) d+='<rect x="'+f(x-s*1.3)+'" y="'+f(y-s*.8)+'" width="'+f(s*2.6)+'" height="'+f(s*1.6)+'" rx="'+f(s*.2)+'" fill="#fff" stroke="#9aa0a8" stroke-width="2.5"/>';});
      return d;}
    case 'spiky': {const f=v=>v.toFixed(1), s=ry*.72; let q=''; for(let i=0;i<36;i++){const a=i*Math.PI/18, r=i%2?.74:1.1+((i*7)%5)*.03; q+=(i?'L':'M')+f(cx+Math.cos(a)*s*1.9*r)+' '+f(cy+Math.sin(a)*s*r)} return '<path d="'+q+'Z" fill="#fff" stroke="#9aa0a8" stroke-width="2.5"/>';}
    case 'tail': {const f=v=>v.toFixed(1), s=ry*.6; return '<ellipse cx="'+f(cx)+'" cy="'+f(cy-s*.25)+'" rx="'+f(s*1.9)+'" ry="'+f(s)+'" fill="#fff" stroke="#c9cdd3" stroke-width="2" stroke-dasharray="8 6"/><path d="M'+f(cx-s*.5)+' '+f(cy+s*.55)+' Q'+f(cx-s*.4)+' '+f(cy+s*1.1)+' '+f(cx-s*1.2)+' '+f(cy+s*1.45)+' Q'+f(cx)+' '+f(cy+s*1.1)+' '+f(cx+s*.25)+' '+f(cy+s*.62)+'Z" fill="#fff" stroke="#141519" stroke-width="3"/>';}
    case 'bfill': {const f=v=>v.toFixed(1), s=ry*.62; return '<ellipse cx="'+f(cx-rx*.28)+'" cy="'+f(cy)+'" rx="'+f(s*1.6)+'" ry="'+f(s)+'" fill="#fff" stroke="#c9cdd3" stroke-width="2"/><ellipse cx="'+f(cx+rx*.28)+'" cy="'+f(cy)+'" rx="'+f(s*1.6)+'" ry="'+f(s)+'" fill="#141519"/>';}
    case 'bplace': {const f=v=>v.toFixed(1), bx=cx+rx*.42, by=cy-ry*.3, s=ry*.4; return '<line x1="'+f(cx-rx)+'" y1="'+f(by)+'" x2="'+f(cx+rx)+'" y2="'+f(by)+'" stroke="#3b6fd6" stroke-width="2" stroke-dasharray="8 7" opacity=".7"/><line x1="'+f(bx)+'" y1="'+f(cy-ry)+'" x2="'+f(bx)+'" y2="'+f(cy+ry)+'" stroke="#3b6fd6" stroke-width="2" stroke-dasharray="8 7" opacity=".7"/><ellipse cx="'+f(bx)+'" cy="'+f(by)+'" rx="'+f(s*1.8)+'" ry="'+f(s)+'" fill="#fff" stroke="#9aa0a8" stroke-width="2.5"/><path d="M'+f(bx-s*.6)+' '+f(by+s*.8)+' L'+f(bx-s*1.3)+' '+f(by+s*1.9)+' L'+f(bx-s*.05)+' '+f(by+s*.95)+'Z" fill="#fff" stroke="#9aa0a8" stroke-width="2.5" stroke-linejoin="round"/><text x="'+f(bx+s*2.1)+'" y="'+f(by-s*.4)+'" font-size="20" fill="#3b6fd6" font-family="sans-serif">(x, y)</text>';}
    case 'spots': return (p.pts||[[.35,-.35,.14],[-.2,.3,.06]]).map(q=>E(cx+q[0]*rx,cy+q[1]*ry,rx*q[2],ry*q[2]*1.6,p.c,'rgba(0,0,0,.18)',1)).join('');
    case 'rays': {let d=''; const rn=p.n||16; for(let i=0;i<rn;i++){const a=i*2*Math.PI/rn; d+='<line x1="'+(cx+Math.cos(a)*rx*.18).toFixed(1)+'" y1="'+(cy+Math.sin(a)*ry*.18).toFixed(1)+'" x2="'+(cx+Math.cos(a)*rx).toFixed(1)+'" y2="'+(cy+Math.sin(a)*ry).toFixed(1)+'" stroke="'+p.c+'" stroke-width="'+(p.w||7)+'" stroke-linecap="round" opacity=".75"/>'} return d;}
    case 'grad': return '<defs>'+grad('g'+uid,p.c[0],p.c[1])+'</defs>'+E(cx,cy,rx,ry,'url(#g'+uid+')',0,0,p.o);
    case 'clouds': {const f=v=>v.toFixed(1), id2='cl'+uid; const puffs=[[-.48,.18,.22],[-.3,.02,.26],[-.08,-.12,.3],[.18,-.04,.27],[.4,.12,.22],[-.2,.22,.24],[.12,.22,.26],[.55,.24,.16]];
      const body=puffs.map(q=>'<ellipse cx="'+f(cx+q[0]*rx)+'" cy="'+f(cy+(q[1]+.2)*ry)+'" rx="'+f(rx*q[2]*.7)+'" ry="'+f(ry*q[2]*1.45)+'"/>').join('');
      return '<defs><filter id="'+id2+'" x="-20%" y="-60%" width="140%" height="220%"><feTurbulence type="fractalNoise" baseFrequency=".022" numOctaves="4" seed="8" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="26" xChannelSelector="R" yChannelSelector="G" result="d"/><feGaussianBlur in="d" stdDeviation="2.2"/></filter>'
        +'<linearGradient id="'+id2+'g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".55" stop-color="#f3f5f8"/><stop offset="1" stop-color="#b9c3cf"/></linearGradient></defs>'
        +'<g filter="url(#'+id2+')"><g fill="#9aa8b8" transform="translate(4 7)" opacity=".55">'+body+'</g><g fill="url(#'+id2+'g)">'+body+'</g></g>';}
    case 'teeth': {let d=''; const n=6; for(let i=0;i<n;i++){const x=cx-rx*.6+i*rx*1.2/n; d+='<rect x="'+x.toFixed(1)+'" y="'+(cy+(p.low?ry*.18:-ry*.62)).toFixed(1)+'" width="'+(rx*1.2/n-4).toFixed(1)+'" height="'+(ry*.44).toFixed(1)+'" rx="5" fill="'+p.c+'" stroke="#9a96a8"/>'} return d;}
    case 'mouth': case 'mmask': case 'mteeth': case 'mlow': case 'mtongue': case 'mthroat': case 'mshade': {
      const P=(u,v)=>(cx+u*.85*rx).toFixed(1)+' '+(cy+(v-.22)*.88*ry).toFixed(1);
      const hole='M'+P(-.62,-.5)+' Q'+P(0,-.02)+' '+P(.62,-.5)+' C'+P(.56,1.12)+' '+P(-.56,1.12)+' '+P(-.62,-.5)+'Z';
      if(p.t==='mteeth'||p.t==='mlow'){ const up=p.t==='mteeth', n=5, W2=rx*.95, th=ry*.75, x0=cx-W2/2, x1=cx+W2/2, y0=up?cy-th*.7:cy-th*.3, y1=y0+th, r=th*.45, f=v=>v.toFixed(1);
        let d= up ? '<path d="M'+f(x0)+' '+f(y0)+' H'+f(x1)+' V'+f(y1-r)+' Q'+f(x1)+' '+f(y1)+' '+f(x1-r)+' '+f(y1)+' H'+f(x0+r)+' Q'+f(x0)+' '+f(y1)+' '+f(x0)+' '+f(y1-r)+' Z"'
                  : '<path d="M'+f(x0)+' '+f(y1)+' H'+f(x1)+' V'+f(y0+r)+' Q'+f(x1)+' '+f(y0)+' '+f(x1-r)+' '+f(y0)+' H'+f(x0+r)+' Q'+f(x0)+' '+f(y0)+' '+f(x0)+' '+f(y0+r)+' Z"';
        d+=' fill="#fff" stroke="#6b6780" stroke-width="3" stroke-linejoin="round"/>';
        for(let i=1;i<n;i++){const x=x0+W2*i/n; d+='<line x1="'+f(x)+'" y1="'+f(up?y0:y0+th*.15)+'" x2="'+f(x)+'" y2="'+f(up?y1-th*.15:y1)+'" stroke="#6b6780" stroke-width="3"/>'}
        return d; }
      if(p.t==='mtongue'){ const w=rx*.7, top=cy-ry*.5, bot=cy+ry*.72, x1=cx-w/2, x2=cx+w/2, f=v=>v.toFixed(1);
        return '<path d="M'+f(x1)+' '+f(top)+' H'+f(x2)+' V'+f(bot-w*.3)+' C'+f(x2)+' '+f(bot+w*.1)+' '+f(x1)+' '+f(bot+w*.1)+' '+f(x1)+' '+f(bot-w*.3)+' Z" fill="#f06a8c"/><line x1="'+cx+'" y1="'+f(top+ry*.2)+'" x2="'+cx+'" y2="'+f(bot-ry*.3)+'" stroke="#c4416d" stroke-width="8" stroke-linecap="round"/>'; }
      if(p.t==='mthroat') return '<ellipse cx="'+cx+'" cy="'+(cy+(.28-.22)*.88*ry).toFixed(1)+'" rx="'+(.27*rx).toFixed(1)+'" ry="'+(.42*ry).toFixed(1)+'" fill="#2a0a10"/>';
      if(p.t==='mshade') return '<path d="M'+P(.55,-.22)+' Q'+P(0,.55)+' '+P(-.55,-.22)+' L'+P(-.5,-.02)+' Q'+P(0,.8)+' '+P(.5,-.02)+'Z" fill="#6a6480" opacity=".5"/>';
      // マスク：口の外を塗りつぶし、口の中はくり抜き（下の層が見える）
      const outer='M'+(cx-rx)+' '+cy+' a'+rx+' '+ry+' 0 1 0 '+(2*rx)+' 0 a'+rx+' '+ry+' 0 1 0 '+(-2*rx)+' 0Z';
      const tick=(s)=>'<path d="M'+P(s*.72,-.7)+' Q'+P(s*.7,-.5)+' '+P(s*.56,-.3)+'" fill="none" stroke="#141519" stroke-width="7" stroke-linecap="round"/>';
      return '<path d="'+outer+' '+hole+'" fill="#ffffff" fill-opacity=".72" fill-rule="evenodd"/><path d="'+hole+'" fill="none" stroke="#141519" stroke-width="8" stroke-linejoin="round"/>';
    }
    default: return '';
  }
}
function stack(id,layers,legend,opts){
  opts=opts||{};
  const el=document.getElementById(id); if(!el) return;
  const n=layers.length, W=1920, H=Math.min(1080,Math.max(460,150+90+n*92+120));  // レイヤーが少ない図は低くして空白を減らす
  const padT=150, padB=90, rowH=Math.min(92,(H-padT-padB)/n), off=padT+((H-padT-padB)-n*rowH)/2;
  const cardX=90, cardW=700, cardH=Math.round(rowH*.78);
  const cx0=1130, shift=300, rx=270, ry=Math.min(rowH*.78,80)*(n<=8?1.22:1), th=8, cx=cx0+shift/2;
  const ink='#141519', rule='#d5dbe2', tone='#868b95';
  let defs='<style>.lbl{font:700 27px var(--md-text-font-family,"Zen Kaku Gothic New",sans-serif);fill:#1d1f24}.sub{font:400 18px var(--md-text-font-family,"Zen Kaku Gothic New",sans-serif);fill:#6b707b}.num{font:700 19px sans-serif;fill:#fff}.chiptx{font:700 19px var(--md-text-font-family,"Zen Kaku Gothic New",sans-serif)}.ptx{font:700 20px var(--md-text-font-family,"Zen Kaku Gothic New",sans-serif);fill:#fff}.hdr{font:700 22px var(--md-text-font-family,"Zen Kaku Gothic New",sans-serif);fill:#3c4049;letter-spacing:.05em}.axl{font:700 22px var(--md-text-font-family,"Zen Kaku Gothic New",sans-serif);fill:#868b95}</style><defs>'
    +'<pattern id="tn'+id+'" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.6" fill="#141519" opacity=".07"/></pattern>'
    +'<filter id="sh'+id+'" x="-10%" y="-30%" width="120%" height="170%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#141519" flood-opacity=".12"/></filter>'
    +'<filter id="ps'+id+'" x="-20%" y="-40%" width="140%" height="200%"><feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#141519" flood-opacity=".16"/></filter>'
    +'<linearGradient id="gl'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>'
    +'<linearGradient id="ed'+id+'" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b9bfc8"/><stop offset=".5" stop-color="#e3e7ec"/><stop offset="1" stop-color="#a9b0ba"/></linearGradient>'
    +'<marker id="ah'+id+'" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1L9 5L0 9Z" fill="'+ink+'"/></marker>'
    +'</defs>';
  let bg='<rect width="'+W+'" height="'+H+'" fill="#fbfcfd"/><rect x="'+(cx0-rx-60)+'" y="0" width="'+(2*rx+shift+120)+'" height="'+H+'" fill="url(#tn'+id+')"/>';
  // 中心軸
  const yTop=off+cardH/2, yBot=off+(n-1)*rowH+cardH/2;
  // 上下の矢印
  const ax=W-110;
  bg+='<line x1="'+ax+'" y1="'+(yBot+10)+'" x2="'+ax+'" y2="'+(yTop-6)+'" stroke="'+tone+'" stroke-width="3" marker-end="url(#ah'+id+')"/>'
    +'<text x="'+ax+'" y="'+(yTop-30)+'" text-anchor="middle" class="axl">上に重なる</text>'
    +'<text x="'+ax+'" y="'+(yBot+44)+'" text-anchor="middle" class="axl">土台</text>';
  // 見出し
  bg+='<text x="'+cardX+'" y="'+(off-44)+'" class="hdr">レイヤー（上ほど手前）</text><text x="'+(cardX+cardW)+'" y="'+(off-44)+'" text-anchor="end" class="hdr">合成</text>'
    +(layers.some(l=>l.t)?'<text x="'+(cardX+cardW-74-40-110)+'" y="'+(off-44)+'" text-anchor="middle" class="hdr">進み具合 0 → 1</text>':'')+'<line x1="'+cardX+'" y1="'+(off-28)+'" x2="'+(cardX+cardW)+'" y2="'+(off-28)+'" stroke="'+ink+'" stroke-width="3"/>';
  let plates='', wires='', cards='';
  for(let i=0;i<n;i++){
    const cx=cx0+shift*(n>1?i/(n-1):0), L=layers[i], row=n-1-i, y=off+row*rowH, cy=y+cardH/2, uid=id+'_'+i;
    const accent=L.parts?'#141519':L.card[1];
    // ---- plate (下の層から描く) ----
    const SH=(x,y,a,b2,attr)=>opts.rect?'<rect x="'+(x-a)+'" y="'+(y-b2)+'" width="'+(2*a)+'" height="'+(2*b2)+'" rx="'+(b2*.32).toFixed(1)+'" '+attr+'/>':'<ellipse cx="'+x+'" cy="'+y+'" rx="'+a+'" ry="'+b2+'" '+attr+'/>';
    const clip='<clipPath id="cp'+uid+'">'+SH(cx,cy,rx,ry,'')+'</clipPath>';
    plates+='<g'+(i===0?' filter="url(#ps'+id+')"':'')+'>'+clip
      +(opts.rect?SH(cx,cy+th,rx,ry,'fill="url(#ed'+id+')" fill-opacity=".3" stroke="#8d949e" stroke-width="1"'):'<path d="M'+(cx-rx)+' '+cy+' v'+th+' a'+rx+' '+ry+' 0 0 0 '+(2*rx)+' 0 v-'+th+'Z" fill="url(#ed'+id+')" fill-opacity=".3" stroke="#8d949e" stroke-width="1"/>')
      +SH(cx,cy,rx,ry,'fill="#fff" fill-opacity=".1"')
      +'<g clip-path="url(#cp'+uid+')">'+plateInner(L.p,cx,cy,rx,ry,uid)+SH(cx,cy,rx,ry,'fill="url(#gl'+id+')"')+'</g>'
      +SH(cx,cy,rx,ry,'fill="none" stroke="#5d6470" stroke-width="2"')
      +SH(cx,cy+2.5,rx-5,ry-4,'fill="none" stroke="#fff" stroke-width="1.5" opacity=".7"')
      +'</g>';
    // ---- connector ----
    const sx=cardX+cardW+14, ex=cx-rx-10;
    wires+='<circle cx="'+sx+'" cy="'+cy+'" r="6" fill="#fbfcfd" stroke="'+ink+'" stroke-width="2.6"/><path d="M'+(sx+6)+' '+cy+' H'+ex+'" stroke="'+ink+'" stroke-width="2.4" marker-end="url(#ah'+id+')"/>';
    // ---- card ----
    cards+='<clipPath id="ck'+uid+'"><rect x="'+cardX+'" y="'+y+'" width="'+cardW+'" height="'+cardH+'" rx="0"/></clipPath>';
    cards+='<g filter="url(#sh'+id+')"><rect x="'+cardX+'" y="'+y+'" width="'+cardW+'" height="'+cardH+'" rx="0" fill="#fff" stroke="'+rule+'" stroke-width="2"/></g>';
    cards+='<rect x="'+cardX+'" y="'+y+'" width="10" height="'+cardH+'" fill="'+accent+'" clip-path="url(#ck'+uid+')"/>';
    cards+='<circle cx="'+(cardX+46)+'" cy="'+cy+'" r="17" fill="'+ink+'"/><text x="'+(cardX+46)+'" y="'+(cy+6.5)+'" text-anchor="middle" class="num">'+(i+1)+'</text>';
    const bw=L.blend?(L.blend.length*20+34):0;
    if(L.parts){
      const x0=cardX+80, avail=cardW-80-bw-30, w=avail/L.parts.length;
      L.parts.forEach((pp,j)=>{const x=x0+j*w; cards+='<rect x="'+x.toFixed(1)+'" y="'+(cy-20)+'" width="'+(w-10).toFixed(1)+'" height="40" rx="20" fill="'+pp.c+'"/><text x="'+(x+(w-10)/2).toFixed(1)+'" y="'+(cy+7)+'" text-anchor="middle" class="ptx">'+pp.name+'</text>'});
    }else{
      cards+='<rect x="'+(cardX+80)+'" y="'+(cy-11)+'" width="22" height="22" rx="6" fill="'+L.card[1]+'" stroke="rgba(0,0,0,.18)"/>';
      if(L.sub){cards+='<text x="'+(cardX+116)+'" y="'+(cy-1)+'" class="lbl">'+L.name+'</text><text x="'+(cardX+116)+'" y="'+(cy+23)+'" class="sub">'+L.sub+'</text>';}
      else cards+='<text x="'+(cardX+116)+'" y="'+(cy+9)+'" class="lbl">'+L.name+'</text>';
    }
    if(L.t){const tx0=cardX+cardW-bw-40-200, tw=180, ty=cy+14; cards+='<rect x="'+tx0+'" y="'+(ty-3)+'" width="'+tw+'" height="6" rx="3" fill="#e6e8eb"/><rect x="'+(tx0+tw*L.t[0]).toFixed(1)+'" y="'+(ty-5)+'" width="'+Math.max(4,tw*(L.t[1]-L.t[0])).toFixed(1)+'" height="10" rx="5" fill="'+accent+'"/>';}
    if(L.blend){const b=BL[L.blend], bx=cardX+cardW-20-bw; cards+='<rect x="'+bx+'" y="'+(cy-17)+'" width="'+bw+'" height="34" rx="17" fill="'+b[0]+'"/><text x="'+(bx+bw/2)+'" y="'+(cy+7)+'" text-anchor="middle" class="chiptx" fill="'+b[1]+'">'+L.blend+'</text>';}
  }
  if(opts.sphere){const cxs=cx0+shift, cys=off+cardH/2, r=ry*1.3, sx=cxs, sy=cys-r*.86;
    plates+='<defs><radialGradient id="sg'+id+'" cx=".4" cy=".35" r=".75"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f1f2f4"/></radialGradient></defs>'
      +'<circle cx="'+sx+'" cy="'+sy.toFixed(1)+'" r="'+r.toFixed(1)+'" fill="url(#sg'+id+')" stroke="#141519" stroke-width="3"/>';}
  const svg='<svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="レイヤーの重なり順の図">'+defs+bg+plates+wires+cards+'</svg>';
  const used=[...new Set(layers.map(l=>l.blend).filter(Boolean))];
  const desc={'透過':'上に重ねる（通常のミックス）','乗算':'下の色を暗くする','加算':'下の色に明るさを足す','スクリーン':'明るく重ねる','マスク':'形の外を隠し、中だけを見せる','切替':'設定の値で切り替える','加工':'全体の色を調整する','固定':'照明には使わない'};
  el.innerHTML=msT(svg+'<div class="blegend">'+used.map(u=>'<span><b style="background:'+BL[u][0]+';color:'+BL[u][1]+'">'+u+'</b>'+desc[u]+'</span>').join('')+(legend?'<span class="note">'+legend+'</span>':'')+'</div>');
}

function msStacks(){
stack('stack-mts',[
 {name:'ベーストーン',card:['#fffbe6','#ffe36b'],p:{t:'fill',c:'#ffe88a'}},
 {parts:[{name:'キートーン',c:'#c0504d'},{name:'フィルトーン',c:'#4f9a5f'},{name:'バックトーン',c:'#4a5ab8'}],blend:'透過',p:{t:'quad',c:['#ff2a2a','#1f9a2a','#1f2ad8']}},
 {name:'影',card:['#e6eef2','#2f6a85'],inv:true,blend:'乗算',p:{t:'fill',c:'#555',o:.55}},
 {name:'AO（アンビエントオクルージョン）',card:['#efe8f3','#5b3d78'],inv:true,blend:'乗算',p:{t:'fill',c:'#333',o:.5}},
 {name:'光沢',card:['#f0f8ff','#a8d4ff'],blend:'加算',p:{t:'fill',c:'#fff',o:.65}},
 {name:'異方性',card:['#f0fff4','#9ef0b8'],blend:'加算',p:{t:'fill',c:'#888',o:.55}},
 {name:'マット',card:['#fffdf2','#ffe9b8'],blend:'加算',p:{t:'fill',c:'#222',o:.75}},
 {name:'リムライト',card:['#fff5f8','#ffc8dc'],blend:'加算',p:{t:'ring',c:'#777',w:22}},
 {name:'サブ輪郭線',card:['#f6f6f6','#cfcfcf'],blend:'透過',p:{t:'outline',c:'#000',w:5}},
 {name:'水彩',sub:'にじみ・縁のたまり・粒状感',card:['#f2fbff','#bfe2f2'],blend:'加工',p:{t:'watercolor'}},
 {name:'色ゆらぎ・紙',sub:'面ごとの色ムラと紙の目',card:['#fff8f0','#f0d9bd'],blend:'加工',p:{t:'paper'}},
],'筆のタッチとノーマルマップは層ではなく、明暗の境目（法線）を変えます。');
stack('stack-mte',[
 {name:'白目',card:['#ffffff','#dcd9ef'],blend:'透過',p:{t:'fill',c:'#efeefa'}},
 {name:'黒目の色（グラデーション）',card:['#eef4ff','#5c86d6'],inv:true,blend:'透過',p:{t:'circle',r:.62,c:'#4b78d0'}},
 {name:'黒目の模様',card:['#f2f4f8','#8892a8'],blend:'乗算',p:{t:'rays',c:'#28324a',n:56,w:3.5}},
 {name:'黒目のテクスチャ',card:['#f6f2ff','#a99bd6'],blend:'乗算',sub:'通常／乗算を切替',p:{t:'circle',r:.6,c:'#7a6ac0',o:.45}},
 {name:'下の反射',card:['#f0f8ff','#b6dcff'],blend:'スクリーン',p:{t:'circle',r:.32,dy:.25,c:'#d8ecff',o:.9}},
 {name:'黒目の縁',card:['#eef2fb','#3c5aa0'],inv:true,blend:'透過',p:{t:'ring',r:.62,w:10,c:'#1c2d66'}},
 {name:'瞳孔',card:['#eceef4','#30364a'],inv:true,blend:'透過',p:{t:'circle',r:.26,c:'#151a2e'}},
 {name:'黒目の輪郭線',card:['#f4f4f4','#555'],inv:true,blend:'透過',p:{t:'ring',r:.66,w:5,c:'#000'}},
 {name:'まぶたの影',card:['#f4f0fa','#8a7aa8'],inv:true,blend:'乗算',p:{t:'band',h:.55,c:'#5a4a80',o:.55}},
 {name:'ライトの陰影',card:['#f2f2f6','#6a6a84'],inv:true,blend:'乗算',sub:'RGB の3灯を読む',p:{t:'half',c:'#3a3a55',o:.5}},
 {name:'ハイライト 1〜3',card:['#ffffff','#e8e8e8'],blend:'透過',p:{t:'spots',c:'#fff',pts:[[.3,-.35,.16],[-.25,.3,.07],[.05,.5,.04]]}},
 {name:'スクリーントーン',card:['#f7f7f7','#bbbbbb'],blend:'切替',sub:'漫画調のときだけ',p:{t:'halftone',c:'#222'}},
],'このあと「エフェクト」（キラキラ・ハートなどの画像）が一番上に重なります。');
stack('stack-mtm',[
 {name:'口の中の壁',card:['#fbecec','#b3474f'],inv:true,blend:'透過',sub:'奥ほど暗く（乗算）',p:{t:'fill',c:'#8c2a33'}},
 {name:'奥の喉',card:['#f6e8ea','#5a1a24'],inv:true,blend:'透過',p:{t:'mthroat'}},
 {name:'舌',card:['#fff0f2','#f39aa4'],blend:'透過',p:{t:'mtongue'}},
 {name:'下の歯',card:['#ffffff','#e2e0ea'],blend:'透過',p:{t:'mlow'}},
 {name:'上の歯',card:['#ffffff','#e2e0ea'],blend:'透過',p:{t:'mteeth'}},
 {name:'歯の影',card:['#f2f0f6','#9a94aa'],inv:true,blend:'乗算',p:{t:'mshade'}},
 {name:'ライトの陰影',card:['#f2f2f6','#6a6a84'],inv:true,blend:'乗算',p:{t:'half',c:'#3a3a55',o:.45}},
 {name:'口の形（クリップマスク）',card:['#fff8dc','#f3d36b'],blend:'マスク',sub:'口の外は隠し、中だけを見せる',p:{t:'mmask'}},
],'口の中のジオメトリ（GN「MTS Mouth Inner」）を使うときは、喉・舌・歯は実際の形として板ポリの奥に置かれます。');
stack('stack-mtb',[
 {name:'空のグラデーション',card:['#eef7ff','#7fb8ec'],blend:'透過',sub:'地平線 → 天頂・地面',p:{t:'grad',c:['#6aa8e8','#e9f3ff']}},
 {name:'夕焼けのにじみ',card:['#fff4ea','#ffb67a'],blend:'透過',p:{t:'half',c:'#ffb87a',h:.8,o:.55}},
 {name:'雲（遠い → 近い）',card:['#ffffff','#d8dde4'],blend:'透過',p:{t:'clouds',c:'#fff'}},
 {name:'太陽の光と円',card:['#fffbe8','#ffd76a'],blend:'透過',p:{t:'circle',r:.16,dx:.45,dy:-.3,c:'#fff3b0',st:'#ffcc33',sw:4}},
 {name:'星',card:['#eef0f8','#2a3460'],inv:true,blend:'透過',p:{t:'stars',c:'#4a5aa0',n:22,s:10}},
 {name:'月',card:['#f4f6fb','#aab4cc'],blend:'透過',sub:'満ち欠け・模様',p:{t:'circle',r:.15,dx:-.45,dy:-.25,c:'#e8ecf6',st:'#888',sw:2}},
 {name:'薄明光線',card:['#fffaf0','#f5d9a0'],blend:'透過',p:{t:'rays',c:'#f0c060'}},
 {name:'日暈',card:['#fff4f0','#f0b4a0'],blend:'透過',p:{t:'ring',r:.55,w:6,c:'#e8a088'}},
 {name:'レンズフレア',card:['#fffbf0','#f2e0b0'],blend:'透過',sub:'アニメ側だけ',p:{t:'spots',c:'rgba(255,220,140,.8)',pts:[[.3,-.2,.08],[0,0,.05],[-.3,.2,.11]]}},
 {name:'漫画調（トーン・線）',card:['#f7f7f7','#9a9a9a'],blend:'切替',sub:'画風 0 で白黒',p:{t:'halftone',c:'#222'}},
 {name:'色の調整',card:['#fff6ee','#ffc9a0'],blend:'加工',sub:'彩度・白黒のコントラスト',p:{t:'fill',c:'#999',o:.25}},
 {name:'カメラにだけ映す',card:['#eefaf4','#8fd4b4'],blend:'固定',sub:'ライトパス',p:{t:'outline',c:'#1f7a52',w:4}},
],'照明・反射としては黒になるので、背景を変えてもキャラクターの陰影は変わりません。');
stack('stack-mtg',[
 {name:'地面の色',card:['#ffffff','#e6e8eb'],blend:'透過',sub:'トーンのマテリアルも入れられる',p:{t:'fill',c:'#f4f5f7'}},
 {name:'テクスチャ',card:['#f4f5f7','#a9adb5'],blend:'乗算',sub:'上から見て並べて貼る',p:{t:'grid'}},
 {name:'凹凸の陰',card:['#f2f2f6','#8d8f9a'],inv:true,blend:'乗算',sub:'光に背を向けた側（テクスチャの溝）',p:{t:'gridbump',side:-1}},
 {name:'凹凸の照り',card:['#ffffff','#e8e8e8'],blend:'透過',sub:'光に向いた側を明るく',p:{t:'gridbump',side:1}},
 {name:'キーライトの影',card:['#fdeeee','#d9453f'],inv:true,blend:'乗算',sub:'オン・オフできる（既定オン）',p:{t:'blob',dx:-.3,dy:-.04,r:.3,c:'#7a2622',o:.8}},
 {name:'フィルライトの影',card:['#eef8f1','#2f9a52'],inv:true,blend:'乗算',sub:'オン・オフできる（既定オフ）',p:{t:'blob',dx:.24,dy:-.32,r:.24,c:'#1d5a33',o:.8}},
 {name:'バックライトの影',card:['#eef2fc','#3b6fd6'],inv:true,blend:'乗算',sub:'オン・オフできる（既定オフ）',p:{t:'blob',dx:0,dy:.42,r:.22,c:'#22407a',o:.8}},
 {name:'接地の陰（AO）',card:['#f0eef4','#3c3a48'],inv:true,blend:'乗算',sub:'物の近く・接地しているところ',p:{t:'blob',c:'#141519',o:.45,dx:-.02,dy:.05,r:.18}},
 {name:'端を消す',card:['#fff8dc','#f3d36b'],blend:'マスク',sub:'遠くを透明にして背景になじませる',p:{t:'radial'}},
 {name:'影だけ',card:['#f4f0ff','#c9b6ff'],blend:'切替',sub:'地面を透明にし、影を背景に掛ける',p:{t:'dashblob'}},
],'影は3灯それぞれオン・オフでき、重なった所ほど濃くなります。出力は発光（漫画の平らな塗り）。地面を照らすのは「地面の影用ライト」だけなので、影のぼかしはキャラクターには効きません。',{sphere:true});
stack('stack-fx-screen',[
 {name:'空白の半径',card:['#ffffff','#9aa0a8'],blend:'マスク',sub:'中心の線を描かない範囲',p:{t:'blank'}},
 {name:'放射状の線',card:['#f4f5f7','#141519'],inv:true,blend:'透過',sub:'本数・長さ／間隔のばらつき',p:{t:'focus'}},
 {name:'入り抜き・線の太さ',card:['#f4f5f7','#3c4049'],inv:true,blend:'加工',sub:'画面の端ほど太く（画面の高さに対する割合）',p:{t:'focus',taper:true}},
 {name:'色',card:['#eef2fb','#1c6f9c'],inv:true,blend:'透過',sub:'MTS FX Ink（発光で平らに）',p:{t:'focus',taper:true,c:'#1c6f9c'}},
 {name:'ボイル間隔',card:['#f4f0ff','#c9b6ff'],blend:'切替',sub:'N フレームごとに描き直す',p:{t:'focus',boil:true,w:2,o:.5}},
 {name:'画面に貼る',card:['#eefaf4','#8fd4b4'],blend:'固定',sub:'カメラの子・奥行きで前後',p:{t:'frame'}},
],'スピード線・タレ線も同じ作りです。中心 X・Y で線の集まる位置を動かせます。',{});
stack('stack-fx-manga',[
 {name:'中の色',card:['#fff0f4','#f06a8c'],blend:'透過',sub:'塗りのある漫符だけ',p:{t:'heart',mode:'fill'}},
 {name:'線・フチ',card:['#f4f5f7','#141519'],inv:true,blend:'透過',sub:'太さは画面の高さに対する割合',p:{t:'heart',mode:'edge'}},
],'例：ハート。白黒の線画（MTS FX Ink）で描き、カメラから離れても線は画面上で同じ太さです。',{});
stack('stack-fx-vfx',[
 {name:'影（ドロップシャドウ）',card:['#f0eef4','#3c3a48'],inv:true,blend:'乗算',sub:'明るい背景で見やすく',p:{t:'puffs',c:'#141519',o:.3,sp:1.05,soft:true}},
 {name:'閃光',card:['#fffbe8','#ffd76a'],blend:'加算',t:[0,.12],p:{t:'glow',c:'#ffe28a',r:.7}},
 {name:'火の玉',card:['#fff1e6','#ff9a3c'],blend:'加算',t:[.01,.55],p:{t:'puffs',c:'#ff9a3c',o:.85,sz:.9,soft:true}},
 {name:'衝撃波リング',card:['#fff4e8','#ffb347'],blend:'加算',t:[0,.32],p:{t:'ring',c:'#ffb347',w:9,r:.8}},
 {name:'火花',card:['#fff4e8','#ffb347'],blend:'加算',t:[.01,.6],p:{t:'sparks'}},
 {name:'黒煙',card:['#eef0f4','#4a4e58'],inv:true,blend:'透過',t:[.1,1],p:{t:'puffs',c:'#4a4e58',o:.75,sp:1.15,sz:1.1,soft:true}},
 {name:'破片',card:['#eef0f4','#4a4e58'],inv:true,blend:'透過',t:[.02,.9],p:{t:'shards'}},
 {name:'残り火',card:['#fff4e8','#ff9a3c'],blend:'加算',t:[.2,1],p:{t:'dots',c:'#ff9a3c',n:26,s:4}},
],'例：爆発。帯は「進み具合」0 → 1 のうち、その層が出ている範囲です。見た目はすべてマテリアル MTS FX Glow 1つで、色・発光・加算／通常・溶け具合を層ごとに渡します。',{});
stack('stack-fx-ink',[
 {name:'筆跡の形',card:['#f4f5f7','#c9cdd3'],blend:'透過',sub:'S 字・円相・直線、またはパスで描く',p:{t:'brush',c:'#c9cdd3',w:.42}},
 {name:'入り・抜き',card:['#f4f5f7','#3c4049'],inv:true,blend:'加工',sub:'筆の入りと、抜け（筆を上げる）',p:{t:'brush',taper:true,w:.42}},
 {name:'手ぶれ',card:['#f4f5f7','#3c4049'],inv:true,blend:'加工',sub:'手の揺れ',p:{t:'brush',taper:true,wob:true,w:.42}},
 {name:'かすれ',card:['#fff8dc','#f3d36b'],blend:'マスク',sub:'筆の終わりほど強い・毛の筋',p:{t:'brush',taper:true,wob:true,dry:true,w:.42}},
 {name:'しぶき',card:['#f4f5f7','#141519'],inv:true,blend:'透過',sub:'筆から飛ぶ小さな墨の粒',p:{t:'brush',splat:true,w:.42,o:.12}},
 {name:'墨の色・不透明度',card:['#f4f5f7','#141519'],inv:true,blend:'透過',sub:'光らない（加算なし）',p:{t:'brush',taper:true,wob:true,dry:true,w:.42,c:'#3c4049',o:.75}},
],'例：筆跡。墨は光らず、描き終わっても紙に残るので消えません。',{});
stack('stack-mtsb',[
 {name:'トゲ・もこもこ・角の丸み',card:['#fff6ee','#ffc9a0'],blend:'加工',sub:'数・長さ・ばらつき',p:{t:'spiky'}},
 {name:'しっぽ',card:['#f4f5f7','#3c4049'],inv:true,blend:'透過',sub:'まっすぐ・ギザギザ・パス（思考は小さな丸）',p:{t:'tail'}},
 {name:'中の色',card:['#f4f5f7','#141519'],inv:true,blend:'透過',sub:'白 = ふつう、黒 = ベタの吹き出し',p:{t:'bfill'}},
 {name:'画面に貼る',card:['#eefaf4','#8fd4b4'],blend:'固定',sub:'カメラの子・位置は画面の 0〜1',p:{t:'bplace'}},
],'板はレンダーのカメラ（画面）を表します。吹き出しの輪郭線は、吹き出しには含まれません。線は「輪郭線」パネルで付けます。',{rect:true});


}
function msBeforeAfter(){
  document.querySelectorAll('.ms-ba').forEach(ba=>{const r=ba.querySelector('input');if(!r||r.dataset.b)return;r.dataset.b=1;r.addEventListener('input',()=>ba.style.setProperty('--pos',r.value+'%'));});
}
function msDistortion(){
  const el=document.getElementById('dfDemo'); if(el&&window.msDfDemo) window.msDfDemo(el);
  const lt=document.getElementById('ltDemo'); if(lt&&window.msLightDemo) window.msLightDemo(lt);
}
function msOutline(){
  const mock=document.getElementById('olMock'); if(!mock||mock.dataset.b) return; mock.dataset.b=1;
  const why=document.getElementById('olWhy'), st=document.getElementById('olStatus');
  const names={none:'なし',hull:'ハル',ray:'レイキャスト',la:'ラインアート',alpha:'アルファ'}, inames={ao:'AO',ray:'レイキャスト内側',la:'ラインアート内側'};
  let ver='52';
  const upd=()=>{const old=ver==='45';
    mock.querySelectorAll('[data-rc]').forEach(l=>{const i=l.querySelector('input');l.classList.toggle('off',old);i.disabled=old;if(old&&i.checked){i.checked=false;if(i.type==='radio')mock.querySelector('input[value="hull"]').checked=true;else mock.querySelector('input[name=inner][value=ao]').checked=true;}});
    why.hidden=!old;
    const o=mock.querySelector('input[name=outer]:checked').value, alpha=o==='alpha';
    if(alpha) mock.querySelectorAll('input[name=inner]').forEach(i=>i.checked=false);
    const inn=[...mock.querySelectorAll('input[name=inner]:checked')].map(i=>inames[i.value]);
    st.textContent=msT('構成: '+names[o]+(inn.length?' ＋ '+inn.join(' ＋ '):'')+(alpha?'（内側の線は透過の形に沿わないためオフ）':''));};
  mock.addEventListener('change',upd);
  document.querySelectorAll('.ms-vt button').forEach(b=>b.addEventListener('click',()=>{ver=b.dataset.ver;document.querySelectorAll('.ms-vt button').forEach(x=>x.setAttribute('aria-pressed',x===b));upd();}));
  upd();
}
const FX=[
 ['manga','focus_lines','集中線'],['manga','speed_lines','スピード線'],['manga','gloom_lines','タレ線'],['manga','impact_burst','ウニフラ'],['manga','beta_flash','ベタフラッシュ'],['manga','notice_lines','気付き線'],['manga','shock_lines','衝撃線'],['manga','tremble_lines','震え線'],['manga','swoosh_lines','動きの線'],['manga','magic_circle','魔法陣'],['manga','sparkles','キラキラ'],
 ['mark','blush_lines','照れ線'],['mark','anger_mark','怒りマーク'],['mark','sweat_drops','汗'],['mark','steam_puffs','湯気（プンスカ）'],['mark','scribble','モジャモジャ'],['mark','manga_aura','オーラ（メラメラ）'],['mark','sfx_text','描き文字'],['mark','exclaim','！'],['mark','question','？'],['mark','interrobang','！？'],['mark','music_notes','音符'],['mark','heart','ハート'],['mark','zzz','Zzz'],
 ['attack','hit_spark','ヒットスパーク'],['attack','slash','斬撃'],['attack','lightning','稲妻'],['attack','explosion','爆発'],['attack','shockwave','衝撃波リング'],['attack','fire','炎'],['attack','ice','氷の結晶'],['attack','electric','電撃の玉'],['attack','poison','毒'],['attack','dark','闇の渦'],['attack','holy','聖なる光'],
 ['skill','charge','チャージ'],['skill','aura','オーラ'],['skill','heal','回復'],['skill','barrier','バリア'],['skill','beam','ビーム'],
 ['env','smoke','煙・土煙'],['env','dust','着地の土煙'],['env','debris','破片'],['env','crack','地割れ'],['env','muzzle','マズルフラッシュ'],['env','splash','水しぶき'],
 ['warn','warn_circle','範囲予告（円）'],['warn','warn_fan','範囲予告（扇）'],['warn','pillar','光の柱'],
 ['ink','ink_brush','筆跡'],['ink','ink_splatter','墨しぶき'],['ink','ink_drips','墨のたれ'],['ink','ink_wash','墨のにじみ'],['ink','ink_radial','筆の放射線']];
const CATS=[['all','すべて'],['manga','効果線'],['mark','漫符・描き文字'],['attack','攻撃・属性'],['skill','スキル・状態'],['env','環境・アクション'],['warn','警告・UI'],['ink','墨・筆']];
function msEffects(){
  const chips=document.getElementById('fxChips'), grid=document.getElementById('fxGrid'); if(!chips||chips.dataset.b) return; chips.dataset.b=1;
  const base=grid.dataset.base||'', catName=Object.fromEntries(CATS); let cur='all';
  CATS.forEach(([k,n])=>{const b=document.createElement('button');b.type='button';b.dataset.k=k;b.innerHTML=msT(n)+'<span class="ct">'+(k==='all'?FX.length:FX.filter(f=>f[0]===k).length)+'</span>';b.addEventListener('click',()=>{cur=k;render();});chips.appendChild(b);});
  function render(){chips.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k===cur));grid.innerHTML='';
    FX.filter(f=>cur==='all'||f[0]===cur).forEach(([c,id,n])=>{const d=document.createElement('div');d.className='ms-tile';d.innerHTML=msT('<img loading="lazy" src="'+base+'assets/img/fx/fx_'+id+'.webp" alt="'+n+'"><span>'+n+'</span>');grid.appendChild(d);});}
  render();
}
function msSplit(el,base,step){if(!el)return 0;if(el.dataset.split)return +el.dataset.split;let i=0;
  const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();for(const ch of c.textContent){if(/\s/.test(ch)){f.appendChild(document.createTextNode(ch));continue;}const sp=document.createElement('span');sp.className='ms-ch';sp.textContent=ch;sp.style.setProperty('--d',(base+i*step)+'ms');i++;f.appendChild(sp);}c.replaceWith(f);}
    else if(c.nodeType===1&&!c.classList.contains('bi')&&!c.classList.contains('en')&&!c.classList.contains('headerlink')&&!c.classList.contains('new-label')&&c.tagName!=='BR'&&c.tagName!=='IMG')walk(c);});};
  walk(el);const en=el.querySelector(':scope>.en');if(en)en.style.setProperty('--d',(base+i*step+80)+'ms');const nl=el.querySelector('.new-label');if(nl)nl.style.setProperty('--d',(base+i*step+(en?380:150))+'ms');el.dataset.split=base+i*step;return base+i*step;}
function msTop(){
  const sheet=document.querySelector('.md-content .ms-sheet');
  document.body.classList.toggle('ms-top',!!sheet);
  if(!sheet) return;
  if(!sheet.querySelector('.ms-tone')){const t=document.createElement('div');t.className='ms-tone';t.setAttribute('aria-hidden','true');sheet.prepend(t);}
  /* 見出しはタイピング風：1文字ずつ現れ、打ち終えたらマーカー */
  const h1=sheet.querySelector('.ms-hero h1');msSplit(h1,0,0);
  if(h1&&!h1.dataset.typed){let t=250;const cs=[...h1.querySelectorAll('.ms-ch')];const em=h1.querySelector('em');
    cs.forEach((c,j)=>{const prev=j?cs[j-1].textContent:'';t+=/[、。,.]/.test(prev)?260:55+((j*37)%45);setTimeout(()=>c.classList.add('on'),t);});
    h1.dataset.typed=t;if(em)setTimeout(()=>em.classList.add('go'),t+200);}
}
/* 全ページ共通：h2 は1文字ずつ、表・図・カードなどはスクロールで見えたときに出す */
function msAnim(){
  document.body.classList.add('ms-anim');
  const T='.md-content .md-typeset > ';
  const els=[...document.querySelectorAll(['h2','.ms-flow','figure','.md-typeset__scrollwrap','table','.ms-grid3','.admonition','details','.grid','div[class*="ms-"]:not(.ms-sheet)'].map(x=>T+x).join(','))];
  els.forEach(e=>{if(e.tagName==='H2')msSplit(e,60,28);else e.classList.add('ms-reveal');});
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('is-in'));return;}
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('is-in');io.unobserve(en.target);}}),{rootMargin:'0px 0px -12% 0px',threshold:.15});
  els.forEach(e=>{if(!e.classList.contains('is-in'))io.observe(e);});
}
function msTrFilter(){const q=document.getElementById('trFilter');if(!q||q.dataset.ok)return;q.dataset.ok=1;const cnt=document.getElementById('trCount');const rows=[...document.querySelectorAll('.ms-tr-table tbody tr')];rows.forEach(r=>r._t=r.textContent.toLowerCase());const total=rows.length;
q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();let n=0;document.querySelectorAll('details.ms-tr').forEach(d=>{let k=0;d.querySelectorAll('tbody tr').forEach(r=>{const hit=!v||r._t.includes(v);r.style.display=hit?'':'none';if(hit)k++});d.style.display=(v&&!k)?'none':'';if(v)d.open=k>0&&k<400;n+=k});cnt.textContent=msT(v?(n+' / '+total+' 語'):(total+' 語'))})}
function msLangLinks(){const logo=document.querySelector('a.md-logo');const ls=document.querySelectorAll('a.md-select__link[hreflang]');if(!logo||!ls.length)return;
const en=document.documentElement.lang==='en';const cur=new URL('.',new URL(logo.getAttribute('href'),location.href));const root=en?new URL('../',cur):cur;
let rel=location.pathname.startsWith(cur.pathname)?location.pathname.slice(cur.pathname.length):'';
ls.forEach(a=>{a.href=new URL((a.getAttribute('hreflang')==='en'?'en/':'')+rel+location.hash,root).href;});}
window.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a.md-select__link[hreflang]');if(a){msLangLinks();e.preventDefault();e.stopPropagation();location.href=a.href;}},true);
function msInit(){msLangLinks();msTrFilter();msTop();msAnim();msStacks();msBeforeAfter();msDistortion();msOutline();msEffects();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',msInit)}else{msInit()}
if(window.document$){document$.subscribe(()=>setTimeout(msInit,0))}

// ---------- 背景アニメの位置を時計に合わせる ----------
// ページの読み込み・保存時の自動リロードのたびに最初の位置へ戻って「止まった」ように見えないよう、
// 現在時刻から逆算した負の delay を入れて、続きから動かす
(function(){
  function msBgSync(){
    var t=Date.now()/1000, r=document.documentElement.style;
    r.setProperty('--ms-drift-delay', -(t%20).toFixed(2)+'s');
    r.setProperty('--ms-sweep-delay', -(t%8).toFixed(2)+'s');
  }
  msBgSync();
  if(window.document$&&document$.subscribe){document$.subscribe(msBgSync)}
  document.addEventListener('visibilitychange',function(){if(!document.hidden)msBgSync()});
})();

// ---------- 背景：外側ほど大きくなる網点（ハーフトーンのビネット）----------
// 画面に固定したキャンバスに描く。網点の格子は左下から右上へ一定の速さで流れ、
// 点の大きさは画面上の位置（中心からの距離）で決まるので、流れても外側が濃く・中心が薄いまま
(function(){
  if(window.msHalftoneOn) return; window.msHalftoneOn=1;
  var cv=document.createElement('canvas'); cv.className='ms-halftone'; cv.setAttribute('aria-hidden','true');
  var ctx=cv.getContext('2d'), W=0, H=0, top=0, dpr=1, col='rgba(20,21,25,.2)';
  var GAP=16, RMIN=.4, RMAX=6.6, SPEED=GAP/1.2;   // 1.2 秒で 1 マス進む
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';hdr();}
  function hdr(){var b=0;document.querySelectorAll('.md-header,.md-tabs').forEach(function(e){var r=e.getBoundingClientRect();if(r.height&&r.top<5)b=Math.max(b,r.bottom)});top=Math.max(0,Math.min(b,H*.5));}
  function color(){var c=getComputedStyle(document.body||document.documentElement).getPropertyValue('--ms-halftone').trim();col=c||col;}
  function draw(t){
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);ctx.fillStyle=col;
    var o=reduce?0:(t/1000*SPEED)%GAP, cx=W/2, cy=top+(H-top)/2, ax=W*.72, ay=(H-top)*.72;
    ctx.beginPath();
    for(var y=-GAP+((-o)%GAP+GAP)%GAP; y<H+GAP; y+=GAP){
      for(var x=-GAP+(o%GAP); x<W+GAP; x+=GAP){
        var dx=(x-cx)/ax, dy=(y-cy)/ay, d=Math.sqrt(dx*dx+dy*dy);
        var k=Math.max(0,Math.min(1,(d-.55)/.75)); k=k*k*(3-2*k);
        var r=RMIN+(RMAX-RMIN)*k; if(r<.3) continue;
        ctx.moveTo(x+r,y);ctx.arc(x,y,r,0,6.2832);
      }
    }
    ctx.fill();
  }
  var last=0;
  function loop(t){ if(!document.hidden&&t-last>33){last=t;if((t|0)%500<40)hdr();draw(Date.now());} if(!reduce) requestAnimationFrame(loop); }
  function start(){ if(!document.body.contains(cv)) document.body.insertBefore(cv,document.body.firstChild); size(); color(); draw(Date.now()); }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',start)}else{start()}
  addEventListener('resize',function(){size();draw(Date.now())});
  new MutationObserver(function(){color();draw(Date.now())}).observe(document.body,{attributes:true,attributeFilter:['data-md-color-scheme']});
  if(window.document$&&document$.subscribe){document$.subscribe(start)}
  if(!reduce) requestAnimationFrame(loop);
})();
/* LP POP: letters pop up from below when scrolled into view (20261102m) */
(function(){
  function popInit(){
    var els=[].slice.call(document.querySelectorAll('.ms-pop'));
    if(!els.length) return;
    if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('on')});return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('on');}else if(en.intersectionRatio===0){en.target.classList.remove('on');}})},{threshold:[0,1],rootMargin:'0px 0px -25% 0px'});
    els.forEach(function(e){io.observe(e)});
  }
  if(window.document$&&document$.subscribe){document$.subscribe(popInit)}else if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',popInit)}else{popInit()}
})();
