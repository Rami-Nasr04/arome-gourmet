import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import type {} from 'vite-react-ssg/node';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  define: { global: 'globalThis' },
  ssgOptions: { script: 'async', formatting: 'none', dirStyle: 'nested' },
  test: { environment: 'jsdom', globals: true, setupFiles: './src/test/setup.ts' },
});
