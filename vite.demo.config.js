import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { copyFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Separate Vite config for the demo site.
 * - No crx() plugin (not a Chrome extension context)
 * - No stripMocksInProduction (demo needs mock data)
 * - Multi-page input: all demo HTML files
 * - Output to demo-dist/
 */

/**
 * Serve captured PCC page assets (CSS/JS/images) as raw static files.
 * Vite's dev server tries to process CSS through PostCSS which fails on
 * captured PCC stylesheets. This plugin intercepts those requests and
 * serves the files directly from disk.
 */
function serveCapturedAssets() {
  const MIME = {
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.ico': 'image/x-icon',
  };

  return {
    name: 'serve-captured-assets',
    configureServer(server) {
      // Run BEFORE Vite's built-in middleware so it doesn't try to process CSS
      server.middlewares.use((req, res, next) => {
        // Match requests for captured page asset directories (e.g. demo/mds-section-i_files/*)
        if (!req.url || !req.url.includes('_files/')) return next();

        const urlPath = req.url.split('?')[0]; // strip query params
        const filePath = resolve(process.cwd(), urlPath.replace(/^\//, ''));

        try {
          const content = readFileSync(filePath);
          const ext = urlPath.substring(urlPath.lastIndexOf('.'));
          const mime = MIME[ext] || 'application/octet-stream';
          res.setHeader('Content-Type', mime);
          res.setHeader('Cache-Control', 'no-cache');
          res.end(content);
        } catch {
          next(); // file not found — let Vite handle it
        }
      });
    }
  };
}

function copyPdfJs() {
  return {
    name: 'copy-pdf-js',
    writeBundle() {
      mkdirSync('demo-dist/lib', { recursive: true });
      if (existsSync('lib/pdf.min.js')) {
        copyFileSync('lib/pdf.min.js', 'demo-dist/lib/pdf.min.js');
      }
      if (existsSync('lib/pdf.worker.min.js')) {
        copyFileSync('lib/pdf.worker.min.js', 'demo-dist/lib/pdf.worker.min.js');
      }
    }
  };
}

export default defineConfig({
  plugins: [
    serveCapturedAssets(),
    preact(),
    copyPdfJs()
  ],
  root: '.',
  build: {
    outDir: 'demo-dist',
    rollupOptions: {
      input: {
        // Only clean demo pages — saved PCC pages (medical-diagnosis, mds-section-i,
        // mds-summary) reference captured CSS/JS that Vite can't process.
        // Those pages still work in dev mode (Vite serves them as-is).
        index: 'demo/index.html',
        pccDemo: 'demo/pcc-demo.html'
      }
    }
  },
  resolve: {
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  server: {
    open: '/demo/index.html',
    hmr: {
      overlay: false  // Captured PCC pages have invalid CSS/JS — suppress Vite error overlay
    }
  }
});
