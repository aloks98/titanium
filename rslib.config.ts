import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    tsconfigPath: './tsconfig.lib.json',
    entry: {
      index: ['./src/lib/**', '!./src/lib/styles/**'],
    },
  },
  resolve: {
    alias: {
      '@': './src/lib',
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
    copy: [
      {
        from: 'src/lib/styles',
        to: 'styles',
      },
    ],
  },
  plugins: [pluginReact()],
});
