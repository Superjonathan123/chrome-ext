import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { copyFileSync, mkdirSync, existsSync } from 'fs';

/**
 * Separate Vite config for the demo site.
 * - No crx() plugin (not a Chrome extension context)
 * - No stripMocksInProduction (demo needs mock data)
 * - Multi-page input: all demo HTML files
 * - Output to demo-dist/
 */

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
    open: '/demo/index.html'
  }
});
