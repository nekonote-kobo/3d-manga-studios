# <i class="bi bi-emoji-smile-fill"></i> Manga Toon Mouth <span class="new-label">NEW</span> {data-toc-label="Manga Toon Mouth"}

<figure class="ms-page-hero"><img src="../assets/img/hero/hero_mtm.webp" alt="Manga Toon Mouth を使ったレンダリング"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTM · Material › Manga Toon Mouth ＋ Geometry Nodes › MTS Mouth Inner</p>

口は2つの部品でできています。顔の面にくっつく<strong>口の板ポリ</strong>（マテリアル）と、その奥に置く<strong>口の中のジオメトリ</strong>（ジオメトリノード）です。歯・舌・奥行きは口の中のモディファイアの値で変わります。

## <i class="bi bi-layers-fill"></i> 概要図 <span class="en">Layer stack</span>

口の中は奥行きの違う層を重ねて、視差で立体に見せます。

<div class="ms-stack" id="stack-mtm"></div>

## <i class="bi bi-diagram-2-fill"></i> 構成 <span class="en">Node tree</span>

<div class="ms-graph"><div class="flow"><div class="col"><div class="ms-node"><div class="hd h-geo">口の板ポリ</div><div class="bd">細分化 → シュリンクラップ<i>顔の面にくっつける</i></div></div><div class="ms-node"><div class="hd h-geo">口の中（_Inner）</div><div class="bd">GN: MTS Mouth Inner<i>喉・舌・上下の歯・八重歯</i></div></div></div><div class="wire"></div><div class="col"><div class="ms-node big sel"><div class="hd h-group">Manga Toon Mouth [マテリアル名]</div><div class="bd">Coords → Rig → Shade → Output<i>口の形はマスク、外側は透過</i></div></div><div class="ms-node"><div class="hd h-tex">MTS Teeth / Tongue / Inside</div><div class="bd">口の中のマテリアル</div></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">レンダー</div><div class="bd">顔の前に口を描く</div></div></div></div>

<div class="ms-pipe"><div><em>Coords</em><b>座標</b><span>板ポリの UV を口の座標にする</span></div><div><em>Rig</em><b>リグ</b><span>リグ連携のボーンから上唇・下唇・歯・舌を動かす</span></div><div><em>Shade</em><b>塗り</b><span>口の中の色、舌・歯の形と色、ライトの陰影</span></div><div><em>Output</em><b>出力</b><span>口の外を透過し、顔をマスクで透かす</span></div></div>


## <i class="bi bi-sliders2"></i> パネルと数値 <span class="en">Inputs</span>

5つの球（目・口・空）は、**左から右へ値を変えたもの**です。画像の下に値を書いています。黄色い欄がその項目の既定値で、ほかの項目は既定値のままです。

