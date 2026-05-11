# Patterns

## Routes

Single source of truth: `packages/utils/routes.ts`

```ts
export const ROUTES = {
  HOME: '/',
  SUPPLIER: {
    DASHBOARD: '/dashboard',
    ONBOARDING: '/onboarding',
    PRODUCTS: {
      INDEX: '/dashboard/products',
      CREATE: '/dashboard/products/create',
      EDIT: (id: string) => `/dashboard/products/${id}/edit`,
    },
  },
  BUYER: {
    HOME: '/',
    ORDERS: '/orders',
    PRODUCT: (id: string) => `/products/${id}`,
  },
  ADMIN: {
    DASHBOARD: '/dashboard',
    SUPPLIERS: '/dashboard/suppliers',
    PRODUCTS: '/dashboard/products',
  },
} as const;
```

Use for: all `Link href`, `redirect()`, `router.push()`. Never hardcode.

## Zod Schemas && ### Variables & Constants

- Location: `src/lib/schemas/<domain>/kebab-case.schema.ts`

- **Constants** (truly static, module-level values) use `SCREAMING_SNAKE_CASE`:
  - Zod schemas: `SCHEDULE_SESSION_SCHEMA`
  - Inferred schema types: `SCHEDULE_SESSION_INPUT_TYPE`
  - Route maps: `ROUTES`
  - e.g. `PRODUCT_DATA`, `SESSION_LIST`, `CURRENT_USER` — only when these are fixed, module-level constants
- **Regular variables** (function-scoped, derived values, state, props) use `camelCase`:
  - e.g. `sessionList`, `currentUser`, `formData`
- **Zustand store destructuring** — always destructure directly from the hook to preserve the store's original camelCase names; never reassign to new SCREAMING_SNAKE_CASE identifiers:
- Type: inferred, `SCREAMING_SNAKE_CASE` + `_INPUT_TYPE` suffix
- Never write a manual TS type that duplicates a schema — always infer
- Always leave User friendly or user facing validation messages not just Required in red ext, but Email is required for instance, always make custom validation intentional, not random, for user experience.
- Never write random or one word custom error messages in zod, provide context and actual meaningful error for UX experience.
- make sure every schema.ts file written is under its respective folder under the parent schema parent folder.

```ts
// src/lib/schemas/products/create-product.schema.ts
export const CREATE_PRODUCT_SCHEMA = z.object({ ... });
export type CREATE_PRODUCT_INPUT_TYPE = z.infer<typeof CREATE_PRODUCT_SCHEMA>;
```

- Validate server-side — never trust client input alone

## React Query

- All client-side async data fetching goes through React Query
- Centralise query keys — no inline magic strings
- Mutations invalidate relevant queries on success
- Never use `useEffect` + `fetch` — use `useQuery` / `useMutation`

## Zustand

- One file per store slice in `lib/store/`
- Keep stores flat — no deeply nested state
- Use selectors for derived/computed values

## mock data

- one file should be created in the respective /app/src/data for respective app

## forms

- for base inputs with different types, alays check the shared packages in form2 folder, you would see an abstracted FormInput component that takes placeholder, types, label as props so its reusable, instead of doing FormItem,FormControl everytime to render inputs to reduce redudancy
- use Form component from shadcn with one with FormControl, only use this for third party inputs like text-area, checkboxes and sorts
