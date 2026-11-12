# <i class="bi bi-circle-half"></i> Manga Tone Shader

<figure class="ms-page-hero"><img src="../assets/img/hero/hero_mts.webp" alt="Manga Tone Shader を使ったレンダリング"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTS · Material › Manga Tone Shader (Lite: …)</p>

ライトの<strong>色の成分</strong>を読み分けて、キー（赤）・フィル（緑）・バック（青）の当たり方ごとに別のトーンを塗るシェーダーです。機能のチェックを入れると、その機能だけを含む軽量版のグループに自動で差し替わります。

## <i class="bi bi-layers-fill"></i> 概要図 <span class="en">Layer stack</span>

下から順に重なって、1つの塗りになります。右上の札が重ね方（合成）です。

<div class="ms-stack" id="stack-mts"></div>

## <i class="bi bi-diagram-2-fill"></i> 構成 <span class="en">Node tree</span>

<div class="ms-graph"><div class="flow"><div class="col"><div class="ms-node"><div class="hd h-tex">画像テクスチャ</div><div class="bd">マットのトーン<i>法線 → ベクトル変換 → マッピング</i></div></div><div class="ms-node"><div class="hd h-tex">画像テクスチャ</div><div class="bd">AO のマスク<i>UV → マッピング</i></div></div><div class="ms-node"><div class="hd h-tex">画像テクスチャ ＋ ノーマルマップ</div><div class="bd">ノーマルマップ</div></div><div class="ms-node"><div class="hd h-tex">画像テクスチャ</div><div class="bd">透過の PNG（アルファ）</div></div></div><div class="wire"></div><div class="ms-node big sel"><div class="hd h-group">Manga Tone Shader (Lite: …)</div><div class="bd">ベース／キー／フィル／バックのトーン<i>法線・影・ハイライト・マット・水彩・透過…</i><i>チェックした機能だけを含む軽量版</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">マテリアル出力</div><div class="bd">サーフェス</div></div></div></div>

<div class="ms-pipe"><div><em>1</em><b>ライトを読む</b><span>Diffuse → Shader to RGB → Separate Color で、赤・緑・青の当たり方を別々に取り出す</span></div><div><em>2</em><b>段に分ける</b><span>3つの値をそれぞれ段階的に区切り（Map Range）、くっきりした明暗にする。オフセットで境目が動く</span></div><div><em>3</em><b>トーンを重ねる</b><span>ベース → キー → フィル → バックの順にトーン（色や模様）を重ねる</span></div><div><em>4</em><b>効果を足す</b><span>影・サブ輪郭線・AO・光沢・リムライト・マットを重ねる</span></div><div><em>5</em><b>仕上げ</b><span>水彩 → 色（色ゆらぎ・紙）→ 出力</span></div></div>


!!! note ""
    ライトはライトリンキングで照らす対象を決めています。キャラクターがライトグループの「照らす対象」に入っていないと、真っ黒になります。

## <i class="bi bi-sliders2"></i> パネルと数値 <span class="en">Inputs</span>

5つの球（目・口・空）は、**左から右へ値を変えたもの**です。画像の下に値を書いています。黄色い欄がその項目の既定値で、ほかの項目は既定値のままです。

