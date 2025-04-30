# eslint-config

Eslint config for projects.

## files

- `base.mjs`: base eslint config for js/ts project.
- `base-ts.mjs`: base eslint config for ts project, it depends on `base.js`.
- `nest.mjs`: nest eslint config.
- `next.mjs`: next eslint config.
- `react-vercel.js`: react eslint extends with `@vercel/style-guide/eslint/browser`, `@vercel/style-guide/eslint/typescript`, `@vercel/style-guide/eslint/react`.
- `react.mjs`: react eslint config.
- `electron.mjs`: react eslint config.

## dependencies

`react.mjs` depends on:

```
pnpm install -D @eslint/js typescript-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort
```

`electron.mjs` depends on:

```
pnpm install -D @eslint/js typescript-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort
```
