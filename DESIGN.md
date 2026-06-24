# DESIGN.md — MindstormX Visual Language

The design contract for the MindstormX Technologies website. Every component must
honor this document. It is derived from the brand guideline (final slide of the
corporate deck) and the website reference mockup (`mindstormx web.png`).

**Design north star:** _Enterprise-grade, future-ready, trustworthy._ Think a
modern govtech / deep-tech SaaS — confident, spacious, precise. Electric indigo
energy against deep ink, with generous whitespace and crisp geometry. Never busy,
never playful-for-its-own-sake. Every screen should feel like infrastructure you
can trust.

---

## 1. Color system

Three brand colors anchor everything: **electric indigo**, **ink black**, **pure
white**. A small set of derived navy/slate tones supports dark sections (the deck's
signature look) and a few functional accents support data viz.

### Core palette

| Token | Hex | Role |
| --- | --- | --- |
| `brand` | `#4B4BFF` | Primary. CTAs, links, highlights, accents, the "X". |
| `ink` | `#000000` | Headlines on light, the strongest text/borders. |
| `white` | `#FFFFFF` | Light surfaces, text on dark. |

### Derived brand ramp (indigo)

| Token | Hex | Use |
| --- | --- | --- |
| `brand-50` | `#EEEEFF` | Tint backgrounds, hover wash, chips. |
| `brand-100` | `#DCDCFF` | Soft fills. |
| `brand-300` | `#9B9BFF` | Subtle accents, gradients. |
| `brand-500` | `#4B4BFF` | = `brand`. Default. |
| `brand-600` | `#3B3BE0` | Hover/active on primary buttons. |
| `brand-700` | `#2E2EB8` | Pressed, deep accents. |

### Dark / navy surfaces (the "deck" aesthetic)

Dark sections use a near-black indigo-tinted navy, **not** flat black, with the
electric blue used sparingly for glow, lines, and highlights.

| Token | Hex | Use |
| --- | --- | --- |
| `navy-950` | `#070A1A` | Deepest hero/footer background. |
| `navy-900` | `#0B1020` | Primary dark section background. |
| `navy-800` | `#121933` | Dark cards / raised dark surfaces. |
| `navy-700` | `#1C2547` | Dark borders, hairlines on dark. |

### Light neutrals (slate)

| Token | Hex | Use |
| --- | --- | --- |
| `slate-50` | `#F7F8FB` | Page alt background, light section wash. |
| `slate-100` | `#EEF1F6` | Card backgrounds on white, dividers. |
| `slate-200` | `#E2E6EE` | Borders, hairlines on light. |
| `slate-500` | `#6B7280` | Secondary/body text on light. |
| `slate-700` | `#374151` | Strong body text on light. |

### Color rules

- **Highlight discipline.** In a headline, only the key phrase gets `brand` color
  (e.g. "Building Intelligent **Digital Ecosystems** for a Better Future"). Never
  more than one accented phrase per heading.
- **Dark vs light rhythm.** Alternate section backgrounds to create cadence: dark
  hero → light → light-alt → dark feature → light … Never two identical adjacent
  backgrounds without a divider.
- **Never** paste raw hex into components. Use tokens (`text-brand`, `bg-navy-900`).
- On dark, body text is `white/70`; headings are `white`. On light, body is
  `slate-500`/`slate-700`; headings are `ink`.

---

## 2. Typography

- **Display / headings:** **Poppins** (600/700). Tight tracking, confident.
- **Body / UI:** **Inter** (400/500/600). Highly legible.
- Loaded via `next/font/google` and exposed as CSS vars `--font-poppins` /
  `--font-inter`; mapped to Tailwind `font-display` and `font-sans`.

### Type scale (fluid where useful)