??? info "Manga Tone Shader の項目一覧"

    | パネル | 項目 | 英語名 | 既定値 |
    |---|---|---|---|
    | 基本色 | ベーストーン | `Base Tone` | カラー |
    | 基本色 | [キーライト オフセット](#mts-base-key-light-offset) | `Key Light Offset` | 3 |
    | 基本色 | [フィルライト オフセット](#mts-base-fill-light-offset) | `Fill Light Offset` | 3 |
    | 基本色 | [バックライト オフセット](#mts-base-back-light-offset) | `Back Light Offset` | 1 |
    | 影 | [シャドウの不透明度](#mts-shadow-shadow-opacity) | `Shadow Opacity` | 1 |
    | 影 | [明るさ](#mts-shadow-brightness) | `Brightness` | 0.5 |
    | 影 | [コントラスト](#mts-shadow-contrast) | `Contrast` | 1 |
    | サブ輪郭線 | [不透明度](#mts-sub-outline-opacity) | `Opacity` | 0.5 |
    | サブ輪郭線 | [サイズ](#mts-sub-outline-size) | `Size` | 0.5 |
    | サブ輪郭線 | [シャドウサイズ](#mts-sub-outline-shadow-size) | `Shadow Size` | 0.2 |
    | AO | [不透明度](#mts-ao-opacity) | `Opacity` | 1 |
    | AO | [強度](#mts-ao-intensity) | `Intensity` | 1 |
    | 光沢 | [不透明度](#mts-gloss-opacity) | `Opacity` | 0.5 |
    | 光沢 | [明るさ](#mts-gloss-brightness) | `Brightness` | 0.5 |
    | 光沢 | [コントラスト](#mts-gloss-contrast) | `Contrast` | 1 |
    | 光沢 | [広がり具合](#mts-gloss-spread) | `Spread` | 0.1 |
    | 光沢 | [オフセットX](#mts-gloss-offset-x) | `Offset X` | 0 |
    | 光沢 | [オフセットZ](#mts-gloss-offset-z) | `Offset Z` | 0 |
    | 異方性 | [不透明度](#mts-anisotropy-opacity) | `Opacity` | 0.5 |
    | リムライト | [不透明度](#mts-rim-light-opacity) | `Opacity` | 0.5 |
    | リムライト | [コントラスト](#mts-rim-light-contrast) | `Contrast` | 1 |
    | リムライト | [幅](#mts-rim-light-width) | `Width` | 0.014 |
    | リムライト | [オフセットX](#mts-rim-light-offset-x) | `Offset X` | 0 |
    | リムライト | [オフセットZ](#mts-rim-light-offset-z) | `Offset Z` | 0 |
    | マット | [不透明度](#mts-matte-opacity) | `Opacity` | 1 |
    | マット | [明るさ](#mts-matte-brightness) | `Brightness` | 0.1 |
    | マット | [コントラストA](#mts-matte-contrast-a) | `Contrast A` | 0.5 |
    | マット | [コントラストB](#mts-matte-contrast-b) | `Contrast B` | 0.5 |
    | 筆のタッチ | [タッチの強さ](#mts-brush-strokes-stroke-strength) | `Stroke Strength` | 0.3 |
    | 筆のタッチ | [タッチの細かさ](#mts-brush-strokes-stroke-scale) | `Stroke Scale` | 3 |
    | 筆のタッチ | [タッチの伸び](#mts-brush-strokes-stroke-stretch) | `Stroke Stretch` | 4 |
    | 筆のタッチ | [タッチの角度](#mts-brush-strokes-stroke-angle) | `Stroke Angle` | 35 |
    | 筆のタッチ | [タッチの縁](#mts-brush-strokes-stroke-edge) | `Stroke Edge` | 0.5 |
    | 色（色ゆらぎ・紙） | [色ゆらぎ](#mts-paint-finish-color-variation) | `Color Variation` | 0.057 |
    | 色（色ゆらぎ・紙） | [明るさのゆらぎ](#mts-paint-finish-value-variation) | `Value Variation` | 0 |
    | 色（色ゆらぎ・紙） | [紙](#mts-paint-finish-paper) | `Paper` | 0.812 |
    | 水彩 | [にじみ](#mts-watercolor-bleed) | `Bleed` | 0.5 |
    | 水彩 | [にじみの細かさ](#mts-watercolor-bleed-scale) | `Bleed Scale` | 12 |
    | 水彩 | [縁のたまり](#mts-watercolor-edge-darkening) | `Edge Darkening` | 0.5 |
    | 水彩 | [粒状感](#mts-watercolor-granulation) | `Granulation` | 0.3 |
    | 水彩 | [淡さ](#mts-watercolor-wash) | `Wash` | 0.15 |
    | 透過 | [アルファクリップ](#mts-transparency-alpha-clip) | `Alpha Clip` | 0.5 |

### 基本色 <span class="en">Base</span>

<div class="ms-prop" id="mts-base-base-tone"><div class="ph"><strong>ベーストーン</strong><code>Base Tone</code><span class="chips"><span class="chip">カラー</span><span class="chip">トーンのマテリアル</span></span></div><p class="desc">どのライトも当たらない部分（球の下側）の色、または模様。色の欄の下に付属のトーン素材（<a href="flat.md">Manga Tone Flat</a>／<a href="shaded.md">Manga Tone Shaded</a>）のマテリアルをドロップすると、その模様になります。</p><p class="desc"><b><a href="flat.md">Manga Tone Flat</a></b>（平らなトーン）：模様がそのまま一面に入ります。</p><img loading="lazy" src="../assets/img/spec/mts_base_tone_flat.webp" alt="ベーストーンを単色、アミトーン、砂目トーン、万線トーン、カケアミトーンAにした比較"><div class="ms-vals" style="--n:5"><span class="def">単色</span><span>アミ</span><span>砂目</span><span>万線</span><span>カケアミA</span></div><p class="desc" style="margin-top:.8rem"><b><a href="shaded.md">Manga Tone Shaded</a></b>（陰影付きのトーン）：ライトの当たり方で模様の濃さが変わり、明るい側ほど薄く、暗い側ほど濃くなります。</p><img loading="lazy" src="../assets/img/spec/mts_base_tone_shaded.webp" alt="ベーストーンにアミトーン、砂目トーン、万線トーン、カケアミトーンA、鉛筆風重ねカケアミトーンの陰影付きを入れた比較"><div class="ms-vals" style="--n:5"><span>アミ（陰影）</span><span>砂目（陰影）</span><span>万線（陰影）</span><span>カケアミA（陰影）</span><span>鉛筆風（陰影）</span></div></div>

<div class="ms-prop hl" id="mts-base-key-light-offset" style="--pc:#d9453f"><div class="ph"><strong>キーライト オフセット</strong><code>Key Light Offset</code><span class="chips"><span class="chip p">既定 3</span><span class="chip">比較 1 → 6.5</span></span></div><p class="desc">キーライト（赤）の当たる範囲の境目。値を上げるほどキーのトーンの面が狭くなり、影側が広がります。画像はキートーンを赤にした場合。</p><img loading="lazy" src="../assets/img/spec/mts_base_key_offset.webp" alt="キーライト オフセットを1、2、3、4.5、6.5に変えた比較"><div class="ms-vals" style="--n:5"><span>1</span><span>2</span><span class="def">3</span><span>4.5</span><span>6.5</span></div></div>

<div class="ms-prop hl" id="mts-base-fill-light-offset" style="--pc:#2f9a52"><div class="ph"><strong>フィルライト オフセット</strong><code>Fill Light Offset</code><span class="chips"><span class="chip p">既定 3</span><span class="chip">比較 1 → 6.5</span></span></div><p class="desc">フィルライト（緑）の面の境目。上げると中間調の面が狭くなり、暗い部分が増えます。画像はフィルトーンを緑にした場合。</p><img loading="lazy" src="../assets/img/spec/mts_base_fill_offset.webp" alt="フィルライト オフセットを1、2、3、4.5、6.5に変えた比較"><div class="ms-vals" style="--n:5"><span>1</span><span>2</span><span class="def">3</span><span>4.5</span><span>6.5</span></div></div>

<div class="ms-prop hl" id="mts-base-back-light-offset" style="--pc:#3b6fd6"><div class="ph"><strong>バックライト オフセット</strong><code>Back Light Offset</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 1 → 6.5</span></span></div><p class="desc">バックライト（青）のリムの幅。上げるほど後ろからの縁が細くなり、6.5 でほぼ消えます。画像はバックトーンを青にした場合。</p><img loading="lazy" src="../assets/img/spec/mts_base_back_offset.webp" alt="バックライト オフセットを1、2、3、4.5、6.5に変えた比較"><div class="ms-vals" style="--n:5"><span class="def">1</span><span>2</span><span>3</span><span>4.5</span><span>6.5</span></div></div>

### 影 <span class="en">Shadow</span>

<div class="ms-prop" id="mts-shadow-shadow-opacity"><div class="ph"><strong>シャドウの不透明度</strong><code>Shadow Opacity</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">ほかのオブジェクトから落ちる影の濃さ。0 で影なし。</p><img loading="lazy" src="../assets/img/spec/mts_shadow_opacity.webp" alt="シャドウの不透明度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-shadow-brightness"><div class="ph"><strong>明るさ</strong><code>Brightness</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">影の範囲を決めるしきい値。上げると影が広がります。コントラストが 1 だと変化がほとんど出ないため、画像はコントラスト 0.3 の場合。</p><img loading="lazy" src="../assets/img/spec/mts_shadow_brightness.webp" alt="明るさを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-shadow-contrast"><div class="ph"><strong>コントラスト</strong><code>Contrast</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">影の境目のくっきり具合。0 で全体が影になり、上げるほど境目がはっきりします。</p><img loading="lazy" src="../assets/img/spec/mts_shadow_contrast.webp" alt="コントラストを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

### サブ輪郭線 <span class="en">Sub Outline</span>

<div class="ms-prop" id="mts-sub-outline-opacity"><div class="ph"><strong>不透明度</strong><code>Opacity</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">輪郭の内側に入る色付きの線（既定は青）の濃さ。</p><img loading="lazy" src="../assets/img/spec/mts_sub_opacity.webp" alt="不透明度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-sub-outline-size"><div class="ph"><strong>サイズ</strong><code>Size</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">サブ輪郭線の太さ。</p><img loading="lazy" src="../assets/img/spec/mts_sub_size.webp" alt="サイズを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-sub-outline-shadow-size"><div class="ph"><strong>シャドウサイズ</strong><code>Shadow Size</code><span class="chips"><span class="chip p">既定 0.2</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">影側に広がる量。上げると影の面全体がサブ輪郭線の色になります。</p><img loading="lazy" src="../assets/img/spec/mts_sub_shadow_size.webp" alt="シャドウサイズを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### AO <span class="en">AO</span>

<div class="ms-prop" id="mts-ao-opacity"><div class="ph"><strong>不透明度</strong><code>Opacity</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">くぼみや奥まった部分（目のまわり・耳の内側・あごの下）に入る暗がりの濃さ。画像はくぼみの多いモデルで、本体が明るい色の場合。</p><img loading="lazy" src="../assets/img/spec/mts_ao_opacity.webp" alt="不透明度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-ao-intensity"><div class="ph"><strong>強度</strong><code>Intensity</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">暗がりが広がる範囲。上げるほどくぼみから外側へ広がります。</p><img loading="lazy" src="../assets/img/spec/mts_ao_intensity.webp" alt="強度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

### 光沢 <span class="en">Gloss</span>

<div class="ms-prop" id="mts-gloss-opacity"><div class="ph"><strong>不透明度</strong><code>Opacity</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">ハイライトの濃さ。</p><img loading="lazy" src="../assets/img/spec/mts_gloss_opacity.webp" alt="不透明度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-gloss-brightness"><div class="ph"><strong>明るさ</strong><code>Brightness</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">ハイライトの出る範囲。1 で面全体が明るくなります。</p><img loading="lazy" src="../assets/img/spec/mts_gloss_brightness.webp" alt="明るさを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-gloss-contrast"><div class="ph"><strong>コントラスト</strong><code>Contrast</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">ハイライトの縁のくっきり具合。下げるとぼやけて全体に広がります。</p><img loading="lazy" src="../assets/img/spec/mts_gloss_contrast.webp" alt="コントラストを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-gloss-spread"><div class="ph"><strong>広がり具合</strong><code>Spread</code><span class="chips"><span class="chip p">既定 0.1</span><span class="chip">比較 0 → 0.8</span></span></div><p class="desc">ハイライト1つ1つの大きさ。</p><img loading="lazy" src="../assets/img/spec/mts_gloss_spread.webp" alt="広がり具合を0、0.1、0.25、0.5、0.8に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span class="def">0.1</span><span>0.25</span><span>0.5</span><span>0.8</span></div></div>

<div class="ms-prop" id="mts-gloss-offset-x"><div class="ph"><strong>オフセットX</strong><code>Offset X</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 -1 → 1</span></span></div><p class="desc">ハイライトの位置を左右にずらします。</p><img loading="lazy" src="../assets/img/spec/mts_gloss_offset_x.webp" alt="オフセットXを-1、-0.5、0、0.5、1に変えた比較"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

<div class="ms-prop" id="mts-gloss-offset-z"><div class="ph"><strong>オフセットZ</strong><code>Offset Z</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 -1 → 1</span></span></div><p class="desc">ハイライトの位置を上下にずらします。</p><img loading="lazy" src="../assets/img/spec/mts_gloss_offset_z.webp" alt="オフセットZを-1、-0.5、0、0.5、1に変えた比較"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

### 異方性 <span class="en">Anisotropy</span>

<div class="ms-prop" id="mts-anisotropy-opacity"><div class="ph"><strong>不透明度</strong><code>Opacity</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">髪の天使の輪のような、筋状のハイライト。UV の縦方向に沿って帯が出て、キーライトの当たる側で光ります。筋の色はトーンの色です（トーンが白の場合）。</p><img loading="lazy" src="../assets/img/spec/mts_aniso_opacity.webp" alt="異方性の不透明度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

!!! bubble "異方性は UV 展開がきれいなメッシュ向け"
    筋の帯は UV 展開の縦方向に沿って出るため、UV 展開の向きが整っていることを前提にしています。髪に使うときは、**「UV球」のプリミティブから形を作る**のがおすすめです。UV球は最初から UV 展開の縦方向がそろっているので、頭の形に沿った天使の輪になります。
    スカルプトやリメッシュで作った髪、自動の UV 展開（スマート UV 投影など）のままの髪では、UV 展開の向きがばらばらになり、帯が途切れたり斜めに走ったりします。

    <div class="ms-prop" id="mts-anisotropy-uv"><div class="ph"><strong>UV 展開の違いによる比較</strong><span class="chips"><span class="chip">同じ形・同じ設定</span></span></div><p class="desc">どちらも UV球から作った同じ形の髪に、同じ異方性の設定を入れています。左は UV 展開を細かく分けて、島ごとにばらばらの向きに回したもの（スマート UV 投影のあとに回転）、右は UV球の UV 展開をそのまま使ったものです。</p><img loading="lazy" src="../assets/img/spec/mts_aniso_uv_compare.webp" alt="スマートUV投影の髪では筋が横に途切れ、UV球のままの髪では筋が縦にそろって天使の輪になる比較"><div class="ms-vals" style="--n:2"><span>UV 展開を細かく分けて向きをばらばらに</span><span>UV球のまま（UV 展開の縦がそろう）</span></div></div>

### リムライト <span class="en">Rim Light</span>

<div class="ms-prop" id="mts-rim-light-opacity"><div class="ph"><strong>不透明度</strong><code>Opacity</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">輪郭に沿った明るい縁の濃さ（幅 0.8 の場合）。</p><img loading="lazy" src="../assets/img/spec/mts_rim_opacity.webp" alt="不透明度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-rim-light-contrast"><div class="ph"><strong>コントラスト</strong><code>Contrast</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 -1 → 1</span></span></div><p class="desc">縁の境目。マイナスにすると縁が内側全体に広がります。</p><img loading="lazy" src="../assets/img/spec/mts_rim_contrast.webp" alt="コントラストを-1、-0.5、0、0.5、1に変えた比較"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span>0</span><span>0.5</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-rim-light-width"><div class="ph"><strong>幅</strong><code>Width</code><span class="chips"><span class="chip p">既定 0.014</span><span class="chip">比較 0 → 0.2</span></span></div><p class="desc">縁の太さ（不透明度 1 の場合）。</p><img loading="lazy" src="../assets/img/spec/mts_rim_width.webp" alt="幅を0、0.02、0.05、0.1、0.2に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.02</span><span>0.05</span><span>0.1</span><span>0.2</span></div></div>

<div class="ms-prop" id="mts-rim-light-offset-x"><div class="ph"><strong>オフセットX</strong><code>Offset X</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 -1 → 1</span></span></div><p class="desc">縁の出る向きを左右にずらします。マイナスで左側、プラスで右側の縁が太くなります（幅 0.2・不透明度 1 の場合）。</p><img loading="lazy" src="../assets/img/spec/mts_rim_offset_x.webp" alt="オフセットXを-1、-0.5、0、0.5、1に変えた比較"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

<div class="ms-prop" id="mts-rim-light-offset-z"><div class="ph"><strong>オフセットZ</strong><code>Offset Z</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 -1 → 1</span></span></div><p class="desc">縁の出る向きを上下にずらします。マイナスで下側の縁が太くなり、-1 では球全体が覆われます。プラスでは下側の縁が細くなり、上側に寄ります（幅 0.2・不透明度 1 の場合）。</p><img loading="lazy" src="../assets/img/spec/mts_rim_offset_z.webp" alt="オフセットZを-1、-0.5、0、0.5、1に変えた比較"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

### マット <span class="en">Matte</span>

<div class="ms-prop" id="mts-matte-opacity"><div class="ph"><strong>不透明度</strong><code>Opacity</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">マットのトーン（質感の層）の濃さ。トーンには、カメラから見た法線で貼るマットキャップ画像をつなぎます（画像は結晶模様のマットキャップの場合。シェーダーは画像の明るさを使うので、色は白黒になります）。</p><img loading="lazy" src="../assets/img/spec/mts_matte_opacity.webp" alt="不透明度を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-matte-brightness"><div class="ph"><strong>明るさ</strong><code>Brightness</code><span class="chips"><span class="chip p">既定 0.1</span><span class="chip">比較 -0.1 → 0.2</span></span></div><p class="desc">マットの層の明るさ。値の 10 倍が明るさとして足されるので、少しの変化で大きく変わります。マイナスで暗く、プラスで白っぽくなります。</p><img loading="lazy" src="../assets/img/spec/mts_matte_brightness.webp" alt="明るさを-0.1、-0.05、0、0.1、0.2に変えた比較"><div class="ms-vals" style="--n:5"><span>-0.1</span><span>-0.05</span><span>0</span><span class="def">0.1</span><span>0.2</span></div></div>

<div class="ms-prop" id="mts-matte-contrast-a"><div class="ph"><strong>コントラストA</strong><code>Contrast A</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">マットキャップ画像のガンマ（べき乗）。上げるほど暗い側が締まり、陰影が濃くなります。</p><img loading="lazy" src="../assets/img/spec/mts_matte_contrast_a.webp" alt="コントラストAを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-matte-contrast-b"><div class="ph"><strong>コントラストB</strong><code>Contrast B</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">マットの層のコントラスト。上げるほど明暗の差がはっきりします。</p><img loading="lazy" src="../assets/img/spec/mts_matte_contrast_b.webp" alt="コントラストBを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

### 筆のタッチ <span class="en">Brush Strokes</span>

<div class="ms-prop" id="mts-brush-strokes-stroke-strength"><div class="ph"><strong>タッチの強さ</strong><code>Stroke Strength</code><span class="chips"><span class="chip p">既定 0.3</span><span class="chip">比較 0 → 2</span></span></div><p class="desc">明暗の境目を筆跡のように揺らす強さ。</p><img loading="lazy" src="../assets/img/spec/mts_stroke_strength.webp" alt="タッチの強さを0、0.5、1、1.5、2に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.5</span><span>1</span><span>1.5</span><span>2</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-scale"><div class="ph"><strong>タッチの細かさ</strong><code>Stroke Scale</code><span class="chips"><span class="chip p">既定 3</span><span class="chip">比較 1 → 8</span></span></div><p class="desc">筆跡の大きさ。上げるほど細かいタッチになります。</p><img loading="lazy" src="../assets/img/spec/mts_stroke_scale.webp" alt="タッチの細かさを1、2、3、5、8に変えた比較"><div class="ms-vals" style="--n:5"><span>1</span><span>2</span><span class="def">3</span><span>5</span><span>8</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-stretch"><div class="ph"><strong>タッチの伸び</strong><code>Stroke Stretch</code><span class="chips"><span class="chip p">既定 4</span><span class="chip">比較 1 → 50</span></span></div><p class="desc">筆跡の縦横比。上げると細長いストロークになります。</p><img loading="lazy" src="../assets/img/spec/mts_stroke_stretch.webp" alt="タッチの伸びを1、4、10、25、50に変えた比較"><div class="ms-vals" style="--n:5"><span>1</span><span class="def">4</span><span>10</span><span>25</span><span>50</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-angle"><div class="ph"><strong>タッチの角度</strong><code>Stroke Angle</code><span class="chips"><span class="chip p">既定 35</span><span class="chip">比較 -90 → 90</span></span></div><p class="desc">ストロークの向き（度）。</p><img loading="lazy" src="../assets/img/spec/mts_stroke_angle.webp" alt="タッチの角度を-90、-45、0、45、90に変えた比較"><div class="ms-vals" style="--n:5"><span>-90</span><span>-45</span><span>0</span><span>45</span><span>90</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-edge"><div class="ph"><strong>タッチの縁</strong><code>Stroke Edge</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">ストロークの縁の硬さ。1 で筆跡が消えて元の境目に戻ります。</p><img loading="lazy" src="../assets/img/spec/mts_stroke_edge.webp" alt="タッチの縁を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

### 色（色ゆらぎ・紙） <span class="en">Paint Finish</span>

<div class="ms-prop" id="mts-paint-finish-color-variation"><div class="ph"><strong>色ゆらぎ</strong><code>Color Variation</code><span class="chips"><span class="chip p">既定 0.057</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">塗りの面ごとに色をばらつかせます。トーンが白黒（グレースケール）のときは、変化はほとんど見えません。</p><img loading="lazy" src="../assets/img/spec/mts_paint_color_var.webp" alt="色ゆらぎを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-paint-finish-value-variation"><div class="ph"><strong>明るさのゆらぎ</strong><code>Value Variation</code><span class="chips"><span class="chip p">既定 0</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">面ごとに明るさをばらつかせます。</p><img loading="lazy" src="../assets/img/spec/mts_paint_value_var.webp" alt="明るさのゆらぎを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span class="def">0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-paint-finish-paper"><div class="ph"><strong>紙</strong><code>Paper</code><span class="chips"><span class="chip p">既定 0.812</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">紙の目（ざらつき）の強さ。画像は明るいトーンで「紙の細かさ 30・紙を画面に固定 0」の場合。</p><img loading="lazy" src="../assets/img/spec/mts_paint_paper.webp" alt="紙を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### 水彩 <span class="en">Watercolor</span>

<div class="ms-prop" id="mts-watercolor-bleed"><div class="ph"><strong>にじみ</strong><code>Bleed</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">明暗の境目のにじみの量。</p><img loading="lazy" src="../assets/img/spec/mts_wc_bleed.webp" alt="にじみを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-watercolor-bleed-scale"><div class="ph"><strong>にじみの細かさ</strong><code>Bleed Scale</code><span class="chips"><span class="chip p">既定 12</span><span class="chip">比較 2 → 80</span></span></div><p class="desc">にじみの模様の大きさ。上げるほど細かくなります。</p><img loading="lazy" src="../assets/img/spec/mts_wc_bleed_scale.webp" alt="にじみの細かさを2、6、12、30、80に変えた比較"><div class="ms-vals" style="--n:5"><span>2</span><span>6</span><span class="def">12</span><span>30</span><span>80</span></div></div>

<div class="ms-prop" id="mts-watercolor-edge-darkening"><div class="ph"><strong>縁のたまり</strong><code>Edge Darkening</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">絵の具が縁にたまって濃くなる量。</p><img loading="lazy" src="../assets/img/spec/mts_wc_edge.webp" alt="縁のたまりを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-watercolor-granulation"><div class="ph"><strong>粒状感</strong><code>Granulation</code><span class="chips"><span class="chip p">既定 0.3</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">顔料の粒のざらつき。</p><img loading="lazy" src="../assets/img/spec/mts_wc_granulation.webp" alt="粒状感を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-watercolor-wash"><div class="ph"><strong>淡さ</strong><code>Wash</code><span class="chips"><span class="chip p">既定 0.15</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">全体を水で薄めたように明るくします。</p><img loading="lazy" src="../assets/img/spec/mts_wc_wash.webp" alt="淡さを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### 透過 <span class="en">Transparency</span>

<div class="ms-prop" id="mts-transparency-alpha-clip"><div class="ph"><strong>アルファクリップ</strong><code>Alpha Clip</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0.1 → 0.9</span></span></div><p class="desc">PNG のアルファがこの値より小さいところを切り抜きます。画像は、平面のポリゴンに中心ほどアルファが濃い星形の PNG を貼った場合。値を上げるほど、薄い部分から削れて形が小さくなります。</p><img loading="lazy" src="../assets/img/spec/mts_alpha_clip.webp" alt="アルファクリップを0.1、0.3、0.5、0.7、0.9に変えた比較"><div class="ms-vals" style="--n:5"><span>0.1</span><span>0.3</span><span class="def">0.5</span><span>0.7</span><span>0.9</span></div></div>
