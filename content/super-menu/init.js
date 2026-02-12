// Super Menu Initialization

// Inject "AI Code Patient" button on Med Diag pages
function injectAICodeButton() {
  if (!window.location.href.includes('medDiagChart') && !window.location.href.includes('meddiag')) return;
  if (document.getElementById('super-ai-code-btn')) return;

  // Create a styled button that stands out but fits alongside PCC buttons
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'super-ai-code-btn';
  btn.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px;">` +
    `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">` +
    `<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>` +
    `</svg>AI Code Patient</span>`;
  btn.style.cssText = `
    display: inline-flex;
    align-items: center;
    padding: 4px 14px;
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: #fff;
    font: 600 12px/1.4 -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 8px;
    vertical-align: middle;
    box-shadow: 0 1px 3px rgba(79,70,229,0.4);
    transition: all 0.15s ease;
    letter-spacing: 0.01em;
  `;
  btn.addEventListener('click', () => {
    if (window.ICD10Viewer) {
      window.ICD10Viewer.open();
    }
  });
  btn.addEventListener('mouseenter', () => {
    btn.style.background = 'linear-gradient(135deg, #818cf8, #6366f1)';
    btn.style.boxShadow = '0 2px 8px rgba(99,102,241,0.5)';
    btn.style.transform = 'translateY(-1px)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background = 'linear-gradient(135deg, #6366f1, #4f46e5)';
    btn.style.boxShadow = '0 1px 3px rgba(79,70,229,0.4)';
    btn.style.transform = 'translateY(0)';
  });

  // Target: the .dropDownButtonContainer in the pccModuleHeader that has the Reports button
  const reportsBtn = document.querySelector('.pccModuleHeader .dropDownButtonContainer .pccButton[value*="Reports"]');
  if (reportsBtn) {
    const container = reportsBtn.closest('.dropDownButtonContainer');
    container.appendChild(btn);
    return;
  }

  // Fallback: any .pccModuleHeader cell
  const headerCell = document.querySelector('td.pccModuleHeader');
  if (headerCell) {
    headerCell.appendChild(btn);
    return;
  }

  // Last fallback: insert before the diagnosis table
  const table = document.querySelector('#meddiaglisting, .pccResults, [id*="meddiag"]');
  if (table) {
    table.parentNode.insertBefore(btn, table);
  }
}

async function checkAuthAndPrompt() {
  try {
    const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
    if (!authState.authenticated) {
      showLoginBar();
    }
  } catch (e) {
    console.warn('Super Menu: Auth check failed:', e);
    showLoginBar();
  }
}

function showLoginBar() {
  if (document.getElementById('super-login-bar')) return;

  const bar = document.createElement('div');
  bar.id = 'super-login-bar';
  bar.innerHTML = `
    <div class="super-login-bar__content">
      <span class="super-login-bar__logo">S</span>
      <span class="super-login-bar__text">Super LTC is ready — log in to get started</span>
      <button class="super-login-bar__btn" id="super-login-bar-btn">Log In</button>
      <button class="super-login-bar__dismiss" id="super-login-bar-dismiss" title="Dismiss">&times;</button>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #super-login-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999999;
      background: linear-gradient(135deg, #4f46e5, #6366f1);
      color: white;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      animation: super-login-slide-down 0.3s ease-out;
    }
    @keyframes super-login-slide-down {
      from { transform: translateY(-100%); }
      to { transform: translateY(0); }
    }
    .super-login-bar__content {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      max-width: 100%;
    }
    .super-login-bar__logo {
      background: rgba(255,255,255,0.2);
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 15px;
      flex-shrink: 0;
    }
    .super-login-bar__text {
      flex: 1;
    }
    .super-login-bar__btn {
      background: white;
      color: #4f46e5;
      border: none;
      padding: 6px 16px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .super-login-bar__btn:hover {
      background: #eef2ff;
    }
    .super-login-bar__dismiss {
      background: none;
      border: none;
      color: rgba(255,255,255,0.7);
      font-size: 20px;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
      flex-shrink: 0;
    }
    .super-login-bar__dismiss:hover {
      color: white;
    }
  `;
  bar.appendChild(style);
  document.body.appendChild(bar);

  document.getElementById('super-login-bar-btn').addEventListener('click', async () => {
    const btn = document.getElementById('super-login-bar-btn');
    btn.textContent = 'Opening...';
    btn.disabled = true;
    try {
      const response = await chrome.runtime.sendMessage({ type: 'LOGIN' });
      if (response.success && response.authUrl) {
        window.open(response.authUrl, '_blank');
        bar.remove();
      } else {
        btn.textContent = 'Failed — try again';
        btn.disabled = false;
      }
    } catch (e) {
      btn.textContent = 'Failed — try again';
      btn.disabled = false;
    }
  });

  document.getElementById('super-login-bar-dismiss').addEventListener('click', () => {
    bar.remove();
  });
}

// Listen for auth changes to dismiss the bar
chrome.storage.onChanged.addListener((changes) => {
  if (changes.authToken && changes.authToken.newValue) {
    const bar = document.getElementById('super-login-bar');
    if (bar) bar.remove();
  }
});

function initSuperChat() {
  if (SuperMenu.initialized) {
    console.log('Super Menu: Already initialized');
    return;
  }

  console.log('Super Menu: Initializing');

  // Check auth and show login bar if needed
  checkAuthAndPrompt();

  // Check for patient ID (for chat functionality)
  const patientId = getChatPatientId();
  if (patientId) {
    console.log('Super Menu: Patient context detected:', patientId);
    // Load existing chat session
    loadChatSession();
  }

  // Create UI (always - dashboard is global)
  createChatButton();
  createChatPanel();

  // Inject AI Code button on Med Diag pages
  injectAICodeButton();

  SuperMenu.initialized = true;
  console.log('Super Menu: Initialization complete');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initSuperChat, 500);
  });
} else {
  setTimeout(initSuperChat, 500);
}

