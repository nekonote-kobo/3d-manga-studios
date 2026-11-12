# <i class="bi bi-grid-3x3"></i> Manga Toon Ground (Ground) <span class="new-label">NEW</span> {data-toc-label="Manga Toon Ground (Ground)"}

<figure class="ms-page-hero"><img src="../../assets/img/hero/hero_mtg.webp" alt="A render using Manga Toon Ground"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTG · Material › Manga Toon Ground</p>

A material made just for the ground under your characters. It draws the shadows of the key, fill and back lights, each switchable on or off per light, as a <strong>flat shadow color (screentone can be used too)</strong>. You can also make the ground transparent so only the shadow lies over the background, or fade out its edges so it blends into the background.

<img src="../../assets/img/spec/mtg_hero.webp" alt="Ground using Manga Toon Ground (texture, bumps, AO, key light shadow)" style="border:3px solid var(--ms-ink)">

## <i class="bi bi-layers-fill"></i> Layer stack

The texture, bumps, shadows and AO are multiplied over the ground color.

<div class="ms-stack" id="stack-mtg"></div>

## <i class="bi bi-diagram-2-fill"></i> Node tree

<div class="ms-graph"><div class="flow"><div class="col"><div class="ms-node"><div class="hd h-tex">MTG Texture Image</div><div class="bd">Ground image<i>Tiled, projected from above</i></div></div><div class="ms-node"><div class="hd h-tex">MTG Normal Map</div><div class="bd">Bump image</div></div><div class="ms-node"><div class="hd h-math">MTG Fade Position → Fade Ramp</div><div class="bd">How the edges fade<i>Circular / along the edges</i></div></div><div class="ms-node"><div class="hd h-math">Drivers (automatic)</div><div class="bd">Shadow light direction and strength</div></div></div><div class="wire"></div><div class="ms-node big sel"><div class="hd h-group">Manga Toon Ground</div><div class="bd">Shadows, bumps, AO, edge fade<i>Output is emission (flat fill)</i><i>Shadow Only = transparent × shadow color</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">Material Output</div><div class="bd">Surface</div></div></div></div>

<div class="ms-pipe"><div><em>1</em><b>Find the shadows</b><span>White diffuse → Shader to RGB → R, G, B (key, fill, back). Divided by the unshadowed brightness so that lit = 1 and shadow = 0</span></div><div><em>2</em><b>Set the edge</b><span>Shadow Softness plus the Shadow Blur width make the shadow crisp or soft</span></div><div><em>3</em><b>Multiply</b><span>Ground color × texture × bump shade → bump highlights → shadows (per light) × AO</span></div><div><em>4</em><b>Output</b><span>Flat fill with emission. Shadow Only and Fade Edges switch to transparent</span></div></div>

!!! bubble "Only the shadow lights light the ground"
    The ground gets three "ground shadow lights" per light group, with the same direction, color and strength as the key, fill and back lights. Regular lights do not light the ground (they are excluded with Light Linking), so raising Shadow Blur (the shadow light angle) does not change the character's shadows.

## <i class="bi bi-sliders2"></i> Inputs

Each row of 5 images shows **the value changing from left to right**. The values are written under each image. The yellow cell is the setting's default. Images use Texture Strength 0 and no normal map; all settings other than the one being changed stay at their defaults.

