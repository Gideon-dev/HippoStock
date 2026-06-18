# Warnings

## Hard Rules

- No hardcoded route strings — use `ROUTES` from `packages/utils/routes.ts`
- No duplicated Zod + TypeScript types — always infer from schemas
- No `any` — use `unknown` and narrow properly
- No barrel `index.ts` re-export files
- No relative imports crossing feature or app boundaries — use `@/`
- No `console.log` in committed code
- No `useEffect` for data fetching
- No custom CSS files or inline `style` props — Tailwind only
- No raw `<img>` or `<a>` tags — use Next.js `Image` and `Link`
- Never commit `.env.local` — document in `.env.example`
- No PascalCase or camelCase for component filenames — kebab-case only
- No deeply nested Zustand state

## Shared Components Warning

`components/shared/` is used across multiple flows and possibly multiple apps.
**Always verify impact before editing anything in shared/.**

## Mock Data Warning

The `data/` folder is static/mock data — do not treat it as a live data source.

## Cross-feature Imports

- Confirm a feature's folder structure is finalised before adding cross-feature imports.
