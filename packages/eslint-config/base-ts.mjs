import tseslint from 'typescript-eslint';
import base from './base.mjs';

export default tseslint.config(...base, ...tseslint.configs.recommended, {
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
});
