// Super Menu Speed Dial FAB

function createBubbles() {
  if (document.getElementById('super-bubbles-container')) return;

  const container = document.createElement('div');
  container.id = 'super-bubbles-container';
  container.innerHTML = `
    <button id="super-chat-action" class="super-dial__action super-dial__action--chat" aria-label="Open Chat">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>
    <button id="super-mds-action" class="super-dial__action super-dial__action--mds" aria-label="Open Dashboard">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
      <span class="super-dial__action-badge" id="super-mds-badge" style="display:none;"></span>
    </button>
    <button id="super-patient-action" class="super-dial__action super-dial__action--patient" aria-label="Open Patient" style="display:none;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </button>
    <button id="super-bubble-main" class="super-bubble__main" aria-label="Super">S</button>
  `;

  document.body.appendChild(container);

  // Load saved position
  loadBubblesPosition(container);

  // Setup draggable on the container
  setupBubblesDraggable(container);

  // Wire up click handlers
  const mainBtn = document.getElementById('super-bubble-main');
  const mdsAction = document.getElementById('super-mds-action');
  const chatAction = document.getElementById('super-chat-action');
  const patientAction = document.getElementById('super-patient-action');

  mainBtn.addEventListener('click', () => {
    if (hasDragged) {
      hasDragged = false;
      return;
    }
    const isOpen = container.classList.toggle('super-dial--open');
    if (isOpen) {
      // Close on outside click (one-time)
      const onOutside = (e) => {
        if (!container.contains(e.target)) {
          container.classList.remove('super-dial--open');
          document.removeEventListener('click', onOutside, true);
        }
      };
      document.addEventListener('click', onOutside, true);
    }
  });

  // Patient button → toggles PDPM Analyzer (panel on MDS pages, modal otherwise)
  patientAction.addEventListener('click', (e) => {
    e.stopPropagation();
    container.classList.remove('super-dial--open');
    if (typeof PDPMAnalyzerLauncher === 'undefined') return;
    // Toggle: if already open, close it; otherwise open
    if (PDPMAnalyzerLauncher.isOpen()) {
      PDPMAnalyzerLauncher.close();
    } else {
      const context = getMDSContext();
      // Clear any dismissal so it opens fresh
      try { sessionStorage.removeItem('super_analyzer_dismissed'); } catch (_) {}
      const mode = context.scope === 'mds' ? 'panel' : 'modal';
      PDPMAnalyzerLauncher.open(context, { mode });
    }
  });

  // Dashboard button → always opens MDS Command Center
  mdsAction.addEventListener('click', (e) => {
    e.stopPropagation();
    container.classList.remove('super-dial--open');
    MDSCommandCenterLauncher.open();
  });

  chatAction.addEventListener('click', (e) => {
    e.stopPropagation();
    container.classList.remove('super-dial--open');
    openChatOverlay();
  });

  // Show/hide patient button based on context
  updateBubblesContext();

  // Load badge count
  updateMDSBadge();
}

// Show or hide the patient action button based on whether we're on a patient page
function updateBubblesContext() {
  const patientAction = document.getElementById('super-patient-action');
  if (!patientAction) return;

  const context = getMDSContext();
  const isPatientPage = context.scope === 'patient' || context.scope === 'mds';

  patientAction.style.display = isPatientPage ? '' : 'none';
}

// Module-level hasDragged so the main button click handler can read it
// (set by setupBubblesDraggable via closure; exposed here for mainBtn access)
let hasDragged = false;

function openChatOverlay() {
  // If the chat panel still exists (legacy), toggle it; otherwise open overlay
  const panel = document.getElementById('super-chat-panel');
  if (panel) {
    if (typeof toggleChatPanel === 'function') {
      toggleChatPanel();
    }
    return;
  }
  // Future: ChatOverlayLauncher.open()
  console.log('[Super] Chat overlay not yet implemented');
}

