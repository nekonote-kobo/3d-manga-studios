---
title: 特長
hide:
  - navigation
  - toc
---

<div class="ms-sheet ms-lp-hero" markdown>
<div class="ms-vs" role="img" aria-label="Blender 標準 vs 3D Manga Studios"><span class="ms-vs-a"><i class="bi bi-boxes" aria-hidden="true"></i> Blender 標準<small>手作業でノードを組む</small></span><span class="ms-vs-x" aria-hidden="true">VS</span><span class="ms-vs-b"><img class="ms-noz" src="assets/img/logo%20ink.png" alt=""></span></div>

<h1>43分のノード作業が、<br><em>約11分</em>で終わる。</h1>

網点のトーン、3灯の読み分け、輪郭線、目と口、空と地面、雲、集中線。手でノードを組むと40分以上かかる漫画の仕上げを、3D Manga Studios ならサイドバーのボタンと数値だけで済ませられます。

[インストール手順](getting-started/install.md){ .md-button .md-button--primary } [機能ガイドを見る](guide/index.md){ .md-button }
</div>

## <i class="bi bi-play-btn-fill"></i> 同じ仕上がりまでの作業時間

<figure class="ms-lp-video">
<video class="ms-noz" src="assets/video/compare_demo.mp4" poster="assets/video/compare_demo_poster.jpg" controls playsinline preload="none"></video>
<figcaption>左が手作業（シェーダーを手で組む）、右が 3D Manga Studios です。どちらも60倍速で、数字は実際にかかった時間です。</figcaption>
</figure>

<div class="ms-stats">
<div class="ms-stat-vs"><span class="a"><b>43<small>分</small></b><span>手作業</span></span><i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i><span class="b"><b>11<small>分</small></b><span>3D Manga Studios</span></span></div>
<div><b>約<small> </small>1/4</b><span>作業時間</span></div>
<div class="ms-stat-vs ms-stat-mini" title="手で組むノード（肌の1マテリアル）"><span class="ttl">手で組むノード（肌の1マテリアル）</span><span class="a"><b>約50<small>個</small></b></span><i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i><span class="b"><b>0<small>個</small></b></span></div>
</div>

## <i class="bi bi-diagram-3-fill"></i> 手作業でつまずくところ

動画の手作業側で実際に組んだ内容と、同じことをアドオンで行う操作を並べました。

<div class="ms-cmp" markdown>
<span class="ms-pop" aria-hidden="true"><span class="t"><i style="--i:0">超</i><i style="--i:1">時</i><i style="--i:2">短</i><i style="--i:3">！</i></span><small>クリックだけ</small></span>

| 仕上げ | 手作業でやること | <i class="bi bi-lightning-charge-fill"></i> 3D Manga Studios |
|---|---|---|
| **セットアップにかかる時間（目安）** | **約40分以上**（動画では43分40秒） | **約11分**（動画では11分30秒） |
| 3灯の読み分け | RGB の3灯を置き、シェーダーの RGB 化 → カラー分離 → しきい値をライトごとに組む | ライトグループを追加するだけ |
| 網点・カケアミ | ボロノイや波テクスチャで模様を作り、画面座標と縦横比を合わせ、影・光・くぼみ・光沢・ふちに振り分ける | 「Manga Tone Shader を適用」で付け、トーンはサムネイルから選ぶ |
| 部品ごとの濃さ | マテリアルを複製し、髪・服・顔ごとに点の大きさや線の向きを1つずつ調整 | 数値とプリセットで切り替え |
| 輪郭線 | 部品ごとに Solidify・法線の反転・裏面を消す黒い材質を足す | 線のプリセットを1回適用 |
| 目・口 | UV を円で切り分けて瞳やハイライト、歯や舌を描くシェーダーを自作 | 「奥行きのある目をセットアップ」／「Manga Toon Mouth を適用」 |
| 空・地面 | ワールドをカメラ光線で分けて空の網点を作り、地面に影の網点と線を組む | 背景プリセット「空」と「地面を追加」 |
| 雲・集中線 | メタボールで雲を作ってメッシュ化、極座標とノイズで集中線を作る | サムネイルからエフェクトを追加 |
</div>

## <i class="bi bi-pencil-fill"></i> 手描きの漫画と比べると

紙やペンタブで描く漫画とは、得意なところが違います。3D Manga Studios は「同じキャラを何コマも描く」作業を引き受け、手描きの線の良さは上から足せます。

<div class="ms-cmp" markdown>
<span class="ms-pop" aria-hidden="true"><span class="t"><i style="--i:0">量</i><i style="--i:1">産</i><i style="--i:2">向</i><i style="--i:3">き</i><i style="--i:4">！</i></span><small>アングル自由</small></span>

