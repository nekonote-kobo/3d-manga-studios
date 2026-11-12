# <i class="bi bi-emoji-smile-fill"></i> Manga Toon Mouth <span class="new-label">NEW</span> {data-toc-label="Manga Toon Mouth"}

<figure class="ms-page-hero"><img src="../../assets/img/hero/hero_mtm.webp" alt="A render using Manga Toon Mouth"></figure>

<p style="font-family:var(--md-code-font);font-size:.62rem;color:var(--ms-guide-ink);letter-spacing:.06em">MTM · Material › Manga Toon Mouth + Geometry Nodes › MTS Mouth Inner</p>

The mouth is made of two parts: the <strong>mouth plane</strong> (a material) that sticks to the face surface, and the <strong>mouth interior geometry</strong> (Geometry Nodes) placed behind it. The teeth, tongue and depth change with the values on the mouth interior's Modifier.

## <i class="bi bi-layers-fill"></i> Layer stack

The mouth interior stacks layers at different depths and uses parallax to look 3D.

<div class="ms-stack" id="stack-mtm"></div>

## <i class="bi bi-diagram-2-fill"></i> Node tree

<div class="ms-graph"><div class="flow"><div class="col"><div class="ms-node"><div class="hd h-geo">Mouth plane</div><div class="bd">Subdivide → Shrinkwrap<i>Sticks to the face surface</i></div></div><div class="ms-node"><div class="hd h-geo">Mouth interior (_Inner)</div><div class="bd">GN: MTS Mouth Inner<i>Throat, tongue, upper and lower teeth, fangs</i></div></div></div><div class="wire"></div><div class="col"><div class="ms-node big sel"><div class="hd h-group">Manga Toon Mouth [material name]</div><div class="bd">Coords → Rig → Shade → Output<i>The mouth shape is a mask; outside is transparent</i></div></div><div class="ms-node"><div class="hd h-tex">MTS Teeth / Tongue / Inside</div><div class="bd">Mouth interior materials</div></div></div><div class="wire"></div><div class="ms-node"><div class="hd h-out">Render</div><div class="bd">Draws the mouth in front of the face</div></div></div></div>

<div class="ms-pipe"><div><em>Coords</em><b>Coordinates</b><span>Turns the plane's UVs into mouth coordinates</span></div><div><em>Rig</em><b>Rig</b><span>Moves the upper lip, lower lip, teeth and tongue from the Link to Rig bones</span></div><div><em>Shade</em><b>Shading</b><span>Mouth interior color, tongue and teeth shape and color, light shading</span></div><div><em>Output</em><b>Output</b><span>Makes the area outside the mouth transparent and lets the face show through with a mask</span></div></div>


## <i class="bi bi-sliders2"></i> Inputs

Each row of 5 spheres (eye, mouth, sky) shows **the value changing from left to right**. The values are written under each image. The yellow cell is the setting's default; all other settings stay at their defaults.

