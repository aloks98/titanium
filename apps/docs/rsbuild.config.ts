import { execSync } from 'node:child_process';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import pkg from './package.json';

// Get git commit hash
const getGitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'unknown';
  }
};

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    tsconfigPath: './tsconfig.json',
    entry: {
      index: ['./index.tsx'],
    },
    define: {
      'import.meta.env.APP_VERSION': JSON.stringify(pkg.version),
      'import.meta.env.COMMIT_HASH': JSON.stringify(getGitHash()),
      'import.meta.env.BUILD_TIME': JSON.stringify(new Date().toISOString()),
    },
  },
  resolve: {
    alias: {
      '@': '.',
    },
  },
  html: {
    title: 'Titanium UI',
    favicon: './public/favicon.svg',
  },
});
