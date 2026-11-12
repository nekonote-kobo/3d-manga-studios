# <i class="bi bi-lightning-charge-fill"></i> Manga Toon Effects <span class="new-label">NEW</span> {data-toc-label="Manga Toon Effects"}

<figure class="ms-page-hero"><img src="../../assets/img/hero/hero_mtfx.webp" alt="A render made with Manga Toon Effects"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTFX · Geometry Nodes › MTS FX …</p>

There are 54 effects in total, and all of them are built with <strong>Geometry Nodes</strong>. Their values appear in the object's Modifier, and they are also listed in the "Effect" section of the Sidebar, with lock and Keyframe buttons. By how they are built, they fall into the four groups below.

<div class="ms-flow">
<a href="#screen"><span class="n">1</span><b>Screen lines</b><span>Focus lines, speed lines, gloom lines (3 types)</span></a>
<a href="#manga"><span class="n">2</span><b>Manga line art</b><span>Effect lines, manga symbols, drawn sound effects (21 types)</span></a>
<a href="#vfx"><span class="n">3</span><b>Game-style VFX</b><span>Attacks, skills, environment, warnings (25 types)</span></a>
<a href="#ink"><span class="n">4</span><b>Ink &amp; brush</b><span>Brush strokes, splatter, drips, wash (5 types)</span></a>
</div>

!!! note ""
    The categories in the Sidebar (effect lines, manga symbols, attacks, elements...) are sorted to make effects easy to find. The groups on this page are sorted by how the effects are built. Each group's layer diagram uses one representative effect as the example.

## <i class="bi bi-bullseye"></i> Screen lines {#screen}

These are parented to the camera and drawn <strong>relative to the screen</strong>. They stay in the same place on screen when you move the camera, and the line width on screen does not change when you change the focal length.

<div class="ms-stack" id="stack-fx-screen"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_focus_lines.webp" alt="">Focus Lines</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_speed_lines.webp" alt="">Speed Lines</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_gloom_lines.webp" alt="">Gloom Lines</div>
</div>

??? info "Main settings (Focus Lines)"

    | Setting | English name | What it does |
    |---|---|---|
    | Line count | `Count` | Number of lines |
    | Line width | `Line Width` | Width of the lines (1 = screen height) |
    | Width variation | `Width Random` | How much the width differs from line to line |
    | Taper | `Taper` | Makes the inner end thinner |
    | Color | `Color` | Line color |
    | Blank radius | `Blank Radius` | Area in the center where no lines are drawn |
    | Length variation | `Length Random` | Variation of where each line's inner end stops |
    | Spacing variation | `Angle Random` | Variation of the spacing between lines |
    | Center X / Center Y | `Center X / Y` | Where the lines converge (0 to 1 on screen) |
    | Depth | `Depth` | Distance from the camera (front/back overlap) |
    | Seed | `Seed` | Changes the variation pattern |
    | Boil interval (frames) | `Boil Interval` | Redraws every N frames (0 = off) |

## <i class="bi bi-heart-fill"></i> Manga line art {#manga}

Effect lines, manga symbols and drawn sound effects are black-and-white line art (material MTS FX Ink). They are <strong>placed in 3D space</strong> and always face the camera. Line and edge widths are a ratio of the screen height, so they look the same width even when they are far from the camera.

<div class="ms-stack" id="stack-fx-manga"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_impact_burst.webp" alt="">Impact Burst</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_beta_flash.webp" alt="">Beta Flash</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_notice_lines.webp" alt="">Notice Lines</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_shock_lines.webp" alt="">Shock Lines</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_tremble_lines.webp" alt="">Tremble Lines</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_swoosh_lines.webp" alt="">Swoosh Lines</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_magic_circle.webp" alt="">Magic Circle</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_sparkles.webp" alt="">Sparkles</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_blush_lines.webp" alt="">Blush Lines</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_anger_mark.webp" alt="">Anger Mark</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_sweat_drops.webp" alt="">Sweat Drops</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_steam_puffs.webp" alt="">Steam Puffs</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_scribble.webp" alt="">Scribble</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_manga_aura.webp" alt="">Manga Aura</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_sfx_text.webp" alt="">Sound Effect Text</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_exclaim.webp" alt="">!</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_question.webp" alt="">?</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_interrobang.webp" alt="">!?</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_music_notes.webp" alt="">Music Notes</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_heart.webp" alt="">Heart</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_zzz.webp" alt="">Zzz</div>
</div>

!!! bubble "Only drawn sound effects are text objects"
    Drawn sound effects are added as a Blender text object and warped with Geometry Nodes (MTS FX Manga Text Warp). There is no face-camera setting; you set the direction with the **object's normal rotation**. See [Feature Guide › Drawn sound effects](../guide/bgfx.md#sfx-text) for how to use them.

??? info "Main settings (shared)"

    | Setting | English name | What it does |
    |---|---|---|
    | Line width | `Line Width` | Width of the lines (1 = screen height) |
    | Color | `Color` | Line color |
    | Fill color | `Fill Color` | Fill color (for manga symbols that have a fill) |
    | Edge width / Edge color | `Edge Width / Color` | The edge around the fill |
    | Face camera | `Face Camera` | Off = keeps the object's own orientation |
    | Size | `(Scale)` | Set by the object's scale |