| 場面 | 手描き | <i class="bi bi-lightning-charge-fill"></i> 3D Manga Studios |
|---|---|---|
| **1コマ仕上げる時間（目安）** | **数十分〜数時間**（絵の密度による） | **数秒〜数分**（2コマ目からはカメラを動かしてレンダリングするだけ） |
| 別アングルのコマ | 角度が変わるたびに下描きから描き直す | カメラを動かして撮り直すだけ |
| キャラの形 | コマごとに顔や服の形がぶれやすい | 同じモデルなので、どのコマでも形がそろう |
| トーン | 貼って、切って、削る | ライトの当たり方から自動で付く。光を動かすと付け直される |
| 背景・パース | パース線を引いて描き込む | 3D の舞台と地面をそのまま使える |
| 修正 | 消して描き直す | 数値やプリセットを変えて再レンダリング |
| 手描きの味 | 線の強弱やデフォルメが自由 | 筆跡・描き文字・効果線を上から足せる。最後に手で描き足してもよい |
</div>

## <i class="bi bi-wallet2"></i> かかるお金も比べると

描き方ごとに、道具にかかるお金の目安を並べました。PC・ペンタブなどの機材は含みません。

<div class="ms-cost">
<div class="ms-cost-card">
<div class="ms-cost-img"><img class="ms-noz" src="https://images.unsplash.com/photo-1643425959020-b48e240d01b4?w=900&q=75&auto=format&fit=crop&crop=entropy&ar=16:9" alt="漫画の原稿とつけペン" loading="lazy"><a class="ms-cost-credit" href="https://unsplash.com/photos/JpHf9wwCTsM" target="_blank" rel="noopener">Photo: Taiki Ishikawa / Unsplash</a></div>
<span class="ms-cost-tag">アナログ</span>
<b class="ms-cost-sum">描くほど増える</b>
<ul>
<li>スクリーントーン 1枚 <b>約600〜700円</b></li>
<li>Gペン（ペン先10本） <b>約1,500円</b></li>
<li>原稿用紙 B5（1冊） <b>約500円</b></li>
<li>ミリペン 1本 <b>約200円</b>　＋墨汁・ホワイトなど</li>
</ul>
<p>トーンとペン先は消耗品なので、ページ数に比例して増えます。</p>
</div>
<div class="ms-cost-card">
<div class="ms-cost-img"><img class="ms-noz" src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=900&q=75&auto=format&fit=crop&ar=16:9" alt="タブレットにペンで描く様子" loading="lazy"><a class="ms-cost-credit" href="https://unsplash.com/photos/Dx1b5ucschA" target="_blank" rel="noopener">Photo: Kelly Sikkema / Unsplash</a></div>
<span class="ms-cost-tag">デジタル（ペイントアプリ）</span>
<b class="ms-cost-sum">毎月・毎年払う</b>
<ul>
<li>月額プラン <b>約500〜1,000円</b></li>
<li>年額プラン <b>約3,000〜8,000円</b></li>
<li>買い切り版 <b>約7,000〜30,000円</b></li>
</ul>
<p>トーンは使い放題ですが、貼る・削る作業はコマごとに手で行います。</p>
</div>
<div class="ms-cost-card hi">
<div class="ms-cost-img logo"><img class="ms-noz" src="assets/img/logo%20ink.png#only-light" alt="3D Manga Studios"><img class="ms-noz" src="assets/img/logo%20positive.png#only-dark" alt="3D Manga Studios"></div>
<span class="ms-cost-tag">3D Manga Studios</span>
<b class="ms-cost-sum">1回買えば終わり</b>
<ul>
<li>Blender <b>無料</b></li>
<li>3D Manga Studios <b>$39</b>（買い切り）</li>
<li>アップデート <b>無料</b></li>
</ul>
<p>トーン・線・背景・効果線は何コマ描いても追加のお金はかかりません。</p>
</div>
</div>

<p class="ms-cost-note">価格は2026年11月時点の目安です。デジタルは主なペイントアプリ（Windows/macOS 1台）の価格帯の目安、アナログは画材店・通販での一般的な価格の目安、3D Manga Studios は Superhive Market の価格です。</p>

## <i class="bi bi-arrow-repeat"></i> あとから直すのも速い

<div class="ms-grid3" markdown>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-sliders ms-feat-ic" aria-hidden="true"></i><b>数値で調整</b></span>
**ノードを開かずに変えられる**

網点の大きさ、線の太さ、光沢やふちの幅は、サイドバーの数値で変えられます。ノードのどこを触るか探す必要はありません。
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-lightbulb-fill ms-feat-ic" aria-hidden="true"></i><b>ライト</b></span>
**光を動かしてもトーンが付いてくる**

3灯を回したり高さをそろえたりすると、トーンの境目もそのまま追従します。照らす相手はライトリンキングで自動で分けます。
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-camera-fill ms-feat-ic" aria-hidden="true"></i><b>撮り直し</b></span>
**同じキャラを別のコマにも**

ポーズとカメラを変えるだけで次のコマが仕上がります。手作業のように1コマごとに組み直す必要はありません。
</div>
</div>

<div class="ms-lp-cta" markdown>
**手持ちのキャラクターで、最初のコマを仕上げてみましょう。**

[購入ページ（Superhive Market）](https://superhivemarket.com/products/3d-manga-studios){ .md-button .md-button--primary target="_blank" rel="noopener" } [インストール手順](getting-started/install.md){ .md-button }
</div>
