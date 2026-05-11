# Conventions

## Naming

| Thing               | Convention                 | Example                            |
| ------------------- | -------------------------- | ---------------------------------- |
| Variables           | `camelCase`                | `productData`, `currentUser`       |
| Constants           | `SCREAMING_SNAKE_CASE`     | `PRODUCT_DATA`, `CURRENT_USER`     |
| Component files     | `kebab-case.tsx`           | `product-card.tsx`                 |
| Component functions | `PascalCase`               | `export function ProductCard() {}` |
| Hooks               | `use-kebab-case.ts`        | `use-supplier-sidebar.ts`          |
| Store slices        | `use-kebab-case-store.ts`  | `use-product-store.ts`             |
| Utilities           | `kebab-case.ts`            | `format-price.ts`                  |
| Schema files        | `kebab-case.schema.ts`     | `create-product.schema.ts`         |
| Tests               | `*.test.ts` / `*.test.tsx` | `product-card.test.tsx`            |

## TypeScript

- Strict mode — no `any`; use `unknown` and narrow
- Prefer `interface` for object shapes, `type` for unions/intersections
- Named exports only (except Next.js page/layout files — those require default exports)
- Always type function return values explicitly

## Forms

- check packages/ui/form2 for styles form inputs, if imput is third party like textarea, checkboxes, select, use Shadcn Form component to wrap, remember prefer Shadcn components for primitive stylings
- all important forms should be validated on "continue" or "proceed" or "next" button to progress or switch

## React & Next.js

- Prefer React Server Components — add `"use client"` only when necessary
- Keep `"use client"` boundaries as deep in the tree as possible
- No `useEffect` for data fetching — use React Query or server components
- Use Next.js `Image` and `Link` — never raw `<img>` or `<a>`
- Prefer Shadcn components for UI primitives e.g instead of HTML<button> use <Button> from Shadcn

## Styling (Tailwind)

- Tailwind utility classes only — no custom CSS files, no inline `style` props
- Use `cn()` (clsx + tailwind-merge) for conditional class merging
- Mobile-first: `sm:`, `md:`, `lg:`
- Extract repeated patterns into a component, not a CSS class

## Imports

- Use `@/` path aliases for all imports — no relative imports crossing feature,component or app boundaries
- No barrel `index.ts` re-export files — hurts tree-shaking
