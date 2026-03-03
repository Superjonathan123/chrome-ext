// Super LTC Chrome Extension - Main Entry Point
// This file imports all vanilla JS modules in the correct order
// and will eventually mount the Preact app for modern components

// 1. Import global config
import '../config.js';
import './css/selector.css';
import './css/mds-command-center.css';
import './css/pdpm-analyzer.css';
import './css/item-detail.css';
import './css/pdf-viewer.css';
import './css/ai-chat.css';

// 2. Import vanilla utilities (order matters - matches current manifest.json order)
import './mockData.js';
import './evidence-viewers.js';
import './section-transformers.js';

// 3. Import vanilla components
import './components/modal.js';
import './components/dropdown.js';
import './components/toast.js';

// 4. Import query system
import './queries/query-api.js';
import './queries/query-state.js';
import './queries/query-badges.js';
import './queries/query-panel.js';
import './queries/query-modal.js';
import './queries/query-send-modal.js';

// 4.5. Import MDS overlay (depends on queries, evidence-viewers, section-transformers)
import './mds-overlay.js';

// 5. Import ICD-10 viewer
import './icd10-viewer/icd10-mock-data.js';
import './icd10-viewer/icd10-api.js';
import './icd10-viewer/icd10-sidebar.js';
import './icd10-viewer/icd10-evidence-panel.js';
import './icd10-viewer/icd10-pdf-viewer.js';
import './icd10-viewer/icd10-viewer.js';

// 6. Import super-menu modules
import './super-menu/state.js';
import './super-menu/utils.js';
import './super-menu/context.js';
import './super-menu/session.js';
import './super-menu/fab.js';
import './super-menu/panel.js';
import './super-menu/navigation.js';
import './super-menu/dashboard-state.js';
import './super-menu/dashboard-view.js';
import './super-menu/facility-dashboard-state.js';
import './super-menu/facility-dashboard-view.js';
import './super-menu/mds-view.js';
import './super-menu/chat-view.js';
import './super-menu/streaming.js';
import './super-menu/init.js';

// 6.5. Load PDF.js library into content script scope
import * as pdfjsLib from 'pdfjs-dist';
window.pdfjsLib = pdfjsLib;
pdfjsLib.GlobalWorkerOptions.workerSrc = chrome.runtime.getURL('lib/pdf.worker.min.js');

// 7. Mount Preact app
import { render, h } from 'preact';
import { App } from './components/App.jsx';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPreactApp);
} else {
  initPreactApp();
}

function initPreactApp() {
  const root = document.createElement('div');
  root.id = 'super-ltc-root';
  document.body.appendChild(root);
  render(h(App, null), root);
}
