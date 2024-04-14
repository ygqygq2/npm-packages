import tseslint from 'typescript-eslint';
import base from './base';

export default tseslint.config(...base, {
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
});