function loadBubblesPosition(container) {
  try {
    const saved = localStorage.getItem(FAB_POSITION_KEY);
    if (saved) {
      const pos = JSON.parse(saved);
      const maxX = window.innerWidth - 70;
      const maxY = window.innerHeight - 120;
      const x = Math.max(0, Math.min(pos.x, maxX));
      const y = Math.max(0, Math.min(pos.y, maxY));
      container.style.right = 'auto';
      container.style.bottom = 'auto';
      container.style.left = `${x}px`;
      container.style.top = `${y}px`;
    }
  } catch (e) {
    console.warn('Super Menu: Failed to load bubble position:', e);
  }
}

function saveBubblesPosition(x, y) {
  try {
    localStorage.setItem(FAB_POSITION_KEY, JSON.stringify({ x, y }));
  } catch (e) {
    console.warn('Super Menu: Failed to save bubble position:', e);
  }
}

function setupBubblesDraggable(container) {
  let isDragging = false;
  let startX, startY, startLeft, startTop;

  const onStart = (e) => {
    const rect = container.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;

    if (e.type === 'mousedown') {
      startX = e.clientX;
      startY = e.clientY;
    } else if (e.type === 'touchstart') {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }

    isDragging = true;
    hasDragged = false;
  };

  const onMove = (e) => {
    if (!isDragging) return;

    let clientX, clientY;
    if (e.type === 'mousemove') {
      clientX = e.clientX;
      clientY = e.clientY;
    } else if (e.type === 'touchmove') {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      e.preventDefault();
    }

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      hasDragged = true;
    }

    let newX = startLeft + deltaX;
    let newY = startTop + deltaY;

    const maxX = window.innerWidth - 70;
    const maxY = window.innerHeight - 120;
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    container.style.left = `${newX}px`;
    container.style.top = `${newY}px`;
    container.style.bottom = 'auto';
    container.style.right = 'auto';
  };

  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;

    if (hasDragged) {
      const rect = container.getBoundingClientRect();
      saveBubblesPosition(rect.left, rect.top);
    }
  };

  container.addEventListener('mousedown', onStart);

  // Prevent drag from firing button clicks
  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        hasDragged = false;
      }
    }, true);
  });

  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onEnd);

  container.addEventListener('touchstart', onStart, { passive: false });
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('touchend', onEnd);

  window.addEventListener('resize', () => {
    const rect = container.getBoundingClientRect();
    const maxX = window.innerWidth - 70;
    const maxY = window.innerHeight - 120;
    if (rect.left > maxX || rect.top > maxY) {
      const newX = Math.min(rect.left, maxX);
      const newY = Math.min(rect.top, maxY);
      container.style.left = `${newX}px`;
      container.style.top = `${newY}px`;
      saveBubblesPosition(newX, newY);
    }
  });
}

async function updateMDSBadge() {
  const badge = document.getElementById('super-mds-badge');
  if (!badge) return;

  let count = 0;

  if (window.FacilityDashboardState) {
    if (!FacilityDashboardState.data && !FacilityDashboardState.loading) {
      try {
        await FacilityDashboardState.loadDashboard();
      } catch (err) {
        console.warn('Super Menu: Failed to load badge count:', err);
      }
    }
    count = FacilityDashboardState.getTotalActionable?.() || 0;
  }

  // Add cert actionable count
  try {
    if (window.CertAPI && window.FacilityDashboardState) {
      const facilityName = FacilityDashboardState.facilityName;
      const orgSlug = FacilityDashboardState.orgSlug;
      if (facilityName && orgSlug) {
        const certDash = await CertAPI.fetchDashboard(facilityName, orgSlug);
        if (certDash) {
          count += (certDash.pending || 0) + (certDash.overdue || 0);
        }
      }
    }
  } catch (err) {
    console.warn('Super Menu: Failed to load cert badge count:', err);
  }

  if (count > 0) {
    badge.textContent = count > 99 ? '99+' : count;
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }
}

// Backward-compat alias — navigation.js calls updateMenuBadge()
function updateMenuBadge() {
  updateMDSBadge();
}

// Keep createChatButton as alias so init.js can still call it safely during transition
function createChatButton() {
  createBubbles();
}

// Make available globally
window.createBubbles = createBubbles;
window.createChatButton = createChatButton;
window.updateMDSBadge = updateMDSBadge;
window.updateMenuBadge = updateMenuBadge;
window.updateBubblesContext = updateBubblesContext;
