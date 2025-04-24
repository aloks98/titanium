import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    tsconfigPath: './tsconfig.app.json',
    entry: {
      index: ['./src/app/index.tsx'],
    },
  },
  resolve: {
    alias: {
      '@': './src/lib',
    },
  },
});
