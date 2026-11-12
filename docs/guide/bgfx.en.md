# <i class="bi bi-stars"></i> Backgrounds & Effects: Finishing the Panel <span class="new-label">NEW</span> {data-toc-label="Backgrounds & Effects: Finishing the Panel"}

Backgrounds you don't have to draw, ground that catches shadows, effect lines, manga symbols, game-style VFX, ink and brush, sky and clouds, and speech balloons. Pick them from thumbnails, and their values appear right there with lock and keyframe buttons.

## <i class="bi bi-image-fill"></i> Background · Manga Toon Backgrounds (MTB)

Every background is added as a World. It isn't an object, so it doesn't cast shadows or get in the way of selection or outlines. **It shows the background color only to the camera and is black as lighting**, so changing the background doesn't change the shading on your characters.

<div class="ms-tiles ms-shot-tiles">
<div class="ms-tile"><img src="../../assets/img/shots/bg_white.webp" alt="White" loading="lazy">White</div>
<div class="ms-tile"><img src="../../assets/img/shots/bg_black.webp" alt="Solid Black" loading="lazy">Solid Black</div>
<div class="ms-tile"><img src="../../assets/img/shots/bg_tone.webp" alt="Screentone" loading="lazy">Screentone</div>
<div class="ms-tile"><img src="../../assets/img/shots/bg_sky_day.webp" alt="Sky (Morning)" loading="lazy">Sky (Morning)</div>
<div class="ms-tile"><img src="../../assets/img/shots/bg_sky_sunset.webp" alt="Sky (Evening)" loading="lazy">Sky (Evening)</div>
<div class="ms-tile"><img src="../../assets/img/shots/bg_sky_night.webp" alt="Sky (Night)" loading="lazy">Sky (Night)</div>
</div>

Same sphere, ground and camera; only the background changes. The ground and the shading of the sphere stay the same.

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![Background panel](../assets/img/ui/panel_bg.webp)
<figcaption>Backgrounds & Effects › Background</figcaption>
</figure>
<div markdown>
For the screentone pattern, choose from 10 types such as halftone dots and crosshatch (kakeami), and add a vertical, horizontal or radial gradient. You can also switch it by dragging and dropping a screentone asset material onto the "Tone Material" field.

See [Material Reference › Manga Toon Backgrounds](../spec/mtb.md) for how the sky values change the look.
</div>
</div>

## <i class="bi bi-grid-3x3"></i> Ground · Manga Toon Ground (MTG) <span class="new-label">NEW</span> {data-toc-label="Ground · Manga Toon Ground (MTG)"}

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![Ground panel](../assets/img/ui/panel_ground.webp)
<figcaption>Backgrounds & Effects › Ground</figcaption>
</figure>
<div markdown>
<img src="../../assets/img/spec/mtg_hero.webp" alt="Key light shadow cast on the Manga Toon Ground" style="border:3px solid var(--ms-ink)">

Lay ground under your characters and draw the light's shadows as **flat manga shadows**. "Add Ground" adds a large ground plane (200 m per side), and "Use on Selected" lets you use the same material on your own floor mesh. There is one ground material per scene.

- **Shadows from**: turn key, fill and back on and off with buttons. Where shadows overlap, they get darker
- **Shadow color, density, blur**: you can also put a tone material in the shadow color. Blur affects only the ground shadows
- **Shadows Only (Transparent Ground)**: hides the ground and multiplies only the shadows over the background
- **Texture / bumps**: tiles an image as seen from above. A normal map adds shading and shine to the bumps
- **Ground AO**: darkens areas near objects and where they touch the ground. Make it crisp for manga contact shadows
- **Fade Edges**: fades the ground out in a circle or along its edges so it blends into the background
</div>
</div>

!!! bubble "Shadows come from the light group"
    Shadows are drawn from the three lights of a light group. Each group gets three "ground shadow lights" that light only the ground. If the shadows drift after you move the lights, press ↻ (Reconnect Shadow Lights).

Detailed settings appear under "Manga Toon Ground" in the Material tab of the Properties Editor. See [Material Reference › Manga Toon Ground](../spec/mtg.md) for how each value changes the look.

## <i class="bi bi-lightning-charge-fill"></i> Effects · Manga Toon Effects (MTFX)

Filter by type and add effects from the thumbnails. Screen-space effects (focus lines, etc.) follow the camera and fill the frame; effects placed in space (explosions, etc.) go to the 3D cursor. Timing is set by the "Effect Progress" slider from 0 to 1. Keyframe it to animate the effect.

