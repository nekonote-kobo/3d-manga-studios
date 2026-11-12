# <i class="bi bi-grid-3x3-gap-fill"></i> Manga Tone Flat <span class="new-label">NEW</span> {data-toc-label="Manga Tone Flat"}

These are the **flat tones (10 types)** among the bundled screentone assets. Drop one into a color field of the Manga Tone Shader and that area gets the pattern.

<div class="ms-koma" markdown><span class="label">Manga Tone Flat</span>
The pattern fills the whole area as is, whatever the lights do. Whichever layer you put it in (Key, Fill, Back or Base), that layer's area is filled with the pattern. These are also the tones you can use for the background (World).

For tones whose density changes with how the light hits, see [Manga Tone Shaded](shaded.md).
</div>

## <i class="bi bi-grid-fill"></i> Tones

<div class="ms-tiles ms-tone-tiles">
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_ami.webp" alt="Screentone Dots" style="background:#919191"><b>Screentone Dots</b><span>The most basic halftone dots.<br>For shadows and clothing patterns</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_4kakeami.webp" alt="Screentone 4-Layer Crosshatch" style="background:#919191"><b>Screentone 4-Layer Crosshatch</b><span>Crosshatch with lines in four directions.<br>For dark shadows and a distinctive texture</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_kakeami_a.webp" alt="Screentone Crosshatch A" style="background:#919191"><b>Screentone Crosshatch A</b><span>A simple crosshatch of combined diagonal lines</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_kakeami_b.webp" alt="Screentone Crosshatch B" style="background:#919191"><b>Screentone Crosshatch B</b><span>A denser crosshatch than A</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_kakeami_c.webp" alt="Screentone Crosshatch C" style="background:#919191"><b>Screentone Crosshatch C</b><span>The densest of the three.<br>For dark shadows</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_kasure.webp" alt="Screentone Faded Crosshatch" style="background:#919191"><b>Screentone Faded Crosshatch</b><span>A crosshatch with a dry, faded texture.<br>For an analog look</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_pencil.webp" alt="Screentone Pencil Layered Crosshatch" style="background:#919191"><b>Screentone Pencil Layered Crosshatch</b><span>A hand-drawn feel, like layered pencil strokes</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_mansen.webp" alt="Screentone Parallel Lines" style="background:#919191"><b>Screentone Parallel Lines</b><span>Straight parallel lines.<br>For backgrounds and a sense of speed</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_sunime.webp" alt="Screentone Sand" style="background:#919191"><b>Screentone Sand</b><span>Fine grains like sand.<br>For rough textures and light shadows</span></div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/tones/flat_noise.webp" alt="Screentone Grain" style="background:#919191"><b>Screentone Grain</b><span>An irregular, noisy mesh.<br>For rough textures</span></div>
</div>

The images show a sphere with the tone material applied as is.

## <i class="bi bi-hdd-stack-fill"></i> Asset Libraries

<ol class="ms-steps" markdown>
<li markdown><div markdown>**Place the folder**

Put the bundled "3D Manga Studios Assets EN" folder (the Japanese version is JP) anywhere you like. It contains the "Manga Tone Flat" and "Manga Tone Shaded" folders.</div></li>
<li markdown><div markdown>**Add it as an asset library**

In Edit › Preferences › File Paths › Asset Libraries, click "+" and register each folder under the same name (it is handy to register both). This is the same as in the [installation](../getting-started/install.md) steps.</div></li>
<li markdown><div markdown>**Open it in the Asset Browser**

Split an area, set its editor type to "Asset Browser", and choose "Manga Tone Flat" or "Manga Tone Shaded" in the library field.</div></li>
</ol>

## <i class="bi bi-hand-index-fill"></i> Drag &amp; Drop

<ol class="ms-steps" markdown>
<li markdown><div markdown>**Open the layer you want to tone**

Select the object and, in Sidebar › Material › Manga Tone Shader, open the layer you want to fill with a tone (Base, Key, Fill or Back).</div></li>
<li markdown><div markdown>**Drag and drop**

Drop a tone from the Asset Browser onto that layer's "Tone Material" field. You can also pick one from the right side of the field. Remove it to go back to the original color.</div></li>
<li markdown><div markdown>**Adjust the pattern**

You can change the size, angle and so on of the tone with the inputs of the tone node ("Tone: ...") added in the Shader Editor. The values are carried over from the asset material's settings. Halftone dots are automatically kept round to match the render's aspect ratio.</div></li>
</ol>

For a comparison of how tones look in the base tone, see [Manga Tone Shader › Base Tone](mts.md#mts-base-base-tone).

!!! shout "Using materials other than the bundled tones"
    You can drop in materials other than the bundled tones, but the Manga Tone Shader effects may not work correctly. If Blender freezes or the material shows up pink or purple, switch back to a bundled tone.

## <i class="bi bi-sliders2"></i> Inputs

| Tone | Inputs (default) |
|---|---|
| Screentone Dots | Radius (0.5), Scale (5), Aspect Ratio (2), Angle (0), Randomness (0), Offset (0), Invert |
| Screentone 4-Layer Crosshatch | Scale (50), Width (0.1), Main Angle (0), Angle A–D (55, 100, 145, 190), Invert |
| Screentone Crosshatch A | Hatch Scale (5), Hatch Width (1), Hatch Angle (45), Pattern Scale (5), Pattern Width (2), Invert |
| Screentone Crosshatch B | Pattern Scale (5), Hatch Scale (80), Hatch Angle (30), Invert |
| Screentone Crosshatch C | Scale (5), Invert |
| Screentone Faded Crosshatch | Hatch Scale (5), Hatch Width (0.5), Hatch Angle (45), Pattern Scale (5), Pattern Width (5), Fade Amount (0.5), Fade Density (5), Invert |
| Screentone Pencil Layered Crosshatch | Hatch Scale (5), Hatch Width (0.5), Hatch Angle (45), Pattern Scale (50), Pattern Width (0.1), Offset (0.5), Invert |
| Screentone Parallel Lines | Scale (5), Density (5), Fade Amount (0.5), Invert |
| Screentone Sand | Noise Brightness (0), Noise Contrast (2), Noise Scale (5), Invert |
| Screentone Grain | Size (5), Pattern (0.5), Pattern Brightness (0), Pattern Contrast (0), Cross Pattern, Invert |

- **Invert**: Swaps black and white (gives you a white pattern)
- **Aspect Ratio**: So that the dots look round, this is set automatically to the render's aspect ratio when the tone goes into the Manga Tone Shader
