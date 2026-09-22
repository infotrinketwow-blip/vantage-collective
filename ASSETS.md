# Vantage Collective — Asset Shot List

Every image slot on the live page currently renders as a bold CSS/SVG placeholder (torn-edge clip-path, halftone dot overlay, palette-tinted gradient) so the site is fully art-directed and functional with zero real photography. Each placeholder is marked in the HTML with an adjacent comment and a `data-asset="assets/images/<filename>.jpg"` attribute naming the exact file it expects — drop a matching file at that path and it swaps in with no code changes (the elements use `background`/`object-fit: cover`-style CSS, so any correctly-cropped image will fill the frame cleanly; the halftone/tint overlay pseudo-elements can be removed per-plate in `assets/css/style.css` once real photography is in place, search for `.plate::before` / `.plate::after`).

All prompts below are written for **Reve** (stills) or **Veo 3** (the one motion clip) and lean into the site's brand system: near-black `#0A0A0A`, off-white paper `#F2EFE9`, blood-red `#D91E2B`, acid-lime `#E8FF6B` (sparingly), torn-paper/collage edges, halftone/photocopy grain, gaffer-tape accents, brutalist-editorial asymmetry. No text/typography should be generated inside any image — all headlines and labels are live HTML/CSS on top of the plates.

---

## Images (`assets/images/`)

### 1. `hero-torn-poster.jpg`
**Used:** Hero section, back parallax layer, behind the headline.
**Aspect ratio / target size:** 16:9 landscape, minimum 2400×1350px (crops to full-bleed viewport, both desktop and mobile — keep the most important visual mass centered-to-left so it survives a tighter mobile crop).
**Prompt:** "A torn-paper collage poster background for a bold underground design agency, near-black base with layered scraps of off-white cream paper and one strip of deep blood-red paper torn and overlapping at rough diagonal angles, subtle halftone dot texture printed on the paper scraps, one thin strip of gaffer tape crossing a seam, dramatic raking studio light casting soft paper-edge shadows, high contrast, punk poster / brutalist editorial aesthetic, no text, no typography, no logos, photographed flat like a print scan, grainy analog texture."

### 2. `before-after-identity-split.jpg`
**Used:** Promise/Solution section, supporting visual beside the three proof-point stubs.
**Aspect ratio / target size:** 16:9 landscape, minimum 1600×900px.
**Prompt:** "A split-screen mockup of a brand identity transformation, left half rendered in flat muted charcoal-gray tones representing a generic forgettable corporate brand mark on a plain card, right half rendered in bold near-black and blood-red with a confident graphic mark and torn-paper texture representing a bold rebuilt identity, hard vertical seam down the center with a slight paper-tear edge, studio product-shot lighting, no readable text or wordmarks, abstract brand-mark shapes only, high contrast, editorial photography style."

### 3. `case-nocturne-billboard.jpg`
**Used:** Proof/Case Studies section, "Nocturne Audio" case-study card (the large 21:9 card).
**Aspect ratio / target size:** 21:9 ultra-wide, minimum 2100×900px.
**Prompt:** "A nighttime city billboard mockup for a bold headphone brand campaign, tall backlit billboard glowing against a dark navy-black night sky, wet street reflecting the glow below, minimal geometric ad-panel design with no readable text, blood-red and acid-lime accent glow mixed into the billboard lighting, cinematic wide-angle night photography, dramatic contrast, slight halftone grain overlay, no people, no logos."

### 4. `case-heartland-relaunch.jpg`
**Used:** Proof/Case Studies section, "Heartland Milling Co." case-study card.
**Aspect ratio / target size:** 4:3, minimum 1600×1200px.
**Prompt:** "A product packaging relaunch mockup for a 40-year-old flour and milling brand rebuilt to feel modern, warm heritage brown and cream packaging redesigned with a bold minimal graphic mark and confident typography-free label layout, studio product photography on a dark near-black backdrop, single dramatic side light, subtle film grain, no readable text, no logos, editorial commercial photography style."

### 5. `case-ferro-finch.jpg`
**Used:** Proof/Case Studies section, "Ferro & Finch" case-study card.
**Aspect ratio / target size:** 4:3, minimum 1600×1200px.
**Prompt:** "An abstract campaign key-art mockup for a bold consumer brand, deep blood-red and near-black diagonal torn-paper composition with a single confident graphic shape at the center, halftone dot texture, dramatic studio lighting, no readable text, no logos, print-poster photography style, high contrast, gritty grain."

### 6. `case-pulsegrid.jpg`
**Used:** Proof/Case Studies section, "PulseGrid" case-study card.
**Aspect ratio / target size:** 4:3, minimum 1600×1200px.
**Prompt:** "An abstract tech-brand dashboard mockup rendered as physical print material, dark near-black background with a glowing acid-lime line-graph shape trending upward torn out of paper and layered over a blood-red card, halftone texture, studio lighting, no readable text or numbers, no UI chrome, editorial collage photography style, high contrast."

