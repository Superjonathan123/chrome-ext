// Super Menu Navigation & View Switching

// Track if user manually switched views (to avoid auto-switching interruption)
let userManuallyNavigated = false;

function setupNavListeners() {
  // Nav button clicks
  document.querySelectorAll('.super-menu-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view) {
        userManuallyNavigated = true;
        switchView(view);
      }
    });
  });

  // Refresh button
  const refreshBtn = document.getElementById('super-menu-refresh');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      refreshBtn.classList.add('super-menu-refresh-spinning');
      if (SuperMenu.activeView === 'dashboard') {
        await renderFacilityDashboard(true);
      } else if (SuperMenu.activeView === 'mds') {
        await renderMDSView(true);
      }
      refreshBtn.classList.remove('super-menu-refresh-spinning');
    });
  }
}

// Auto-switch view based on URL context
function autoSwitchViewByContext() {
  const context = getMDSContext();

  // Determine the appropriate view for this context
  let targetView;
  if (context.scope === 'mds') {
    targetView = 'mds';
  } else if (context.scope === 'patient') {
    targetView = 'mds'; // Patient view is rendered within the MDS view
  } else {
    targetView = 'dashboard';
  }

  // Always update the context in MDSViewState
  if (typeof MDSViewState !== 'undefined') {
    MDSViewState.context = context;
  }

  // Switch to appropriate view
  switchView(targetView);

  // Reset manual navigation flag after context change
  userManuallyNavigated = false;
}

function switchView(viewName) {
  SuperMenu.activeView = viewName;

  // Update nav button states
  document.querySelectorAll('.super-menu-nav-btn').forEach(btn => {
    btn.classList.toggle('super-menu-nav-btn--active', btn.dataset.view === viewName);
  });

  // Update title based on view and context
  const titleEl = document.getElementById('super-menu-title');
  if (titleEl) {
    let title = 'Super Menu';

    if (viewName === 'dashboard') {
      title = 'Dashboard';
    } else if (viewName === 'mds') {
      // Context-aware title for MDS view
      const context = typeof getMDSContext === 'function' ? getMDSContext() : { scope: 'global' };
      if (context.scope === 'patient') {
        title = 'Patient';
      } else if (context.scope === 'mds') {
        title = 'MDS';
      } else {
        title = 'MDS';
      }
    } else if (viewName === 'chat') {
      title = 'AI Assistant';
    }

    titleEl.textContent = title;
  }

  // Update header action buttons visibility
  const refreshBtn = document.getElementById('super-menu-refresh');
  const clearBtn = document.getElementById('super-chat-clear');
  if (refreshBtn) refreshBtn.style.display = (viewName === 'dashboard' || viewName === 'mds') ? '' : 'none';
  if (clearBtn) clearBtn.style.display = viewName === 'chat' ? '' : 'none';

  // Show/hide content areas
  const dashboardContent = document.getElementById('super-menu-content');
  const chatMessages = document.getElementById('super-chat-messages');
  const chatInputArea = document.getElementById('super-chat-input-area');

  if (viewName === 'dashboard') {
    dashboardContent.style.display = '';
    chatMessages.style.display = 'none';
    chatInputArea.style.display = 'none';
    renderFacilityDashboard();
  } else if (viewName === 'mds') {
    dashboardContent.style.display = '';
    chatMessages.style.display = 'none';
    chatInputArea.style.display = 'none';
    renderMDSView();
  } else {
    // chat view
    dashboardContent.style.display = 'none';
    chatMessages.style.display = '';
    chatInputArea.style.display = '';
    renderChatMessages();
    document.getElementById('super-chat-input')?.focus();
    scrollToBottom();
  }
}

// Facility Dashboard Rendering
async function renderFacilityDashboard(forceRefresh = false) {
  const container = document.getElementById('super-menu-content');
  if (!container) return;

  // Check if FacilityDashboardState and FacilityDashboardView are available
  if (!window.FacilityDashboardState || !window.FacilityDashboardView) {
    container.innerHTML = `
      <div class="super-menu-error">
        <div class="super-menu-error__icon">&#9888;</div>
        <div class="super-menu-error__text">Dashboard components not loaded</div>
      </div>
    `;
    return;
  }

  // Show loading if no data yet
  if (!FacilityDashboardState.data || forceRefresh) {
    container.innerHTML = FacilityDashboardView._renderLoading();

    try {
      await FacilityDashboardState.loadDashboard(forceRefresh);
    } catch (err) {
      console.error('Super Menu: Failed to load facility dashboard:', err);
    }
  }

  // Render the dashboard
  container.innerHTML = FacilityDashboardView.render();
  FacilityDashboardView.setupListeners(container);

  // Update badge
  updateMenuBadge();
}

// Badge Management
async function updateMenuBadge() {
  const badge = document.getElementById('super-menu-badge');
  if (!badge) return;

  let count = 0;

  // Try to get count from FacilityDashboardState
  if (window.FacilityDashboardState) {
    // Load data if we don't have it yet
    if (!FacilityDashboardState.data && !FacilityDashboardState.loading) {
      try {
        await FacilityDashboardState.loadDashboard();
      } catch (err) {
        console.warn('Super Menu: Failed to load badge count:', err);
      }
    }
    count = FacilityDashboardState.getTotalActionable();
  }

  if (count > 0) {
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }
}

// Expose functions for external access
window.SuperMenu = {
  renderFacilityDashboard,
  renderMDSView,
  updateMenuBadge,
  switchView,
  getMDSContext,
  autoSwitchViewByContext
};
