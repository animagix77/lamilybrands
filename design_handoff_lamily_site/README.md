# Handoff: Lamily Brand Site

## Overview

Lamily is a parent brand for two fictional frozen-dessert sub-brands —
**Tubbly's** (deluxe ice cream bars) and **True Blossom** (sculpted frozen
dairy desserts). This handoff packages the marketing single-page site that
introduces the parent brand and routes visitors into each sub-brand.

The site is one long scroll: nav → hero → tagline marquee → families intro →
Tubbly's section → True Blossom section → story → stockists → footer.

## About the Design Files

Everything in `design/` is a **design reference**, not production code.
The bundle is an HTML/CSS/React-via-Babel prototype — Babel transpiles JSX in
the browser, React is loaded from a CDN, and the JSX files are split for
authoring convenience, not as a real component architecture. Treat the files
as a high-fidelity spec.

The implementation task is to **recreate this design in the target
codebase's existing environment** (Next.js, Astro, Remix, Vite + React, etc.)
using its established patterns:

- Real component files / module imports — drop the `<script type="text/babel">` setup.
- Real CSS pipeline (CSS Modules, Tailwind, vanilla-extract, plain CSS — whatever the codebase uses). The CSS variables in `:root` should map cleanly to whatever token system is already in place.
- Real font loading (Google Fonts via `next/font`, `<link>` in document head, or self-hosted — same families).

If no codebase exists yet, default to **Next.js (App Router) + plain CSS
Modules**. The design has no data fetching and no auth, so framework choice
is mostly a matter of team preference; what matters is preserving the look,
typography, and motion.

## Fidelity

**High fidelity.** Final colors, typography scale, spacing, copy, and motion
are all locked. Recreate pixel-faithfully. The few intentionally loose bits
are called out inline below ("looseness budget").

## Design Tokens

All tokens live in `design/site.css` under `:root`. Lift these into the
target codebase's token system (Tailwind theme, CSS custom properties, or
TS object — whichever fits).

### Color

```
/* Surface — warm cream paper */
--cream:        #F5EDE0;   /* page bg, default */
--cream-deep:   #EDE2CE;   /* card bg variant  */
--cream-light:  #FAF5EB;   /* on-dark text     */

/* Ink — chocolate, not black */
--ink:          #2A1810;   /* primary text, primary on cream */
--ink-soft:     #3A2820;   /* body text, slightly lighter */
--ink-mute:     #6B5043;   /* meta / mono labels */

/* Tubbly's sub-brand */
--tubblys-brown:       #2A1810;
--tubblys-yellow:      #D4E04A;   /* the loud lime */
--tubblys-yellow-deep: #B8C53D;

/* True Blossom sub-brand */
--blossom-pink:        #E85A7A;   /* hero accent + footer wordmark */
--blossom-pink-soft:   #F5C8D4;
--blossom-pink-bg:     #FCE9EE;
--blossom-violet:      #8B7AB8;
--blossom-violet-soft: #D5CDE6;
--blossom-violet-bg:   #ECE6F4;
--blossom-gold:        #B89758;

--accent: var(--blossom-pink);   /* default accent */
```

The **Tweaks panel** lets the user swap the page-level surface theme
(`cream` / `paper` / `rose` / `mint`) and accent (`pink` / `yellow` /
`violet` / `tomato`). Those alternates are defined as CSS overrides on
`.theme-*` and `.accent-*` classes in `site.css` — keep them or drop them
depending on whether the production site needs runtime themes. **In
production, only `theme=cream` + `accent=pink` are required.**

### Typography

Three families, loaded from Google Fonts:

| Var | Family | Weights/styles used |
|---|---|---|
| `--serif` | **Fraunces** | 300, 400, 500, italic 300/400 (opsz 9..144) |
| `--sans` | **Inter Tight** | 400, 500, 700, 800 |
| `--mono` | **JetBrains Mono** | 400, 500 |
| (display italic) | **Cormorant Garamond** | 400, 500, italic 400/500 |

Cormorant Garamond is used **only** for True Blossom's word-of-section
treatments (`.blossom-name`, `.bf-text h3`, `.blossom-coming h4`). Everywhere
else, italic display = Fraunces italic.

#### Type scale (representative)