??? info "Manga Toon Ground settings"

    | Panel | Setting | English Name | Default | Description |
    |---|---|---|---|---|
    | Ground | [Shadow Only](#mtg-shadow-only) | `Shadow Only` | Off | Hides the ground and leaves only the shadow over the background |
    | Ground | Ground Color | `Ground Color` | White | The ground color (a screentone material can also be plugged in) |
    | Texture | Ground Texture | `Ground Texture` | (automatic) | Filled in automatically from the image you choose |
    | Texture | [Texture Strength](#mtg-texture-strength) | `Texture Strength` | 1 | How strongly the texture shows on the ground |
    | Texture | Grayscale Texture | `Grayscale Texture` | Off | Uses the texture in black and white |
    | Texture | Ground Normal | `Ground Normal` | (automatic) | Filled in automatically from the texture and normal map |
    | Texture | Bump Shade Color | `Bump Shade Color` | Gray 0.45 | The color multiplied on the sides of bumps facing away from the light (also shows inside shadows) |
    | Texture | [Bump Shade Threshold](#mtg-bump-shade-threshold) | `Bump Shade Threshold` | 0.75 | The higher it is, the more even gentle bumps get shaded |
    | Texture | Bump Shade Softness | `Bump Shade Softness` | 0.3 | 0 = two steps like cel shading, 1 = smooth |
    | Texture | Bump Highlights | `Bump Highlights` | On | Brightens the sides of bumps facing the light (not shown inside that light's shadow) |
    | Texture | Bump Highlight Color | `Bump Highlight Color` | White | The color of the bump highlights |
    | Texture | [Bump Highlight Strength](#mtg-bump-highlight-strength) | `Bump Highlight Strength` | 0.6 | How strongly the highlights show |
    | Texture | Bump Highlight Threshold | `Bump Highlight Threshold` | 0.3 | The lower it is, the more highlights appear |
    | Shadow | [Key Light Shadows](#mtg-key-light-shadows) | `Key Light Shadows` | On | Draws the key light's shadow |
    | Shadow | Fill Light Shadows | `Fill Light Shadows` | Off | Draws the fill light's shadow |
    | Shadow | Back Light Shadows | `Back Light Shadows` | Off | Draws the back light's shadow |
    | Shadow | Ground Shadow Color | `Ground Shadow Color` | Gray 0.25 | The shadow color (a screentone material can also be plugged in) |
    | Shadow | [Ground Shadow Opacity](#mtg-ground-shadow-opacity) | `Ground Shadow Opacity` | 1 | How strongly the shadow shows (0 = no shadow) |
    | Shadow | [Shadow Blur](#mtg-shadow-blur) | `Shadow Blur` | 0 | How blurry the ground shadow is. The character's shadows do not change |
    | Shadow | Shadow Softness | `Shadow Softness` | 0.1 | How soft the shadow's edge is (0 = crisp) |
    | Ambient Occlusion | Ground AO | `Ground AO` | Off | Darkens the ground near objects and where they touch it. Shadows there get darker too |
    | Ambient Occlusion | Ground AO Color | `Ground AO Color` | Gray 0.3 | The color multiplied where light is blocked (screentone can be used too) |
    | Ambient Occlusion | [Ground AO Strength](#mtg-ground-ao-strength) | `Ground AO Strength` | 0.8 | How much AO darkens the ground |
    | Ambient Occlusion | [Ground AO Distance](#mtg-ground-ao-distance) | `Ground AO Distance` | 1 m | How far from objects the darkening reaches |
    | Ambient Occlusion | [Ground AO Contrast](#mtg-ground-ao-contrast) | `Ground AO Contrast` | 0 | 0 = smooth blur, 1 = crisp like a manga contact shadow |
    | Ambient Occlusion | Ground AO Tone Contrast | `Ground AO Tone Contrast` | 0 | + = stronger difference between dark and light areas, − = flatter |
    | Ambient Occlusion | Ground AO Brightness | `Ground AO Brightness` | 0 | + = lighter, − = darker |
    | Ambient Occlusion | AO Only in Shadows | `AO Only in Shadows` | Off | Shows AO only inside the shadow lights' shadows (clipping mask) |
    | Fade | Fade Edges | `Fade Edges` | Off | Fades out the ground far from its center so it blends into the background |
    | Fade | Fade Ramp | `Fade Ramp` | 1 | Filled in automatically from the fade Color Ramp |
    | Fade | Fade Shape | `Fade Shape` | 1 | 0 = circular from the center, 1 = along the ground's edges (MTG Fade Position) |
    | Fade | [Fade Radius](#mtg-fade-radius) | `Fade Radius` | 30 m | The radius of the circle where the ground fades out (MTG Fade Position) |
    | Fade | Edge Fade Width | `Edge Fade Width` | 5 m | How wide the fade is, measured from the ground's edges (MTG Fade Position) |
    | Lights (automatic) | Key / Fill / Back light direction and strength | `… Light Direction / Strength` | (automatic) | Filled in automatically by drivers from the ground shadow lights. Strength 0 = no shadow from that light |

### Ground

<div class="ms-prop" id="mtg-shadow-only" style="max-width:520px"><div class="ph"><strong>Shadow Only</strong><code>Shadow Only</code><span class="chips"><span class="chip p">Default Off</span><span class="chip">Compared Off → On</span></span></div><p class="desc">Hides the ground and leaves only the shadow over the background. When on, the ground (texture) disappears and only the shadow is multiplied over the background. In the comparison the background is set to "Screentone": with it on, the ground disappears and only the shadow stays on the dot background.</p><img loading="lazy" src="../../assets/img/spec/mtg_shonly.webp" alt="Shadow Only compared Off and On"><div class="ms-vals" style="--n:2"><span class="def">Off</span><span>On</span></div></div>

### Texture

<div class="ms-prop" id="mtg-texture-strength"><div class="ph"><strong>Texture Strength</strong><code>Texture Strength</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strongly the texture shows on the ground. Images use the sample concrete tile (no normal map).</p><img loading="lazy" src="../../assets/img/spec/mtg_tex.webp" alt="Texture Strength compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mtg-bump-shade-threshold"><div class="ph"><strong>Bump Shade Threshold</strong><code>Bump Shade Threshold</code><span class="chips"><span class="chip p">Default 0.75</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The higher it is, the more even gentle bumps get shaded. Images use a normal map with highlights off.</p><img loading="lazy" src="../../assets/img/spec/mtg_bumpth.webp" alt="Bump Shade Threshold compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span class="def">0.75</span><span>1</span></div></div>

<div class="ms-prop" id="mtg-bump-highlight-strength"><div class="ph"><strong>Bump Highlight Strength</strong><code>Bump Highlight Strength</code><span class="chips"><span class="chip p">Default 0.6</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strongly the highlights show. Images use a normal map.</p><img loading="lazy" src="../../assets/img/spec/mtg_bumphi.webp" alt="Bump Highlight Strength compared at 0, 0.3, 0.6, 0.8 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.3</span><span class="def">0.6</span><span>0.8</span><span>1</span></div></div>

### Shadow

<div class="ms-prop" id="mtg-key-light-shadows"><div class="ph"><strong>Shadows from</strong><code>Key / Fill / Back Light Shadows</code><span class="chips"><span class="chip p">Default Key only</span><span class="chip">Compared Key → all 3</span></span></div><p class="desc">Turns the shadow of each of the key, fill and back lights on or off. Where shadows overlap, they get darker.</p><img loading="lazy" src="../../assets/img/spec/mtg_lights.webp" alt="Shadow-casting lights compared: key, fill, back, key + fill, and all 3"><div class="ms-vals" style="--n:5"><span class="def">Key</span><span>Fill</span><span>Back</span><span>Key + Fill</span><span>All 3</span></div></div>

<div class="ms-prop" id="mtg-ground-shadow-opacity"><div class="ph"><strong>Ground Shadow Opacity</strong><code>Ground Shadow Opacity</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How strongly the shadow shows (0 = no shadow).</p><img loading="lazy" src="../../assets/img/spec/mtg_opacity.webp" alt="Ground Shadow Opacity compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mtg-shadow-blur"><div class="ph"><strong>Shadow Blur</strong><code>Shadow Blur</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How blurry the ground shadow is. The character's shadows do not change. Shadow Blur 1 = a shadow light angle of 20°.</p><img loading="lazy" src="../../assets/img/spec/mtg_blur.webp" alt="Shadow Blur compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span class="def">0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### Ambient Occlusion

<div class="ms-prop" id="mtg-ground-ao-strength"><div class="ph"><strong>Ground AO Strength</strong><code>Ground AO Strength</code><span class="chips"><span class="chip p">Default 0.8</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">How much AO darkens the ground. Images use AO on with Ground AO Distance 2.5 m.</p><img loading="lazy" src="../../assets/img/spec/mtg_aostr.webp" alt="Ground AO Strength compared at 0, 0.25, 0.5, 0.8 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span class="def">0.8</span><span>1</span></div></div>

<div class="ms-prop" id="mtg-ground-ao-distance"><div class="ph"><strong>Ground AO Distance</strong><code>Ground AO Distance</code><span class="chips"><span class="chip p">Default 1 m</span><span class="chip">Compared 0.25 → 4</span></span></div><p class="desc">How far from objects the darkening reaches. Images use AO on.</p><img loading="lazy" src="../../assets/img/spec/mtg_aodist.webp" alt="Ground AO Distance compared at 0.25, 0.5, 1, 2 and 4"><div class="ms-vals" style="--n:5"><span>0.25</span><span>0.5</span><span class="def">1</span><span>2</span><span>4</span></div></div>

<div class="ms-prop" id="mtg-ground-ao-contrast"><div class="ph"><strong>Ground AO Contrast</strong><code>Ground AO Contrast</code><span class="chips"><span class="chip p">Default 0</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">0 = smooth blur, 1 = crisp like a manga contact shadow. Images use AO on with Ground AO Distance 2.5 m.</p><img loading="lazy" src="../../assets/img/spec/mtg_aocon.webp" alt="Ground AO Contrast compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span class="def">0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>

### Fade

<div class="ms-prop" id="mtg-fade-radius"><div class="ph"><strong>Fade Radius</strong><code>Fade Radius</code><span class="chips"><span class="chip p">Default 30 m</span><span class="chip">Compared 3 m → 30 m</span></span></div><p class="desc">The radius of the circle where the ground fades out (MTG Fade Position). Images use Fade Edges on with Fade Shape 0 (circular).</p><img loading="lazy" src="../../assets/img/spec/mtg_fade.webp" alt="Fade Radius compared at 3 m, 5 m, 8 m, 12 m and 30 m"><div class="ms-vals" style="--n:5"><span>3 m</span><span>5 m</span><span>8 m</span><span>12 m</span><span class="def">30 m</span></div></div>

!!! note ""
    Shadow Softness barely changes anything while the shadow lights' shadows are crisp. Combined with Shadow Blur, it changes how the light and dark of a blurred shadow come out.
