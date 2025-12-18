import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    tsconfigPath: './tsconfig.json',
    entry: {
      index: ['./index.tsx'],
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
