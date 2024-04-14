import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import baseTs from './base-ts.mjs';

export default tseslint.config(...baseTs, {
  files: ['*.js?(x)', '*.ts?(x)', '*.[cm]js'],
  plugins: {
    react,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    global: {
      browser: true,
      node: true,
    },
  },
  rules: {
    'jsx-a11y/alt-text': 'off',
    'import/order': [
      1,
      {
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '**/*.{css, scss, sass, less, module.css}',
            group: 'unknown',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'index',
            patternOptions: { matchBase: true },
            position: 'after',
          },
        ],
        groups: [
          'builtin',
          'internal',
          'external',
          'index',
          'sibling',
          'parent',
          'object',
          'type',
          'unknown',
        ],
        alphabetize: { order: 'asc', caseInsensitive: false },
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: ['builtin', 'react'],
      },
    ],
  },
});
