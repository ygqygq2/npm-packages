const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    // airbnb规范
    // https://www.npmjs.com/package/eslint-config-airbnb-base
    'airbnb-base',
    // 兼容typescript的airbnb规范
    // https://github.com/iamturns/eslint-config-airbnb-typescript
    'airbnb-typescript/base',
    './base-ts',
  ],
  parserOptions: {
    project,
    sourceType: 'module',
  },
  settings: {
    extensions: ['.ts', '.d.ts', '.cts', '.mts', '.js', '.cjs', 'mjs', '.json'],
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
};
