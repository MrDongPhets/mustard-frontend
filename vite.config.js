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

export default defineConfig(async () => {
  const onVercel = !!process.env.VERCEL;

  // On Vercel: use a Chrome built for serverless Linux.
  // On your computer: keep the normal Puppeteer Chrome.
  let launchOptions = {};
  if (onVercel) {
    const { default: chromium } = await import('@sparticuz/chromium');
    launchOptions = {
      executablePath: await chromium.executablePath(),
      args: chromium.args,
      headless: 'shell',
    };
  }

  return {
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
          launchOptions,
        },
      }),
    ],
    server: {
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
  };
});