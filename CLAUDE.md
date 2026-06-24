# CLAUDE.md — MindstormX Technologies Website

Guidance for Claude Code (and humans) working in this repository.

---

## 1. What this is

The official marketing / corporate-profile website for **MindstormX Technologies
Sdn Bhd** — a Johor-based technology venture building subscription-driven,
transaction-enabled digital platforms for Malaysia's "everyday economy".

The site is a **Next.js (App Router) + TypeScript + Tailwind CSS** application. It
is content-driven: nearly all copy lives in [`lib/content.ts`](lib/content.ts) so
sections stay consistent and editable in one place. All source content is derived
from `MindstormX_profile_Roadmap 2026.pdf` (the corporate profile & strategic
roadmap deck) which is kept at the repo root for reference.

**Brand one-liner:** _Building Digital Ecosystems for Everyday Life._

---

## 2. Company facts (single source of truth)

| Field | Value |
| --- | --- |
| Legal name | MindstormX Technologies Sdn Bhd |
| HQ | Johor, Malaysia |
| Email | contact@mindstormx.com |
| Web | www.mindstormx.com |
| Positioning | "Building Intelligent Digital Ecosystems for a Better Future" |
| Core values | Innovation · Integrity · Collaboration · Excellence |
| Brand attributes | Scalable · Versatile · Modern · Memorable · Future-Ready |

### The four flagship platforms ("Everyday Platforms")

| Product | Domain | One-liner |
| --- | --- | --- |
| **doktor+** | Community Healthcare | Digital health subscription ecosystem |
| **pasar+** | Hyperlocal Commerce | Grocery & community commerce platform |
| **khairat+** | Welfare / Funeral | Funeral assistance & community benefits |
| **reno+** | Property / Renovation | Home & building renovation ecosystem |

The strategic thesis (acquire via high-frequency `pasar+`, convert to high-trust
`doktor+` subscriptions, capture lifecycle value via `reno+`/`khairat+`, and train
AI on the aggregated data) is the spine of the whole site. Keep messaging aligned.

---

## 3. Tech stack

- **Next.js 14** (App Router, React Server Components by default)
- **TypeScript** (strict)
- **Tailwind CSS** with a custom token layer (see [`DESIGN.md`](DESIGN.md))
- **Framer Motion** for scroll reveals & micro-interactions (client components only)
- **lucide-react** for iconography
- Fonts: **Poppins** (display/headings) + **Inter** (body) via `next/font`

No CMS, no database, no auth — this is a static-friendly marketing site. Prefer
Server Components; opt into `"use client"` only when a component needs motion,
state, or browser APIs.

---

## 4. Project layout

```
.
├── app/                      # App Router routes
│   ├── layout.tsx            # Root layout: fonts, Navbar, Footer, metadata
│   ├── globals.css           # Tailwind layers + CSS custom properties (tokens)
│   ├── page.tsx              # Home (long-scroll, assembles section components)
│   ├── about/page.tsx        # Story, values, team, national alignment
│   ├── products/page.tsx     # The four platforms in depth
│   ├── solutions/page.tsx    # Solution pillars (AI, Health, Gov, Community)
│   ├── roadmap/page.tsx      # 2026–2030 expansion roadmap
│   └── contact/page.tsx      # Contact + investor proposition
├── components/
│   ├── ui/                   # Design-system primitives (Button, Section, …)
│   ├── layout/               # Navbar, Footer
│   └── sections/             # Composed page sections (Hero, Platforms, …)
├── lib/
│   ├── content.ts            # ALL site copy & data (typed). Edit here, not in JSX.
│   └── utils.ts              # `cn()` class-merge helper + small utilities
├── public/
│   └── mindstormx-logo.png   # Primary logo (horizontal)
├── CLAUDE.md                 # You are here
├── DESIGN.md                 # Visual language & component contract
└── MindstormX_profile_Roadmap 2026.pdf   # Source content (reference only)
```

---

## 5. Conventions & rules

- **Content lives in `lib/content.ts`.** Components import typed data and render
  it. Do not hard-code marketing copy inside section JSX. If you add a section,
  add its data to `content.ts` first.
- **Design tokens, not magic values.** Use the Tailwind theme extensions and CSS
  variables defined per [`DESIGN.md`](DESIGN.md) (`brand`, `ink`, `navy`, etc.).
  Never paste raw hex like `#4b4bff` into components — use `brand` / `bg-brand`.
- **Server-first.** A component is a Server Component unless it needs interactivity.
  Mark client components with `"use client"` and keep them as leaf nodes.
- **Primitives over bespoke markup.** Reuse `Container`, `Section`,
  `SectionHeading`, `Button`, `Badge`, `Reveal`, `Card` from `components/ui`.
- **Accessibility:** semantic landmarks, alt text on images, focus-visible rings,
  `prefers-reduced-motion` respected by the `Reveal`/motion wrappers, and color
  contrast that meets WCAG AA against the chosen background.
- **Responsive:** mobile-first. Every section must look correct at 375px, 768px,
  and 1280px+.

---

## 6. Common commands

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:3000
npm run build      # production build (run before declaring "done")
npm run start      # serve the production build
npm run lint       # eslint
```

**Definition of done for any change:** `npm run build` passes with no type or lint
errors, and the affected pages render correctly at mobile + desktop widths.

---

## 7. When extending the site

1. Put new copy/data in `lib/content.ts` (typed).
2. Build/extend a component in `components/sections` using `ui` primitives.
3. Follow the visual contract in `DESIGN.md` — spacing scale, color roles, motion.
4. Wire it into the relevant `app/**/page.tsx`.
5. Run `npm run build` and check responsiveness before finishing.
