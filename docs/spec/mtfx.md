# <i class="bi bi-lightning-charge-fill"></i> Manga Toon Effects（エフェクト） <span class="new-label">NEW</span> {data-toc-label="Manga Toon Effects（エフェクト）"}

<figure class="ms-page-hero"><img src="../assets/img/hero/hero_mtfx.webp" alt="Manga Toon Effects を使ったレンダリング"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTFX · Geometry Nodes › MTS FX …</p>

エフェクトは全部で 54 種類あり、どれも<strong>ジオメトリノード</strong>で作られています。数値はオブジェクトのモディファイアに出て、サイドバーの「エフェクト」にもロックとキーフレームのボタン付きで並びます。作りで分けると、次の4つのまとまりになります。

<div class="ms-flow">
<a href="#screen"><span class="n">1</span><b>画面に描く線</b><span>集中線・スピード線・タレ線（3 種）</span></a>
<a href="#manga"><span class="n">2</span><b>漫画の線画</b><span>効果線・漫符・描き文字（21 種）</span></a>
<a href="#vfx"><span class="n">3</span><b>ゲーム風 VFX</b><span>攻撃・スキル・環境・警告（25 種）</span></a>
<a href="#ink"><span class="n">4</span><b>墨・筆</b><span>筆跡・しぶき・たれ・にじみ（5 種）</span></a>
</div>

!!! note ""
    サイドバーの種類（効果線・漫符・攻撃・属性…）は「探しやすさ」の分け方、このページのまとまりは「作り」の分け方です。各まとまりの概要図は、代表の1つを例にしています。

## <i class="bi bi-bullseye"></i> 画面に描く線 <span class="en">Screen lines</span> {#screen}

カメラの子になり、<strong>画面に対して</strong>描きます。カメラを動かしても画面の同じ位置に残り、焦点距離を変えても線の太さは画面上で変わりません。

<div class="ms-stack" id="stack-fx-screen"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_focus_lines.webp" alt="">集中線</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_speed_lines.webp" alt="">スピード線</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_gloom_lines.webp" alt="">タレ線</div>
</div>

??? info "主な項目（集中線）"

    | 項目 | 英語名 | 内容 |
    |---|---|---|
    | 本数 | `Count` | 線の本数 |
    | 線の太さ | `Line Width` | 線の太さ（1 = 画面の高さ） |
    | 太さのばらつき | `Width Random` | 線ごとの太さの違い |
    | 入り抜き | `Taper` | 内側の端を細く |
    | 色 | `Color` | 線の色 |
    | 空白の半径 | `Blank Radius` | 中心の線を描かない範囲 |
    | 長さのばらつき | `Length Random` | 線の内側の端のばらつき |
    | 間隔のばらつき | `Angle Random` | 線の間隔のばらつき |
    | 中心 X ／ 中心 Y | `Center X / Y` | 線が集まる位置（画面の 0〜1） |
    | 奥行き | `Depth` | カメラからの距離（前後の重なり） |
    | シード | `Seed` | ばらつきの模様を変える |
    | ボイル間隔（フレーム） | `Boil Interval` | N フレームごとに描き直す（0 = オフ） |

## <i class="bi bi-heart-fill"></i> 漫画の線画 <span class="en">Manga line art</span> {#manga}

効果線・漫符・描き文字は、白黒の線画（マテリアル MTS FX Ink）です。<strong>空間に置き</strong>、いつもカメラの方を向きます。線やフチの太さは画面の高さに対する割合なので、カメラから離れても同じ太さに見えます。

<div class="ms-stack" id="stack-fx-manga"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_impact_burst.webp" alt="">ウニフラ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_beta_flash.webp" alt="">ベタフラッシュ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_notice_lines.webp" alt="">気付き線</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_shock_lines.webp" alt="">衝撃線</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_tremble_lines.webp" alt="">震え線</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_swoosh_lines.webp" alt="">動きの線</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_magic_circle.webp" alt="">魔法陣</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_sparkles.webp" alt="">キラキラ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_blush_lines.webp" alt="">照れ線</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_anger_mark.webp" alt="">怒りマーク</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_sweat_drops.webp" alt="">汗</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_steam_puffs.webp" alt="">湯気（プンスカ）</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_scribble.webp" alt="">モジャモジャ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_manga_aura.webp" alt="">オーラ（メラメラ）</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_sfx_text.webp" alt="">描き文字</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_exclaim.webp" alt="">！</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_question.webp" alt="">？</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_interrobang.webp" alt="">！？</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_music_notes.webp" alt="">音符</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_heart.webp" alt="">ハート</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_zzz.webp" alt="">Zzz</div>
</div>

