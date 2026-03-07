---
"@ygqygq2/eslint-config": minor
---

fix: fix files glob pattern bug (`*.tsx` → `**/*.tsx`) in electron.mjs and react.mjs so react-hooks rules actually apply to nested files

feat: add `eslint-plugin-react-refresh` to electron.mjs and react.mjs for Vite HMR support

chore: move eslint plugins from devDependencies to dependencies so consumers get transitive plugin installs
