// Super Menu Navigation — panel/tab-switching removed (overlay architecture).
// Retained: badge management, renderFacilityDashboard (used by mds-view.js),
// stub functions for backward-compat with init.js URL observer.

function setupNavListeners() {
  // No-op: panel nav buttons no longer exist
}

function autoSwitchViewByContext() {
  // No-op: context routing now handled by bubble click handlers in fab.js
  if (typeof MDSViewState !== 'undefined') {
    MDSViewState.context = getMDSContext();
  }
}

function switchView(viewName) {
  // No-op: panel views replaced by overlays
  SuperMenu.activeView = viewName;
}

// Facility Dashboard data loader — still used by mds-view.js Command Center btn
async function renderFacilityDashboard(forceRefresh = false) {
  // Panel #super-menu-content is gone. Keep for data-loading side-effect only.
  if (!window.FacilityDashboardState) return;

  if (!FacilityDashboardState.data || forceRefresh) {
    try {
      await FacilityDashboardState.loadDashboard(forceRefresh);
    } catch (err) {
      console.error('Super Menu: Failed to load facility dashboard:', err);
    }
  }

  // Update badge after data loads
  updateMenuBadge();
}

// Badge management — updateMenuBadge is the canonical name called from mds-view.js
// and other files. It delegates to updateMDSBadge() defined in fab.js.
function updateMenuBadge() {
  if (typeof updateMDSBadge === 'function') {
    updateMDSBadge();
  }
}

// Make available globally for cross-file access
window.switchView = switchView;
window.setupNavListeners = setupNavListeners;
window.autoSwitchViewByContext = autoSwitchViewByContext;
window.renderFacilityDashboard = renderFacilityDashboard;
window.updateMenuBadge = updateMenuBadge;
