import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

import baseTs from './base-ts.mjs';

export default tseslint.config(...baseTs, {
  files: ['*.js?(x)', '*.ts?(x)', '*.[cm]js'],
  plugins: {
    react,
    'react-hooks': reactHooks,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      browser: true,
      node: true,
    },
  },
  rules: {
    'jsx-a11y/alt-text': 'off',
  },
});
