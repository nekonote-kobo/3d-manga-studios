# <i class="bi bi-cloud-sun-fill"></i> Manga Toon Backgrounds (Sky) <span class="new-label">NEW</span> {data-toc-label="Manga Toon Backgrounds (Sky)"}

<figure class="ms-page-hero"><img src="../../assets/img/hero/hero_mtb.webp" alt="A render using Manga Toon Backgrounds"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTB · World › Manga BG Sky › MTS BG Sky</p>

Every background is added as a <strong>World</strong>. The World shader is set up as "background color only when seen by the camera, black as lighting", so changing the background does not change the character's shading. This page lists the main values of the "Sky" background preset.

## <i class="bi bi-layers-fill"></i> Layer stack

On top of the sky color, layers are stacked from the farthest to the nearest.

<div class="ms-stack" id="stack-mtb"></div>

## <i class="bi bi-diagram-2-fill"></i> Node tree

<div class="ms-graph"><div class="flow"><div class="col"><div class="ms-node"><div class="hd h-math">Drivers (automatic)</div><div class="bd">Camera right, up, back and zoom<i>For the lens flare</i></div></div><div class="ms-node"><div class="hd h-math">Drivers (automatic)</div><div class="bd">Aspect ratio<i>From the render resolution</i></div></div></div><div class="wire"></div><div class="ms-node big sel"><div class="hd h-world">MTS BG Sky</div><div class="bd">Sky, clouds, stars, moon, light effects<i>Art Style 0 = manga (black and white, screentone, lines)</i><i>Art Style 1 = anime (color, soft shading)</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-math">Light Path</div><div class="bd">Camera ray: background color<i>Everything else: black</i></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">World Output</div><div class="bd">Surface</div></div></div></div>


!!! note ""
    Effects (focus lines, explosions and so on) and speech balloons are built with Geometry Nodes, and their values appear on the object's Modifier. For how each type looks, see the "Effects" list in the guide.

## <i class="bi bi-sliders2"></i> Inputs

Each row of 5 spheres (eye, mouth, sky) shows **the value changing from left to right**. The values are written under each image. The yellow cell is the setting's default; all other settings stay at their defaults.

??? info "MTS BG Sky settings"

    | Panel | Setting | English Name | Default |
    |---|---|---|---|
    | Sky | [Art Style](#mtb-sky-art-style) | `Art Style` | 1 |
    | Sky | [Time of Day](#mtb-sky-time-of-day) | `Time of Day` | 0.45 |
    | Clouds | [Big Clouds](#mtb-clouds-big-clouds) | `Big Clouds` | 0.5 |
    | Manga Style | [Sky Tone](#mtb-manga-style-sky-tone) | `Sky Tone` | 0.3 |

### Sky

<div class="ms-prop" id="mtb-sky-art-style"><div class="ph"><strong>Art Style</strong><code>Art Style</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">0 = manga (black and white, screentone, cloud outlines), 1 = anime (color, soft shading). Images use sky saturation 1.</p><img loading="lazy" src="../../assets/img/spec/bg_art_style.webp" alt="Art Style compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span class="def">1</span></div></div>

<div class="ms-prop" id="mtb-sky-time-of-day"><div class="ph"><strong>Time of Day</strong><code>Time of Day</code><span class="chips"><span class="chip p">Default 0.45</span><span class="chip">Compared 0.05 → 0.85</span></span></div><p class="desc">Night → dawn → day → evening → night. The sun color also changes with the time of day.</p><img loading="lazy" src="../../assets/img/spec/bg_time.webp" alt="Time of Day compared at 0.05, 0.25, 0.45, 0.7 and 0.85"><div class="ms-vals" style="--n:5"><span>0.05</span><span>0.25</span><span class="def">0.45</span><span>0.7</span><span>0.85</span></div></div>

### Clouds

<div class="ms-prop" id="mtb-clouds-big-clouds"><div class="ph"><strong>Big Clouds</strong><code>Big Clouds</code><span class="chips"><span class="chip p">Default 0.5</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">The amount of big clouds.</p><img loading="lazy" src="../../assets/img/spec/bg_clouds.webp" alt="Big Clouds compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span class="def">0.5</span><span>0.75</span><span>1</span></div></div>

### Manga Style

<div class="ms-prop" id="mtb-manga-style-sky-tone"><div class="ph"><strong>Sky Tone</strong><code>Sky Tone</code><span class="chips"><span class="chip p">Default 0.3</span><span class="chip">Compared 0 → 1</span></span></div><p class="desc">With Art Style 0, how dark the screentone on the sky is.</p><img loading="lazy" src="../../assets/img/spec/bg_manga_tone.webp" alt="Sky Tone compared at 0, 0.25, 0.5, 0.75 and 1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.25</span><span>0.5</span><span>0.75</span><span>1</span></div></div>