!!! bubble "描き文字だけはテキストオブジェクト"
    描き文字は Blender のテキストオブジェクトとして入り、ジオメトリーノード（MTS FX Manga Text Warp）でワープを掛けます。カメラの方を向く設定はなく、向きは**ふつうのオブジェクトの回転**で決めます。使い方は [機能ガイド › 描き文字](../guide/bgfx.md#sfx-text) にあります。

??? info "主な項目（共通）"

    | 項目 | 英語名 | 内容 |
    |---|---|---|
    | 線の太さ | `Line Width` | 線の太さ（1 = 画面の高さ） |
    | 色 | `Color` | 線の色 |
    | 中の色 | `Fill Color` | 塗りの色（塗りのある漫符） |
    | フチの太さ ／ フチの色 | `Edge Width / Color` | 塗りのまわりのフチ |
    | カメラの方を向く | `Face Camera` | オフ = オブジェクトの向きのまま |
    | 大きさ | `（拡大縮小）` | オブジェクトの拡大縮小で決まる |

## <i class="bi bi-stars"></i> ゲーム風 VFX <span class="en">Game-style VFX</span> {#vfx}

Unity や Unreal Engine のパーティクルと同じ考え方で、1つのエフェクトを<strong>いくつかの層</strong>（閃光・火花・リング・煙…）の重ね合わせで作ります。層はカメラを向く板の群れか、リング・弧・柱などのメッシュです。時間は「進み具合」スライダー（0〜1）で、予兆 → 発生 → ピーク → 余韻 → 消える、と進みます。キーフレームを打てばアニメーションになります。

<div class="ms-stack" id="stack-fx-vfx"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_hit_spark.webp" alt="">ヒットスパーク</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_slash.webp" alt="">斬撃</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_lightning.webp" alt="">稲妻</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_explosion.webp" alt="">爆発</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_shockwave.webp" alt="">衝撃波リング</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_fire.webp" alt="">炎</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_ice.webp" alt="">氷の結晶</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_electric.webp" alt="">電撃の玉</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_poison.webp" alt="">毒</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_dark.webp" alt="">闇の渦</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_holy.webp" alt="">聖なる光</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_charge.webp" alt="">チャージ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_aura.webp" alt="">オーラ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_heal.webp" alt="">回復</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_barrier.webp" alt="">バリア</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_beam.webp" alt="">ビーム</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_smoke.webp" alt="">煙・土煙</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_dust.webp" alt="">着地の土煙</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_debris.webp" alt="">破片</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_crack.webp" alt="">地割れ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_muzzle.webp" alt="">マズルフラッシュ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_splash.webp" alt="">水しぶき</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_warn_circle.webp" alt="">範囲予告（円）</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_warn_fan.webp" alt="">範囲予告（扇）</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_pillar.webp" alt="">光の柱</div>
</div>

??? info "主な項目（共通）"

    | 項目 | 英語名 | 内容 |
    |---|---|---|
    | 進み具合 | `Effect Progress` | 0 = 始まり、真ん中でピーク、1 = 消える |
    | 大きさ | `Size` | エフェクト全体の大きさ |
    | 色 ／ 2番目の色 | `Color / Secondary Color` | 光・火花の色 ／ 煙・破片・影の部分の色 |
    | 明るさ | `Intensity` | 光る部分の明るさ |
    | 加算の光 | `Additive Glow` | 1 = 光を足す、0 = ふつうの半透明 |
    | シード | `Seed` | ばらつきの模様を変える |
    | コントラスト ／ 明るさ | `Contrast / Brightness` | 色の白黒の強さと明るさ |
    | 輪郭の硬さ | `Hardness` | 高いほど漫画のようなくっきりした形 |
    | ドロップシャドウ | `Drop Shadow` | 明るい背景でも見えるように、後ろに暗い影 |
    | 影の色・濃さ・ずれ・広がり | `Shadow Color / Opacity / Offset / Spread` | ドロップシャドウの見た目 |
    | 外側の光彩 | `Outer Glow` | オン = ずらさずに周りを光らせる |
    続くエフェクト（炎・オーラ・バリアなど）は、進み具合 0 → 1 で何回かくり返します。

## <i class="bi bi-brush-fill"></i> 墨・筆 <span class="en">Ink &amp; brush</span> {#ink}

墨は光りません（加算なしのふつうの半透明）。色の初期値は黒で、描き終わっても紙に残るので消えません。筆の形はシェーダーで作り、ふちのがさつき・毛の筋・かすれ（筆の終わりほど強い）が出ます。

<div class="ms-stack" id="stack-fx-ink"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_ink_brush.webp" alt="">筆跡</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_ink_splatter.webp" alt="">墨しぶき</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_ink_drips.webp" alt="">墨のたれ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_ink_wash.webp" alt="">墨のにじみ</div>
<div class="ms-tile"><img loading="lazy" src="../assets/img/fx/fx_ink_radial.webp" alt="">筆の放射線</div>
</div>

??? info "主な項目（筆跡）"

    | 項目 | 英語名 | 内容 |
    |---|---|---|
    | 進み具合 | `Effect Progress` | 筆が走る途中（0 → 1） |
    | 墨の色 ／ 墨の不透明度 | `Ink Color / Ink Opacity` | 墨の色と濃さ |
    | カメラの方を向く | `Face Camera` | オフ = オブジェクトの向き |
    | 筆跡の形 | `Stroke Shape` | 0 = S 字、1 = 円相、2 = 直線 |
    | 長さ | `Length` | ストロークの長さ |
    | 筆の太さ | `Brush Width` | 筆の太さ |
    | 入り ／ 抜き | `Taper In / Out` | 太くなるまでの長さ ／ 細く抜けていく長さ |
    | かすれ | `Dry Brush` | かすれ（筆の終わりほど強い） |
    | 手ぶれ | `Wobble` | 手の揺れ |
    | しぶき | `Splatter` | 筆から飛ぶ小さな墨の粒 |
    | 回転 | `Rotation` | ストロークの向き |
    | パスで描く | `Use Stroke Path` | 編集できるパス（ベジェカーブ）に沿って描く |
