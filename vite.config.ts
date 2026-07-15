import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { copyFileSync, rmSync } from 'node:fs';
import type {} from 'vite-react-ssg/node';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  define: { global: 'globalThis' },
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    // Prerender the catch-all NotFound route so Vercel serves a branded 404.html
    // (real 404 status) instead of its generic page on unknown paths.
    includedRoutes: (paths) => [...paths, '/404'],
    onFinished: (dir) => {
      copyFileSync(path.join(dir, '404', 'index.html'), path.join(dir, '404.html'));
      rmSync(path.join(dir, '404'), { recursive: true });
    },
  },
  test: { environment: 'jsdom', globals: true, setupFiles: './src/test/setup.ts' },
});
