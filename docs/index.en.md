---
title: Home
hide:
  - navigation
  - toc
---

<div class="ms-sheet" markdown>
<div class="ms-hero" markdown>
<div markdown>
<img class="ms-logo ms-noz" src="../assets/img/logo%20ink.png#only-light" alt="3D Manga Studios"><img class="ms-logo ms-noz" src="../assets/img/logo%20positive.png#only-dark" alt="3D Manga Studios">

<h1>Finish <span class="nw"><em>manga panels</em></span><br>right inside Blender.</h1>

3D Manga Studios is a Blender add-on that makes 3D scenes look like black-and-white manga pages. Screentones, outlines, camera panel layout, lights, eyes and mouths, backgrounds, effect lines and speech balloons are all covered by four panels in the Sidebar.

<div class="ms-specs"><span class="solid">Blender 4.5 LTS or later</span><span>5.2 LTS recommended</span><span>EEVEE only</span><span>Japanese / English UI</span></div>

[Installation](getting-started/install.md){ .md-button .md-button--primary } [Feature Guide](guide/index.md){ .md-button }
</div>
<figure markdown style="margin:0">
<div class="ms-ba" style="--pos:50%">
<img class="ms-noz" src="../assets/img/ba_1.webp" alt="Sample scene in Solid shading (before)">
<img class="after ms-noz" src="../assets/img/ba_2.webp" alt="Sample scene rendered (after)">
<div class="bar"></div>
<span class="tag l">Before</span><span class="tag r">After</span>
<input type="range" min="0" max="100" value="50" aria-label="Slider to compare before and after">
</div>
<figcaption>Drag the slider left and right to compare. Left: Solid shading. Right: the render finished with 3D Manga Studios (sample scene).</figcaption>
</figure>
</div>
</div>

## <i class="bi bi-info-circle-fill"></i> Overview

3D Manga Studios is a Blender add-on that turns a 3D scene into black-and-white artwork that looks like a real manga panel. Applying screentones, drawing outlines, placing lights and adding backgrounds and effect lines are all done with buttons and values in the Sidebar, without building node trees by hand. Because pose and framing stay in 3D, you can reshoot the same character from another angle for the next panel in seconds.

## <i class="bi bi-stars"></i> Features

<div class="ms-grid3" markdown>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-circle-half ms-feat-ic" aria-hidden="true"></i><b>Materials</b></span>
**Tones and shadows in one click**

Manga Tone Shader reads the key, fill and back lights separately and turns them into halftone dots or crosshatch tones. Gloss, rim light, painterly and watercolor looks are included. → [Materials](guide/material.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-vector-pen ms-feat-ic" aria-hidden="true"></i><b>Outlines</b></span>
**Pick lines by role**

Choose the outer silhouette and inner lines by role, and switch the whole line look with presets such as G-Pen or Pencil Rough. → [Outlines](guide/outline.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-camera-fill ms-feat-ic" aria-hidden="true"></i><b>Scene</b></span>
**Page size and panel layout**

Set the resolution and guides from A-size or B-size pages and their splits. Includes Distortion Fix for faces stretched by wide lenses. → [Scene](guide/scene.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-lightbulb-fill ms-feat-ic" aria-hidden="true"></i><b>Lights</b></span>
**Three lights and Light Linking**

Place three lights per character and let Light Linking decide what each one lights, automatically. → [Scene › Lights](guide/scene.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-emoji-smile-fill ms-feat-ic" aria-hidden="true"></i><b>Eyes & Mouth</b></span>
**Eyes and a mouth you can animate**

Parallax eyes and an anime mouth that moves without shape keys. Change expressions with eye effects and pupil shapes. → [Materials › Eyes & Mouth](guide/material.md)
</div>
<div class="ms-koma ms-feat" markdown><span class="label"><i class="bi bi-stars ms-feat-ic" aria-hidden="true"></i><b>Backgrounds & Effects</b></span>
**Finish the panel**

Pick sky and background Worlds, a ground that catches shadows, focus lines and manga symbols, ink brush strokes, SFX lettering and speech balloons from thumbnails. → [Backgrounds & Effects](guide/bgfx.md)
</div>
</div>

## <i class="bi bi-grid-3x2-gap-fill"></i> One Panel in 4 Steps

<div class="ms-steps" markdown>
<figure class="ms-shot" markdown>
![Finished sample scene](assets/img/ui/panel_viewport_result.webp)
<figcaption>Finished sample scene</figcaption>
</figure>
<div class="ms-flow">
<a href="guide/scene.html"><span class="n">1</span><b>Scene</b><span>Create the collections, set the camera size and panel layout, and place the three lights.</span></a>
<a href="guide/material.html"><span class="n">2</span><b>Material</b><span>Add screentones and shadows with Manga Tone Shader, then add eyes and a mouth.</span></a>
<a href="guide/outline.html"><span class="n">3</span><b>Outlines</b><span>Pick outer and inner lines by role, and choose the pen type with a preset.</span></a>
<a href="guide/bgfx.html"><span class="n">4</span><b>Backgrounds & Effects</b><span>Finish with a background World, effect lines, manga symbols and speech balloons.</span></a>
</div>
</div>

## <i class="bi bi-pc-display"></i> Requirements

| Item | Details |
|---|---|
| Blender | 4.5 LTS or later (5.2 LTS recommended) |
| Render engine | EEVEE only (Cycles is not supported) |
| UI language | Japanese and English (follows Blender's language setting) |
| License activation | Needs an internet connection the first time (works offline for a period after activation) |

See [Getting Started › Requirements](getting-started/index.md) for details.

## <i class="bi bi-file-earmark-text-fill"></i> License

| Item | License |
|---|---|
| Add-on (Python scripts) | MIT License / GNU GPL v3 |
| Bundled assets (materials, nodes, images) | The included terms (License_JP / License_EN) |

The full text and the terms for using the assets in your work are on [Terms & License](license.md).

## <i class="bi bi-chat-square-text-fill"></i> Notes

| Item | Details |
|---|---|
| Developer | Adacchi-MultiCreator |
| Latest version | v1.2.0 beta (see the [Changelog](changelog.md)) |
| News | [X (@3d_manga19094)](https://x.com/3d_manga19094) |
| Bug reports | [GitHub Issues](https://github.com/Adacchi-MultiCreator/3D-Manga-Studios-Issues) |
| Older versions | The v1.0 documentation is available from the version switcher in the header |

## <i class="bi bi-book-fill"></i> How to Use These Docs

| What you want to know | Page |
|---|---|
| Installation and requirements | [Installation](getting-started/install.md) |
| Requesting and activating a license key | [License Activation](getting-started/license.md) |
| How to use each Sidebar panel | [Feature Guide](guide/index.md) |
| What's inside the materials, and how values change the look | [Material Specs](spec/index.md) |
| The bundled screentone assets | [Manga Tone Flat](spec/flat.md) / [Manga Tone Shaded](spec/shaded.md) |
| What English UI terms are in Japanese | [Translation Dictionary](translation.md) |
| When something doesn't work | [FAQ](faq.md) |
| What's changed | [Changelog](changelog.md) |
| What you may do, and the terms | [Terms of Use & License](license.md) |