??? info "MTS Mouth Inner settings"

    | Panel | Setting | English Name | Default |
    |---|---|---|---|
    | Teeth | [Teeth Style](#mtm-teeth-teeth-style) | `Teeth Style` | 1 |
    | Upper Teeth | [Upper Teeth Height](#mtm-teeth-upper-teeth-length) | `Upper Teeth Length` | 0.3 |
    | Upper Teeth | [Upper Teeth Width](#mtm-teeth-upper-teeth-width) | `Upper Teeth Width` | 1 |
    | Upper Teeth | [Upper Teeth Rotation Forward / Back](#mtm-teeth-upper-teeth-rotation-x) | `Upper Teeth Rotation X` | 0° |
    | Upper Teeth | [Upper Teeth Rotation Left / Right](#mtm-teeth-upper-teeth-rotation-y) | `Upper Teeth Rotation Y` | 0° |
    | Upper Teeth | [Upper Teeth Rotation Front](#mtm-teeth-upper-teeth-rotation-z) | `Upper Teeth Rotation Z` | 0° |
    | Tongue | [Tongue Size](#mtm-tongue-tongue-size) | `Tongue Size` | 0.55 |
    | Inside | [Depth](#mtm-inside-depth) | `Depth` | 1.2 |
    | Fang | [Fang Size](#mtm-fang-fang-size) | `Fang Size` | 1.5 |

### Teeth

<div class="ms-prop" id="mtm-teeth-teeth-style"><div class="ph"><strong>Teeth Style</strong><code>Teeth Style</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0 → 3</span></span></div><p class="desc">0 = Solid, 1 = Square, 2 = Round, 3 = Jagged. In the Sidebar you pick one with the buttons.</p><img loading="lazy" src="../../assets/img/spec/mtm_teeth_style.webp" alt="Teeth Style compared at 0, 1, 2 and 3"><div class="ms-vals" style="--n:4"><span>0</span><span class="def">1</span><span>2</span><span>3</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-length"><div class="ph"><strong>Upper Teeth Height</strong><code>Upper Teeth Length</code><span class="chips"><span class="chip p">Default 0.3</span><span class="chip">Compared 0.1 → 0.6</span></span></div><p class="desc">Height of the upper teeth from root to tip. Lower Teeth Height works the same way for the lower teeth.</p><img loading="lazy" src="../../assets/img/spec/mtm_upper_teeth.webp" alt="Upper Teeth Length compared at 0.1, 0.2, 0.3, 0.45 and 0.6"><div class="ms-vals" style="--n:5"><span>0.1</span><span>0.2</span><span class="def">0.3</span><span>0.45</span><span>0.6</span></div></div>

<p style="font-size:.66rem;color:var(--ms-ink-2)">The next four comparisons use the same mouth as the Teeth Style comparison (Teeth Style 0, everything else at its default). The lower teeth have the same settings (Lower Teeth Width and Rotation).</p>

<div class="ms-prop" id="mtm-teeth-upper-teeth-width"><div class="ph"><strong>Upper Teeth Width</strong><code>Upper Teeth Width</code><span class="chips"><span class="chip p">Default 1</span><span class="chip">Compared 0.4 → 1.6</span></span></div><p class="desc">Width of the row of teeth (the full mouth width = 1). The number of teeth stays the same; the row shrinks or widens from its center.</p><img loading="lazy" src="../../assets/img/spec/mtm_upper_width.webp" alt="Upper Teeth Width compared at 0.4, 0.7, 1, 1.3 and 1.6"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.7</span><span class="def">1</span><span>1.3</span><span>1.6</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-rotation-x"><div class="ph"><strong>Upper Teeth Rotation Forward / Back</strong><code>Upper Teeth Rotation X</code><span class="chips"><span class="chip p">Default 0°</span><span class="chip">Compared −40° → 40°</span></span></div><p class="desc">Tilts the row of teeth forward or back, like buck teeth (upper) or an underbite (lower).</p><img loading="lazy" src="../../assets/img/spec/mtm_upper_rot_x.webp" alt="Upper Teeth Rotation X compared at −40°, −20°, 0°, 20° and 40°"><div class="ms-vals" style="--n:5"><span>−40°</span><span>−20°</span><span class="def">0°</span><span>20°</span><span>40°</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-rotation-y"><div class="ph"><strong>Upper Teeth Rotation Left / Right</strong><code>Upper Teeth Rotation Y</code><span class="chips"><span class="chip p">Default 0°</span><span class="chip">Compared −40° → 40°</span></span></div><p class="desc">Turns the row of teeth left or right: one side goes back, the other comes forward.</p><img loading="lazy" src="../../assets/img/spec/mtm_upper_rot_y.webp" alt="Upper Teeth Rotation Y compared at −40°, −20°, 0°, 20° and 40°"><div class="ms-vals" style="--n:5"><span>−40°</span><span>−20°</span><span class="def">0°</span><span>20°</span><span>40°</span></div></div>

<div class="ms-prop" id="mtm-teeth-upper-teeth-rotation-z"><div class="ph"><strong>Upper Teeth Rotation Front</strong><code>Upper Teeth Rotation Z</code><span class="chips"><span class="chip p">Default 0°</span><span class="chip">Compared −20° → 20°</span></span></div><p class="desc">Rotates the row of teeth as seen from the front. Handy for lining the teeth up with a tilted mouth.</p><img loading="lazy" src="../../assets/img/spec/mtm_upper_rot_z.webp" alt="Upper Teeth Rotation Z compared at −20°, −10°, 0°, 10° and 20°"><div class="ms-vals" style="--n:5"><span>−20°</span><span>−10°</span><span class="def">0°</span><span>10°</span><span>20°</span></div></div>

### Tongue

<div class="ms-prop" id="mtm-tongue-tongue-size"><div class="ph"><strong>Tongue Size</strong><code>Tongue Size</code><span class="chips"><span class="chip p">Default 0.55</span><span class="chip">Compared 0 → 1.1</span></span></div><p class="desc">The size of the tongue.</p><img loading="lazy" src="../../assets/img/spec/mtm_tongue_size.webp" alt="Tongue Size compared at 0, 0.3, 0.55, 0.8 and 1.1"><div class="ms-vals" style="--n:5"><span>0</span><span>0.3</span><span class="def">0.55</span><span>0.8</span><span>1.1</span></div></div>

### <i class="bi bi-emoji-smile-fill"></i> Inside

<div class="ms-prop" id="mtm-inside-depth"><div class="ph"><strong>Depth</strong><code>Depth</code><span class="chips"><span class="chip p">Default 1.2</span><span class="chip">Compared 0.4 → 2.6</span></span></div><p class="desc">How deep the mouth interior is. When shallow, the dark throat at the back looks closer.</p><img loading="lazy" src="../../assets/img/spec/mtm_depth.webp" alt="Depth compared at 0.4, 0.8, 1.2, 1.8 and 2.6"><div class="ms-vals" style="--n:5"><span>0.4</span><span>0.8</span><span class="def">1.2</span><span>1.8</span><span>2.6</span></div></div>

### Fang

<div class="ms-prop" id="mtm-fang-fang-size"><div class="ph"><strong>Fang Size</strong><code>Fang Size</code><span class="chips"><span class="chip p">Default 1.5</span><span class="chip">Compared 0.5 → 3</span></span></div><p class="desc">The length of the fang (when Fang is on).</p><img loading="lazy" src="../../assets/img/spec/mtm_fang.webp" alt="Fang Size compared at 0.5, 1, 1.5, 2.2 and 3"><div class="ms-vals" style="--n:5"><span>0.5</span><span>1</span><span class="def">1.5</span><span>2.2</span><span>3</span></div></div>
