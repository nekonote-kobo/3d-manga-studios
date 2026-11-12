---
title: Highlights
hide:
  - navigation
  - toc
---

<div class="ms-sheet ms-lp-hero" markdown>
<div class="ms-vs" role="img" aria-label="Plain Blender vs 3D Manga Studios"><span class="ms-vs-a"><i class="bi bi-boxes" aria-hidden="true"></i> Plain Blender<small>Building nodes by hand</small></span><span class="ms-vs-x" aria-hidden="true">VS</span><span class="ms-vs-b"><img class="ms-noz" src="../assets/img/logo%20ink.png" alt=""></span></div>

<h1>43 minutes of node work,<br>done in <em>about 11</em>.</h1>

Halftone tones, reading three lights apart, outlines, eyes and mouths, sky and ground, clouds and focus lines. Building them by hand with nodes takes over 40 minutes; with 3D Manga Studios it takes buttons and values in the Sidebar.

[Installation](getting-started/install.md){ .md-button .md-button--primary } [Feature Guide](guide/index.md){ .md-button }
</div>

## <i class="bi bi-play-btn-fill"></i> Time to the same finish

<figure class="ms-lp-video">
<video class="ms-noz" src="../assets/video/compare_demo_en.mp4" poster="../assets/video/compare_demo_poster_en.jpg" controls playsinline preload="none"></video>
<figcaption>Left: by hand (building the shaders yourself). Right: 3D Manga Studios. Both at 60× speed; the numbers show the real time taken.</figcaption>
</figure>

<div class="ms-stats">
<div class="ms-stat-vs"><span class="a"><b>43<small> min</small></b><span>By hand</span></span><i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i><span class="b"><b>11<small> min</small></b><span>3D Manga Studios</span></span></div>
<div><b>~1/4</b><span>of the time</span></div>
<div class="ms-stat-vs ms-stat-mini"><span class="ttl">Nodes built by hand (one skin material)</span><span class="a"><b>~50</b></span><i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i><span class="b"><b>0</b></span></div>
</div>

## <i class="bi bi-diagram-3-fill"></i> Where doing it by hand gets slow

What was actually built on the by-hand side of the video, next to the same thing done with the add-on.

<div class="ms-cmp" markdown>
<span class="ms-pop" aria-hidden="true"><span class="t"><i style="--i:0">W</i><i style="--i:1">a</i><i style="--i:2">y</i><i style="--i:3">&nbsp;</i><i style="--i:4">f</i><i style="--i:5">a</i><i style="--i:6">s</i><i style="--i:7">t</i><i style="--i:8">e</i><i style="--i:9">r</i><i style="--i:10">!</i></span><small>Just click</small></span>

| Finish | By hand | <i class="bi bi-lightning-charge-fill"></i> 3D Manga Studios |
|---|---|---|
| **Setup time (rough)** | **40+ minutes** (43:40 in the video) | **About 11 minutes** (11:30 in the video) |
| Reading three lights | Place RGB lights, then build Shader to RGB → Separate Color → a threshold for each light | Add a light group |
| Dots and crosshatch | Make patterns from Voronoi and Wave textures, match screen coordinates and aspect, and route them to shadow, light, crevices, gloss and rim | Apply Manga Tone Shader and pick tones from thumbnails |
| Per-part density | Duplicate materials and tune dot size and line angle for hair, clothes and face one by one | Switch with values and presets |
| Outlines | Add Solidify, flipped normals and a back-face-culled black material to every part | Apply one line preset |
| Eyes and mouth | Write shaders that cut UVs into circles for iris and highlights, teeth and tongue | Set Up Parallax Eye / Apply Manga Toon Mouth |
| Sky and ground | Split the world by camera ray for sky dots, and build shadow dots and lines on the ground | Sky background preset and Add Ground |
| Clouds and focus lines | Build clouds from metaballs, focus lines from polar coordinates and noise | Add effects from thumbnails |
</div>

## <i class="bi bi-pencil-fill"></i> Compared with hand-drawn manga

Drawing on paper or a tablet is good at different things. 3D Manga Studios takes on drawing the same character panel after panel, and you can still add hand-drawn touches on top.

<div class="ms-cmp" markdown>
<span class="ms-pop" aria-hidden="true"><span class="t"><i style="--i:0">M</i><i style="--i:1">a</i><i style="--i:2">s</i><i style="--i:3">s</i><i style="--i:4">-</i><i style="--i:5">p</i><i style="--i:6">r</i><i style="--i:7">o</i><i style="--i:8">d</i><i style="--i:9">u</i><i style="--i:10">c</i><i style="--i:11">e</i><i style="--i:12">!</i></span><small>Any angle</small></span>

