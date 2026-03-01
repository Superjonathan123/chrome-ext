/**
 * Demo entry point — loaded by each demo HTML page as a module script.
 *
 * 1. Install mocks synchronously (before any component code evaluates)
 * 2. Import CSS (Vite bundles them)
 * 3. Dynamically import DemoApp (ensures mocks are ready)
 */

// ── Step 1: Install mocks SYNCHRONOUSLY before anything else ──
import { createMockChrome } from './demo-mock-chrome.js';
import { installGlobalMocks } from './demo-mock-globals.js';

createMockChrome();
installGlobalMocks();

// ── Step 2: Import CSS (Vite will bundle these) ──
import '../content/css/variables.css';
import '../content/css/base.css';
import '../content/css/super-components.css';
import '../content/css/panel.css';
import '../content/css/mds-command-center.css';
import '../content/css/pdpm-analyzer.css';
import '../content/css/item-detail.css';
import '../content/css/query-items.css';
import '../content/css/query.css';
import '../content/css/selector.css';
import '../content/css/popover.css';
import '../content/css/evidence-viewer.css';
import '../content/css/pdf-viewer.css';
import '../content/css/pdf-modal.css';
import '../content/css/sections.css';

// ── Step 3: Mount DemoApp ──
// Mocks are installed above (module body executes in order, before render).
// Component hooks only call chrome.runtime.sendMessage inside useEffect,
// which fires after mount, so static imports are safe.
import { render } from 'preact';
import { DemoApp } from './components/DemoApp.jsx';

function boot() {
  let root = document.getElementById('super-demo-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'super-demo-root';
    document.body.appendChild(root);
  }

  render(<DemoApp />, root);
  console.log('[Demo] DemoApp mounted');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
