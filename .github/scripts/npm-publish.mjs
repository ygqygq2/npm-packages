#!/usr/bin/env node
/**
 * Custom publish script for monorepo packages.
 *
 * Strategy:
 *   1. `pnpm pack` — handles workspace:* protocol replacement, produces a
 *      clean tarball identical to what `pnpm publish` would upload.
 *   2. `npm publish <tarball>` — npm CLI ≥11.5.1 automatically detects the
 *      GitHub Actions OIDC environment and exchanges the token per-package,
 *      so no NPM_TOKEN is needed.
 */

import { execSync } from 'child_process';
import { existsSync, readFileSync, readdirSync, unlinkSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = resolve(__dirname, '../..');
const packagesDir = join(workspaceRoot, 'packages');

function getPublishedVersion(name) {
  try {
    return execSync(`npm view "${name}" version 2>/dev/null`, {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return null;
  }
}

const dirs = readdirSync(packagesDir).sort();
let hasError = false;
const published = [];

for (const dir of dirs) {
  const pkgDir = join(packagesDir, dir);
  const pkgJsonPath = join(pkgDir, 'package.json');
  if (!existsSync(pkgJsonPath)) continue;

  const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'));
  if (pkg.private) {
    console.log(`${pkg.name} is private, skipping`);
    continue;
  }

  const publishedVersion = getPublishedVersion(pkg.name);
  if (publishedVersion === pkg.version) {
    console.log(`${pkg.name}@${pkg.version} already published, skipping`);
    continue;
  }

  console.log(`\nPublishing ${pkg.name}@${pkg.version}...`);

  let tarball;
  try {
    // Step 1: pack with pnpm so workspace:* deps are resolved to real versions
    execSync('pnpm pack', { cwd: pkgDir, stdio: 'inherit' });
    tarball = readdirSync(pkgDir).find((f) => f.endsWith('.tgz'));
    if (!tarball) throw new Error('pnpm pack produced no .tgz file');
    const tarballPath = join(pkgDir, tarball);

    // Step 2: publish with npm CLI (handles OIDC per-package automatically)
    execSync(`npm publish "${tarballPath}" --access public`, {
      cwd: pkgDir,
      stdio: 'inherit',
    });

    unlinkSync(tarballPath);
    published.push({ name: pkg.name, version: pkg.version });
    console.log(`✓ Published ${pkg.name}@${pkg.version}`);
  } catch (err) {
    // Clean up tarball if publish failed
    if (tarball) {
      const tarballPath = join(pkgDir, tarball);
      if (existsSync(tarballPath)) unlinkSync(tarballPath);
    }
    console.error(`✗ Failed to publish ${pkg.name}@${pkg.version}:`, err.message);
    hasError = true;
  }
}

if (published.length > 0) {
  console.log('\n🦋  Published Packages:');
  for (const { name, version } of published) {
    console.log(`  - ${name}@${version}`);
  }
}

if (hasError) process.exit(1);
