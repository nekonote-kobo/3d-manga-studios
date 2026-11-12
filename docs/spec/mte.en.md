# <i class="bi bi-eye-fill"></i> Manga Toon Eye <span class="new-label">NEW</span> {data-toc-label="Manga Toon Eye"}

<figure class="ms-page-hero"><img src="../../assets/img/hero/hero_mte.webp" alt="A render using Manga Toon Eye"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTE · Material › Manga Toon Eye [material name] › MTS Parallax Eye</p>

A <strong>parallax</strong> eye that makes the iris look like it sits inside the curved eyeball. The material shows only one outer group; inside it, the steps run in the order "position → look → effect → composite". The look settings are listed in the Properties Editor, Material tab, under "Manga Toon Eye".

## <i class="bi bi-layers-fill"></i> Layer stack

Layers are drawn on the curved eyeball, from the bottom layer up.

<div class="ms-stack" id="stack-mte"></div>

## <i class="bi bi-diagram-2-fill"></i> Node tree

<div class="ms-graph"><div class="flow"><div class="ms-node"><div class="hd h-geo">Drivers (automatic)</div><div class="bd">Eye position, gaze X / Y<i>From the look target</i><i>Left/right, rotation</i></div></div><div class="wire"></div><div class="ms-node big sel"><div class="hd h-group">Manga Toon Eye [material name]</div><div class="bd">MTS Parallax Eye<i>Position → look → effect → composite</i><i>The image (iris texture) is inside too</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-group">Screen Tone</div><div class="bd">Screentone for the manga style</div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">Material Output</div><div class="bd">Surface</div></div></div></div>


!!! note ""
    There are two styles: "Anime" and "Manga" (black and white, ink lines). The group has a version number; older groups are rebuilt automatically and keep their values.

## <i class="bi bi-sliders2"></i> Inputs

Each row of 5 spheres (eye, mouth, sky) shows **the value changing from left to right**. The values are written under each image. The yellow cell is the setting's default; all other settings stay at their defaults.