??? info "MTS Mouth Inner の項目一覧"

    | パネル | 項目 | 英語名 | 既定値 |
    |---|---|---|---|
    | 歯の形 | [歯のスタイル](#mtm-teeth-teeth-style) | `Teeth Style` | 1 |
    | 上の歯 | [上の歯の高さ](#mtm-teeth-upper-teeth-length) | `Upper Teeth Length` | 0.3 |
    | 上の歯 | [上の歯の幅](#mtm-teeth-upper-teeth-width) | `Upper Teeth Width` | 1 |
    | 上の歯 | [上の歯 回転 前後](#mtm-teeth-upper-teeth-rotation-x) | `Upper Teeth Rotation X` | 0° |
    | 上の歯 | [上の歯 回転 左右](#mtm-teeth-upper-teeth-rotation-y) | `Upper Teeth Rotation Y` | 0° |
    | 上の歯 | [上の歯 回転 正面](#mtm-teeth-upper-teeth-rotation-z) | `Upper Teeth Rotation Z` | 0° |
    | 舌 | [舌の大きさ](#mtm-tongue-tongue-size) | `Tongue Size` | 0.55 |
    | 口の中 | [奥行き](#mtm-inside-depth) | `Depth` | 1.2 |
    | 八重歯 | [八重歯の長さ](#mtm-fang-fang-size) | `Fang Size` | 1.5 |

### 歯の形 <span class="en">Teeth</span>

<div class="ms-prop" id="mtm-teeth-teeth-style"><div class="ph"><strong>歯のスタイル</strong><code>Teeth Style</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 3</span></span></div><p class="desc">0 = 一枚板、1 = 四角、2 = 丸、3 = ギザ。サイドバーではボタンで選びます。</p><img loading="lazy" src="../assets/img/spec/mtm_teeth_style.webp" alt="歯のスタイルを0、1、2、3に変えた比較"><div class="ms-vals" style="--n:4"><span>0</span><span class="def">1</span><span>2</span><span>3</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-length"><div class="ph"><strong>上の歯の高さ</strong><code>Upper Teeth Length</code><span class="chips"><span class="chip p">既定 0.3</span><span class="chip">比較 0.1 → 0.6</span></span></div><p class="desc">上の歯の、付け根から先までの高さ。下の歯は「下の歯の高さ」で同じように変えられます。</p><img loading="lazy" src="../assets/img/spec/mtm_upper_teeth.webp" alt="上の歯の高さを0.1、0.2、0.3、0.45、0.6に変えた比較"><div class="ms-vals" style="--n:5"><span>0.1</span><span>0.2</span><span class="def">0.3</span><span>0.45</span><span>0.6</span></div></div>

<p style="font-size:.66rem;color:var(--ms-ink-2)">次の4つの比較は、歯のスタイルの比較と同じ口で撮っています（歯のスタイル 0・ほかは既定値）。下の歯にも同じ項目（下の歯の幅・回転）があります。</p>

<div class="ms-prop" id="mtm-teeth-upper-teeth-width"><div class="ph"><strong>上の歯の幅</strong><code>Upper Teeth Width</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0.4 → 1.6</span></span></div><p class="desc">歯の列の横幅（口の幅いっぱい = 1）。歯の本数はそのままで、列の中心から横に縮めたり広げたりします。</p><img loading="lazy" src="../assets/img/spec/mtm_upper_width.webp" alt="上の歯の幅を0.4、0.7、1、1.3、1.6に変えた比較"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.7</span><span class="def">1</span><span>1.3</span><span>1.6</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-rotation-x"><div class="ph"><strong>上の歯 回転 前後</strong><code>Upper Teeth Rotation X</code><span class="chips"><span class="chip p">既定 0°</span><span class="chip">比較 −40° → 40°</span></span></div><p class="desc">歯の列を前後に傾けます。上の歯では出っ歯、下の歯ではしゃくれのような向きになります。</p><img loading="lazy" src="../assets/img/spec/mtm_upper_rot_x.webp" alt="上の歯の回転 前後を−40°、−20°、0°、20°、40°に変えた比較"><div class="ms-vals" style="--n:5"><span>−40°</span><span>−20°</span><span class="def">0°</span><span>20°</span><span>40°</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-rotation-y"><div class="ph"><strong>上の歯 回転 左右</strong><code>Upper Teeth Rotation Y</code><span class="chips"><span class="chip p">既定 0°</span><span class="chip">比較 −40° → 40°</span></span></div><p class="desc">歯の列を左右に向けます。片側が奥へ、反対側が手前に来ます。</p><img loading="lazy" src="../assets/img/spec/mtm_upper_rot_y.webp" alt="上の歯の回転 左右を−40°、−20°、0°、20°、40°に変えた比較"><div class="ms-vals" style="--n:5"><span>−40°</span><span>−20°</span><span class="def">0°</span><span>20°</span><span>40°</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-rotation-z"><div class="ph"><strong>上の歯 回転 正面</strong><code>Upper Teeth Rotation Z</code><span class="chips"><span class="chip p">既定 0°</span><span class="chip">比較 −20° → 20°</span></span></div><p class="desc">正面から見て、歯の列を回します。口を傾けたときに歯をそろえるのにも使えます。</p><img loading="lazy" src="../assets/img/spec/mtm_upper_rot_z.webp" alt="上の歯の回転 正面を−20°、−10°、0°、10°、20°に変えた比較"><div class="ms-vals" style="--n:5"><span>−20°</span><span>−10°</span><span class="def">0°</span><span>10°</span><span>20°</span></div></div>

### 舌 <span class="en">Tongue</span>

<div class="ms-prop" id="mtm-tongue-tongue-size"><div class="ph"><strong>舌の大きさ</strong><code>Tongue Size</code><span class="chips"><span class="chip p">既定 0.55</span><span class="chip">比較 0 → 1.1</span></span></div><p class="desc">舌の大きさ。</p><img loading="lazy" src="../assets/img/spec/mtm_tongue_size.webp" alt="舌の大きさを0、0.3、0.55、0.8、1.1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.3</span><span class="def">0.55</span><span>0.8</span><span>1.1</span></div></div>

### <i class="bi bi-emoji-smile-fill"></i> 口の中 <span class="en">Inside</span>

<div class="ms-prop" id="mtm-inside-depth"><div class="ph"><strong>奥行き</strong><code>Depth</code><span class="chips"><span class="chip p">既定 1.2</span><span class="chip">比較 0.4 → 2.6</span></span></div><p class="desc">口の中の深さ。浅いと奥の喉の暗がりが近くに見えます。</p><img loading="lazy" src="../assets/img/spec/mtm_depth.webp" alt="奥行きを0.4、0.8、1.2、1.8、2.6に変えた比較"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.8</span><span class="def">1.2</span><span>1.8</span><span>2.6</span></div></div>

### 八重歯 <span class="en">Fang</span>

<div class="ms-prop" id="mtm-fang-fang-size"><div class="ph"><strong>八重歯の長さ</strong><code>Fang Size</code><span class="chips"><span class="chip p">既定 1.5</span><span class="chip">比較 0.5 → 3</span></span></div><p class="desc">八重歯の長さ（八重歯がオンの場合）。</p><img loading="lazy" src="../assets/img/spec/mtm_fang.webp" alt="八重歯の長さを0.5、1、1.5、2.2、3に変えた比較"><div class="ms-vals" style="--n:5"><span>0.5</span><span>1</span><span class="def">1.5</span><span>2.2</span><span>3</span></div></div>