| Role | Classes | Notes |
| --- | --- | --- |
| Display / Hero H1 | `font-display font-bold text-5xl md:text-7xl tracking-tight leading-[1.05]` | One accent phrase in `brand`. |
| Section H2 | `font-display font-semibold text-3xl md:text-5xl tracking-tight` | |
| Card / H3 | `font-display font-semibold text-xl md:text-2xl` | |
| Eyebrow / kicker | `text-sm font-semibold uppercase tracking-[0.18em] text-brand` | Above H2s. |
| Lead paragraph | `text-lg md:text-xl leading-relaxed` | Body color per surface. |
| Body | `text-base leading-relaxed` | |
| Small / meta | `text-sm` | Captions, labels. |
| Stat number | `font-display font-bold text-4xl md:text-6xl` | Often `brand`. |

Headlines use sentence case (matching the deck). Eyebrows are UPPERCASE tracked.

---

## 3. Layout & spacing

- **Container:** max-width `1200px` (`max-w-7xl`), horizontal padding
  `px-5 md:px-8`. Use the `<Container>` primitive.
- **Section vertical rhythm:** `py-20 md:py-28` (hero/large: `py-24 md:py-36`).
  Use the `<Section>` primitive which also handles background variants.
- **Grid:** 12-col mental model; in practice use Tailwind `grid` with
  `gap-6 md:gap-8`. Feature cards: 2-up on tablet, 4-up on desktop where natural.
- **Spacing scale:** stick to Tailwind's 4-pt scale (4/6/8/12/16/20/24/28/32).
- **Radius:** cards `rounded-2xl`, buttons/inputs `rounded-xl`, chips/badges
  `rounded-full`, large feature panels `rounded-3xl`.
- **Borders:** 1px. On light `border-slate-200`; on dark `border-white/10`.

---

## 4. Elevation, surfaces & effects

- **Light cards:** `bg-white border border-slate-200 rounded-2xl` with a soft
  shadow `shadow-[0_1px_3px_rgba(16,24,40,0.06)]`; on hover lift to
  `shadow-[0_12px_40px_-12px_rgba(75,75,255,0.25)]` and `-translate-y-1`.
- **Dark cards:** `bg-navy-800/60 border border-white/10 backdrop-blur` with an
  inner top highlight; hover raises border to `border-brand/40`.
- **Glow:** the signature accent. Behind hero & dark feature blocks, place a
  blurred radial `bg-brand/30 blur-[120px]` orb. Use sparingly (1–2 per viewport).
- **Grid/blueprint texture:** subtle dotted or line grid (`opacity-[0.06]`) on dark
  backgrounds echoes the deck's blueprint motif. Provide as a CSS background or SVG.
- **Gradient text** (optional, hero only): `bg-gradient-to-r from-brand to-brand-300
  bg-clip-text text-transparent` for the accent phrase.

---

## 5. Components (contract)

These primitives live in `components/ui` and MUST be reused.

- **`Container`** — centers content, applies max-width + responsive padding.
- **`Section`** — vertical padding + `variant` prop:
  `"light" | "alt" | "dark" | "darker"` mapping to white / slate-50 / navy-900 /
  navy-950. Optional `glow` and `grid` decorative flags.
- **`SectionHeading`** — renders optional eyebrow, H2 (with an optional
  `highlight` phrase colored `brand`), and optional lead paragraph; `align`
  prop (`left`/`center`); adapts text colors to a `tone` (`light`/`dark`).
- **`Button`** — variants:
  - `primary`: `bg-brand text-white hover:bg-brand-600`, `rounded-xl`, medium
    weight, optional trailing arrow icon.
  - `secondary`: `bg-ink text-white hover:bg-navy-800` (dark pill on light).
  - `outline`: transparent, `border` (slate-200 on light / white-20 on dark),
    hover `border-brand text-brand`.
  - `ghost`: text-only link-button with arrow, hover `text-brand`.
  Sizes `sm | md | lg`. Renders as `<a>`/`next/link` or `<button>`.
- **`Badge` / chip** — `rounded-full` pill; `tone` light/dark/brand.
- **`Card`** — base surface honoring the elevation rules above; `tone` light/dark.
- **`Reveal`** — client wrapper using Framer Motion: fade + 16px rise on scroll
  into view, `viewport={{ once: true }}`, default 0.5s ease-out, optional stagger
  `delay`. MUST respect `prefers-reduced-motion` (no transform/opacity animation
  when reduced).
