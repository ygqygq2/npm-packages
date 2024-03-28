# eslint-config

Eslint config for projects.

## files

- `base.js`: base eslint config for js/ts project.
- `base-ts.js`: base eslint config for ts project, it depends on `base.js`.
- `eslint-preset.js`: next eslint preset config.
- `library.js`: react eslint config.
- `nest.js`: nest eslint config.
- `next.js`: next eslint config extend with `@vercel/style-guide/eslint/next`.
- `react-internal.js`: react eslint extend with `eslint-config-turbo`.
- `react-vercel.js`: react eslint extends with `@vercel/style-guide/eslint/browser`, `@vercel/style-guide/eslint/typescript`, `@vercel/style-guide/eslint/react`.
- `react.js`: react eslint config.

## dependencies

`react.js` depends on:

```
pnpm install -D "@typescript-eslint/eslint-plugin" "@typescript-eslint/parser" "eslint-config-prettier" "eslint-import-resolver-typescript" "eslint-plugin-import" "eslint-plugin-react" "eslint-plugin-react-hooks" "eslint-plugin-simple-import-sort" "eslint-plugin-unused-imports"
```

`electron.js` depends on:

```
pnpm install -D "@typescript-eslint/eslint-plugin" "@typescript-eslint/parser" "eslint-config-prettier" "eslint-import-resolver-typescript" "eslint-plugin-import" "eslint-plugin-react" "eslint-plugin-react-hooks" "eslint-plugin-simple-import-sort" "eslint-plugin-unused-imports"
```
