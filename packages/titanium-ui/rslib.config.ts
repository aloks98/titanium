import * as path from 'node:path';
import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    tsconfigPath: path.resolve(__dirname, './tsconfig.json'),
    entry: {
      index: ['./lib/**/*', '!./lib/**/*.css'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
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
    copy: {
      patterns: [
        {
          from: path.resolve(__dirname, './lib/themes'),
          to: path.resolve(__dirname, './dist/themes'),
        },
      ],
    },
  },
  plugins: [pluginReact()],
});