<div class="ms-chips" id="fxChips" role="group" aria-label="Effect types"></div>
<div class="ms-tiles" id="fxGrid" data-base="../../"></div>

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![Effects panel](../assets/img/ui/panel_fx.webp)
<figcaption>Backgrounds & Effects › Effects</figcaption>
</figure>
<div markdown>
!!! bubble "Draw with Path"
    For brush strokes, "Draw with Path" creates a Bézier curve; move its points to make any brush path you like. You can also use "Draw Freehand" to draw directly with the mouse.

- See [Material Reference › Manga Toon Effects](../spec/mtfx.md) for how the effects are built (screen lines, manga line art, game-style VFX, ink and brush) and their main settings
- In the foreground and background effect lists, you can select, move, show/hide and delete effects. Selecting a row in a list also selects that object
- **Colors** of lines, edges, glows and so on are gathered in the Sidebar settings
- After changing cameras, use "Follow Scene Camera" to reattach screen-space effects and speech balloons to the current scene camera
- "In Front of Camera" places an effect as a flat plane in front of the camera, parallel to the screen
- Flat effects can be set to always face the camera
</div>
</div>

## <i class="bi bi-cloud-fill"></i> Sky · Clouds <span class="new-label">NEW</span> {data-toc-label="Sky · Clouds"}

The sky World and the 3D clouds have an **Art Style slider**. At 0 you get black-and-white manga (screentones and cloud outlines); at 1, a colored anime look. Time of day and sun direction, moon phases, stars, sun rays, sun halos and even lens flares are included.

