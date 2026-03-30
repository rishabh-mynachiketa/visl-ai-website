# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Visl AI Labs company website — a React SPA with Tailwind CSS v4, built with Vite and deployed to Netlify.

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build
- `npm run lint` — type-check with `tsc --noEmit`
- `npm run clean` — remove `dist/`

## Architecture

- **Routing**: Uses `react-router-dom` with `HashRouter` (not BrowserRouter). Routes defined in `src/App.tsx`.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin. Custom theme tokens (colors, fonts) in `src/index.css` using `@theme` directive. Fonts: Inter (body), Space Grotesk (headings). Dark theme with black background.
- **Animations**: `motion` library (Framer Motion v12+).
- **Path alias**: `@/*` maps to project root (configured in both `tsconfig.json` and `vite.config.ts`).
- **Utility**: `cn()` helper in `src/lib/utils.ts` (clsx + tailwind-merge).

## Pages & Routes

| Route | Component |
|-------|-----------|
| `/` | `src/pages/Home.tsx` |
| `/careers` | `src/pages/Careers.tsx` |
| `/careers/founding-ai-engineer` | `src/pages/FoundingAIEngineer.tsx` |
| `/careers/ai-engineer-intern` | `src/pages/AIEngineerIntern.tsx` |

Note: `src/pages/Contact.tsx`, `Products.tsx`, and `Technology.tsx` exist but are not currently routed.

## Deployment

Deployed to Netlify (`netlify.toml`). SPA fallback redirect is configured. Also has GitHub Pages deploy support via `gh-pages` package (`npm run deploy`).
