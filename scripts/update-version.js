#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const newVersion = process.argv[2];

if (!newVersion) {
  console.error('❌ Error: Version argument is required');
  console.log('Usage: node update-version.js <version>');
  process.exit(1);
}

const versionRegex = /^\d+\.\d+\.\d+(-[a-zA-Z0-9.]+)?$/;
if (!versionRegex.test(newVersion)) {
  console.error(`❌ Error: Invalid version format: ${newVersion}`);
  console.log('Expected format: X.Y.Z or X.Y.Z-tag (e.g., 1.2.3 or 1.2.3-beta.1)');
  process.exit(1);
}

const packageFiles = [
  'package.json',
  'packages/titanium-ui/package.json',
  'apps/docs/package.json',
];

console.log(`🔄 Updating all packages to version ${newVersion}...\n`);

for (const file of packageFiles) {
  const filePath = join(rootDir, file);

  try {
    const content = readFileSync(filePath, 'utf8');
    const pkg = JSON.parse(content);
    const oldVersion = pkg.version;

    pkg.version = newVersion;

    writeFileSync(filePath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
    console.log(`✅ ${file}: ${oldVersion} → ${newVersion}`);
  } catch (error) {
    console.error(`❌ Error updating ${file}:`, error.message);
    process.exit(1);
  }
}

console.log(`\n✨ All package versions updated to ${newVersion}`);
