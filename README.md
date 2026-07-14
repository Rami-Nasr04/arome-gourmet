# Arome Gourmet

Marketing website for **Arome Gourmet** — a family-owned Lebanese coffee company that sources premium
single-origin **green (raw) coffee** for roasteries across the Middle East and Europe, roasts and blends in
small batches, and produces the **CUPPA JOY** retail brand.

The site is a bilingual (English / Arabic with full RTL), mobile-first showcase with interactive 3D — a 3D
hero and an interactive globe of the company's 16 coffee origins.

## Tech stack

- **React 19** + **TypeScript** (strict)
- **Vite** with static prerendering (`vite-react-ssg`) for per-page SEO
- **Tailwind CSS 4** with a token-based design system
- **Three.js** via **react-three-fiber** / **drei** — 3D hero + interactive origins globe
- **Framer Motion** for scroll and micro-interactions
- **react-i18next** — English / Arabic, right-to-left support
- **react-hook-form** + **Zod** for forms and validation

## Getting started

Requires Node 20+.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # production build (prerendered)
npm run preview  # preview the production build
npm run lint     # lint
npm test         # run tests
npm run type-check
```

## Features

- Seven pages: Home, About, Green Coffee, Cross Shipment, Blend Your Coffee, CUPPA JOY, Contact
- Interactive 3D globe of 16 coffee origins with per-origin detail
- Fully bilingual (EN / AR) with right-to-left layout
- Prerendered pages with per-route meta tags and structured data (JSON-LD)
- Responsive and mobile-first, light and dark themes
- Accessible: keyboard navigation, reduced-motion support, WCAG AA contrast

## Project structure

```
src/
├── pages/         # route pages
├── components/    # ui primitives, layout, 3D scenes, page sections, forms
├── i18n/          # locales (en/ar) and language handling
├── lib/           # utilities, data, schemas
├── hooks/         # custom hooks
├── services/      # data/transport layer
└── assets/        # images and fonts
```

## Status

Active development.

---

© 2026 Arome Gourmet. All rights reserved.