| Role | Family | Weight | Size | line-height | letter-spacing |
|---|---|---|---|---|---|
| Hero headline (bold variant) | serif | 300 | `clamp(40px, 5.2vw, 76px)` | 0.98 | -0.025em |
| Hero headline (editorial) | serif | 300 | `clamp(48px, 7vw, 110px)` | 0.95 | -0.03em |
| Section title | serif | 300 | `clamp(34px, 4.2vw, 60px)` | 1.05 | -0.02em |
| Brand mast (e.g. "Tubbly's") | sans | 800 | `clamp(72px, 12vw, 200px)` | 0.85 | -0.045em |
| Brand mast — Blossom override | Cormorant 500 italic | — | `clamp(64px, 10vw, 160px)` | 1 | -0.02em |
| Feature headline (Tubbly's) | sans 800 uppercase | — | `clamp(36px, 4.2vw, 64px)` | 0.95 | -0.035em |
| Flavor card title | Cormorant 500 italic | — | `clamp(40px, 4.5vw, 64px)` | 1.05 | -0.01em |
| Body lede | serif | 400 | 18px | 1.5 | — |
| Body | serif | 400 | 17–18px | 1.55–1.65 | — |
| Eyebrow / meta | mono | 400 | 10–12px | — | 0.1–0.18em uppercase |
| Tagline marquee item | serif italic | 400 | 22px | — | — |
| Footer link | serif | 400 | 18px | — | — |
| Stockist name | serif | 400 | 24px | — | -0.01em |

When the spec says serif headline at weight **300**, use Fraunces 300 — not
400. The lightness is doing real work; don't auto-promote to 400.

### Spacing

The `.density-*` classes set the section rhythm:

```
.density-airy   --section-pad-y: 160px; --section-gap: 120px;
.density-cozy   --section-pad-y: 110px; --section-gap:  80px;   /* default */
.density-packed --section-pad-y:  70px; --section-gap:  50px;
```

Production should ship `density=cozy`. The other densities are again a
Tweaks-only feature; drop unless needed.

Otherwise spacing is ad-hoc per section — no enforced 4/8 grid. Match the
values in `site.css` directly.

### Radius / shape

- `--radius: 14px` — default card radius.
- Pills use `border-radius: 999px`.
- The Tubbly's blob (`.brand-mast-blob`) uses an irregular blob shape:
  `border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%`. Keep that exact value.

### Shadow / texture

- A subtle SVG noise overlay is fixed-position over the whole page at
  `opacity: 0.4; mix-blend-mode: multiply` — see `body::before` in
  `site.css`. **Keep it.** It's most of the "this site has paper" feeling.
  If your CSS pipeline can't inline an SVG data-URL, write the same noise to
  a small PNG and reference it.
- Cards use either no shadow or a single soft elevation; check `site.css`
  per component.

## Screens / Views

Single page, several stacked sections. Each is a sibling of `<App>`'s
container and is identified by `id` for in-page anchor nav.

### 1. Nav (`<Nav>` in `site.jsx`)

- **Position:** `position: fixed; top: 0; left/right: 0; z-index: 50;`
- **Layout:** 3-column grid (`1fr auto 1fr`) — logo left, links centered, CTA right.
- **Padding:** `18px 36px`.
- **Type:** mono, 12px, 0.05em tracking, uppercase.
- **Scrolled state** (after `window.scrollY > 40`): adds class `is-scrolled` which paints a 92%-opacity cream background plus `backdrop-filter: blur(12px)`. Transition `all 0.25s ease`.
- **Logo:** `<ScriptLogo size={0.55} color="var(--ink)" />` — a pre-tinted PNG of the Lamily wordmark. There are three tinted variants in `assets/`: `lamily-logo-ink.png`, `-pink.png`, `-white.png`. The component picks based on the `color` prop. In a real codebase, replace this with a single SVG and use `currentColor`.
- **Links:** Our Families, Tubbly's, True Blossom, Our Story, Stockists.
- **CTA:** "Find a Freezer" + 45°-up-right arrow.

### 2. Hero (`<Hero>`)

Three variants, gated on `tweaks.heroVariant`. Production should ship the
**bold** variant. The other two (`editorial`, `photo`) are exploration-only
and can be deleted from the implementation.

#### Bold variant (default — ship this)

- Full-viewport top section, no background image — pure cream with the
  noise overlay.
- **Top row:** two mono `meta-tag`s side by side: `DELUXE FROZEN GOODS` · `SINCE 2026`.
- **Wordmark:** the "Lamily" handwritten wordmark, **animated**. See "Animations" below. Color `#E85A7A`. Width `min(78vw, 1100px)`.
- **Bottom row:** two-column grid.
  - Left: serif 300 headline, `clamp(40px, 5.2vw, 76px)`:
    > One **family.** \\
    > Two flavors of *obsession.*
    "family." is in `--accent`; "obsession." is italicized in `--accent`.
  - Right: 17px body paragraph (`--ink-soft`), then a primary button "Meet the family" + right arrow.

#### Editorial variant (explore-only)

Centered editorial layout: meta tags → big logo → big headline `A house of cold, small joys.` → body + scroll cue. Headline `clamp(48px, 7vw, 110px)`, weight 300.

#### Photo variant (explore-only)

Two-column grid. Left: pink-star eyebrow → headline that interpolates the Lamily logo inline ("Welcome to the **[logo]** family.") → blurb → two CTAs. Right: two product photos in an offset stack with pill labels.

### 3. Tagline marquee (`<TaglineStrip>`)

A horizontal infinite scroll of italic-serif phrases (`Made for slow evenings`, `Deluxe by hand`, …) separated by a star glyph in the accent color. Single `<div class="tagline-strip">` containing a doubled `<div class="tagline-track">` for seamless loop. CSS animation; speed = `60s` translate by `-50%`. Keep `aria-hidden`.

Toggleable via Tweaks (`showTagline`); production should ship visible.

### 4. Families intro (`<Families>`)

- **Section head:** eyebrow `01 — Our Families`, section title with italic accent on "Distinct personalities.", lede paragraph. Centered in `.section-head { text-align: center; max-width: 780px; margin: 0 auto 64px; }`.
- **Two cards** in `.family-cards` (2-column grid):
  - **Tubbly's** (left, dark brown card)
    - tag pill "BRAND ONE" with yellow star
    - product image (`assets/tubblys-product.jpeg`)
    - card body: name (sans 800 44px), tagline (mono 11px), blurb (serif 17px), arrow link "Visit Tubbly's"
  - **True Blossom** (right, pink card)
    - same structure, but `family-card-name` is overridden to Cormorant Garamond 500 italic at 52px
    - product image (`assets/blossom-dragonfruit-box.jpeg`)
    - blurb + "Visit True Blossom" arrow link
- Cards are `<a>`s linking to `#tubblys` / `#blossom`.

### 5. Tubbly's section (`<Tubblys>`)

- **Brand mast:** giant "Tubbly's" wordmark in sans 800 `clamp(72px, 12vw, 200px)` (line-height 0.85), italic-serif tagline below in `--tubblys-yellow`. To the right, the blob badge (`.brand-mast-blob`) — see Radius above.
- **Hero feature:** two-column.
  - Left: looping muted `<video>` `assets/tubblys-hero.mp4` filling the column.
  - Right: eyebrow → "The Dubai Chocolate Bar." (sans 800 uppercase, `clamp(36px, 4.2vw, 64px)`) → body copy → "See full nutrition" arrow button.
- **Lineup strip:** full-bleed `<img src="assets/tubblys-lineup.jpeg" />` in `.tubblys-strip`.

> **Note:** there used to be a "full lineup" 4-card flavor grid here. It was removed. The `flavors` array and supporting CSS may still be in source — leave them if porting verbatim, or delete during cleanup.

### 6. True Blossom section (`<Blossom>`)

- **Brand mast:** "True Blossom" in Cormorant Garamond 500 italic, `clamp(64px, 10vw, 160px)`. Italic-serif tagline below in `--ink-soft`.
- **Two flavor articles**, alternating image-left / image-right:
  - **Crimson Dragon Fruit** — image left (`blossom-dragonfruit-single.jpeg`), text right with `№ 01`, headline (Cormorant 500 italic, `clamp(40px, 4.5vw, 64px)`, color `var(--blossom-pink)`), body paragraph.
  - **Blueberry Bliss** — text left, image right (`blossom-blueberry-single.jpeg`), headline color `#6B5C9A` (the Blossom violet darkened).
- **"Blooming soon" list** below: italic Cormorant heading `Blooming soon —` in `--blossom-gold`, then a 4-column grid of upcoming flavors. Currently:
  Yuzu Petal · White Peach Sakura · Lychee Rose · Cassis Camellia · Mystic Mangosteen.
  Each item is italic Cormorant 24px on a dashed bottom border.

### 7. Story (`<Story>`)

- 2-column grid (`.story-grid`):
  - Left: eyebrow `02 — Our Story`, section title, two body paragraphs.
  - Right: a numbers strip (`.story-numbers`) — three cells, each with a big italic-serif accent number above a mono uppercase label:
    - **2026** Founded
    - **2** Sub-brands
    - **11** People
  - Plus a captioned image (`story-caption`).

### 8. Stockists (`<Stockists>`)

- Section head — eyebrow `03 — Find Us`, title `Stockists, in alphabetical order.` (the list isn't actually alphabetized — see "looseness budget"), lede.
- `<ul class="stockist-list">` of rows, each a 5-column grid:
  `[num] [name] [region] [note] [arrow]`.
- Current rows (in source order):
  1. Foxtrot Market · Chicago, IL · Tubbly's
  2. Eataly · NY · Chicago · LA · Both lines
  3. Erewhon · Los Angeles, CA · True Blossom
  4. Bristol Farms · Southern California · Both lines
  5. Whole Foods Midwest · Selected stores · Tubbly's
  6. H Mart · Nationwide · True Blossom
  7. The Goods Mart · Los Angeles, CA · Tubbly's
  8. Zabar's · New York, NY · Both lines
  9. Teso Life · Flushing, NY · True Blossom
- **CTA below:** "Don't see your local market?" + primary button "Request Lamily near you".

### 9. Footer (`<Footer>`)

- **Top:** small animated handwritten Lamily wordmark, hero-pink (`#E85A7A`), `min(35vw, 260px)` wide. Same handwriting animation as hero, slower (3.4s, 0.1s delay).
- **4-column grid:** Brands · Company · Find us · Newsletter. Newsletter has a small inline form (email input + arrow button); `onSubmit` is `preventDefault` only — no real submit handler in the design.
- **Base:** `© Lamily Co. 2026 · Chicago, IL` and `Made cold, kept warm.` in mono.

## Animations

### Lamily handwriting wordmark

The hero and footer wordmarks use a custom letter-by-letter SVG draw
animation. Implementation lives in `lamily-handwriting.jsx` +
`lamily-handwriting.css` + `lamily-paths.js`.

How it works:

- `lamily-paths.js` exports `window.LAMILY_PATH_DATA` — six SVG path
  components traced from the original logo PNG (the L+swoosh, a, m, i body,
  i dot, l+y).
- `<LamilyHandwriting width={...} color={...} duration={2.8} delay={0.3} />`
  renders an inline SVG and animates `stroke-dashoffset` per component in
  left-to-right order, with the dot timed to land after the i body.
- It uses `IntersectionObserver` to start the animation when the wordmark
  enters the viewport, and replays via a key bump if needed.

To port:

- Inline the SVG paths as a real React component (or a single SVG asset
  with CSS animation). Keep stroke widths and timing as authored.
- The `color` prop drives `stroke`. Hero uses `#E85A7A`, footer same.
- Default duration ~2.8s, delay ~0.3s. Footer goes a touch slower (3.4s).

### Other motion

- **Nav scroll state:** transitions `all 0.25s ease` when toggling `.is-scrolled`.
- **Tagline marquee:** infinite linear translate, speed param controlled (60s default).
- **Buttons / links:** small color/transform transitions, `~0.2s ease`.
- **Arrows on `.stockist-arrow` and CTA buttons:** rotate via inline transform; `transition: transform 0.3s` on the SVG.

No GSAP, no Framer Motion in the prototype. If you adopt one in production it's fine, but plain CSS + a small IO-driven JS replay handles all of this.

## Interactions & Behavior

- **Anchor nav:** all nav links are in-page (`#families`, `#tubblys`, `#blossom`, `#story`, `#stockists`). Use smooth scrolling globally.
- **Nav scroll state:** see above. Threshold = 40px.
- **Tubbly's hero video:** `autoPlay loop muted playsInline`.
- **Newsletter form:** submit is a no-op in the design; wire to whatever ESP the production site uses.
- **CTA buttons** (`<a href="#">`): currently dead links. Targets in production:
  - "Meet the family" → `#families` (or wherever the family overview lives)
  - "See full nutrition" → product detail page (out of scope for this design)
  - "Visit Tubbly's" / "Visit True Blossom" → `#tubblys` / `#blossom`
  - "Request Lamily near you" → wholesale contact form
- **Find a Freezer (nav CTA):** points to `#shop` in source — production should resolve this to the stockists section or a real locator.

## State Management

The site itself is mostly stateless. The only state is:

- `Nav`: `scrolled` boolean from `window.scrollY > 40` listener.
- `LamilyHandwriting`: an internal `playing` state driven by IntersectionObserver.
- The Tweaks panel maintains a `tweaks` object (theme, accent, density, heroVariant, showTagline). **Strip the entire Tweaks system in production** — `TweaksPanel`, `tweaks-panel.jsx`, `useTweaks`, the `EDITMODE` block, and any `.theme-* / .accent-* / .density-*` classes you don't intend to ship. The only reason it's in the prototype is to let the design reviewer toggle variants.

## Responsive behavior

The CSS uses `clamp()` extensively for headline sizes. There's a single
`@media` block near the bottom of `site.css` (~line 1240+) that handles
narrow viewports:

- Footer grid collapses to 2 columns.
- Stockist row collapses to 4 columns (drops the note column visually) and shrinks region/note text to 13px.
- Blooming-soon list collapses to 2 columns.

Add additional breakpoints as needed for tablet — the prototype was authored desktop-first.

## Looseness budget

Things you may safely tweak without breaking the design:

- The Stockists heading says "in alphabetical order" but the list isn't sorted. Either sort the list, or change the copy. Either is fine.
- Cormorant Garamond is only used in three places. If your codebase already loads a similar high-contrast italic display serif (e.g. Reckless, Playfair Display ExtraBold Italic), use that instead of adding another font family.
- The Tweaks side-panel UI itself isn't part of the production design — it's developer-only.

Things you should **not** tweak:

- The handwritten Lamily wordmark and its animation. It's the brand.
- Color hexes — they're tuned.
- Fraunces weight 300 for headlines. Don't bump to 400.
- The paper noise overlay.

## Assets

All in `design/assets/`:

| File | Used in |
|---|---|
| `lamily-logo.png` | source for the traced handwriting paths (not used directly in the live site) |
| `lamily-logo-ink.png` | nav, editorial hero — `<ScriptLogo color="var(--ink)" />` |
| `lamily-logo-pink.png` | not currently used; available for tinting |
| `lamily-logo-white.png` | footer (legacy — replaced by `<LamilyHandwriting>`); editorial hero on dark bg |
| `tubblys-product.jpeg` | photo-variant hero, families card, Tubbly's section |
| `tubblys-handheld.jpeg` | (available, not currently placed) |
| `tubblys-hero.mp4` | Tubbly's section feature loop |
| `tubblys-lineup.jpeg` | Tubbly's full-bleed strip |
| `blossom-dragonfruit-box.jpeg` | families card |
| `blossom-dragonfruit-single.jpeg` | photo hero, Blossom flavor 01 |
| `blossom-blueberry-box.jpeg` | (available, not currently placed) |
| `blossom-blueberry-single.jpeg` | Blossom flavor 02 |

These are stand-in product photography from the design phase. **Replace with
final brand photography before launch.** The `lamily-logo-*.png` family can
be retired entirely once you have a clean SVG export of the wordmark — the
handwriting animation traces the original PNG, but the live site only needs
the SVG paths in `lamily-paths.js`.

## Files in this bundle

```
design_handoff_lamily_site/
├── README.md                                ← this file
└── design/
    ├── Lamily Brand Site.html               ← root entry, sets up React + Babel + scripts
    ├── site.css                             ← all styles, including :root tokens
    ├── site.jsx                             ← Nav, Hero, ScriptLogo, Marquee, Star, Arrow
    ├── sections.jsx                         ← TaglineStrip, Families, Tubblys, Blossom,
    │                                          Story, Stockists, Footer
    ├── lamily-handwriting.jsx               ← <LamilyHandwriting /> animated wordmark
    ├── lamily-handwriting.css               ← styles for the above
    ├── lamily-paths.js                      ← traced SVG path data (window.LAMILY_PATH_DATA)
    ├── tweaks-panel.jsx                     ← dev-only Tweaks panel (drop in production)
    └── assets/                              ← all images + the hero video
```

To preview the design as authored: open `design/Lamily Brand Site.html` in a
browser served over HTTP (the inline Babel + asset paths require it; opening
via `file://` will fail on the asset fetches).
