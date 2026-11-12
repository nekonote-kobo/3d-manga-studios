# <i class="bi bi-circle-half"></i> Manga Tone Shader

<figure class="ms-page-hero"><img src="../../assets/img/hero/hero_mts.webp" alt="A render made with the Manga Tone Shader"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTS · Material › Manga Tone Shader (Lite: …)</p>

A shader that reads the <strong>color channels</strong> of the lights separately and paints a different tone for each: where the key (red), fill (green) and back (blue) lights hit. When you check a feature, the shader is automatically swapped for a lightweight group that contains only the features you use.

## <i class="bi bi-layers-fill"></i> Layer stack

The layers stack from the bottom up into one final shading. The label at the top right is how each layer is combined (blend mode).

<div class="ms-stack" id="stack-mts"></div>

## <i class="bi bi-diagram-2-fill"></i> Node tree

<div class="ms-graph"><div class="flow"><div class="col"><div class="ms-node"><div class="hd h-tex">Image Texture</div><div class="bd">Matte tone<i>Normal → Vector Transform → Mapping</i></div></div><div class="ms-node"><div class="hd h-tex">Image Texture</div><div class="bd">AO mask<i>UV → Mapping</i></div></div><div class="ms-node"><div class="hd h-tex">Image Texture + Normal Map</div><div class="bd">Normal map</div></div><div class="ms-node"><div class="hd h-tex">Image Texture</div><div class="bd">Transparent PNG (alpha)</div></div></div><div class="wire"></div><div class="ms-node big sel"><div class="hd h-group">Manga Tone Shader (Lite: …)</div><div class="bd">Base / Key / Fill / Back tones<i>Normals, shadows, highlights, matte, watercolor, transparency…</i><i>Lightweight version with only the checked features</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">Material Output</div><div class="bd">Surface</div></div></div></div>

<div class="ms-pipe"><div><em>1</em><b>Read the lights</b><span>Diffuse → Shader to RGB → Separate Color pulls out how the red, green and blue lights hit, one by one</span></div><div><em>2</em><b>Split into steps</b><span>Each of the three values is cut into steps (Map Range) for crisp light and dark. The offsets move the borders</span></div><div><em>3</em><b>Layer the tones</b><span>Tones (colors or patterns) are layered in the order Base → Key → Fill → Back</span></div><div><em>4</em><b>Add effects</b><span>Shadow, sub outline, AO, gloss, rim light and matte are layered on top</span></div><div><em>5</em><b>Finish</b><span>Watercolor → color (variation and paper) → output</span></div></div>


!!! note ""
    Light Linking decides which objects each light illuminates. If the character is not in a light group's "Lit Objects", it renders solid black.

## <i class="bi bi-sliders2"></i> Inputs

The five spheres (or eyes, mouths, skies) show **the value changing from left to right**. The values are written under the image. The yellow cell is the default value for that setting, and all other settings stay at their defaults.

