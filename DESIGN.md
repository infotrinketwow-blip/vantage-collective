---
name: Vantage Collective
description: Bold branding & marketing agency landing page — punk-poster / brutalist-editorial one-pager.
colors:
  ink: "#0A0A0A"
  ink-soft: "#171512"
  paper: "#F2EFE9"
  paper-dim: "#E4DFD3"
  red: "#D91E2B"
  red-deep: "#A5151F"
  lime: "#E8FF6B"
  lime-deep: "#C7E23E"
typography:
  display:
    fontFamily: "Anton, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Space Grotesk', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
    fontSize: "0.75rem-0.95rem"
    fontWeight: 600
    letterSpacing: "0.02em-0.1em"
rounded:
  none: "0px"
spacing:
  edge: "clamp(1.25rem, 4vw, 3.5rem)"
  section-y: "clamp(5rem, 10vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "1rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.red-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    padding: "1rem 1.75rem"
---

# Design System: Vantage Collective

## Overview

**Creative North Star: "The Torn-Poster Wall"**

Vantage Collective's landing page is built as a poster wall assembled in front of the visitor as they scroll — headlines land like slammed stamps, proof arrives stapled and pinned like receipts, and every section is a torn, overlapping sheet on an asymmetric grid rather than a tidy card grid. The system refuses the safe SaaS-marketing shell (soft gradients, rounded cards, pastel badges) in favor of near-black ground, hard paper panels, one committed blood-red structural accent, and a single acid-lime hit reserved for the page's one peak moment. It is loud, asymmetric, and inked, matching the agency's own pitch: no borrowed frameworks, no committee-safe creative.

Confirmed visual rejections: no soft/pastel palette, no rounded "app card" grid as page structure, no kicker/eyebrow labels above headings, no glass/blur decoration, no gradient text.

**Key Characteristics:**
- Near-black ground with off-white paper panels alternating section-by-section
- Oversized condensed display type (Anton) in tight, torn-in headline stacks
- Torn-edge, halftone-dotted "plate" system standing in for all imagery
- Asymmetric, rotated, overlapping placement instead of a uniform grid
- One committed structural accent (blood-red); acid-lime spent once, at the peak moment
- Collage-motion reveals (staggered slide/rotate) instead of uniform fades

## Colors

The palette is a **Committed** strategy: near-black and paper carry the page's two grounds, blood-red is the dominant structural accent (rules, stamps, underlines, card shadows, roughly 30–40% of on-page ink), and acid-lime is spent sparingly — only the peak "GOOD." moment, the nav's hover underline, and one hero badge.

### Primary
- **Blood Red** (`#D91E2B`): primary CTA fills, hard-shadow accents on cards/stubs, active states, the objection section's meter gradient, the footer top rule. Its deep variant **Red Deep** (`#A5151F`) is the hover/active state for red fills.

### Secondary
- **Acid Lime** (`#E8FF6B`): reserved for the single visual peak (the "GOOD." stamp scene), the hero's rotating "EST." badge, the process section's progress bar, and nav link hover underlines. Its deeper variant **Lime Deep** (`#C7E23E`) exists as a token but is intentionally underused — lime's rarity is the point.

### Neutral
- **Near-Black** (`#0A0A0A`): the page's primary ground (hero, promise, process, objection, CTA-close, footer).
- **Ink Soft** (`#171512`): plate/card backgrounds sitting on black grounds, slightly lifted from pure black.
- **Paper** (`#F2EFE9`): the alternating light ground (problem, proof, trust sections) and all on-black primary text.
- **Paper Dim** (`#E4DFD3`): secondary paper-toned surfaces (unused as a large fill in v1; reserved for future light-ground card variants).

### Named Rules
**The One-Hit Lime Rule.** Acid-lime never fills a whole section and never appears more than once per viewport at a time. It marks the single moment the page wants remembered — spending it anywhere else cancels the effect.

## Typography

**Display Font:** Anton (with `'Arial Narrow', sans-serif` fallback)
**Body Font:** Space Grotesk (with `'Helvetica Neue', Arial, sans-serif` fallback)
**Label/Mono Font:** IBM Plex Mono (with `'Courier New', monospace` fallback)

**Character:** An oversized, condensed, all-caps display face carries every headline like a stamped poster line; a technical grotesk carries body copy for readability; a mono face marks every label, nav item, button, and data point (day ranges, figure tags, client names on the logo wall) as "production paperwork" — receipts, proof sheets, sprint cards.