- **`Logo`** — the wordmark; uses `public/mindstormx-logo.png` with proper sizing;
  `tone` switches to an inverted/white treatment on dark backgrounds.

### Navbar

- Sticky, translucent on scroll (`backdrop-blur bg-white/80 border-b
  border-slate-200`), transparent over the dark hero at top.
- Left: logo. Center/right: nav links (Home, About, Products, Solutions, Roadmap)
  + a `primary` **Contact Us** button with trailing arrow.
- Mobile: hamburger → full-screen/slide-down menu.

### Footer

- Dark (`navy-950`). Logo + tagline, link columns (Company, Platforms, Resources),
  contact block (email, Johor HQ), and a thin legal bar:
  "© 2026 MindstormX Technologies Sdn Bhd. Confidential & Proprietary." with the
  brand-attribute chips (Scalable · Versatile · Modern · Memorable · Future-Ready).

---

## 6. Iconography & imagery

- **Icons:** `lucide-react`, stroke 1.75–2, sized 20–28 in UI, up to 40 in feature
  cards. Wrap feature icons in a `rounded-2xl` tile (`bg-brand/10 text-brand` on
  light; `bg-white/5 text-brand-300` on dark).
- **Per-platform accent:** each of the four products may carry a light icon tint
  while keeping `brand` as the system primary — keep tints subtle and on-brand
  (indigo-leaning), not a rainbow.
- **No stock photos required.** Lean on geometry: blueprint grids, glow orbs,
  connected-node diagrams, isometric layers — matching the deck. Build these with
  CSS/SVG, not raster images.

---

## 7. Motion

- **Scroll reveals:** via `Reveal` — subtle fade + rise, staggered for lists/grids
  (e.g. 60–80ms between cards).
- **Hover:** cards lift `-translate-y-1` + shadow/border change over 200ms;
  buttons shift background + nudge the arrow icon `translate-x-0.5`.
- **Hero:** a slow, ambient drift on the glow/grid is acceptable; keep it calm.
- **Discipline:** 200–600ms, ease-out. No bounce, no parallax overload. Always
  honor `prefers-reduced-motion`.

---

## 8. Data-viz / signature section treatments

The deck has memorable diagrams — recreate their spirit with CSS/SVG:

- **Platform grid (2×2 quadrant)** for the four products — "Economic Impact" vs
  "Frequency of Use" axes (subtle), each quadrant a dark card.
- **Ecosystem flywheel** (Acquisition → Trust/Subscription → Lifecycle → Data) —
  4 nodes around a central MindstormX mark, connected with arrows.
- **Tech stack** as stacked, offset isometric layers (Automation / Cloud & Big
  Data / Cyber-Resilience).
- **Monetization pyramid** — 5 tiers, brand-tinted, ascending to "Future AI
  Services".
- **Roadmap** as an ascending 3-step staircase (Phase 1→3, 2026–2030).
- **Stat band** — 4 KPIs (100,000+ lives impacted · 50+ gov/enterprise clients ·
  4 flagship products · 10M+ transactions) on a dark/brand band with icons.

Keep these crisp and legible before clever.

---

## 9. Accessibility & quality bar

- WCAG AA contrast minimum. `brand` (#4B4BFF) on white passes for large/bold text
  and UI; for small body text on light, prefer `slate-700`/`ink`.
- Visible focus: `focus-visible:ring-2 ring-brand ring-offset-2`.
- Semantic HTML + landmarks; one `<h1>` per page; logical heading order.
- All interactive targets ≥ 40px; alt text on the logo and any imagery.
- Respect reduced motion everywhere motion is used.

**Summary:** electric indigo on deep ink and clean white, Poppins headlines over
Inter body, generous space, crisp geometry, restrained glow, and calm purposeful
motion. Infrastructure you can trust.