// Re-check on URL changes (SPA navigation)
let chatLastUrl = window.location.href;
let lastContext = null;

const chatUrlObserver = new MutationObserver(() => {
  if (window.location.href !== chatLastUrl) {
    const oldUrl = chatLastUrl;
    chatLastUrl = window.location.href;

    // Get old and new context
    const oldPatientId = new URL(oldUrl).searchParams.get('ESOLclientid');
    const oldAssessmentId = new URL(oldUrl).searchParams.get('ESOLassessid');
    const newPatientId = getChatPatientId();
    const newContext = getMDSContext();

    // Check if patient context changed
    if (oldPatientId !== newPatientId) {
      console.log('Super Menu: Patient context changed, updating chat session');
      // Clear old chat session and load new one
      if (newPatientId) {
        loadChatSession();
      }
      // Re-render chat if it's the active view
      if (SuperMenu.activeView === 'chat') {
        renderChatMessages();
      }
    }

    // Check if scope/context changed - auto-switch view
    const scopeChanged = !lastContext ||
                         lastContext.scope !== newContext.scope ||
                         lastContext.patientId !== newContext.patientId ||
                         lastContext.assessmentId !== newContext.assessmentId;

    if (scopeChanged) {
      console.log('Super Menu: Context changed from', lastContext?.scope, 'to', newContext.scope);
      lastContext = newContext;

      // Clear MDS data cache and manual context on URL change
      if (typeof MDSViewState !== 'undefined') {
        MDSViewState.data = null;
        MDSViewState.context = newContext;
        MDSViewState.manualContext = null; // Clear manual nav - sync to URL
      }

      // Auto-switch view if panel is open
      if (SuperMenu.isOpen && typeof autoSwitchViewByContext === 'function') {
        autoSwitchViewByContext();
      }
    }

    // Invalidate dashboard cache on navigation (data might have changed)
    if (window.DashboardState) {
      DashboardState.invalidateCache();
    }

    // Re-inject AI Code button if navigated to Med Diag page
    injectAICodeButton();
  }
});

chatUrlObserver.observe(document.body, { childList: true, subtree: true });

// Initialize context tracking
setTimeout(() => {
  if (typeof getMDSContext === 'function') {
    lastContext = getMDSContext();
  }
}, 100);

// Make available globally for cross-file access
window.initSuperChat = initSuperChat;