### Hierarchy
- **Display** (400, `clamp(2.5rem, 6.4vw, 5.5rem)` for section heads, up to `clamp(2.9rem, 9.6vw, 8.2rem)` for the hero, line-height 0.9–0.94): section headlines and the hero headline, always uppercase, always the brief's exact copy.
- **Body** (400, 16px base / `clamp(1rem, 1.6vw, 1.2rem)` for section intros, line-height 1.45–1.55): supporting paragraphs, case-study descriptions, quotes.
- **Label** (600, 0.68rem–0.95rem, uppercase, tracked 0.02–0.1em): nav links, buttons, day-range tags, figure tags, client-quote captions, meter labels.

### Named Rules
**The No-Kicker Rule.** No section carries an eyebrow/kicker label above its headline. The oversized display headline is the only thing announcing a section; a label above it would only soften the stamp-hit effect.

## Layout

Single-column vertical scroll, `max-width: 1360px` centered container (`.section-inner`) with a fluid edge inset (`clamp(1.25rem, 4vw, 3.5rem)`). Section vertical rhythm uses a fluid `clamp(5rem, 10vw, 8rem)` top/bottom pad, alternating near-black and paper grounds section-to-section for contrast pacing. Grids are intentionally asymmetric and broken: the problem deck is a 3-column grid with alternating cards nudged down a half-row; the proof grid gives its lead case study a 2-column span while the rest stay single, each rotated a few degrees off-axis and vertically offset; the promise section splits into a 1.15fr/1fr asymmetric two-column layout. Mobile (`≤900px` / `≤760px` / `≤640px` / `≤560px` breakpoints) collapses every asymmetric grid to 1–2 columns and neutralizes rotation offsets only where needed for legibility (the problem deck and proof grid keep their card treatment; the pinned process section and its horizontal card track convert to a plain stacked flex-wrap list below 760px, since the pin/scrub interaction needs the vertical scroll runway only available on tall desktop viewports).

## Elevation & Depth

Depth is conveyed through hard, offset "paper stack" shadows, not blur or glow. Every card, stub, receipt, button, and plate carries a solid-color offset shadow (no blur radius) that reads as a second sheet of paper sitting underneath — consistent with the torn-poster/collage world rather than a generic soft-UI shadow system. Buttons additionally shift `translate(-2px,-2px)` on hover, increasing their own offset shadow to feel like the top sheet lifting off the stack.

### Shadow Vocabulary
- **Card stack** (`box-shadow: 6px 8px 0 rgba(10,10,10,.18)` on paper cards, `7px 7px 0 var(--red)` on promise stubs, `8px 10px 0 rgba(10,10,10,.15)` on receipts): the default "paper resting on paper" offset for all card-like surfaces.
- **Plate lift** (`box-shadow: 10px 14px 0 rgba(0,0,0,.35)`): the heavier offset used on every `.plate` (image placeholder), reading as a thicker printed sheet.
- **Button stamp** (`box-shadow: 5px 5px 0 var(--ink), 5px 5px 0 1px var(--paper)` at rest, `8px 8px 0 ...` on hover): the primary CTA's double-outline stamped-ink look.