| Situation | Hand-drawn | <i class="bi bi-lightning-charge-fill"></i> 3D Manga Studios |
|---|---|---|
| **Time to finish a panel (rough)** | **Tens of minutes to hours** (depends on detail) | **Seconds to minutes** (from the 2nd panel, just move the camera and render) |
| A panel from another angle | Redraw from the sketch every time the angle changes | Move the camera and render again |
| Character shape | Faces and clothes drift from panel to panel | Same model, same shape in every panel |
| Tones | Paste, cut and scrape | Placed from how the light hits; move the light and they follow |
| Backgrounds and perspective | Draw perspective lines and fill in | Use the 3D stage and ground as they are |
| Fixes | Erase and redraw | Change values or presets and render again |
| Hand-drawn feel | Free line weight and deformation | Add brush strokes, sound effects and effect lines on top, or draw over the render |
</div>

## <i class="bi bi-wallet2"></i> What it costs

A rough look at what the tools cost for each way of drawing. Computers and pen tablets are not included.

<div class="ms-cost">
<div class="ms-cost-card">
<div class="ms-cost-img"><img class="ms-noz" src="https://images.unsplash.com/photo-1643425959020-b48e240d01b4?w=900&q=75&auto=format&fit=crop&crop=entropy&ar=16:9" alt="A dip pen on a manga page" loading="lazy"><a class="ms-cost-credit" href="https://unsplash.com/photos/JpHf9wwCTsM" target="_blank" rel="noopener">Photo: Taiki Ishikawa / Unsplash</a></div>
<span class="ms-cost-tag">Analog</span>
<b class="ms-cost-sum">Grows with every page</b>
<ul>
<li>Screentone, 1 sheet <b>about ¥600–700</b></li>
<li>G-pen nibs (10) <b>about ¥1,500</b></li>
<li>Manuscript paper B5 (1 pad) <b>about ¥500</b></li>
<li>Fineliner, 1 pen <b>about ¥200</b> + ink, white, etc.</li>
</ul>
<p>Tones and nibs are used up, so the cost grows with the page count.</p>
</div>
<div class="ms-cost-card">
<div class="ms-cost-img"><img class="ms-noz" src="https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=900&q=75&auto=format&fit=crop&ar=16:9" alt="Drawing on a tablet with a stylus" loading="lazy"><a class="ms-cost-credit" href="https://unsplash.com/photos/Dx1b5ucschA" target="_blank" rel="noopener">Photo: Kelly Sikkema / Unsplash</a></div>
<span class="ms-cost-tag">Digital (paint app)</span>
<b class="ms-cost-sum">Pay every month or year</b>
<ul>
<li>Monthly plan <b>about ¥500–1,000</b></li>
<li>Yearly plan <b>about ¥3,000–8,000</b></li>
<li>Perpetual license <b>about ¥7,000–30,000</b></li>
</ul>
<p>Tones are unlimited, but you still paste and scrape them by hand in every panel.</p>
</div>
<div class="ms-cost-card hi">
<div class="ms-cost-img logo"><img class="ms-noz" src="../assets/img/logo%20ink.png#only-light" alt="3D Manga Studios"><img class="ms-noz" src="../assets/img/logo%20positive.png#only-dark" alt="3D Manga Studios"></div>
<span class="ms-cost-tag">3D Manga Studios</span>
<b class="ms-cost-sum">Buy once, done</b>
<ul>
<li>Blender <b>free</b></li>
<li>3D Manga Studios <b>$39</b> (one-time)</li>
<li>Updates <b>free</b></li>
</ul>
<p>Tones, lines, backgrounds and effect lines cost nothing extra, however many panels you draw.</p>
</div>
</div>

<p class="ms-cost-note">Rough prices as of November 2026. Digital: typical price range of major paint apps (Windows/macOS, 1 device). Analog: typical prices at art supply shops and online stores. 3D Manga Studios: Superhive Market.</p>

## <i class="bi bi-arrow-repeat"></i> Quick to change later

<div class="ms-grid3" markdown>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-sliders ms-feat-ic" aria-hidden="true"></i><b>Values</b></span>
**Change it without opening nodes**

Dot size, line width, gloss and rim width are values in the Sidebar. No hunting for the right node.
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-lightbulb-fill ms-feat-ic" aria-hidden="true"></i><b>Lights</b></span>
**Tones follow the light**

Rotate the three lights or level their heights and the tone borders follow. Light linking sorts out what each light hits.
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-camera-fill ms-feat-ic" aria-hidden="true"></i><b>Reshoot</b></span>
**The same character, another panel**

Change the pose and camera and the next panel is finished, without rebuilding anything per panel.
</div>
</div>

<div class="ms-lp-cta" markdown>
**Finish your first panel with your own character.**

[Get it on Superhive Market](https://superhivemarket.com/products/3d-manga-studios){ .md-button .md-button--primary target="_blank" rel="noopener" } [Installation](getting-started/install.md){ .md-button }
</div>