??? info "All Manga Tone Shader settings"

    | Panel | Setting | UI name | Default |
    |---|---|---|---|
    | Base | Base Tone | `Base Tone` | Color |
    | Base | [Key Light Offset](#mts-base-key-light-offset) | `Key Light Offset` | 3 |
    | Base | [Fill Light Offset](#mts-base-fill-light-offset) | `Fill Light Offset` | 3 |
    | Base | [Back Light Offset](#mts-base-back-light-offset) | `Back Light Offset` | 1 |
    | Shadow | [Shadow Opacity](#mts-shadow-shadow-opacity) | `Shadow Opacity` | 1 |
    | Shadow | [Brightness](#mts-shadow-brightness) | `Brightness` | 0.5 |
    | Shadow | [Contrast](#mts-shadow-contrast) | `Contrast` | 1 |
    | Sub Outline | [Opacity](#mts-sub-outline-opacity) | `Opacity` | 0.5 |
    | Sub Outline | [Size](#mts-sub-outline-size) | `Size` | 0.5 |
    | Sub Outline | [Shadow Size](#mts-sub-outline-shadow-size) | `Shadow Size` | 0.2 |
    | AO | [Opacity](#mts-ao-opacity) | `Opacity` | 1 |
    | AO | [Intensity](#mts-ao-intensity) | `Intensity` | 1 |
    | Gloss | [Opacity](#mts-gloss-opacity) | `Opacity` | 0.5 |
    | Gloss | [Brightness](#mts-gloss-brightness) | `Brightness` | 0.5 |
    | Gloss | [Contrast](#mts-gloss-contrast) | `Contrast` | 1 |
    | Gloss | [Spread](#mts-gloss-spread) | `Spread` | 0.1 |
    | Gloss | [Offset X](#mts-gloss-offset-x) | `Offset X` | 0 |
    | Gloss | [Offset Z](#mts-gloss-offset-z) | `Offset Z` | 0 |
    | Anisotropy | [Opacity](#mts-anisotropy-opacity) | `Opacity` | 0.5 |
    | Rim Light | [Opacity](#mts-rim-light-opacity) | `Opacity` | 0.5 |
    | Rim Light | [Contrast](#mts-rim-light-contrast) | `Contrast` | 1 |
    | Rim Light | [Width](#mts-rim-light-width) | `Width` | 0.014 |
    | Rim Light | [Offset X](#mts-rim-light-offset-x) | `Offset X` | 0 |
    | Rim Light | [Offset Z](#mts-rim-light-offset-z) | `Offset Z` | 0 |
    | Matte | [Opacity](#mts-matte-opacity) | `Opacity` | 1 |
    | Matte | [Brightness](#mts-matte-brightness) | `Brightness` | 0.1 |
    | Matte | [Contrast A](#mts-matte-contrast-a) | `Contrast A` | 0.5 |
    | Matte | [Contrast B](#mts-matte-contrast-b) | `Contrast B` | 0.5 |
    | Brush Strokes | [Stroke Strength](#mts-brush-strokes-stroke-strength) | `Stroke Strength` | 0.3 |
    | Brush Strokes | [Stroke Scale](#mts-brush-strokes-stroke-scale) | `Stroke Scale` | 3 |
    | Brush Strokes | [Stroke Stretch](#mts-brush-strokes-stroke-stretch) | `Stroke Stretch` | 4 |
    | Brush Strokes | [Stroke Angle](#mts-brush-strokes-stroke-angle) | `Stroke Angle` | 35 |
    | Brush Strokes | [Stroke Edge](#mts-brush-strokes-stroke-edge) | `Stroke Edge` | 0.5 |
    | Color (Variation & Paper) | [Color Variation](#mts-paint-finish-color-variation) | `Color Variation` | 0.057 |
    | Color (Variation & Paper) | [Value Variation](#mts-paint-finish-value-variation) | `Value Variation` | 0 |
    | Color (Variation & Paper) | [Paper](#mts-paint-finish-paper) | `Paper` | 0.812 |
    | Watercolor | [Bleed](#mts-watercolor-bleed) | `Bleed` | 0.5 |
    | Watercolor | [Bleed Scale](#mts-watercolor-bleed-scale) | `Bleed Scale` | 12 |
    | Watercolor | [Edge Darkening](#mts-watercolor-edge-darkening) | `Edge Darkening` | 0.5 |
    | Watercolor | [Granulation](#mts-watercolor-granulation) | `Granulation` | 0.3 |
    | Watercolor | [Wash](#mts-watercolor-wash) | `Wash` | 0.15 |
    | Transparency | [Alpha Clip](#mts-transparency-alpha-clip) | `Alpha Clip` | 0.5 |

### Base

<div class="ms-prop" id="mts-base-base-tone"><div class="ph"><strong>Base Tone</strong><code>Base Tone</code><span class="chips"><span class="chip">Color</span><span class="chip">Tone Material</span></span></div><p class="desc">The color or pattern of the area no light reaches (the underside of the sphere). Drop a material from the bundled tone assets (<a href="flat.md">Manga Tone Flat</a> / <a href="shaded.md">Manga Tone Shaded</a>) below the color field to use its pattern.</p><p class="desc"><b><a href="flat.md">Manga Tone Flat</a></b> (flat tones): The pattern fills the whole area as is.</p><img loading="lazy" src="../../assets/img/spec/mts_base_tone_flat.webp" alt="Base Tone set to a solid color, Screentone Dots, Screentone Sand, Screentone Parallel Lines and Screentone Crosshatch A"><div class="ms-vals" style="--n:5"><span class="def">Solid</span><span>Dots</span><span>Sand</span><span>Lines</span><span>Crosshatch A</span></div><p class="desc" style="margin-top:.8rem"><b><a href="shaded.md">Manga Tone Shaded</a></b> (shaded tones): The pattern density changes with how the light hits: lighter on the bright side, denser on the dark side.</p><img loading="lazy" src="../../assets/img/spec/mts_base_tone_shaded.webp" alt="Base Tone with the shaded versions of Screentone Dots, Sand, Parallel Lines, Crosshatch A and Pencil Layered Crosshatch"><div class="ms-vals" style="--n:5"><span>Dots (Shaded)</span><span>Sand (Shaded)</span><span>Lines (Shaded)</span><span>Crosshatch A (Shaded)</span><span>Pencil (Shaded)</span></div></div>

<div class="ms-prop hl" id="mts-base-key-light-offset" style="--pc:#d9453f"><div class="ph"><strong>Key Light Offset</strong><code>Key Light Offset</code><span class="chips"><span class="chip p">Default 3</span><span class="chip">Compared 1 → 6.5</span></span></div><p class="desc">The border of the area the key light (red) hits. The higher the value, the smaller the key tone area and the larger the shadow side. The image uses a red key tone.</p><img loading="lazy" src="../../assets/img/spec/mts_base_key_offset.webp" alt="Key Light Offset set to 1, 2, 3, 4.5 and 6.5"><div class="ms-vals" style="--n:5"><span>1</span><span>2</span><span class="def">3</span><span>4.5</span><span>6.5</span></div></div>

<div class="ms-prop hl" id="mts-base-fill-light-offset" style="--pc:#2f9a52"><div class="ph"><strong>Fill Light Offset</strong><code>Fill Light Offset</code><span class="chips"><span class="chip p">Default 3</span><span class="chip">Compared 1 → 6.5</span></span></div><p class="desc">The border of the fill light (green) area. Raising it shrinks the midtone area and adds more dark area. The image uses a green fill tone.</p><img loading="lazy" src="../../assets/img/spec/mts_base_fill_offset.webp" alt="Fill Light Offset set to 1, 2, 3, 4.5 and 6.5"><div class="ms-vals" style="--n:5"><span>1</span><span>2</span><span class="def">3</span><span>4.5</span><span>6.5</span></div></div>

<div class="ms-prop hl" id="mts-base-back-light-offset" style="--pc:#3b6fd6"><div class="ph"><strong>Back Light Offset</strong><code>Back Light Offset</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 1 → 6.5</span></span></div><p class="desc">The width of the back light (blue) rim. The higher the value, the thinner the edge from behind; at 6.5 it almost disappears. The image uses a blue back tone.</p><img loading="lazy" src="../../assets/img/spec/mts_base_back_offset.webp" alt="Back Light Offset set to 1, 2, 3, 4.5 and 6.5"><div class="ms-vals" style="--n:5"><span class="def">1</span><span>2</span><span>3</span><span>4.5</span><span>6.5</span></div></div>

### Shadow

<div class="ms-prop" id="mts-shadow-shadow-opacity"><div class="ph"><strong>Shadow Opacity</strong><code>Shadow Opacity</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How dark the shadows cast by other objects are. 0 means no shadows.</p><img loading="lazy" src="../../assets/img/spec/mts_shadow_opacity.webp" alt="Shadow Opacity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-shadow-brightness"><div class="ph"><strong>Brightness</strong><code>Brightness</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The threshold that sets the shadow area. Raising it makes the shadows larger. With Contrast at 1 you see almost no change, so the image uses Contrast 0.3.</p><img loading="lazy" src="../../assets/img/spec/mts_shadow_brightness.webp" alt="Brightness set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-shadow-contrast"><div class="ph"><strong>Contrast</strong><code>Contrast</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How sharp the shadow border is. At 0 everything is in shadow; the higher the value, the clearer the border.</p><img loading="lazy" src="../../assets/img/spec/mts_shadow_contrast.webp" alt="Contrast set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

### Sub Outline

<div class="ms-prop" id="mts-sub-outline-opacity"><div class="ph"><strong>Opacity</strong><code>Opacity</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strong the colored line just inside the outline is (blue by default).</p><img loading="lazy" src="../../assets/img/spec/mts_sub_opacity.webp" alt="Opacity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-sub-outline-size"><div class="ph"><strong>Size</strong><code>Size</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The thickness of the sub outline.</p><img loading="lazy" src="../../assets/img/spec/mts_sub_size.webp" alt="Size set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-sub-outline-shadow-size"><div class="ph"><strong>Shadow Size</strong><code>Shadow Size</code><span class="chips"><span class="chip p">Default 0.2</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How far it spreads into the shadow side. Raise it and the whole shadow area takes the sub outline color.</p><img loading="lazy" src="../../assets/img/spec/mts_sub_shadow_size.webp" alt="Shadow Size set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### AO

<div class="ms-prop" id="mts-ao-opacity"><div class="ph"><strong>Opacity</strong><code>Opacity</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How dark the shading is in hollows and recessed areas (around the eyes, inside the ears, under the chin). The image uses a model with many hollows and a light body color.</p><img loading="lazy" src="../../assets/img/spec/mts_ao_opacity.webp" alt="Opacity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-ao-intensity"><div class="ph"><strong>Intensity</strong><code>Intensity</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How far the dark areas spread. The higher the value, the further they spread out from the hollows.</p><img loading="lazy" src="../../assets/img/spec/mts_ao_intensity.webp" alt="Intensity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

### Gloss

<div class="ms-prop" id="mts-gloss-opacity"><div class="ph"><strong>Opacity</strong><code>Opacity</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strong the highlights are.</p><img loading="lazy" src="../../assets/img/spec/mts_gloss_opacity.webp" alt="Opacity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-gloss-brightness"><div class="ph"><strong>Brightness</strong><code>Brightness</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How much area the highlights cover. At 1 the whole surface becomes bright.</p><img loading="lazy" src="../../assets/img/spec/mts_gloss_brightness.webp" alt="Brightness set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-gloss-contrast"><div class="ph"><strong>Contrast</strong><code>Contrast</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How sharp the highlight edges are. Lower it and they blur and spread over the whole surface.</p><img loading="lazy" src="../../assets/img/spec/mts_gloss_contrast.webp" alt="Contrast set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-gloss-spread"><div class="ph"><strong>Spread</strong><code>Spread</code><span class="chips"><span class="chip p">Default 0.1</span><span class="chip">Compared 0 → 0.8</span></span></div><p class="desc">The size of each individual highlight.</p><img loading="lazy" src="../../assets/img/spec/mts_gloss_spread.webp" alt="Spread set to 0, 0.1, 0.25, 0.5 and 0.8"><div class="ms-vals" style="--n:5"><span>0</span><span class="def">0.1</span><span>0.25</span><span>0.5</span><span>0.8</span></div></div>

<div class="ms-prop" id="mts-gloss-offset-x"><div class="ph"><strong>Offset X</strong><code>Offset X</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared -1 → 1</span></span></div><p class="desc">Moves the highlights left or right.</p><img loading="lazy" src="../../assets/img/spec/mts_gloss_offset_x.webp" alt="Offset X set to -1, -0.5, 0, 0.5 and 1"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

<div class="ms-prop" id="mts-gloss-offset-z"><div class="ph"><strong>Offset Z</strong><code>Offset Z</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared -1 → 1</span></span></div><p class="desc">Moves the highlights up or down.</p><img loading="lazy" src="../../assets/img/spec/mts_gloss_offset_z.webp" alt="Offset Z set to -1, -0.5, 0, 0.5 and 1"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

### Anisotropy

<div class="ms-prop" id="mts-anisotropy-opacity"><div class="ph"><strong>Opacity</strong><code>Opacity</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">A streaky highlight, like the "angel ring" on hair. The band runs along the vertical UV direction and shines on the side the key light hits. The streak takes the tone color (the image uses a white tone).</p><img loading="lazy" src="../../assets/img/spec/mts_aniso_opacity.webp" alt="Anisotropy Opacity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

!!! bubble "Anisotropy expects a clean UV unwrap"
    The streak follows the vertical UV direction, so it assumes UVs laid out in a consistent direction. For hair, **start the shape from a UV Sphere primitive**: its UVs already run top to bottom, so the angel ring follows the head.
    Hair made by sculpting or remeshing, or left with an automatic unwrap (such as Smart UV Project), has UVs facing every which way, and the streak breaks up or runs at an angle.

    <div class="ms-prop" id="mts-anisotropy-uv"><div class="ph"><strong>Effect of the UV unwrap</strong><span class="chips"><span class="chip">Same shape, same settings</span></span></div><p class="desc">Both are the same hair shape made from a UV Sphere, with the same anisotropy settings. Left: UVs split into small islands with Smart UV Project, each turned to a random angle. Right: the UV Sphere's own UVs.</p><img loading="lazy" src="../../assets/img/spec/mts_aniso_uv_compare.webp" alt="With Smart UV Project the streaks break up sideways; with the UV Sphere's UVs they line up vertically into an angel ring"><div class="ms-vals" style="--n:2"><span>UVs split up and turned at random</span><span>UV Sphere as is (UVs run top to bottom)</span></div></div>

### Rim Light

<div class="ms-prop" id="mts-rim-light-opacity"><div class="ph"><strong>Opacity</strong><code>Opacity</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strong the bright edge along the silhouette is (with Width 0.8).</p><img loading="lazy" src="../../assets/img/spec/mts_rim_opacity.webp" alt="Opacity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-rim-light-contrast"><div class="ph"><strong>Contrast</strong><code>Contrast</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared -1 → 1</span></span></div><p class="desc">The border of the edge. Negative values spread the edge over the whole inside.</p><img loading="lazy" src="../../assets/img/spec/mts_rim_contrast.webp" alt="Contrast set to -1, -0.5, 0, 0.5 and 1"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span>0</span><span>0.5</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-rim-light-width"><div class="ph"><strong>Width</strong><code>Width</code><span class="chips"><span class="chip p">Default 0.014</span><span class="chip">Compared 0 → 0.2</span></span></div><p class="desc">The thickness of the edge (with Opacity 1).</p><img loading="lazy" src="../../assets/img/spec/mts_rim_width.webp" alt="Width set to 0, 0.02, 0.05, 0.1 and 0.2"><div class="ms-vals" style="--n:5"><span>0</span><span>0.02</span><span>0.05</span><span>0.1</span><span>0.2</span></div></div>

<div class="ms-prop" id="mts-rim-light-offset-x"><div class="ph"><strong>Offset X</strong><code>Offset X</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared -1 → 1</span></span></div><p class="desc">Shifts the direction of the edge left or right. Negative values thicken the left edge, positive values the right edge (with Width 0.2 and Opacity 1).</p><img loading="lazy" src="../../assets/img/spec/mts_rim_offset_x.webp" alt="Offset X set to -1, -0.5, 0, 0.5 and 1"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

<div class="ms-prop" id="mts-rim-light-offset-z"><div class="ph"><strong>Offset Z</strong><code>Offset Z</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared -1 → 1</span></span></div><p class="desc">Shifts the direction of the edge up or down. Negative values thicken the bottom edge, and at -1 the whole sphere is covered. Positive values thin the bottom edge and move it toward the top (with Width 0.2 and Opacity 1).</p><img loading="lazy" src="../../assets/img/spec/mts_rim_offset_z.webp" alt="Offset Z set to -1, -0.5, 0, 0.5 and 1"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span class="def">0</span><span>0.5</span><span>1</span></div></div>

### Matte

<div class="ms-prop" id="mts-matte-opacity"><div class="ph"><strong>Opacity</strong><code>Opacity</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strong the matte tone (texture layer) is. The tone takes a matcap image mapped by the camera-space normals (the image uses a crystal-pattern matcap; the shader uses the image's brightness, so it comes out black and white).</p><img loading="lazy" src="../../assets/img/spec/mts_matte_opacity.webp" alt="Opacity set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mts-matte-brightness"><div class="ph"><strong>Brightness</strong><code>Brightness</code><span class="chips"><span class="chip p">Default 0.1</span><span class="chip">Compared -0.1 → 0.2</span></span></div><p class="desc">The brightness of the matte layer. Ten times the value is added as brightness, so small changes make a big difference. Negative values darken it, positive values make it whiter.</p><img loading="lazy" src="../../assets/img/spec/mts_matte_brightness.webp" alt="Brightness set to -0.1, -0.05, 0, 0.1 and 0.2"><div class="ms-vals" style="--n:5"><span>-0.1</span><span>-0.05</span><span>0</span><span class="def">0.1</span><span>0.2</span></div></div>

<div class="ms-prop" id="mts-matte-contrast-a"><div class="ph"><strong>Contrast A</strong><code>Contrast A</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The gamma (power) of the matcap image. The higher the value, the deeper the dark side and the stronger the shading.</p><img loading="lazy" src="../../assets/img/spec/mts_matte_contrast_a.webp" alt="Contrast A set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-matte-contrast-b"><div class="ph"><strong>Contrast B</strong><code>Contrast B</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The contrast of the matte layer. The higher the value, the clearer the difference between light and dark.</p><img loading="lazy" src="../../assets/img/spec/mts_matte_contrast_b.webp" alt="Contrast B set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

### Brush Strokes

<div class="ms-prop" id="mts-brush-strokes-stroke-strength"><div class="ph"><strong>Stroke Strength</strong><code>Stroke Strength</code><span class="chips"><span class="chip p">Default 0.3</span><span class="chip">Compared 0 → 2</span></span></div><p class="desc">How strongly the light/dark border is broken up like brush marks.</p><img loading="lazy" src="../../assets/img/spec/mts_stroke_strength.webp" alt="Stroke Strength set to 0, 0.5, 1, 1.5 and 2"><div class="ms-vals" style="--n:5"><span>0</span><span>0.5</span><span>1</span><span>1.5</span><span>2</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-scale"><div class="ph"><strong>Stroke Scale</strong><code>Stroke Scale</code><span class="chips"><span class="chip p">Default 3</span><span class="chip">Compared 1 → 8</span></span></div><p class="desc">The size of the brush marks. The higher the value, the finer the strokes.</p><img loading="lazy" src="../../assets/img/spec/mts_stroke_scale.webp" alt="Stroke Scale set to 1, 2, 3, 5 and 8"><div class="ms-vals" style="--n:5"><span>1</span><span>2</span><span class="def">3</span><span>5</span><span>8</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-stretch"><div class="ph"><strong>Stroke Stretch</strong><code>Stroke Stretch</code><span class="chips"><span class="chip p">Default 4</span><span class="chip">Compared 1 → 50</span></span></div><p class="desc">The aspect ratio of the brush marks. Raise it for long, thin strokes.</p><img loading="lazy" src="../../assets/img/spec/mts_stroke_stretch.webp" alt="Stroke Stretch set to 1, 4, 10, 25 and 50"><div class="ms-vals" style="--n:5"><span>1</span><span class="def">4</span><span>10</span><span>25</span><span>50</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-angle"><div class="ph"><strong>Stroke Angle</strong><code>Stroke Angle</code><span class="chips"><span class="chip p">Default 35</span><span class="chip">Compared -90 → 90</span></span></div><p class="desc">The direction of the strokes (in degrees).</p><img loading="lazy" src="../../assets/img/spec/mts_stroke_angle.webp" alt="Stroke Angle set to -90, -45, 0, 45 and 90"><div class="ms-vals" style="--n:5"><span>-90</span><span>-45</span><span>0</span><span>45</span><span>90</span></div></div>

<div class="ms-prop" id="mts-brush-strokes-stroke-edge"><div class="ph"><strong>Stroke Edge</strong><code>Stroke Edge</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How hard the stroke edges are. At 1 the brush marks disappear and the original border comes back.</p><img loading="lazy" src="../../assets/img/spec/mts_stroke_edge.webp" alt="Stroke Edge set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

### Paint Finish

<div class="ms-prop" id="mts-paint-finish-color-variation"><div class="ph"><strong>Color Variation</strong><code>Color Variation</code><span class="chips"><span class="chip p">Default 0.057</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">Varies the color from patch to patch of paint. When the tone is black and white (grayscale), you will barely see any change.</p><img loading="lazy" src="../../assets/img/spec/mts_paint_color_var.webp" alt="Color Variation set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-paint-finish-value-variation"><div class="ph"><strong>Value Variation</strong><code>Value Variation</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">Varies the brightness from patch to patch.</p><img loading="lazy" src="../../assets/img/spec/mts_paint_value_var.webp" alt="Value Variation set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span class="def">0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-paint-finish-paper"><div class="ph"><strong>Paper</strong><code>Paper</code><span class="chips"><span class="chip p">Default 0.812</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strong the paper grain (roughness) is. The image uses a light tone with Paper Scale 30 and Screen-Space Paper 0.</p><img loading="lazy" src="../../assets/img/spec/mts_paint_paper.webp" alt="Paper set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### Watercolor

<div class="ms-prop" id="mts-watercolor-bleed"><div class="ph"><strong>Bleed</strong><code>Bleed</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How much the light/dark border bleeds.</p><img loading="lazy" src="../../assets/img/spec/mts_wc_bleed.webp" alt="Bleed set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-watercolor-bleed-scale"><div class="ph"><strong>Bleed Scale</strong><code>Bleed Scale</code><span class="chips"><span class="chip p">Default 12</span><span class="chip">Compared 2 → 80</span></span></div><p class="desc">The size of the bleed pattern. The higher the value, the finer it gets.</p><img loading="lazy" src="../../assets/img/spec/mts_wc_bleed_scale.webp" alt="Bleed Scale set to 2, 6, 12, 30 and 80"><div class="ms-vals" style="--n:5"><span>2</span><span>6</span><span class="def">12</span><span>30</span><span>80</span></div></div>

<div class="ms-prop" id="mts-watercolor-edge-darkening"><div class="ph"><strong>Edge Darkening</strong><code>Edge Darkening</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How much paint pools at the edges and darkens them.</p><img loading="lazy" src="../../assets/img/spec/mts_wc_edge.webp" alt="Edge Darkening set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-watercolor-granulation"><div class="ph"><strong>Granulation</strong><code>Granulation</code><span class="chips"><span class="chip p">Default 0.3</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The graininess of the pigment particles.</p><img loading="lazy" src="../../assets/img/spec/mts_wc_granulation.webp" alt="Granulation set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mts-watercolor-wash"><div class="ph"><strong>Wash</strong><code>Wash</code><span class="chips"><span class="chip p">Default 0.15</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">Lightens everything, as if thinned with water.</p><img loading="lazy" src="../../assets/img/spec/mts_wc_wash.webp" alt="Wash set to 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### Transparency

<div class="ms-prop" id="mts-transparency-alpha-clip"><div class="ph"><strong>Alpha Clip</strong><code>Alpha Clip</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0.1 → 0.9</span></span></div><p class="desc">Cuts out the parts where the PNG's alpha is below this value. The image shows a flat polygon with a star-shaped PNG whose alpha is strongest at the center. The higher the value, the more the thin parts are trimmed away and the smaller the shape gets.</p><img loading="lazy" src="../../assets/img/spec/mts_alpha_clip.webp" alt="Alpha Clip set to 0.1, 0.3, 0.5, 0.7 and 0.9"><div class="ms-vals" style="--n:5"><span>0.1</span><span>0.3</span><span class="def">0.5</span><span>0.7</span><span>0.9</span></div></div>