### 7. `corkboard-sprint-process.jpg`
**Used:** Process section (the pinned scroll section), full-bleed backdrop behind the five sprint-step cards.
**Aspect ratio / target size:** 16:9 landscape, minimum 2400×1350px, must read well cropped tightly top-and-bottom (cards sit centered over it).
**Prompt:** "A close-up photograph of a physical cork pinboard covered in overlapping torn note cards and sticky notes pinned with small red pushpins, warm brown cork texture, some cards slightly rotated and overlapping like a real creative studio wall, red string connecting a couple of pins, soft directional studio light, shallow depth of field toward the edges, no readable text on any card, punk-poster brutalist studio aesthetic, high detail texture."

### 8. `client-logo-wall-newsprint.jpg`
**Used:** Trust/Clients section, backdrop texture behind the client-name grid.
**Aspect ratio / target size:** 16:9 landscape, minimum 2000×1125px, must tile/crop cleanly since real logo marks will sit in a grid on top.
**Prompt:** "A close-up texture of aged newsprint paper, warm off-white and light gray tones, visible fine halftone dot printing texture and subtle paper grain, very faint ghosted rectangular ad-block outlines suggesting a logo-wall layout, no readable text anywhere, flat even studio scan lighting, subtle creases, editorial print-texture photography."

### 9. `cta-spotlight-dust.jpg`
**Used:** Final CTA section, full-bleed background behind "STOP BLENDING IN."
**Aspect ratio / target size:** 16:9 landscape, minimum 2400×1350px, keep the center third relatively dark/uncluttered — large display type sits on top.
**Prompt:** "A dramatic single spotlight beam cutting through a dark near-black room full of floating dust particles, the beam has a subtle blood-red and acid-lime color cast at its edges, theatrical stage-lighting photography, deep shadow at the frame edges, volumetric light rays, cinematic and moody, no people, no text, high contrast, slight film grain."

### 10. `founder-portrait-bw.jpg`
**Used:** Trust section, small portrait badge beside each client quote.
**Aspect ratio / target size:** 1:1 square, minimum 800×800px, since it's cropped small keep the face/subject centered with generous margin.
**Prompt:** "A high-contrast black-and-white studio portrait of a confident creative agency founder, dramatic hard side lighting creating strong shadow on one half of the face, plain near-black background, sharp editorial fashion-magazine style photography, serious and self-assured expression, grainy analog film texture, no text, no logo."

---

## Ambient background textures (used behind other content, lower priority)

These two are used at low opacity as atmospheric texture layers, not focal images — safe to leave as the CSS halftone/gradient placeholder indefinitely, but listed here for completeness since they are referenced by filename in the code (`hero__halftone`, `objection__halftone`, and the problem-section backdrop).

### 11. `halftone-photocopy-grain.png`
**Used:** Hero section (parallax texture layer) and Objection section (ambient backdrop).
**Aspect ratio / target size:** Square, seamlessly tileable, minimum 1200×1200px, PNG with the dot pattern in black on a transparent background so it can be tinted and layered via CSS `mix-blend-mode`.
**Prompt:** "A seamless tileable halftone dot pattern texture like a worn photocopier scan, pure black dots of varying size on a fully transparent background, slightly irregular and imperfect dot edges like an old print run, high contrast, no gradients, no color, flat graphic texture asset."

### 12. `taped-paper-collage-texture.jpg`
**Used:** Problem/Agitation section, low-opacity ambient backdrop behind the torn note-card deck.
**Aspect ratio / target size:** 16:9 landscape, minimum 2000×1125px, tileable-feeling edge-to-edge texture.
**Prompt:** "A flat-lay texture of overlapping torn cream and off-white paper scraps taped together with strips of beige gaffer tape at irregular angles, subtle warm studio lighting, visible paper fiber grain, no text, no images on the paper scraps, flat scan-like photography, punk-collage craft aesthetic."

---

## Video (`assets/video/`)

### `hero-loop.mp4`
**Used:** Hero section, full-bleed looping background video behind the torn-poster plate and headline (muted, autoplay, loop; `hero-torn-poster.jpg` above is already wired as its `poster` fallback frame).
**Aspect ratio / target size:** 16:9, 1920×1080 minimum, 6–10 second seamless loop, no audio needed (rendered muted), H.264 MP4, optimized for web (target under ~6MB if possible so it doesn't fight the page's own load time).
**Tool:** Veo 3.
**Prompt:** "A high-energy looping shot of a single sheet of blood-red paper being slammed down onto a near-black studio table in rhythm, torn white paper edges scattering slightly with each hit, a hard theatrical spotlight flickers once in sync with the slam casting dramatic hard shadows, extreme close-up, dramatic contrast, gritty film-grain texture, no text, no logos, no hands or people visible, tight cinematic framing, seamless loop-friendly motion, punk-poster brutalist mood, 6 second duration."

---

## Swap-in checklist

1. Drop the file at the exact path named above inside `assets/images/` or `assets/video/`.
2. No HTML/CSS edits are required for the base swap — the `data-asset` path already matches.
3. Once a real photo/video is in, consider removing that specific plate's halftone/tint overlay in `assets/css/style.css` (the `.plate::before` / `.plate::after` rules, or the element's specific `plate--*` modifier) if the photography should read clean rather than continue the collage-tint treatment — this is a creative call, not a requirement.
4. Remove the corresponding `<span class="plate__tag">FIG.xx // filename.jpg</span>` reference label once the real asset is confirmed in place if you no longer want the contact-sheet-style figure tag visible (it's designed to double as an on-brand production mark, so it's safe to keep).