## <i class="bi bi-stars"></i> Game-style VFX {#vfx}

These work like particle effects in Unity or Unreal Engine: each effect is built by stacking <strong>several layers</strong> (flash, sparks, ring, smoke...). A layer is either a group of camera-facing cards, or a mesh such as a ring, arc or pillar. Time is controlled by the "Effect Progress" slider (0 to 1), which goes: anticipation → onset → peak → afterglow → fade out. Add Keyframes to it to animate the effect.

<div class="ms-stack" id="stack-fx-vfx"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_hit_spark.webp" alt="">Hit Spark</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_slash.webp" alt="">Sword Slash</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_lightning.webp" alt="">Lightning Bolt</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_explosion.webp" alt="">Blast</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_shockwave.webp" alt="">Shockwave Ring</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_fire.webp" alt="">Flames</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_ice.webp" alt="">Ice Crystals</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_electric.webp" alt="">Electric Orb</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_poison.webp" alt="">Poison</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_dark.webp" alt="">Dark Vortex</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_holy.webp" alt="">Holy Light</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_charge.webp" alt="">Charge Up</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_aura.webp" alt="">Aura</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_heal.webp" alt="">Heal</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_barrier.webp" alt="">Barrier</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_beam.webp" alt="">Beam</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_smoke.webp" alt="">Smoke Cloud</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_dust.webp" alt="">Landing Dust</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_debris.webp" alt="">Debris</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_crack.webp" alt="">Ground Crack</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_muzzle.webp" alt="">Muzzle Flash</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_splash.webp" alt="">Water Splash</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_warn_circle.webp" alt="">Warning Circle</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_warn_fan.webp" alt="">Warning Fan</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_pillar.webp" alt="">Light Pillar</div>
</div>

??? info "Main settings (shared)"

    | Setting | English name | What it does |
    |---|---|---|
    | Progress | `Effect Progress` | 0 = start, peak in the middle, 1 = gone |
    | Size | `Size` | Size of the whole effect |
    | Color / Secondary color | `Color / Secondary Color` | Color of the light and sparks / color of the smoke, debris and shadow parts |
    | Intensity | `Intensity` | Brightness of the glowing parts |
    | Additive glow | `Additive Glow` | 1 = adds light, 0 = normal semi-transparency |
    | Seed | `Seed` | Changes the variation pattern |
    | Contrast / Brightness | `Contrast / Brightness` | Strength of the color's black-and-white contrast, and its brightness |
    | Hardness | `Hardness` | Higher = crisper, more manga-like shapes |
    | Drop shadow | `Drop Shadow` | A dark shadow behind the effect so it stays visible on bright backgrounds |
    | Shadow color, opacity, offset, spread | `Shadow Color / Opacity / Offset / Spread` | Look of the drop shadow |
    | Outer glow | `Outer Glow` | On = glows all around without an offset |
    Continuous effects (fire, aura, barrier and so on) repeat several times as progress goes from 0 to 1.

## <i class="bi bi-brush-fill"></i> Ink &amp; brush {#ink}

Ink does not glow (normal semi-transparency, no additive blending). The default color is black, and ink does not fade out at the end, because it stays on the paper once drawn. The brush shape is made in the shader, with ragged edges, bristle streaks and dry-brush breaks (stronger toward the end of the stroke).

<div class="ms-stack" id="stack-fx-ink"></div>

<div class="ms-tiles" style="grid-template-columns:repeat(auto-fill,minmax(92px,1fr))">
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_ink_brush.webp" alt="">Brush Stroke</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_ink_splatter.webp" alt="">Ink Splatter</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_ink_drips.webp" alt="">Ink Drips</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_ink_wash.webp" alt="">Ink Wash</div>
<div class="ms-tile"><img loading="lazy" src="../../assets/img/fx/fx_ink_radial.webp" alt="">Brush Burst</div>
</div>

??? info "Main settings (Brush Stroke)"

    | Setting | English name | What it does |
    |---|---|---|
    | Progress | `Effect Progress` | How far the brush has traveled (0 → 1) |
    | Ink color / Ink opacity | `Ink Color / Ink Opacity` | Color and density of the ink |
    | Face camera | `Face Camera` | Off = uses the object's orientation |
    | Stroke shape | `Stroke Shape` | 0 = S-curve, 1 = ensō (circle), 2 = straight line |
    | Length | `Length` | Length of the stroke |
    | Brush width | `Brush Width` | Width of the brush |
    | Taper in / Taper out | `Taper In / Out` | Length until the stroke reaches full width / length over which it thins out |
    | Dry brush | `Dry Brush` | Dry-brush breaks (stronger toward the end of the stroke) |
    | Wobble | `Wobble` | Hand shake |
    | Splatter | `Splatter` | Small ink drops flying off the brush |
    | Rotation | `Rotation` | Direction of the stroke |
    | Draw along a path | `Use Stroke Path` | Draws along an editable path (Bezier curve) |
