// Super Menu Initialization

function initSuperChat() {
  if (SuperMenu.initialized) {
    console.log('Super Menu: Already initialized');
    return;
  }

  console.log('Super Menu: Initializing');

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
  }
});

chatUrlObserver.observe(document.body, { childList: true, subtree: true });

// Initialize context tracking
setTimeout(() => {
  if (typeof getMDSContext === 'function') {
    lastContext = getMDSContext();
  }
}, 100);