### Named Rules
**The Hard-Shadow-Only Rule.** No blurred or soft shadow appears anywhere in the system; every shadow is a flat, zero-blur offset consistent with the paper-collage world. (This is a deliberate exception to the generic "no hard block shadow" default — the brief's torn-paper/collage/stamp material earns it.)

## Shapes

Corners are square everywhere (`border-radius: 0` throughout) — no rounded corners exist in the system, reinforcing the cut/torn-paper, print-poster character over a soft app-UI character. The signature silhouette is the **torn-edge plate**: every image placeholder uses an irregular `clip-path` polygon to fake a hand-torn paper edge rather than a clean rectangle. Cards, stubs, and receipts stay rectangular but are rotated a few degrees off-axis (`--cr` / `--cr-final` custom properties, typically ±1–2.4deg) and combined with the hard offset shadow to read as loosely stacked paper rather than a rigid grid.

## Components

### Buttons
- **Shape:** square corners, 2px solid border, no radius.
- **Primary:** blood-red fill, paper text, double stamped-ink shadow (`5px 5px 0 var(--ink), 5px 5px 0 1px var(--paper)`), slightly rotated at rest (`rotate(-1deg)`).
- **Ghost:** transparent fill, paper border/text, rotated the opposite direction at rest (`rotate(1deg)`) so primary/ghost pairs visually counter-lean.
- **Hover / Focus:** both variants straighten to `rotate(0deg)` and lift `translate(-2px,-2px)` with an enlarged offset shadow; `:focus-visible` gets a 3px acid-lime outline, offset 3px, on every interactive element site-wide.
- **Stamp click interaction (signature behavior):** every CTA carries `data-stamp`; on click/activation it plays a `.32s` "stamp-hit" keyframe (scale down-then-overshoot with a slight rotation kick) plus a lime ink-ring that flashes and scales outward, then fades. This is the site's one authored micro-interaction moment for buttons, not a generic press-state — it is disabled entirely under `prefers-reduced-motion`.

### Cards / Containers
- **Corner Style:** square (0 radius) throughout.
- **Background:** near-black cards on paper sections, paper cards on near-black sections — the system alternates card-tone against its ground rather than using a single card color.
- **Shadow Strategy:** see Elevation & Depth's Card Stack vocabulary; every card carries an offset shadow and a slight rotation.
- **Border:** problem-deck cards carry a 1px hairline (`rgba(paper,.12)`) on their near-black fill; most other cards are borderless, relying on the offset shadow for separation.
- **Internal Padding:** roughly 1.5–1.75rem card padding site-wide, scaling down slightly on narrow viewports.

### Plates (signature component — image placeholder system)
Every future-image slot on the page is a `.plate`: an irregular torn-edge `clip-path`, a halftone dot overlay (`mix-blend-mode: overlay`), and a palette-tinted diagonal gradient wash, finished with a heavy offset shadow. A small monospace "figure tag" (e.g. `FIG.04 // case-nocturne-billboard.jpg`) sits in a corner of the more prominent plates, styled like a contact-sheet/proof-mark rather than a generic "placeholder" label, doubling as both dev signage (the exact filename to swap in) and on-brand production ephemera. Ambient/background-only plates (the hero and objection halftone washes, the problem-section backdrop texture) omit the figure tag since they sit behind other content and a tag there would collide with foreground copy.

### Navigation
- **Style:** fixed top bar, transparent over the hero, solidifying to `rgba(10,10,10,.92)` with a blur and a 2px blood-red bottom rule once the visitor scrolls past ~60% of the viewport height.
- **Typography:** mono, uppercase, tracked; the wordmark is display-face with a red em-dash divider (`VANTAGE—COLLECTIVE`).
- **Hover / Active:** nav links reveal a lime underline sliding in from the left on hover.
- **Mobile:** collapses to a burger toggle revealing a full-width dropdown panel with a red bottom rule; the persistent nav CTA button is hidden below 760px in favor of the in-panel CTA.

### Signature interaction: the pinned Process board
The "Process" section pins its corkboard visual full-viewport via `position: sticky` while roughly 3.2 extra viewport-heights of scroll runway advance a horizontal card track and a lime progress bar beneath it, highlighting the active sprint-day card as the visitor scrolls — content advances while the section itself stays in view, per the brief's pinned-scroll requirement. Below 760px (and under `prefers-reduced-motion`) this degrades to a plain stacked list, since the pin/scrub choreography depends on vertical scroll runway that a short mobile viewport can't spare.

### Signature moment: the Objection "peak"
The Objection section is the page's one visual high point: on first scroll-into-view it fires a brief full-bleed acid-lime flash, a subtle whole-section shake, a SAFE→BOLD meter that fills and sweeps its needle, and a giant rotated "GOOD." stamp that slams in on a delayed beat after the meter settles. It fires once per page view and is fully inert under `prefers-reduced-motion` (the meter and stamp still land in their end state instantly; the flash and shake are skipped entirely).

## Do's and Don'ts

### Do:
- **Do** keep acid-lime to one moment per viewport — spending it more than once flattens the "peak" effect it exists to create (see The One-Hit Lime Rule).
- **Do** give every card/plate/button a hard, zero-blur offset shadow and a slight rotation; a perfectly axis-aligned, shadowless surface reads as off-system.
- **Do** route all body/label copy through the mono or Space Grotesk stack — never the display face below headline scale (Anton is illegible at body sizes).
- **Do** keep every future real photo inside the existing `.plate` torn-edge/shadow treatment (or deliberately retire it per-plate) rather than dropping a plain rectangular `<img>` into the layout.

### Don't:
- **Don't** add a kicker/eyebrow label above any section headline (see The No-Kicker Rule) — this is a hard ban carried from the system's craft floor, not a style preference.
- **Don't** round any corner in the system; `border-radius: 0` is a structural commitment, not an oversight.
- **Don't** introduce soft/blurred shadows or glassmorphism anywhere — depth is offset-shadow only (see The Hard-Shadow-Only Rule).
- **Don't** use System UI/Impact/Arial Black as a display-face fallback in a way a visitor would ever actually see; Anton must load from Google Fonts for the system to read as intended.
