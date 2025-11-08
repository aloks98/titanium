import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import path from "path";

export default defineConfig({
  source: {
    tsconfigPath: path.resolve(__dirname, './tsconfig.lib.json'),
    entry: {
      index: ['./src/lib/**'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/lib'),
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
  },
  plugins: [pluginReact()],
});