- Cloud presets cover the ten basic cloud types, plus a small cloud
- **Every cloud can switch between Mesh (comical) and Volume (realistic), one cloud at a time**, so you can mix mesh clouds in front with volume clouds far away
- "Mesh" and "Volume" next to "All Clouds" below the cloud list set every cloud in the scene at once
- "Cloud from Mesh" makes a cloud in any shape you like
- For realistic (volume) clouds, "Prepare for Realistic Clouds" sets up the sun and EEVEE settings automatically
- "Add Cloud Sun" adds a white sun that lights only the realistic clouds (character shading doesn't change)

<div class="ms-tiles ms-shot-tiles ms-cloud-tiles">
<div class="ms-tile"><img src="../../assets/img/shots/cloud_cumulus.webp" alt="Cumulus" loading="lazy">Cumulus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_cumulonimbus.webp" alt="Cumulonimbus" loading="lazy">Cumulonimbus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_stratocumulus.webp" alt="Stratocumulus" loading="lazy">Stratocumulus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_stratus.webp" alt="Stratus" loading="lazy">Stratus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_nimbostratus.webp" alt="Nimbostratus" loading="lazy">Nimbostratus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_altocumulus.webp" alt="Altocumulus" loading="lazy">Altocumulus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_altostratus.webp" alt="Altostratus" loading="lazy">Altostratus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_cirrocumulus.webp" alt="Cirrocumulus" loading="lazy">Cirrocumulus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_cirrostratus.webp" alt="Cirrostratus" loading="lazy">Cirrostratus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_cirrus.webp" alt="Cirrus" loading="lazy">Cirrus</div>
<div class="ms-tile"><img src="../../assets/img/shots/cloud_small.webp" alt="Small Cloud" loading="lazy">Small Cloud</div>
</div>

Each cloud preset placed as is and shot on its own, looking up slightly (transparent background; the tile color is only for legibility).

#### Mesh · Volume

<div class="ms-tiles ms-shot-tiles ms-cloud-tiles" style="grid-template-columns:repeat(4,minmax(0,1fr))">
<div class="ms-tile"><img src="../../assets/img/shots/cmp_cumulus_mesh.webp" alt="Cumulus · Mesh" loading="lazy">Cumulus · Mesh</div>
<div class="ms-tile"><img src="../../assets/img/shots/cmp_cumulus_volume.webp" alt="Cumulus · Volume" loading="lazy">Cumulus · Volume</div>
<div class="ms-tile"><img src="../../assets/img/shots/cmp_cumulonimbus_mesh.webp" alt="Cumulonimbus · Mesh" loading="lazy">Cumulonimbus · Mesh</div>
<div class="ms-tile"><img src="../../assets/img/shots/cmp_cumulonimbus_volume.webp" alt="Cumulonimbus · Volume" loading="lazy">Cumulonimbus · Volume</div>
</div>

The same cloud switched with "Mesh / Volume" at the top of the selected cloud's settings. The volume shots use the sun added by "Prepare for Realistic Clouds".

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![Settings of a selected cloud](../assets/img/ui/panel_cloud.webp)
<figcaption>Backgrounds & Effects › Effects (cloud selected)</figcaption>
</figure>
<div markdown>
| Where | Item | What it does |
|---|---|---|
| Below the list | All Clouds › Mesh / Volume | Sets every cloud in the scene at once |
| Top of the selected cloud's settings | Mesh / Volume | Switches only that cloud |

When you switch a cloud to Volume and the scene has no sun, a "Cloud Sun" is added automatically.
</div>
</div>

## <i class="bi bi-chat-fill"></i> Speech Balloons · Manga Toon Speech Bubbles <span class="new-label">NEW</span> {data-toc-label="Speech Balloons · Manga Toon Speech Bubbles"}

<div class="ms-grid2" markdown>
<figure class="ms-shot" markdown>
![Speech balloon panel](../assets/img/ui/panel_balloon.webp)
<figcaption>Backgrounds & Effects › Speech Balloons</figcaption>
</figure>
<div markdown>
<div class="ms-tiles" style="grid-template-columns:repeat(4,minmax(0,1fr));margin-top:0">
<div class="ms-tile"><img src="../../assets/img/fx/balloon_speech.webp" alt="">Speech</div>
<div class="ms-tile"><img src="../../assets/img/fx/balloon_shout.webp" alt="">Shout</div>
<div class="ms-tile"><img src="../../assets/img/fx/balloon_thought.webp" alt="">Thought</div>
<div class="ms-tile"><img src="../../assets/img/fx/balloon_narration.webp" alt="">Narration</div>
</div>

- Line styles: Solid Line, Dashed Line (whispers), Wavy Line (fear, weak voices)
- Tail: tip position, width, bend and jagged edges (voices over the phone). Use "Tail Path" for a free shape
- Position and size are relative to the screen, so they stay the same on screen even if you change the focal length
- "Flip Balloon" flips it left/right and up/down
- Balloons are just the "shape"; the dialogue text is meant to be added in a design app

See [Material Reference › Manga Toon Speech Bubbles](../spec/mtsb.md) for the balloon's layer structure and settings.
</div>
</div>

## <i class="bi bi-fonts"></i> SFX Text · Warp · Kerning <span class="new-label">NEW</span> {#sfx-text data-toc-label="SFX Text · Warp · Kerning"}

<div class="ms-grid2" markdown>
<div markdown>
<div class="ms-tiles" style="grid-template-columns:repeat(4,minmax(0,1fr));margin-top:0">
<div class="ms-tile light"><img src="../../assets/img/warp/warp_none.png" alt="">No Warp</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_arc.png" alt="">Arc</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_arc_lower.png" alt="">Arc Lower</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_arc_upper.png" alt="">Arc Upper</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_arch.png" alt="">Arch</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_bulge.png" alt="">Bulge</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_shell_lower.png" alt="">Shell Lower</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_shell_upper.png" alt="">Shell Upper</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_flag.png" alt="">Flag</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_wave.png" alt="">Wave</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_fish.png" alt="">Fish</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_rise.png" alt="">Rise</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_fisheye.png" alt="">Fisheye</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_inflate.png" alt="">Inflate</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_squeeze.png" alt="">Squeeze</div>
<div class="ms-tile light"><img src="../../assets/img/warp/warp_twist.png" alt="">Twist</div>
</div>
<p style="font-size:.62rem;color:var(--ms-tone)">Warp styles. The same icons appear in the Sidebar dropdown.</p>
</div>
<div markdown>
The "Sound Effect Text" effect is added as a **Blender text object**. You can type any text and bend it like Illustrator's warp. The black and white edges and line width work the same as in the other manga line art.

- **Text & font**: body text, text size, letter/word/line spacing, italics (shear) and alignment. Choose the font with the button on its own row; use "Similar Fonts" to search, add to favorites, or step to the next font
- **Warp**: pick from 16 styles. "Bend" sets how strongly it curves (negative values reverse it), and "Horizontal Distortion" / "Vertical Distortion" add a perspective-like look. The smaller "Smoothness" is, the finer the curve
- **Kerning**: select the text, press Tab to enter Edit Mode, place the cursor, and use ++alt+left++ / ++alt+right++ to tighten or loosen one letter at a time
- **Orientation**: rotate it like any other object
- **Link to Camera**: parents the text to the camera so it stays in the same place on screen when the camera moves. You can still move the text freely after linking, and "Unlink from Camera" undoes it
- Drawn sound effects made in earlier versions show a "Convert to Text Object (Kerning / Warp)" button. It replaces them while keeping the text, font, position and keyframes
</div>
</div>
