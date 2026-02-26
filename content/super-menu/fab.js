// Super Menu Dual Bubble Launcher

function createBubbles() {
  if (document.getElementById('super-bubbles-container')) return;

  const container = document.createElement('div');
  container.id = 'super-bubbles-container';
  container.innerHTML = `
    <button id="super-mds-bubble" class="super-bubble super-bubble--mds" aria-label="Open MDS">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
      <span class="super-bubble__badge" id="super-mds-badge" style="display:none;"></span>
    </button>
    <button id="super-chat-bubble" class="super-bubble super-bubble--chat" aria-label="Open Chat">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>
  `;

  document.body.appendChild(container);

  // Load saved position
  loadBubblesPosition(container);

  // Setup draggable on the container
  setupBubblesDraggable(container);

  // Wire up click handlers
  const mdsBubble = document.getElementById('super-mds-bubble');
  const chatBubble = document.getElementById('super-chat-bubble');

  mdsBubble.addEventListener('click', () => {
    const context = getMDSContext();
    if (context.scope === 'mds' || context.scope === 'patient') {
      if (typeof PDPMAnalyzerLauncher !== 'undefined') {
        PDPMAnalyzerLauncher.open(context);
      } else {
        MDSCommandCenterLauncher.open();
      }
    } else {
      MDSCommandCenterLauncher.open();
    }
  });

  chatBubble.addEventListener('click', () => {
    openChatOverlay();
  });

  // Load badge count
  updateMDSBadge();
}

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
  let hasDragged = false;
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
