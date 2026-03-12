# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run lint      # ESLint with zero warnings tolerance
npm run format    # Prettier formatting
```

No test runner is configured — `src/setupTests.ts` and `src/reportWebVitals.js` exist but are unused remnants.

## Architecture

Personal portfolio site for Lukáš Štipčák. Built with Next.js 15 App Router, TypeScript, Tailwind CSS v3, and Framer Motion.

### Directory structure

- `app/` — Next.js App Router pages (`page.tsx`, `layout.tsx`, route segments)
- `src/shared/` — Reusable UI split into three layers:
  - `elements/` — Shadcn/UI primitives (Radix UI wrappers, generated components)
  - `components/` — Composed UI pieces (`AnimatedSection`, `TechChip`, `StickyHeader`, etc.)
  - `sections/` — Full layout sections (`Sidebar`, `MobileHeader`)
  - `layouts/` — Page wrappers (`Layout`)
- `src/components/` — Feature-specific components (theme controls, project data)
- `src/hooks/` — Custom hooks (`useTheme`, `use-mobile`, `use-toast`)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

### Layout

`app/layout.tsx` → `Providers` (QueryClient + ThemeProvider + TooltipProvider) → `Layout` component.

`Layout` renders a two-column desktop layout (fixed sidebar + scrollable content) and a stacked mobile layout (MobileHeader + body scroll). `MobileHeader` is loaded with `dynamic()` and `ssr: false`.

### Theme system

- Dark/light mode via `next-themes` (default: dark)
- Accent color palette (6 colors: blue, green, purple, orange, pink, cyan) stored in `localStorage` as `textColor` and applied as `data-palette` attribute on `<html>`
- CSS custom properties `--accent-color`, `--link`, etc. are redefined per palette in `app/globals.css`
- `useTheme` hook in `src/hooks/useTheme.ts` wraps both concerns; use this instead of next-themes directly
- `isLoaded` guard prevents hydration mismatches — always check it before rendering palette-dependent UI

### Content

Blog posts are hardcoded as `Record<string, {title, date, content: ReactNode}>` in `app/blog/[slug]/page.tsx`. To add a post, add an entry to `blogContent` and the slug is auto-registered via `generateStaticParams`.

Projects are defined in `src/components/projects/constants/constant.ts` as `PROJECTS_CONTENT` with `commercial` and `practice` categories.

### Path aliases

`@/` maps to `src/` (configured in tsconfig). All internal imports use this alias.

### Styling conventions

- Use `cn()` from `src/lib/utils.ts` for conditional class merging
- Accent color classes: `.text-accent-color`, `.bg-accent-color` (defined in globals.css, not Tailwind utilities)
- `.nav-link` for navigation anchors (removes underline, sets hover color)
- `.tech-badge` for inline tech tags
- `TechChip` component accepts a `name` string and maps it to a `react-icons/si` icon automatically
