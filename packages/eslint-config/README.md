# eslint-config

Eslint config for projects.

## files

- `base.mjs`: base eslint config for js/ts project.
- `base-ts.mjs`: base eslint config for ts project, it depends on `base.js`.
- `nest.mjs`: nest eslint config.
- `next.mjs`: next eslint config.
- `react-vercel.js`: react eslint extends with `@vercel/style-guide/eslint/browser`, `@vercel/style-guide/eslint/typescript`, `@vercel/style-guide/eslint/react`.
- `react.mjs`: react eslint config.
- `taro-react.mjs`: 基于 Taro 4 官方 React 模板规则迁移到 flat config 的配置。
- `electron.mjs`: react eslint config.

## usage

### Taro React

```js
import taroReact from '@ygqygq2/eslint-config/taro-react';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  ...taroReact,
];
```

`taro-react.mjs` 以 `@tarojs/cli@4.1.11` 默认模板中的 `_eslintrc` 与 `eslint-config-taro/react` 规则为基准，保留官方模板行为，并升级为 flat config 形式，方便在 ESLint 新版本下统一管理。

## dependencies

`react.mjs` depends on:

```
pnpm install -D @eslint/js typescript-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort
```

`electron.mjs` depends on:

```
pnpm install -D @eslint/js typescript-eslint eslint-plugin-prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort
```
