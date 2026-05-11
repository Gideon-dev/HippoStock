# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for **Hippo Procurement Ltd** — a West African procurement company sourcing medical consumables and high-demand products directly from factories for pharmacies, clinics, and SMEs in Nigeria & Ghana. Core pitch: 25–40% cheaper stock, 10–14 day delivery, no middlemen. WhatsApp is the primary conversion channel.

## Commands

```bash
pnpm dev        # start dev server with Turbopack
pnpm build      # production build with Turbopack
pnpm lint       # run ESLint
```

No test runner is configured yet.

## Architecture

Single-page Next.js 15 App Router site. Everything lives under `app/`:

- `app/layout.tsx` — root layout; wraps children in `ReactQueryProvider`, loads Geist fonts
- `app/page.tsx` — home page (the landing page)
- `app/providers/` — client providers (React Query)
- `app/lib/react-query.ts` — singleton `QueryClient`
- `app/ui/` — reusable animation primitives (see below)

**Path alias:** `@/*` maps to the repo root, so `@/app/ui/fade-up` resolves from root.

### Animation primitives (`app/ui/`)

All are `"use client"` Framer Motion wrappers — use these instead of reaching for raw motion directly:

| Component | Use case |
|---|---|
| `FadeUp` | Scroll-triggered fade-in with configurable `delay`, `duration`, `distance` |
| `AnimatedCounter` | Counts up a numeric string (e.g. `"60+"`) when it enters the viewport |
| `AnimatedPage` | Page-level enter/exit transition (wrap route content) |

### Security headers

`next.config.ts` applies a strict CSP and full security header suite globally. Any new external resource (font CDN, image domain, analytics script) must be explicitly added to the relevant CSP directive — otherwise it will be blocked in production.

## Code rules

@.claude/docs/conventions.md

@.claude/docs/patterns.md

@.claude/docs/warnings.md