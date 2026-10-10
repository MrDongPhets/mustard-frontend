/*(import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Proxy /api calls to local PHP server (XAMPP/Laragon on port 80)
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from '@prerenderer/rollup-plugin';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/about',
        '/services',
        '/services/web-design',
        '/services/branding',
        '/services/video-editing',
        '/services/content-creation',
        '/services/admin-support',
        '/portfolio',
        '/free-trial',
        '/contact',
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 2000,
      },
    }),
  ],
  server: {
    // Proxy /api calls to the local Node.js backend (port 3001)
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
