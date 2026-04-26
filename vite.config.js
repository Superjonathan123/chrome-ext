import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { crx } from '@crxjs/vite-plugin';
import { copyFileSync, mkdirSync, readdirSync } from 'fs';
import manifest from './manifest.json';

// Plugin to copy content CSS into dist (crx plugin doesn't handle static CSS in content_scripts)
function copyStaticAssets(outDir) {
  return {
    name: 'copy-static-assets',
    writeBundle() {
      // Copy all content CSS files
      mkdirSync(`${outDir}/content/css`, { recursive: true });
      readdirSync('content/css').filter(f => f.endsWith('.css')).forEach(f => {
        copyFileSync(`content/css/${f}`, `${outDir}/content/css/${f}`);
      });
      copyFileSync('content/styles.css', `${outDir}/content/styles.css`);
      copyFileSync('content/chatbot.css', `${outDir}/content/chatbot.css`);
      // Copy popup assets (not bundled since popup.html uses non-module script)
      mkdirSync(`${outDir}/popup`, { recursive: true });
      copyFileSync('popup/popup.js', `${outDir}/popup/popup.js`);
      copyFileSync('popup/popup.css', `${outDir}/popup/popup.css`);
      // Copy auth callback content script
      copyFileSync('content/auth-callback.js', `${outDir}/content/auth-callback.js`);
      // Copy PDF.js library (loaded dynamically by content script)
      mkdirSync(`${outDir}/lib`, { recursive: true });
      copyFileSync('lib/pdf.min.js', `${outDir}/lib/pdf.min.js`);
      copyFileSync('lib/pdf.worker.min.js', `${outDir}/lib/pdf.worker.min.js`);
      // Copy privacy policy (accessible from popup)
      copyFileSync('privacy-policy.html', `${outDir}/privacy-policy.html`);
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

  // Customize manifest per environment
  const buildManifest = JSON.parse(JSON.stringify(manifest));
  if (isDev) {
    buildManifest.name = 'Super LTC DEV';
  } else {
    buildManifest.host_permissions = buildManifest.host_permissions.filter(
      p => !p.includes('localhost')
    );
    // Strip localhost from content_scripts matches in production
    buildManifest.content_scripts = buildManifest.content_scripts.map(cs => ({
      ...cs,
      matches: cs.matches.filter(m => !m.includes('localhost'))
    }));
  }

  const outDir = isDev ? 'dist' : 'dist-prod';

  return {
    plugins: [
      stripMocksInProduction(mode),
      preact(),
      crx({ manifest: buildManifest }),
      copyStaticAssets(outDir)
    ],
    define: {
      // Replaced at build time in background.js
      // dev → true (localhost), prod → false (superltc.com)
      __DEV_MODE__: isDev,
      // PostHog public project key. The placeholder disables PostHog in
      // analytics.js so builds work before the real key is provisioned.
      // Wire via POSTHOG_KEY env var or replace string here once BAA is signed.
      __POSTHOG_KEY__: JSON.stringify(process.env.POSTHOG_KEY || 'phc_PLACEHOLDER'),
    },
    build: {
      outDir,
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
