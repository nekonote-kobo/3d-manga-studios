# <i class="bi bi-question-circle-fill"></i> FAQ & Support

??? question "I didn't get the license key email."
    Check your spam folder. If it isn't there, make sure the address you used for the request is correct, then contact the administrator. Addresses on domains that don't exist can't be used for requests.

??? question "I got a new PC. What should I do?"
    Enter the same key on the new PC and activate it. If you've reached the PC limit, ask the administrator to release your old PC.

??? question "Can I share my license key with someone else?"
    No. The key is for the purchaser only.

??? question "Does it work with Cycles?"
    No. The shaders, backgrounds and effects are all built for EEVEE.

??? question "The \"Raycast\" outline option is grayed out."
    Raycast needs Blender 5.1 or later. In 4.5, use "Contact / Valley (AO)" for inner lines. Presets that include a line setup also switch to AO automatically in 4.5.

??? question "Does changing the background change how bright the character looks?"
    No. The background World only shows color where the camera sees it; for lighting and reflections it is black. It also doesn't affect how the three RGB lights are read.

??? question "Manga Tone Shader turns completely black."
    Check that the character is in the light group's "Lit Objects" (Light Linking). If it isn't, the three lights don't reach it.

??? question "The material turned pink."
    It has probably hit the GPU's shader instruction limit. This can happen when you turn on gloss, anisotropy, AO, Watercolor, Painterly and so on all at once. Turn off the options you don't use.

??? question "Speech balloons look blurry."
    If the camera uses depth of field (DOF), balloons right in front of the camera get blurred too. For panels with balloons, turn DOF off, or add the balloons in a design app instead.

??? question "Do I need to allow Python scripts to auto-run?"
    No. Drivers such as eye look and screen-based effects use only simple expressions that work without auto-run.

??? question "Can I make several panels in one file?"
    The add-on assumes one file = one panel: one camera, and one background per scene. Make each panel in its own file.

## <i class="bi bi-life-preserver"></i> Support

If the questions above don't solve your problem, contact us here.

<div class="ms-support">
<a href="https://github.com/Adacchi-MultiCreator/3D-Manga-Studios-Issues" target="_blank" rel="noopener"><b><i class="bi bi-github"></i>Bug reports</b><span>GitHub Issues. It helps a lot if you include your Blender and add-on versions, the steps, and the error text.</span></a>
<a href="https://x.com/3d_manga19094" target="_blank" rel="noopener"><b><i class="bi bi-twitter-x"></i>News & questions</b><span>X (@3d_manga19094). Update announcements and help with how to use the add-on.</span></a>
</div>
