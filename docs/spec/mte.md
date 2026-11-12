# <i class="bi bi-eye-fill"></i> Manga Toon Eye <span class="new-label">NEW</span> {data-toc-label="Manga Toon Eye"}

<figure class="ms-page-hero"><img src="../assets/img/hero/hero_mte.webp" alt="Manga Toon Eye を使ったレンダリング"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTE · Material › Manga Toon Eye [マテリアル名] › MTS Parallax Eye</p>

眼球の球面の内側に虹彩があるように見せる<strong>視差（パララックス）</strong>の目です。マテリアルには外側のグループ1つだけが見え、中で「位置 → 見た目 → エフェクト → 合成」の順に処理します。見た目の項目はプロパティエディターのマテリアルタブ「Manga Toon Eye」に並びます。

## <i class="bi bi-layers-fill"></i> 概要図 <span class="en">Layer stack</span>

眼球の球面に、下の層から順に描いていきます。

<div class="ms-stack" id="stack-mte"></div>

## <i class="bi bi-diagram-2-fill"></i> 構成 <span class="en">Node tree</span>

<div class="ms-graph"><div class="flow"><div class="ms-node"><div class="hd h-geo">ドライバー（自動）</div><div class="bd">目の位置・視線 X / Y<i>視線ターゲットから</i><i>左右・回転</i></div></div><div class="wire"></div><div class="ms-node big sel"><div class="hd h-group">Manga Toon Eye [マテリアル名]</div><div class="bd">MTS Parallax Eye<i>位置 → 見た目 → エフェクト → 合成</i><i>画像（虹彩テクスチャ）もこの中</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-group">Screen Tone</div><div class="bd">漫画調のときのトーン</div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">マテリアル出力</div><div class="bd">サーフェス</div></div></div></div>


!!! note ""
    スタイルは「アニメ」「漫画（白黒・インク線）」の2種類。グループにはバージョンがあり、古いものは値を保ったまま自動で作り直されます。

## <i class="bi bi-sliders2"></i> パネルと数値 <span class="en">Inputs</span>

5つの球（目・口・空）は、**左から右へ値を変えたもの**です。画像の下に値を書いています。黄色い欄がその項目の既定値で、ほかの項目は既定値のままです。

