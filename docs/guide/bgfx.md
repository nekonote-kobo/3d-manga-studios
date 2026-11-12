# <i class="bi bi-stars"></i> 背景・エフェクト：コマを仕上げる <span class="new-label">NEW</span> {data-toc-label="背景・エフェクト：コマを仕上げる"}

描き込まない背景、影を落とす地面、効果線、漫符、ゲーム風の VFX、墨と筆、空と雲、吹き出し。サムネイルから選んで置き、数値はロックとキーフレームのボタン付きでその場に出ます。

## <i class="bi bi-image-fill"></i> 背景 <span class="en">Background · Manga Toon Backgrounds (MTB)</span>

背景はすべてワールドとして入ります。物体ではないので、影を落としたり、選択や輪郭線の邪魔になったりしません。**カメラに映るときだけ背景の色、照明としては黒**なので、背景を変えてもキャラクターの陰影は変わりません。

<div class="ms-tiles ms-shot-tiles">
<div class="ms-tile"><img src="../assets/img/shots/bg_white.webp" alt="白" loading="lazy">白</div>
<div class="ms-tile"><img src="../assets/img/shots/bg_black.webp" alt="ベタ" loading="lazy">ベタ</div>
<div class="ms-tile"><img src="../assets/img/shots/bg_tone.webp" alt="トーン模様" loading="lazy">トーン模様</div>
<div class="ms-tile"><img src="../assets/img/shots/bg_sky_day.webp" alt="空（朝）" loading="lazy">空（朝）</div>
<div class="ms-tile"><img src="../assets/img/shots/bg_sky_sunset.webp" alt="空（夕方）" loading="lazy">空（夕方）</div>
<div class="ms-tile"><img src="../assets/img/shots/bg_sky_night.webp" alt="空（夜）" loading="lazy">空（夜）</div>
</div>

同じ球・地面・カメラのまま、背景だけを切り替えて撮っています。地面と球の陰影は変わりません。

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![背景のパネル](../assets/img/ui/panel_bg.webp)
<figcaption>背景・エフェクト › 背景</figcaption>
</figure>
<div markdown>
トーン模様はアミトーン・カケアミなど 10 種から選び、上下・左右・放射状のグラデを付けられます。トーン素材のマテリアルを「トーンのマテリアル」欄へドラッグ＆ドロップしても切り替わります。

空の数値を変えたときの見た目は [マテリアル仕様 › Manga Toon Backgrounds](../spec/mtb.md) にあります。
</div>
</div>

## <i class="bi bi-grid-3x3"></i> 地面 <span class="en">Ground · Manga Toon Ground (MTG)</span> <span class="new-label">NEW</span> {data-toc-label="地面 Ground · Manga Toon Ground (MTG)"}

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![地面のパネル](../assets/img/ui/panel_ground.webp)
<figcaption>背景・エフェクト › 地面</figcaption>
</figure>
<div markdown>
<img src="../assets/img/spec/mtg_hero.webp" alt="Manga Toon Ground の地面に落ちたキーライトの影" style="border:3px solid var(--ms-ink)">

キャラクターの下に地面を敷き、ライトの影を**漫画の平らな影**で描きます。「地面を追加」で大きな地面（一辺 200 m）が入り、「選んだものに使う」で自分の床のメッシュにも同じマテリアルを使えます。地面のマテリアルはシーンに1つです。

- **影を落とすライト**：キー・フィル・バックをボタンでオン・オフ。重なった所ほど濃い影に
- **影の色・濃さ・ぼかし**：影の色にはトーンのマテリアルも入れられる。ぼかしは地面の影だけに効く
- **影だけ（地面を透明に）**：地面を消して、影だけを背景に掛け合わせる
- **テクスチャ・凹凸**：画像を上から見て並べて貼る。ノーマルマップで凹凸の陰と照り
- **接地の陰（AO）**：物の近くや接地しているところを暗く。くっきりさで漫画の接地影に
- **端を消す**：円形／辺に沿って地面を消し、背景になじませる
</div>
</div>

!!! bubble "影はライトグループから"
    影はライトグループの3灯から描きます。グループごとに「地面の影用ライト」が3つ付き、地面だけを照らします。ライトを動かしたあとに影がずれたら、↻（影用ライトをつなぎ直す）を押してください。

細かな設定はプロパティエディターのマテリアルタブ「Manga Toon Ground」に出ます。数値を変えたときの見た目は [マテリアル仕様 › Manga Toon Ground](../spec/mtg.md) にあります。

## <i class="bi bi-lightning-charge-fill"></i> エフェクト <span class="en">Effects · Manga Toon Effects (MTFX)</span>

種類で絞り込んで、サムネイルから追加します。画面に対して置くもの（集中線など）はカメラに追従して画面いっぱいに、空間に置くもの（爆発など）は 3D カーソルの位置に入ります。時間は「進み具合」スライダー 0〜1 で決まり、キーフレームを打てばアニメーションになります。

