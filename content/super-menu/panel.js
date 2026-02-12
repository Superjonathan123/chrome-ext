// Super Menu Panel

function createChatPanel() {
  if (document.getElementById('super-chat-panel')) return;

  const panel = document.createElement('div');
  panel.id = 'super-chat-panel';
  panel.className = 'super-chat-panel';
  panel.innerHTML = `
    <div class="super-chat-header">
      <div class="super-menu-header__nav">
        <button class="super-menu-nav-btn super-menu-nav-btn--active" data-view="dashboard" title="Queries Dashboard">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        </button>
        <button class="super-menu-nav-btn" data-view="mds" title="MDS Analysis">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </button>
        <button class="super-menu-nav-btn" data-view="chat" title="AI Assistant">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div class="super-chat-header__title">
        <div class="super-chat-header__logo">S</div>
        <span class="super-menu-header__title-text" id="super-menu-title">Queries</span>
      </div>
      <div class="super-chat-header__actions">
        <button class="super-chat-header__btn" id="super-menu-refresh" title="Refresh">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
        </button>
        <button class="super-chat-header__btn" id="super-chat-clear" title="Clear conversation" style="display: none;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
        <button class="super-chat-header__btn" id="super-chat-close" title="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="super-menu-content" id="super-menu-content">
      <!-- Dashboard or Chat content rendered here -->
    </div>
    <div class="super-chat-messages" id="super-chat-messages" style="display: none;"></div>
    <div class="super-chat-input-area" id="super-chat-input-area" style="display: none;">
      <textarea
        class="super-chat-input"
        id="super-chat-input"
        placeholder="Ask me anything about this patient..."
        rows="1"
      ></textarea>
      <button class="super-chat-send" id="super-chat-send" disabled aria-label="Send message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(panel);
  setupChatPanelListeners();
  setupNavListeners();
}

function setupChatPanelListeners() {
  const input = document.getElementById('super-chat-input');
  const sendBtn = document.getElementById('super-chat-send');
  const clearBtn = document.getElementById('super-chat-clear');
  const closeBtn = document.getElementById('super-chat-close');

  // Auto-resize textarea
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    sendBtn.disabled = !input.value.trim() || SuperChat.status !== 'ready';
  });

  // Send on Enter (Shift+Enter for newline)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.value.trim() && SuperChat.status === 'ready') {
        sendChatMessage(input.value.trim());
        input.value = '';
        input.style.height = 'auto';
        sendBtn.disabled = true;
      }
    }
  });

  // Send button click
  sendBtn.addEventListener('click', () => {
    if (input.value.trim() && SuperChat.status === 'ready') {
      sendChatMessage(input.value.trim());
      input.value = '';
      input.style.height = 'auto';
      sendBtn.disabled = true;
    }
  });

  // Clear chat - no confirmation needed
  clearBtn.addEventListener('click', () => {
    clearChatSession();
  });

  // Close panel
  closeBtn.addEventListener('click', () => {
    toggleChatPanel();
  });
}

function toggleChatPanel() {
  SuperMenu.isOpen = !SuperMenu.isOpen;

  const panel = document.getElementById('super-chat-panel');
  const button = document.getElementById('super-chat-button');

  if (SuperMenu.isOpen) {
    // Position panel relative to FAB
    positionPanelNearFAB(panel, button);

    panel.classList.add('super-chat-panel--open');
    button.classList.add('super-chat-fab--open');

    // Auto-switch to context-appropriate view
    if (typeof autoSwitchViewByContext === 'function') {
      autoSwitchViewByContext();
    } else {
      // Fallback to dashboard
      switchView('dashboard');
    }
  } else {
    panel.classList.remove('super-chat-panel--open');
    button.classList.remove('super-chat-fab--open');

    // Update badge when closing
    updateMenuBadge();
  }
}

function positionPanelNearFAB(panel, button) {
  const fabRect = button.getBoundingClientRect();
  const panelWidth = 500;
  const panelHeight = 700;
  const margin = 16;

  // Determine if FAB is on left or right side of screen
  const isOnLeft = fabRect.left < window.innerWidth / 2;
  const isOnTop = fabRect.top < window.innerHeight / 2;

  let left, top;

  if (isOnLeft) {
    // Panel opens to the right of FAB or aligned to left
    left = fabRect.left;
  } else {
    // Panel opens to the left of FAB
    left = fabRect.right - panelWidth;
  }

  if (isOnTop) {
    // Panel opens below FAB
    top = fabRect.bottom + margin;
  } else {
    // Panel opens above FAB
    top = fabRect.top - panelHeight - margin;
  }

  // Constrain to viewport
  const maxLeft = window.innerWidth - panelWidth - margin;
  const maxTop = window.innerHeight - panelHeight - margin;
  left = Math.max(margin, Math.min(left, maxLeft));
  top = Math.max(margin, Math.min(top, maxTop));

  // Apply position
  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
  panel.style.bottom = 'auto';
  panel.style.right = 'auto';
}

// Make available globally for cross-file access
window.createChatPanel = createChatPanel;
window.toggleChatPanel = toggleChatPanel;
