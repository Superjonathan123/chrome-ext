import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { crx } from '@crxjs/vite-plugin';
import { copyFileSync, mkdirSync, readdirSync } from 'fs';
import manifest from './manifest.json';

// Plugin to copy content CSS into dist (crx plugin doesn't handle static CSS in content_scripts)
function copyStaticAssets() {
  return {
    name: 'copy-static-assets',
    writeBundle() {
      // Copy all content CSS files
      mkdirSync('dist/content/css', { recursive: true });
      readdirSync('content/css').filter(f => f.endsWith('.css')).forEach(f => {
        copyFileSync(`content/css/${f}`, `dist/content/css/${f}`);
      });
      copyFileSync('content/styles.css', 'dist/content/styles.css');
      copyFileSync('content/chatbot.css', 'dist/content/chatbot.css');
      // Copy popup assets (not bundled since popup.html uses non-module script)
      mkdirSync('dist/popup', { recursive: true });
      copyFileSync('popup/popup.js', 'dist/popup/popup.js');
      copyFileSync('popup/popup.css', 'dist/popup/popup.css');
      // Copy callback.js (referenced by callback.html)
      copyFileSync('callback.js', 'dist/callback.js');
      // Copy PDF.js library (loaded dynamically by content script)
      mkdirSync('dist/lib', { recursive: true });
      copyFileSync('lib/pdf.min.js', 'dist/lib/pdf.min.js');
      copyFileSync('lib/pdf.worker.min.js', 'dist/lib/pdf.worker.min.js');
      // Copy privacy policy (accessible from popup)
      copyFileSync('privacy-policy.html', 'dist/privacy-policy.html');
    }
  };
}

// Plugin to strip mock data files from production builds
function stripMocksInProduction(mode) {
  const mockFiles = ['mockData.js', 'icd10-mock-data.js'];
  const isProduction = mode === 'production';
  return {
    name: 'strip-mocks',
    enforce: 'pre',
    resolveId(source) {
      if (isProduction && mockFiles.some(f => source.endsWith(f))) {
        return '\0empty-mock';
      }
    },
    load(id) {
      if (id === '\0empty-mock') {
        return '// Mock data stripped from production build';
      }
    }
  };
}

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  // For production builds, strip localhost from host_permissions
  const buildManifest = JSON.parse(JSON.stringify(manifest));
  if (!isDev) {
    buildManifest.host_permissions = buildManifest.host_permissions.filter(
      p => !p.includes('localhost')
    );
  }

  return {
    plugins: [
      stripMocksInProduction(mode),
      preact(),
      crx({ manifest: buildManifest }),
      copyStaticAssets()
    ],
    define: {
      // Replaced at build time in background.js
      // dev → true (localhost), prod → false (superltc.com)
      __DEV_MODE__: isDev,
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          background: 'background/background.js',
          popup: 'popup/popup.html'
        }
      }
    },
    resolve: {
      alias: {
        'react': 'preact/compat',
        'react-dom': 'preact/compat'
      }
    }
  };
});