<div class="ms-chips" id="fxChips" role="group" aria-label="エフェクトの種類"></div>
<div class="ms-tiles" id="fxGrid" data-base="../"></div>

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![エフェクトのパネル](../assets/img/ui/panel_fx.webp)
<figcaption>背景・エフェクト › エフェクト</figcaption>
</figure>
<div markdown>
!!! bubble "パスで描く"
    筆跡は「パスで描く」でベジェカーブを作り、点を動かして自由な筆の軌跡にできます。「手描きで描く」でマウスから直接引くこともできます。

- 作りの違い（画面に描く線・漫画の線画・ゲーム風 VFX・墨と筆）と主な項目は [マテリアル仕様 › Manga Toon Effects](../spec/mtfx.md) にあります
- エフェクトは前景・背景の一覧で、選択・入れ替え・表示の切り替え・削除ができます。一覧の行を選ぶと、そのオブジェクトも選択されます
- 線・フチ・光などの**色**は、サイドバーの設定にまとめて出ます
- 画面に対して置くエフェクトと吹き出しは、カメラを替えたあと「シーンのカメラに合わせる」で今のシーンのカメラに付け直せます
- 「カメラの前に平面で置く」で、画面と平行に手前へ置けます
- 平面的なエフェクトは、常にカメラの方を向く設定を選べます
</div>
</div>

## <i class="bi bi-cloud-fill"></i> 空と雲 <span class="en">Sky · Clouds</span> <span class="new-label">NEW</span> {data-toc-label="空と雲 Sky · Clouds"}

空のワールドと 3D の雲には**画風スライダー**があります。0 で白黒の漫画（トーン・雲の輪郭線）、1 で色の付いたアニメ調。時刻・太陽の向き、月の満ち欠け、星、薄明光線、日暈、レンズフレアまで入っています。

- 雲は十種雲形＋小さな雲のプリセット
- どの雲も**メッシュ（コミカル）とボリューム（リアル）を雲ごとに切り替えられる**。手前はメッシュ、奥はボリュームのように混ぜられる
- 雲の一覧の下の「すべての雲」の「メッシュ」「ボリューム」で、シーンの雲をまとめてそろえられる
- 「メッシュから雲」で好きな形の雲を作れる
- リアルな雲（ボリューム）は「リアルな雲の準備」で太陽と EEVEE の設定を自動で整える
- 「雲用の太陽を追加」で、リアルな雲だけを照らす白い太陽を足せる（キャラクターの陰影は変わらない）

<div class="ms-tiles ms-shot-tiles ms-cloud-tiles">
<div class="ms-tile"><img src="../assets/img/shots/cloud_cumulus.webp" alt="積雲" loading="lazy">積雲</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_cumulonimbus.webp" alt="入道雲" loading="lazy">入道雲</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_stratocumulus.webp" alt="層積雲" loading="lazy">層積雲</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_stratus.webp" alt="層雲" loading="lazy">層雲</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_nimbostratus.webp" alt="乱層雲" loading="lazy">乱層雲</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_altocumulus.webp" alt="高積雲（ひつじ雲）" loading="lazy">高積雲（ひつじ雲）</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_altostratus.webp" alt="高層雲" loading="lazy">高層雲</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_cirrocumulus.webp" alt="巻積雲（うろこ雲）" loading="lazy">巻積雲（うろこ雲）</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_cirrostratus.webp" alt="巻層雲" loading="lazy">巻層雲</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_cirrus.webp" alt="巻雲（すじ雲）" loading="lazy">巻雲（すじ雲）</div>
<div class="ms-tile"><img src="../assets/img/shots/cloud_small.webp" alt="小さな雲" loading="lazy">小さな雲</div>
</div>

各プリセットの雲をそのまま置き、少し下から見上げて雲だけを撮っています（背景は透明。タイルの地の色は見やすさのため）。

#### メッシュとボリューム <span class="en">Mesh · Volume</span>

<div class="ms-tiles ms-shot-tiles ms-cloud-tiles" style="grid-template-columns:repeat(4,minmax(0,1fr))">
<div class="ms-tile"><img src="../assets/img/shots/cmp_cumulus_mesh.webp" alt="積雲・メッシュ" loading="lazy">積雲・メッシュ</div>
<div class="ms-tile"><img src="../assets/img/shots/cmp_cumulus_volume.webp" alt="積雲・ボリューム" loading="lazy">積雲・ボリューム</div>
<div class="ms-tile"><img src="../assets/img/shots/cmp_cumulonimbus_mesh.webp" alt="入道雲・メッシュ" loading="lazy">入道雲・メッシュ</div>
<div class="ms-tile"><img src="../assets/img/shots/cmp_cumulonimbus_volume.webp" alt="入道雲・ボリューム" loading="lazy">入道雲・ボリューム</div>
</div>