??? info "MTS Parallax Eye の項目一覧"

    | パネル | 項目 | 英語名 | 既定値 |
    |---|---|---|---|
    | 眼球 | [目の大きさ](#mte-eyeball-eye-scale) | `Eye Scale` | 1 |
    | 眼球 | [明るさ](#mte-eyeball-brightness) | `Brightness` | 1 |
    | エフェクト | [エフェクトの画像](#mte-eye-effect-image) | — | なし |
    | エフェクト | [貼り方](#mte-eye-effect-placement) | `Follow Iris` | 黒目に追従 |
    | エフェクト | [目の表示](#mte-eye-effect-display) | `Eye Display` | 目＋エフェクト |
    | エフェクト | [大きさ](#mte-eye-effect-size) | `Effect Size` | 1 |
    | エフェクト | [明るさ](#mte-eye-effect-brightness) | `Effect Brightness` | 1 |
    | エフェクト | [位置 X](#mte-eye-effect-x) / [Y](#mte-eye-effect-y) | `Effect Position` | 0 / 0 |
    | 黒目の色 | [黒目サイズ](#mte-iris-color-iris-size) | `Iris Size` | 0.52 |
    | 瞳孔 | [瞳孔サイズ](#mte-pupil-pupil-size) | `Pupil Size` | 0.42 |
    | 瞳孔 | [瞳孔の形](#mte-pupil-pupil-shape) | `Pupil Shape` | 0 |
    | ハイライト | [ハイライトサイズ](#mte-highlights-highlight-size) | `Highlight Size` | 0.2 |
    | ハイライト | [ハイライト X](#mte-highlights-highlight-x) | `Highlight X` | 0.28 |
    | まぶたの影 | [まぶたの影の高さ](#mte-lid-shadow-lid-shadow-height) | `Lid Shadow Height` | 0.5 |
    | 黒目のテクスチャ | [テクスチャの濃さ](#mte-iris-texture-mix) | `Texture Mix` | 1 |
    | 黒目のテクスチャ | [乗算（模様だけ使う）](#mte-iris-texture-multiply) | `Texture Multiply` | 0 |
    | 黒目のテクスチャ | [テクスチャの大きさ](#mte-iris-texture-scale) | `Texture Scale` | 1 |
    | 黒目のテクスチャ | [テクスチャの回転](#mte-iris-texture-rotation) | `Texture Rotation` | 0° |
    | 黒目の縁・模様 | [黒目の外周リング](#mte-iris-rim-pattern-limbal-ring) | `Limbal Ring` | 0.7 |
    | 黒目の縁・模様 | [模様の濃さ](#mte-iris-rim-pattern-pattern-amount) | `Pattern Amount` | 0.35 |
    | 黒目の縁・模様 | [模様の細かさ](#mte-iris-rim-pattern-pattern-scale) | `Pattern Scale` | 1 |
    | 黒目の輪郭線 | [輪郭線の太さ](#mte-iris-outline-ink-width) | `Ink Width` | 0.08 |
    | 下の反射 | [反射の強さ](#mte-lower-glow-glow-amount) | `Glow Amount` | 0.5 |
    | 下の反射 | [反射の位置（下へ）](#mte-lower-glow-glow-offset) | `Glow Offset` | 0.45 |
    | ライトの陰影 | [影のしきい値](#mte-light-shading-shadow-threshold) | `Shadow Threshold` | 1 |
    | 白目 | [陰りの濃さ](#mte-sclera-sclera-shade) | `Sclera Shade` | 0.35 |

### 眼球 <span class="en">Eyeball</span>

<div class="ms-prop" id="mte-eyeball-eye-scale"><div class="ph"><strong>目の大きさ</strong><code>Eye Scale</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0.6 → 1.4</span></span></div><p class="desc">虹彩・瞳孔をまとめて拡大縮小します。</p><img loading="lazy" src="../assets/img/spec/mte_look_x.webp" alt="目の大きさを0.6、0.8、1、1.2、1.4に変えた比較"><div class="ms-vals" style="--n:5"><span>0.6</span><span>0.8</span><span class="def">1</span><span>1.2</span><span>1.4</span></div></div>

<div class="ms-prop" id="mte-eyeball-brightness"><div class="ph"><strong>明るさ</strong><code>Brightness</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0.4 → 2.5</span></span></div><p class="desc">目全体の明るさ。</p><img loading="lazy" src="../assets/img/spec/mte_brightness.webp" alt="明るさを0.4、0.7、1、1.5、2.5に変えた比較"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.7</span><span class="def">1</span><span>1.5</span><span>2.5</span></div></div>

### エフェクト <span class="en">Eye Effect</span>

目の一番上の層に、透明部分のある画像（PNG）を重ねます。ハートやキラキラ、ぐるぐるなど、漫画の「目の表情」をそのまま描き込めます。プロパティエディター › マテリアル › 目の「エフェクト」で画像を選ぶと、下の項目が出ます。

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(110px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../assets/img/spec/eye_fx_sparkle.png" alt="" style="background:#3a3a3a;object-fit:contain">キラキラ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/spec/eye_fx_heart.png" alt="" style="background:#3a3a3a;object-fit:contain">ハート</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/spec/eye_fx_swirl.png" alt="" style="background:#3a3a3a;object-fit:contain">ぐるぐる</div>
</div>

<p style="font-size:.64rem;color:var(--ms-tone)">比較に使った PNG（512 × 512・背景は透明）。どれも自由に使えるオリジナル画像です。</p>

<div class="ms-prop" id="mte-eye-effect-image"><div class="ph"><strong>エフェクトの画像</strong><code>Image</code><span class="chips"><span class="chip">PNG（透明部分あり）</span></span></div><p class="desc">重ねる画像。透明な部分は下の目がそのまま見えます。右端は貼り方を「目全体」にした場合で、黒目の外まで広がります。</p><img loading="lazy" src="../assets/img/spec/mte_fx_images.webp" alt="エフェクトなし、キラキラ、ハート、ぐるぐる、キラキラ（目全体）の比較"><div class="ms-vals" style="--n:5"><span>なし</span><span>キラキラ</span><span>ハート</span><span>ぐるぐる</span><span>キラキラ（目全体）</span></div></div>

<div class="ms-prop" id="mte-eye-effect-placement"><div class="ph"><strong>貼り方</strong><code>Follow Iris</code><span class="chips"><span class="chip p">既定 黒目に追従</span></span></div><p class="desc"><b>黒目に追従</b>：画像の中心が黒目の中心に付き、視線と一緒に動きます。大きさも黒目に合わせて決まります。<br><b>目全体</b>：目の板全体に貼り、視線を動かしても画像は動きません。<br><b>左目は反転</b>：オンにすると左目の画像を左右反転し、左右対称にします。</p></div>

<div class="ms-prop" id="mte-eye-effect-display"><div class="ph"><strong>目の表示</strong><code>Eye Display</code><span class="chips"><span class="chip p">既定 目＋エフェクト</span></span></div><p class="desc">サイドバーの「目の表示」で、目に何を描くかを切り替えます。「白目＋エフェクト」は黒目とハイライトを消し、白目の上にエフェクトだけを描きます。「隠す」は目を描きません。自動キー挿入がオンなら、補間なしのキーフレームが入ります。</p><img loading="lazy" src="../assets/img/spec/mte_fx_display.webp" alt="目、目＋エフェクト、白目＋エフェクト、隠すの比較"><div class="ms-vals" style="--n:5"><span>目</span><span class="def">目＋エフェクト</span><span>白目＋エフェクト</span><span>隠す</span><span>　</span></div></div>

<div class="ms-prop" id="mte-eye-effect-size"><div class="ph"><strong>大きさ</strong><code>Effect Size</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0.4 → 1.6</span></span></div><p class="desc">エフェクトの大きさ。黒目に追従のときは、1 で黒目とほぼ同じ大きさです。</p><img loading="lazy" src="../assets/img/spec/mte_fx_size.webp" alt="大きさを0.4、0.7、1、1.3、1.6に変えた比較"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.7</span><span class="def">1</span><span>1.3</span><span>1.6</span></div></div>

<div class="ms-prop" id="mte-eye-effect-brightness"><div class="ph"><strong>明るさ</strong><code>Effect Brightness</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0.25 → 2</span></span></div><p class="desc">エフェクトの明るさ。下げると暗く沈み、上げると明るく浮きます。</p><img loading="lazy" src="../assets/img/spec/mte_fx_brightness.webp" alt="明るさを0.25、0.5、1、1.5、2に変えた比較"><div class="ms-vals" style="--n:5"><span>0.25</span><span>0.5</span><span class="def">1</span><span>1.5</span><span>2</span></div></div>

<div class="ms-prop" id="mte-eye-effect-x"><div class="ph"><strong>位置 X</strong><code>Effect Position X</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 -0.3 → 0.3</span></span></div><p class="desc">エフェクトを左右にずらします。</p><img loading="lazy" src="../assets/img/spec/mte_fx_x.webp" alt="位置 Xを-0.3、-0.15、0、0.15、0.3に変えた比較"><div class="ms-vals" style="--n:5"><span>-0.3</span><span>-0.15</span><span class="def">0</span><span>0.15</span><span>0.3</span></div></div>

<div class="ms-prop" id="mte-eye-effect-y"><div class="ph"><strong>位置 Y</strong><code>Effect Position Y</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 -0.3 → 0.3</span></span></div><p class="desc">エフェクトを上下にずらします。位置はパネルの操作パッド（点をドラッグ）でも動かせ、ボーンで動かすこともできます（エフェクトのボーン）。</p><img loading="lazy" src="../assets/img/spec/mte_fx_y.webp" alt="位置 Yを-0.3、-0.15、0、0.15、0.3に変えた比較"><div class="ms-vals" style="--n:5"><span>-0.3</span><span>-0.15</span><span class="def">0</span><span>0.15</span><span>0.3</span></div></div>

### 黒目の色 <span class="en">Iris Color</span>

<div class="ms-prop" id="mte-iris-color-iris-size"><div class="ph"><strong>黒目サイズ</strong><code>Iris Size</code><span class="chips"><span class="chip p">既定 0.52</span><span class="chip">比較 0.3 → 0.8</span></span></div><p class="desc">虹彩の大きさ。</p><img loading="lazy" src="../assets/img/spec/mte_iris_size.webp" alt="黒目サイズを0.3、0.4、0.52、0.65、0.8に変えた比較"><div class="ms-vals" style="--n:5"><span>0.3</span><span>0.4</span><span class="def">0.52</span><span>0.65</span><span>0.8</span></div></div>

### 瞳孔 <span class="en">Pupil</span>

<div class="ms-prop" id="mte-pupil-pupil-size"><div class="ph"><strong>瞳孔サイズ</strong><code>Pupil Size</code><span class="chips"><span class="chip p">既定 0.42</span><span class="chip">比較 0.1 → 0.8</span></span></div><p class="desc">瞳孔の大きさ。</p><img loading="lazy" src="../assets/img/spec/mte_pupil_size.webp" alt="瞳孔サイズを0.1、0.25、0.42、0.6、0.8に変えた比較"><div class="ms-vals" style="--n:5"><span>0.1</span><span>0.25</span><span class="def">0.42</span><span>0.6</span><span>0.8</span></div></div>

<div class="ms-prop" id="mte-pupil-pupil-shape"><div class="ph"><strong>瞳孔の形</strong><code>Pupil Shape</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 0 → 3</span></span></div><p class="desc">0 = 円、1 = 多角形、2 = 星、3 = ハート。</p><img loading="lazy" src="../assets/img/spec/mte_pupil_shape.webp" alt="瞳孔の形を0、1、2、3に変えた比較"><div class="ms-vals" style="--n:4"><span class="def">0</span><span>1</span><span>2</span><span>3</span></div></div>

### ハイライト <span class="en">Highlights</span>

<div class="ms-prop" id="mte-highlights-highlight-size"><div class="ph"><strong>ハイライトサイズ</strong><code>Highlight Size</code><span class="chips"><span class="chip p">既定 0.2</span><span class="chip">比較 0.05 → 0.45</span></span></div><p class="desc">いちばん大きいハイライト（ハイライト 1）の大きさ。</p><img loading="lazy" src="../assets/img/spec/mte_highlight_size.webp" alt="ハイライトサイズを0.05、0.12、0.2、0.3、0.45に変えた比較"><div class="ms-vals" style="--n:5"><span>0.05</span><span>0.12</span><span class="def">0.2</span><span>0.3</span><span>0.45</span></div></div>

<div class="ms-prop" id="mte-highlights-highlight-x"><div class="ph"><strong>ハイライト X</strong><code>Highlight X</code><span class="chips"><span class="chip p">既定 0.28</span><span class="chip">比較 -0.6 → 0.6</span></span></div><p class="desc">ハイライト 1 の左右の位置。</p><img loading="lazy" src="../assets/img/spec/mte_highlight_x.webp" alt="ハイライト Xを-0.6、-0.3、0、0.3、0.6に変えた比較"><div class="ms-vals" style="--n:5"><span>-0.6</span><span>-0.3</span><span>0</span><span>0.3</span><span>0.6</span></div></div>

### まぶたの影 <span class="en">Lid Shadow</span>

<div class="ms-prop" id="mte-lid-shadow-lid-shadow-height"><div class="ph"><strong>まぶたの影の高さ</strong><code>Lid Shadow Height</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 -1 → 1</span></span></div><p class="desc">上まぶたの影が下りてくる位置。マイナスほど影が下まで下り、白目と黒目が暗くなります。プラスでは影が上に引いて、1 でほぼ消えます（濃さ 1、影の色が濃い紫の場合）。</p><img loading="lazy" src="../assets/img/spec/mte_lid_height.webp" alt="まぶたの影の高さを-1、-0.5、0、0.5、1に変えた比較"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span>0</span><span class="def">0.5</span><span>1</span></div></div>

### 黒目のテクスチャ <span class="en">Iris Texture</span>

黒目に画像を貼ります。画像を選ぶと黒目いっぱいに貼られ、画像の中心が黒目の中心になります。瞳孔・ハイライト・反射はテクスチャの上に描かれます。古い目で欄が出ないときは、もう一度セットアップすると使えるようになります。

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(110px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../assets/img/spec/eye_iris_tiles.png" alt="色の違うタイルを4×4に並べた画像" style="background:#3a3a3a;object-fit:contain">比較に使った画像</div>
</div>

<div class="ms-prop" id="mte-iris-texture-mix"><div class="ph"><strong>テクスチャの濃さ</strong><code>Texture Mix</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">テクスチャを黒目の色にどれだけ重ねるか。0 で元の黒目の色、1 でテクスチャの色になります。</p><img loading="lazy" src="../assets/img/spec/mte_itex_mix.webp" alt="テクスチャの濃さを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mte-iris-texture-multiply"><div class="ph"><strong>乗算（模様だけ使う）</strong><code>Texture Multiply</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">上げるほど、テクスチャを黒目の色に掛け合わせます。黒目の色を残したまま、模様の明暗だけを使いたいときに。</p><img loading="lazy" src="../assets/img/spec/mte_itex_multiply.webp" alt="乗算を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span class="def">0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-iris-texture-scale"><div class="ph"><strong>テクスチャの大きさ</strong><code>Texture Scale</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0.5 → 2</span></span></div><p class="desc">テクスチャの大きさ。1 で黒目いっぱい。1 より小さいと画像の外側の部分は元の黒目の色になり、大きいと中央部分を拡大します。</p><img loading="lazy" src="../assets/img/spec/mte_itex_scale.webp" alt="テクスチャの大きさを0.5、0.75、1、1.5、2に変えた比較"><div class="ms-vals" style="--n:5"><span>0.5</span><span>0.75</span><span class="def">1</span><span>1.5</span><span>2</span></div></div>

<div class="ms-prop" id="mte-iris-texture-rotation"><div class="ph"><strong>テクスチャの回転</strong><code>Texture Rotation</code><span class="chips"><span class="chip p">既定 0°</span><span class="chip">比較 0° → 180°</span></span></div><p class="desc">テクスチャを黒目の中心で回します（色の違うタイルを並べた画像の場合。上の赤い列の位置で向きがわかります）。「テクスチャを左目で反転」をオンにすると、左目は左右反転して貼られます。</p><img loading="lazy" src="../assets/img/spec/mte_itex_rotation.webp" alt="テクスチャの回転を0°、45°、90°、135°、180°に変えた比較"><div class="ms-vals" style="--n:5"><span class="def">0°</span><span>45°</span><span>90°</span><span>135°</span><span>180°</span></div></div>

### 黒目の縁・模様 <span class="en">Iris Rim / Pattern</span>

<div class="ms-prop" id="mte-iris-rim-pattern-limbal-ring"><div class="ph"><strong>黒目の外周リング</strong><code>Limbal Ring</code><span class="chips"><span class="chip p">既定 0.7</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">虹彩のふちを濃くするリング。</p><img loading="lazy" src="../assets/img/spec/mte_limbal.webp" alt="黒目の外周リングを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-iris-rim-pattern-pattern-amount"><div class="ph"><strong>模様の濃さ</strong><code>Pattern Amount</code><span class="chips"><span class="chip p">既定 0.35</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">虹彩の放射状の模様の濃さ。</p><img loading="lazy" src="../assets/img/spec/mte_pattern.webp" alt="模様の濃さを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-iris-rim-pattern-pattern-scale"><div class="ph"><strong>模様の細かさ</strong><code>Pattern Scale</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0.3 → 8</span></span></div><p class="desc">模様の細かさ（模様の濃さ 0.8 の場合）。</p><img loading="lazy" src="../assets/img/spec/mte_pattern_scale.webp" alt="模様の細かさを0.3、1、2、4、8に変えた比較"><div class="ms-vals" style="--n:5"><span>0.3</span><span class="def">1</span><span>2</span><span>4</span><span>8</span></div></div>

### 黒目の輪郭線 <span class="en">Iris Outline</span>

<div class="ms-prop" id="mte-iris-outline-ink-width"><div class="ph"><strong>輪郭線の太さ</strong><code>Ink Width</code><span class="chips"><span class="chip p">既定 0.08</span><span class="chip">比較 0 → 0.3</span></span></div><p class="desc">虹彩を囲むインクの線（オンの場合）。</p><img loading="lazy" src="../assets/img/spec/mte_ink_width.webp" alt="輪郭線の太さを0、0.05、0.1、0.2、0.3に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.05</span><span>0.1</span><span>0.2</span><span>0.3</span></div></div>

### 下の反射 <span class="en">Lower Glow</span>

<div class="ms-prop" id="mte-lower-glow-glow-amount"><div class="ph"><strong>反射の強さ</strong><code>Glow Amount</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">虹彩の下側の明るい反射。</p><img loading="lazy" src="../assets/img/spec/mte_glow.webp" alt="反射の強さを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-lower-glow-glow-offset"><div class="ph"><strong>反射の位置（下へ）</strong><code>Glow Offset</code><span class="chips"><span class="chip p">既定 0.45</span><span class="chip">比較 -1 → 1</span></span></div><p class="desc">反射の位置。マイナスで上に移ります。</p><img loading="lazy" src="../assets/img/spec/mte_glow_offset.webp" alt="反射の位置（下へ）を-1、-0.5、0、0.45、1に変えた比較"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span>0</span><span class="def">0.45</span><span>1</span></div></div>

### ライトの陰影 <span class="en">Light Shading</span>

<div class="ms-prop" id="mte-light-shading-shadow-threshold"><div class="ph"><strong>影のしきい値</strong><code>Shadow Threshold</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 4</span></span></div><p class="desc">RGB ライトで目に入る影の量。上げると影が広がり、目が暗くなります。</p><img loading="lazy" src="../assets/img/spec/mte_shadow_threshold.webp" alt="影のしきい値を0、0.5、1、2、4に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.5</span><span class="def">1</span><span>2</span><span>4</span></div></div>

### 白目 <span class="en">Sclera</span>

<div class="ms-prop" id="mte-sclera-sclera-shade"><div class="ph"><strong>陰りの濃さ</strong><code>Sclera Shade</code><span class="chips"><span class="chip p">既定 0.35</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">白目のふちの陰り。</p><img loading="lazy" src="../assets/img/spec/mte_sclera_shade.webp" alt="陰りの濃さを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>
