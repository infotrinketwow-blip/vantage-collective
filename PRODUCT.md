# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, no framework. [Inferred from explicit brief: "No build step — plain HTML/CSS/JS that opens directly or via a trivial static server." This project was commissioned as a self-contained subagent task with a fully specified brief and no interactive user available in this session (no question-asking tool present); the stack, platform, and content decisions below are taken directly from that brief rather than confirmed through a live interview. Disclosed here per Impeccable's init protocol.]

## Users

**The Pressure Cooker** — Series B/C startup CMO, 32-42, ~$3-8M marketing budget. Impatient, data-literate, will greenlight bold creative fast but fires agencies after one missed deadline. Evaluating this page to decide whether an agency pitch is worth a first call.

**The Modernizer** — Marketing Director at a legacy mid-size brand, 40-55. Needs a visible win that shifts how leadership sees the marketing function. Slower, consensus-driven buying process, but privately starved for real creative pushback rather than another safe deck.

Both personas are agency buyers evaluating Vantage Collective as a prospective branding/marketing partner; the page's job is to get either persona to start a conversation (audit, sprint, or call).

## Product Purpose

Vantage Collective is a fictional bold/experimental marketing & branding agency. This one-page site is the agency's landing page: its job is to persuade a skeptical, agency-fatigued marketing buyer to take an action (start a sprint, request an audit, or pick a fight with their category) within a single scroll. Success is measured by the page itself — the visitor decides and acts, per Impeccable's Persuade mode.

## Positioning

**Promise:** "We build brands that competitors can't ignore and customers can't forget — in weeks, not quarters."

**Mechanism a competitor agency could not truthfully copy:**
1. **Sprint Model** — first concepts delivered in 10 business days via a fixed 4-person pod (no junior hand-off after a senior-led pitch).
2. **Revenue-Linked Reporting** — every campaign ships with a pipeline/CAC dashboard, not impressions or vanity metrics.
3. **Point-of-View Guarantee** — every strategy includes one deliberately uncomfortable recommendation, contractually, not optionally.

## Operating Context

The page is evaluated cold, on desktop and mobile, typically by someone who has already sat through multiple agency pitches and is scanning for a reason to trust this one is different. It must read fast (scroll-scannable headlines), survive a skim, and still reward a full read with proof (case studies, process, objection-handling, client trust signals).

## Capabilities and Constraints

- No backend, no forms wired to a real endpoint (CTAs are presentational/scroll-to-contact in this iteration; no email capture logic was specified).
- No real photography or licensed imagery is available yet. Every image slot must ship as a bold CSS/SVG placeholder in the correct aspect ratio, clearly commented with the filename it will be swapped for later.
- A hero background video slot exists but has no source file yet; it must degrade gracefully (poster/placeholder) until `assets/video/hero-loop.mp4` is supplied.
- Must respect `prefers-reduced-motion` throughout (parallax, pinned section, stagger, stamp CTA).
- No build tooling: must open directly in a browser or via a trivial static file server.

## Brand Commitments

- Name: **Vantage Collective**.
- Voice: irreverent, confident, deliberately unsafe — "never corporate-clean." All section headlines are supplied verbatim in caps by the brief and must be preserved as-is.
- Palette (binding, from brief): near-black `#0A0A0A`, off-white paper `#F2EFE9`, blood-red accent `#D91E2B`, acid-lime highlight `#E8FF6B` (used sparingly).
- Typography direction (binding): oversized condensed display sans for headlines (Anton/Bebas Neue or similar), paired with a technical grotesk/mono for body/labels (Space Grotesk or IBM Plex Mono), both via Google Fonts.
- Aesthetic reference (binding): "punk poster / brutalist editorial," in the spirit of styles.refero.design's "Impossible Foods" system — torn-paper/collage textures, halftone grain, asymmetric grid.
- CTA copy to reuse verbatim across the site: "Start the Sprint", "Get the Unfiltered Audit", "Pick a Fight With Your Category".

## Evidence on Hand

No real client logos, testimonials, or case-study results exist. The brief supplies the case-study *shape* (3-4 fictional but plausible cards, e.g. "3x organic mentions in 60 days," "a 40-year-old company relaunched to feel brand-new") and instructs building plausible fictional examples and client names for the trust-signal logo wall and founder-style quotes. These are explicitly fictional/illustrative, not real proof, and must read as confident placeholder content rather than as verified claims.

## Product Principles

1. **Say it loud, prove it fast.** Every claim of boldness must be backed within the same section (sprint timeline, dashboard, guarantee) — the page practices the irreverence it's selling.
2. **Collage, not clutter.** Torn-paper/halftone motifs and asymmetric grids create texture and motion without sacrificing scan-ability of the core persuasive copy.
3. **Motion with a job.** Every animation (parallax, pin, stagger, stamp-CTA) must reinforce the brand's confident/tactile personality or guide attention to the next persuasive beat — never decoration for its own sake — and must degrade cleanly under `prefers-reduced-motion`.
4. **One clear next step.** Despite the loud visual voice, the three CTA phrases and the action they lead to stay singular and unambiguous throughout the page.

## Accessibility & Inclusion

`prefers-reduced-motion` support is a binding requirement from the brief (parallax, pinned scroll, stagger/collage motion, and stamp-style CTA interactions must all have a reduced/static fallback). Beyond that, standard web accessibility practice applies (semantic structure, sufficient contrast against the near-black/paper palette, keyboard-operable CTAs) — no additional standard was specified.