同じ雲を、選んだ雲の設定のいちばん上にある「メッシュ／ボリューム」で切り替えて撮っています。ボリュームは「リアルな雲の準備」で太陽を足した状態です。

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![雲を選んだときの設定](../assets/img/ui/panel_cloud.webp)
<figcaption>背景・エフェクト › エフェクト（雲を選んだとき）</figcaption>
</figure>
<div markdown>
| 場所 | 項目 | 内容 |
|---|---|---|
| 一覧の下 | すべての雲 › メッシュ／ボリューム | シーンの雲をまとめてそろえる |
| 選んだ雲の設定のいちばん上 | メッシュ／ボリューム | その雲だけを切り替える |

ボリュームに切り替えたとき、シーンに太陽が無ければ「雲用の太陽」が自動で入ります。
</div>
</div>

## <i class="bi bi-chat-fill"></i> 吹き出し <span class="en">Speech Balloons · Manga Toon Speech Bubbles</span> <span class="new-label">NEW</span> {data-toc-label="吹き出し Speech Balloons · Manga Toon Speech Bubbles"}

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![吹き出しのパネル](../assets/img/ui/panel_balloon.webp)
<figcaption>背景・エフェクト › 吹き出し</figcaption>
</figure>
<div markdown>
<div class="ms-tiles" style="grid-template-columns:repeat(4,minmax(0,1fr));margin-top:0">
<div class="ms-tile"><img src="../assets/img/fx/balloon_speech.webp" alt="">通常</div>
<div class="ms-tile"><img src="../assets/img/fx/balloon_shout.webp" alt="">叫び</div>
<div class="ms-tile"><img src="../assets/img/fx/balloon_thought.webp" alt="">思考</div>
<div class="ms-tile"><img src="../assets/img/fx/balloon_narration.webp" alt="">ナレーション</div>
</div>

- 線は実線・点線（ささやき）・震え線（恐怖・弱い声）
- しっぽは先の位置・太さ・曲がり・ギザギザ（電話の声）。「しっぽのパス」で自由な形に
- 位置と大きさは画面基準。焦点距離を変えても画面上で同じ
- 「吹き出しを反転」で左右・上下を入れ替えられる
- セリフの文字はデザインアプリで入れる前提の「形」です

吹き出しの層の作りと項目は [マテリアル仕様 › Manga Toon Speech Bubbles](../spec/mtsb.md) にあります。
</div>
</div>

## <i class="bi bi-fonts"></i> 描き文字 <span class="en">SFX Text · Warp · Kerning</span> <span class="new-label">NEW</span> {#sfx-text data-toc-label="描き文字 SFX Text · Warp · Kerning"}

<div class="ms-grid2" markdown>
<div markdown>
<div class="ms-tiles" style="grid-template-columns:repeat(4,minmax(0,1fr));margin-top:0">
<div class="ms-tile light"><img src="../assets/img/warp/warp_none.png" alt="">なし</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_arc.png" alt="">円弧</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_arc_lower.png" alt="">下弦</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_arc_upper.png" alt="">上弦</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_arch.png" alt="">アーチ</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_bulge.png" alt="">でこぼこ</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_shell_lower.png" alt="">貝殻（下向き）</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_shell_upper.png" alt="">貝殻（上向き）</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_flag.png" alt="">旗</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_wave.png" alt="">波形</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_fish.png" alt="">魚形</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_rise.png" alt="">上昇</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_fisheye.png" alt="">魚眼レンズ</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_inflate.png" alt="">膨張</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_squeeze.png" alt="">絞り込み</div>
<div class="ms-tile light"><img src="../assets/img/warp/warp_twist.png" alt="">旋回</div>
</div>
<p style="font-size:.62rem;color:var(--ms-tone)">ワープのスタイル。サイドバーのプルダウンにも同じアイコンが出ます。</p>
</div>
<div markdown>
エフェクトの「描き文字」は **Blender のテキストオブジェクト**として入ります。文字は自由に打て、イラストレーターのワープのように曲げられます。白黒のフチや線の太さは、ほかの漫画の線画と同じです。

- **文字・フォント**：本文、文字の大きさ、字間・語間・行間、斜体（シアー）、揃え。フォントは独立した行のボタンから選び、「似たフォント」で探す・お気に入りに入れる・次のフォントへ送る
- **ワープ**：16 種のスタイルから選び、「カーブ」で曲がりの強さ（マイナスで逆向き）、「水平方向のゆがみ」「垂直方向のゆがみ」でパース風に。「なめらかさ」は小さいほど細かく曲がる
- **カーニング**：文字を選んで Tab で編集モードに入り、カーソルを置いて ++alt+left++ / ++alt+right++ で1文字ずつ詰める・広げる
- **向き**：ふつうのオブジェクトと同じように回転できます
- **カメラに紐づける**：カメラの子にして、カメラを動かしても画面の同じ位置に残す。紐づけたあとも文字は自由に動かせ、「カメラから外す」で元に戻る
- 前のバージョンで作った描き文字には「テキストオブジェクトに変換（カーニング・ワープ）」ボタンが出ます。文字・フォント・位置・キーフレームを引き継いで置き換えます
</div>
</div>
