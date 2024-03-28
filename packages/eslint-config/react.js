const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['unused-imports', 'simple-import-sort'],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
  rules: {
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/newline-after-import': 'error',
    'jsx-a11y/alt-text': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
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
            pattern: 'src/**/*.{css, scss}',
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
          ['type', 'external'],
          'internal',
          'index',
          'sibling',
          'parent',
          'object',
          'unknown',
        ],
        alphabetize: { order: 'asc', caseInsensitive: false },
        newlinesBetween: 'always-and-inside-groups',
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: ['builtin', 'react'],
      },
    ],
  },
};
