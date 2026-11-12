# <i class="bi bi-cloud-sun-fill"></i> Manga Toon Backgrounds（空） <span class="new-label">NEW</span> {data-toc-label="Manga Toon Backgrounds（空）"}

<figure class="ms-page-hero"><img src="../assets/img/hero/hero_mtb.webp" alt="Manga Toon Backgrounds を使ったレンダリング"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTB · World › Manga BG Sky › MTS BG Sky</p>

背景はすべて<strong>ワールド</strong>として入ります。ワールドのシェーダーは「カメラに映るときだけ背景の色、照明としては黒」になっているので、背景を変えてもキャラクターの陰影は変わりません。ここでは背景プリセット「空」の主な数値を並べています。

## <i class="bi bi-layers-fill"></i> 概要図 <span class="en">Layer stack</span>

空の色の上に、遠いものから順に重ねます。

<div class="ms-stack" id="stack-mtb"></div>

## <i class="bi bi-diagram-2-fill"></i> 構成 <span class="en">Node tree</span>

<div class="ms-graph"><div class="flow"><div class="col"><div class="ms-node"><div class="hd h-math">ドライバー（自動）</div><div class="bd">カメラの右・上・後ろ・ズーム<i>レンズフレア用</i></div></div><div class="ms-node"><div class="hd h-math">ドライバー（自動）</div><div class="bd">縦横比<i>レンダー解像度から</i></div></div></div><div class="wire"></div><div class="ms-node big sel"><div class="hd h-world">MTS BG Sky</div><div class="bd">空・雲・星・月・光の効果<i>画風 0 = 漫画（白黒・トーン・線）</i><i>画風 1 = アニメ（色・やわらかい陰影）</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-math">ライトパス</div><div class="bd">カメラレイなら背景色<i>それ以外は黒</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">ワールド出力</div><div class="bd">サーフェス</div></div></div></div>


!!! note ""
    エフェクト（集中線・爆発など）と吹き出しはジオメトリノードで作られ、値はオブジェクトのモディファイアに出ます。種類ごとの見た目はガイドの「エフェクト」一覧をご覧ください。

## <i class="bi bi-sliders2"></i> パネルと数値 <span class="en">Inputs</span>

5つの球（目・口・空）は、**左から右へ値を変えたもの**です。画像の下に値を書いています。黄色い欄がその項目の既定値で、ほかの項目は既定値のままです。

??? info "MTS BG Sky の項目一覧"

    | パネル | 項目 | 英語名 | 既定値 |
    |---|---|---|---|
    | 空 | [画風](#mtb-sky-art-style) | `Art Style` | 1 |
    | 空 | [時間帯](#mtb-sky-time-of-day) | `Time of Day` | 0.45 |
    | 雲 | [大きな雲](#mtb-clouds-big-clouds) | `Big Clouds` | 0.5 |
    | 漫画調の設定 | [空のトーン](#mtb-manga-style-sky-tone) | `Sky Tone` | 0.3 |

### 空 <span class="en">Sky</span>

<div class="ms-prop" id="mtb-sky-art-style"><div class="ph"><strong>画風</strong><code>Art Style</code><span class="chips"><span class="chip p">既定 1</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">0 = 漫画（白黒・トーン・雲の輪郭線）、1 = アニメ（色・やわらかい陰影）。画像は空の彩度 1 の場合。</p><img loading="lazy" src="../assets/img/spec/bg_art_style.webp" alt="画風を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mtb-sky-time-of-day"><div class="ph"><strong>時間帯</strong><code>Time of Day</code><span class="chips"><span class="chip p">既定 0.45</span><span class="chip">比較 0.05 → 0.85</span></span></div><p class="desc">夜 → 朝焼け → 昼 → 夕方 → 夜。太陽の色も時間帯で変わります。</p><img loading="lazy" src="../assets/img/spec/bg_time.webp" alt="時間帯を0.05、0.25、0.45、0.7、0.85に変えた比較"><div class="ms-vals" style="--n:5"><span>0.05</span><span>0.25</span><span class="def">0.45</span><span>0.7</span><span>0.85</span></div></div>

### 雲 <span class="en">Clouds</span>

<div class="ms-prop" id="mtb-clouds-big-clouds"><div class="ph"><strong>大きな雲</strong><code>Big Clouds</code><span class="chips"><span class="chip p">既定 0.5</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">大きな雲の量。</p><img loading="lazy" src="../assets/img/spec/bg_clouds.webp" alt="大きな雲を0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

### 漫画調の設定 <span class="en">Manga Style</span>

<div class="ms-prop" id="mtb-manga-style-sky-tone"><div class="ph"><strong>空のトーン</strong><code>Sky Tone</code><span class="chips"><span class="chip p">既定 0.3</span><span class="chip">比較 0 → 1</span></span></div><p class="desc">画風 0 のとき、空に貼るトーンの濃さ。</p><img loading="lazy" src="../assets/img/spec/bg_manga_tone.webp" alt="空のトーンを0、0.25、0.5、0.75、1に変えた比較"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>
