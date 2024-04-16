import tseslint from 'typescript-eslint';
import baseTs from './base-ts.mjs';

export default tseslint.config(...baseTs, {});