??? info "MTS Parallax Eye settings"

    | Panel | Setting | English Name | Default |
    |---|---|---|---|
    | Eyeball | [Eye Scale](#mte-eyeball-eye-scale) | `Eye Scale` | 1 |
    | Eyeball | [Brightness](#mte-eyeball-brightness) | `Brightness` | 1 |
    | Eye Effect | [Effect Image](#mte-eye-effect-image) | — | None |
    | Eye Effect | [Effect Placement](#mte-eye-effect-placement) | `Follow Iris` | Follow Iris |
    | Eye Effect | [Eye Display](#mte-eye-effect-display) | `Eye Display` | Eye + Effect |
    | Eye Effect | [Effect Size](#mte-eye-effect-size) | `Effect Size` | 1 |
    | Eye Effect | [Effect Brightness](#mte-eye-effect-brightness) | `Effect Brightness` | 1 |
    | Eye Effect | [Effect X](#mte-eye-effect-x) / [Y](#mte-eye-effect-y) | `Effect Position` | 0 / 0 |
    | Iris Color | [Iris Size](#mte-iris-color-iris-size) | `Iris Size` | 0.52 |
    | Pupil | [Pupil Size](#mte-pupil-pupil-size) | `Pupil Size` | 0.42 |
    | Pupil | [Pupil Shape](#mte-pupil-pupil-shape) | `Pupil Shape` | 0 |
    | Highlights | [Highlight Size](#mte-highlights-highlight-size) | `Highlight Size` | 0.2 |
    | Highlights | [Highlight X](#mte-highlights-highlight-x) | `Highlight X` | 0.28 |
    | Lid Shadow | [Lid Shadow Height](#mte-lid-shadow-lid-shadow-height) | `Lid Shadow Height` | 0.5 |
    | Iris Texture | [Texture Mix](#mte-iris-texture-mix) | `Texture Mix` | 1 |
    | Iris Texture | [Texture Multiply](#mte-iris-texture-multiply) | `Texture Multiply` | 0 |
    | Iris Texture | [Texture Scale](#mte-iris-texture-scale) | `Texture Scale` | 1 |
    | Iris Texture | [Texture Rotation](#mte-iris-texture-rotation) | `Texture Rotation` | 0° |
    | Iris Rim / Pattern | [Limbal Ring](#mte-iris-rim-pattern-limbal-ring) | `Limbal Ring` | 0.7 |
    | Iris Rim / Pattern | [Pattern Amount](#mte-iris-rim-pattern-pattern-amount) | `Pattern Amount` | 0.35 |
    | Iris Rim / Pattern | [Pattern Scale](#mte-iris-rim-pattern-pattern-scale) | `Pattern Scale` | 1 |
    | Iris Outline | [Ink Width](#mte-iris-outline-ink-width) | `Ink Width` | 0.08 |
    | Lower Glow | [Glow Amount](#mte-lower-glow-glow-amount) | `Glow Amount` | 0.5 |
    | Lower Glow | [Glow Offset](#mte-lower-glow-glow-offset) | `Glow Offset` | 0.45 |
    | Light Shading | [Shadow Threshold](#mte-light-shading-shadow-threshold) | `Shadow Threshold` | 1 |
    | Sclera | [Sclera Shade](#mte-sclera-sclera-shade) | `Sclera Shade` | 0.35 |

### Eyeball

<div class="ms-prop" id="mte-eyeball-eye-scale"><div class="ph"><strong>Eye Scale</strong><code>Eye Scale</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0.6 → 1.4</span></span></div><p class="desc">Scales the iris and pupil together.</p><img loading="lazy" src="../../assets/img/spec/mte_look_x.webp" alt="Eye Scale compared at 0.6, 0.8, 1, 1.2 and 1.4"><div class="ms-vals" style="--n:5"><span>0.6</span><span>0.8</span><span class="def">1</span><span>1.2</span><span>1.4</span></div></div>

<div class="ms-prop" id="mte-eyeball-brightness"><div class="ph"><strong>Brightness</strong><code>Brightness</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0.4 → 2.5</span></span></div><p class="desc">The brightness of the whole eye.</p><img loading="lazy" src="../../assets/img/spec/mte_brightness.webp" alt="Brightness compared at 0.4, 0.7, 1, 1.5 and 2.5"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.7</span><span class="def">1</span><span>1.5</span><span>2.5</span></div></div>

### Eye Effect

Lays an image with transparency (PNG) on the very top layer of the eye. You can draw manga "eye expressions" such as hearts, sparkles or swirls straight into the eye. Pick an image under Properties Editor › Material › the eye's "Eye Effect", and the settings below appear.

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(110px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../../assets/img/spec/eye_fx_sparkle.png" alt="" style="background:#3a3a3a;object-fit:contain">Sparkle</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/spec/eye_fx_heart.png" alt="" style="background:#3a3a3a;object-fit:contain">Heart</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/spec/eye_fx_swirl.png" alt="" style="background:#3a3a3a;object-fit:contain">Swirl</div>
</div>

<p style="font-size:.64rem;color:var(--ms-tone)">The PNGs used for the comparisons (512 × 512, transparent background). All are original images you are free to use.</p>

<div class="ms-prop" id="mte-eye-effect-image"><div class="ph"><strong>Effect Image</strong><code>Image</code><span class="chips"><span class="chip">PNG (with transparency)</span></span></div><p class="desc">The image to lay on top. The eye below shows through the transparent parts. The rightmost image uses the "Whole Eye" placement, so the effect spreads beyond the iris.</p><img loading="lazy" src="../../assets/img/spec/mte_fx_images.webp" alt="Comparison of no effect, sparkle, heart, swirl, and sparkle (Whole Eye)"><div class="ms-vals" style="--n:5"><span>None</span><span>Sparkle</span><span>Heart</span><span>Swirl</span><span>Sparkle (Whole Eye)</span></div></div>

<div class="ms-prop" id="mte-eye-effect-placement"><div class="ph"><strong>Effect Placement</strong><code>Follow Iris</code><span class="chips"><span class="chip p">Default Follow Iris</span></span></div><p class="desc"><b>Follow Iris</b>: the image center sticks to the iris center and moves with the gaze. Its size is also set to match the iris.<br><b>Whole Eye</b>: the image covers the whole eye plane and does not move when the gaze moves.<br><b>Mirror Left Eye</b>: when on, the image on the left eye is flipped horizontally so both eyes are symmetrical.</p></div>

<div class="ms-prop" id="mte-eye-effect-display"><div class="ph"><strong>Eye Display</strong><code>Eye Display</code><span class="chips"><span class="chip p">Default Eye + Effect</span></span></div><p class="desc">Use "Eye Display" in the Sidebar to choose what is drawn in the eye. "Sclera + Effect" hides the iris and highlights and draws only the effect on the sclera. "Hide Eye" draws nothing. With Auto Keying on, a keyframe with no interpolation (constant) is inserted.</p><img loading="lazy" src="../../assets/img/spec/mte_fx_display.webp" alt="Comparison of Eye, Eye + Effect, Sclera + Effect and Hide Eye"><div class="ms-vals" style="--n:5"><span>Eye</span><span class="def">Eye + Effect</span><span>Sclera + Effect</span><span>Hide Eye</span><span> </span></div></div>

<div class="ms-prop" id="mte-eye-effect-size"><div class="ph"><strong>Effect Size</strong><code>Effect Size</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0.4 → 1.6</span></span></div><p class="desc">The size of the effect. With Follow Iris, 1 is about the same size as the iris.</p><img loading="lazy" src="../../assets/img/spec/mte_fx_size.webp" alt="Effect Size compared at 0.4, 0.7, 1, 1.3 and 1.6"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.7</span><span class="def">1</span><span>1.3</span><span>1.6</span></div></div>

<div class="ms-prop" id="mte-eye-effect-brightness"><div class="ph"><strong>Effect Brightness</strong><code>Effect Brightness</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0.25 → 2</span></span></div><p class="desc">The brightness of the effect. Lower values make it darker and recede; higher values make it bright and stand out.</p><img loading="lazy" src="../../assets/img/spec/mte_fx_brightness.webp" alt="Effect Brightness compared at 0.25, 0.5, 1, 1.5 and 2"><div class="ms-vals" style="--n:5"><span>0.25</span><span>0.5</span><span class="def">1</span><span>1.5</span><span>2</span></div></div>

<div class="ms-prop" id="mte-eye-effect-x"><div class="ph"><strong>Effect X</strong><code>Effect Position X</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared -0.3 → 0.3</span></span></div><p class="desc">Shifts the effect left or right.</p><img loading="lazy" src="../../assets/img/spec/mte_fx_x.webp" alt="Effect X compared at -0.3, -0.15, 0, 0.15 and 0.3"><div class="ms-vals" style="--n:5"><span>-0.3</span><span>-0.15</span><span class="def">0</span><span>0.15</span><span>0.3</span></div></div>

<div class="ms-prop" id="mte-eye-effect-y"><div class="ph"><strong>Effect Y</strong><code>Effect Position Y</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared -0.3 → 0.3</span></span></div><p class="desc">Shifts the effect up or down. You can also move it with the control pad in the panel (drag the dot), or with a bone (Effect Bone).</p><img loading="lazy" src="../../assets/img/spec/mte_fx_y.webp" alt="Effect Y compared at -0.3, -0.15, 0, 0.15 and 0.3"><div class="ms-vals" style="--n:5"><span>-0.3</span><span>-0.15</span><span class="def">0</span><span>0.15</span><span>0.3</span></div></div>

### Iris Color

<div class="ms-prop" id="mte-iris-color-iris-size"><div class="ph"><strong>Iris Size</strong><code>Iris Size</code><span class="chips"><span class="chip p">Default 0.52</span><span class="chip">Compared 0.3 → 0.8</span></span></div><p class="desc">The size of the iris.</p><img loading="lazy" src="../../assets/img/spec/mte_iris_size.webp" alt="Iris Size compared at 0.3, 0.4, 0.52, 0.65 and 0.8"><div class="ms-vals" style="--n:5"><span>0.3</span><span>0.4</span><span class="def">0.52</span><span>0.65</span><span>0.8</span></div></div>

### Pupil

<div class="ms-prop" id="mte-pupil-pupil-size"><div class="ph"><strong>Pupil Size</strong><code>Pupil Size</code><span class="chips"><span class="chip p">Default 0.42</span><span class="chip">Compared 0.1 → 0.8</span></span></div><p class="desc">The size of the pupil.</p><img loading="lazy" src="../../assets/img/spec/mte_pupil_size.webp" alt="Pupil Size compared at 0.1, 0.25, 0.42, 0.6 and 0.8"><div class="ms-vals" style="--n:5"><span>0.1</span><span>0.25</span><span class="def">0.42</span><span>0.6</span><span>0.8</span></div></div>

<div class="ms-prop" id="mte-pupil-pupil-shape"><div class="ph"><strong>Pupil Shape</strong><code>Pupil Shape</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared 0 → 3</span></span></div><p class="desc">0 = circle, 1 = polygon, 2 = star, 3 = heart.</p><img loading="lazy" src="../../assets/img/spec/mte_pupil_shape.webp" alt="Pupil Shape compared at 0, 1, 2 and 3"><div class="ms-vals" style="--n:4"><span class="def">0</span><span>1</span><span>2</span><span>3</span></div></div>

### Highlights

<div class="ms-prop" id="mte-highlights-highlight-size"><div class="ph"><strong>Highlight Size</strong><code>Highlight Size</code><span class="chips"><span class="chip p">Default 0.2</span><span class="chip">Compared 0.05 → 0.45</span></span></div><p class="desc">The size of the largest highlight (Highlight 1).</p><img loading="lazy" src="../../assets/img/spec/mte_highlight_size.webp" alt="Highlight Size compared at 0.05, 0.12, 0.2, 0.3 and 0.45"><div class="ms-vals" style="--n:5"><span>0.05</span><span>0.12</span><span class="def">0.2</span><span>0.3</span><span>0.45</span></div></div>

<div class="ms-prop" id="mte-highlights-highlight-x"><div class="ph"><strong>Highlight X</strong><code>Highlight X</code><span class="chips"><span class="chip p">Default 0.28</span><span class="chip">Compared -0.6 → 0.6</span></span></div><p class="desc">The left/right position of Highlight 1.</p><img loading="lazy" src="../../assets/img/spec/mte_highlight_x.webp" alt="Highlight X compared at -0.6, -0.3, 0, 0.3 and 0.6"><div class="ms-vals" style="--n:5"><span>-0.6</span><span>-0.3</span><span>0</span><span>0.3</span><span>0.6</span></div></div>

### Lid Shadow

<div class="ms-prop" id="mte-lid-shadow-lid-shadow-height"><div class="ph"><strong>Lid Shadow Height</strong><code>Lid Shadow Height</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared -1 → 1</span></span></div><p class="desc">How far the upper eyelid's shadow comes down. The more negative the value, the lower the shadow reaches, darkening the sclera and iris. Positive values pull the shadow up, and at 1 it is almost gone (with strength 1 and a deep purple shadow color).</p><img loading="lazy" src="../../assets/img/spec/mte_lid_height.webp" alt="Lid Shadow Height compared at -1, -0.5, 0, 0.5 and 1"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span>0</span><span class="def">0.5</span><span>1</span></div></div>

### Iris Texture

Puts an image on the iris. When you pick an image, it fills the iris, with the image center at the iris center. The pupil, highlights and reflection are drawn on top of the texture. If the slot does not appear on an older eye, run the setup again to enable it.

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(110px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../../assets/img/spec/eye_iris_tiles.png" alt="An image of differently colored tiles in a 4 × 4 grid" style="background:#3a3a3a;object-fit:contain">Image used for the comparisons</div>
</div>

<div class="ms-prop" id="mte-iris-texture-mix"><div class="ph"><strong>Texture Mix</strong><code>Texture Mix</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How much the texture covers the iris color. 0 gives the original iris color; 1 gives the texture's color.</p><img loading="lazy" src="../../assets/img/spec/mte_itex_mix.webp" alt="Texture Mix compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mte-iris-texture-multiply"><div class="ph"><strong>Texture Multiply</strong><code>Texture Multiply</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The higher the value, the more the texture is multiplied with the iris color. Use it when you want to keep the iris color and use only the light and dark of the pattern.</p><img loading="lazy" src="../../assets/img/spec/mte_itex_multiply.webp" alt="Texture Multiply compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span class="def">0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-iris-texture-scale"><div class="ph"><strong>Texture Scale</strong><code>Texture Scale</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0.5 → 2</span></span></div><p class="desc">The size of the texture. At 1 it fills the iris. Below 1, the area outside the image shows the original iris color; above 1, the center of the image is enlarged.</p><img loading="lazy" src="../../assets/img/spec/mte_itex_scale.webp" alt="Texture Scale compared at 0.5, 0.75, 1, 1.5 and 2"><div class="ms-vals" style="--n:5"><span>0.5</span><span>0.75</span><span class="def">1</span><span>1.5</span><span>2</span></div></div>

<div class="ms-prop" id="mte-iris-texture-rotation"><div class="ph"><strong>Texture Rotation</strong><code>Texture Rotation</code><span class="chips"><span class="chip p">Default 0°</span><span class="chip">Compared 0° → 180°</span></span></div><p class="desc">Rotates the texture around the iris center (shown with the colored-tile image; the position of the red row at the top shows the direction). Turn on "Texture Mirror Left" to flip the texture horizontally on the left eye.</p><img loading="lazy" src="../../assets/img/spec/mte_itex_rotation.webp" alt="Texture Rotation compared at 0°, 45°, 90°, 135° and 180°"><div class="ms-vals" style="--n:5"><span class="def">0°</span><span>45°</span><span>90°</span><span>135°</span><span>180°</span></div></div>

### Iris Rim / Pattern

<div class="ms-prop" id="mte-iris-rim-pattern-limbal-ring"><div class="ph"><strong>Limbal Ring</strong><code>Limbal Ring</code><span class="chips"><span class="chip p">Default 0.7</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">A ring that darkens the edge of the iris.</p><img loading="lazy" src="../../assets/img/spec/mte_limbal.webp" alt="Limbal Ring compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-iris-rim-pattern-pattern-amount"><div class="ph"><strong>Pattern Amount</strong><code>Pattern Amount</code><span class="chips"><span class="chip p">Default 0.35</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The strength of the radial pattern in the iris.</p><img loading="lazy" src="../../assets/img/spec/mte_pattern.webp" alt="Pattern Amount compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-iris-rim-pattern-pattern-scale"><div class="ph"><strong>Pattern Scale</strong><code>Pattern Scale</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0.3 → 8</span></span></div><p class="desc">How fine the pattern is (with Pattern Amount 0.8).</p><img loading="lazy" src="../../assets/img/spec/mte_pattern_scale.webp" alt="Pattern Scale compared at 0.3, 1, 2, 4 and 8"><div class="ms-vals" style="--n:5"><span>0.3</span><span class="def">1</span><span>2</span><span>4</span><span>8</span></div></div>

### Iris Outline

<div class="ms-prop" id="mte-iris-outline-ink-width"><div class="ph"><strong>Ink Width</strong><code>Ink Width</code><span class="chips"><span class="chip p">Default 0.08</span><span class="chip">Compared 0 → 0.3</span></span></div><p class="desc">The ink line around the iris (when turned on).</p><img loading="lazy" src="../../assets/img/spec/mte_ink_width.webp" alt="Ink Width compared at 0, 0.05, 0.1, 0.2 and 0.3"><div class="ms-vals" style="--n:5"><span>0</span><span>0.05</span><span>0.1</span><span>0.2</span><span>0.3</span></div></div>

### Lower Glow

<div class="ms-prop" id="mte-lower-glow-glow-amount"><div class="ph"><strong>Glow Amount</strong><code>Glow Amount</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The bright reflection in the lower part of the iris.</p><img loading="lazy" src="../../assets/img/spec/mte_glow.webp" alt="Glow Amount compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mte-lower-glow-glow-offset"><div class="ph"><strong>Glow Offset</strong><code>Glow Offset</code><span class="chips"><span class="chip p">Default 0.45</span><span class="chip">Compared -1 → 1</span></span></div><p class="desc">The position of the reflection. Negative values move it up.</p><img loading="lazy" src="../../assets/img/spec/mte_glow_offset.webp" alt="Glow Offset compared at -1, -0.5, 0, 0.45 and 1"><div class="ms-vals" style="--n:5"><span>-1</span><span>-0.5</span><span>0</span><span class="def">0.45</span><span>1</span></div></div>

### Light Shading

<div class="ms-prop" id="mte-light-shading-shadow-threshold"><div class="ph"><strong>Shadow Threshold</strong><code>Shadow Threshold</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 4</span></span></div><p class="desc">How much shadow the RGB lights cast on the eye. Raising it spreads the shadow and darkens the eye.</p><img loading="lazy" src="../../assets/img/spec/mte_shadow_threshold.webp" alt="Shadow Threshold compared at 0, 0.5, 1, 2 and 4"><div class="ms-vals" style="--n:5"><span>0</span><span>0.5</span><span class="def">1</span><span>2</span><span>4</span></div></div>

### Sclera

<div class="ms-prop" id="mte-sclera-sclera-shade"><div class="ph"><strong>Sclera Shade</strong><code>Sclera Shade</code><span class="chips"><span class="chip p">Default 0.35</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The shading around the edge of the sclera.</p><img loading="lazy" src="../../assets/img/spec/mte_sclera_shade.webp" alt="Sclera Shade compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>
