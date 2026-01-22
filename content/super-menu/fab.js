// Super Menu FAB (Floating Action Button)

function createChatButton() {
  if (document.getElementById('super-chat-button')) return;

  const button = document.createElement('button');
  button.id = 'super-chat-button';
  button.className = 'super-chat-fab';
  button.setAttribute('aria-label', 'Open Super Menu');
  button.innerHTML = `
    <div class="super-menu-fab__logo super-chat-fab__icon--chat">S</div>
    <div class="super-menu-fab__badge" id="super-menu-badge" style="display: none;">0</div>
    <svg class="super-chat-fab__icon super-chat-fab__icon--close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;

  document.body.appendChild(button);

  // Load saved position
  loadFABPosition(button);

  // Setup draggable functionality
  setupFABDraggable(button);

  // Load badge count
  updateMenuBadge();
}

function loadFABPosition(button) {
  try {
    const saved = localStorage.getItem(FAB_POSITION_KEY);
    if (saved) {
      const pos = JSON.parse(saved);
      // Validate position is within viewport
      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 60;
      const x = Math.max(0, Math.min(pos.x, maxX));
      const y = Math.max(0, Math.min(pos.y, maxY));

      button.style.left = `${x}px`;
      button.style.bottom = 'auto';
      button.style.top = `${y}px`;
    }
  } catch (e) {
    console.warn('Super Menu: Failed to load FAB position:', e);
  }
}

function saveFABPosition(x, y) {
  try {
    localStorage.setItem(FAB_POSITION_KEY, JSON.stringify({ x, y }));
  } catch (e) {
    console.warn('Super Menu: Failed to save FAB position:', e);
  }
}

function setupFABDraggable(button) {
  let isDragging = false;
  let hasDragged = false;
  let startX, startY, startLeft, startTop;

  const onStart = (e) => {
    // Get the starting position
    const rect = button.getBoundingClientRect();
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
    button.classList.add('super-chat-fab--dragging');
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
      e.preventDefault(); // Prevent scrolling while dragging
    }

    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    // Only consider it a drag if moved more than 5px
    if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
      hasDragged = true;
    }

    // Calculate new position
    let newX = startLeft + deltaX;
    let newY = startTop + deltaY;

    // Constrain to viewport
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    // Apply position
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
    button.style.bottom = 'auto';
    button.style.right = 'auto';
  };

  const onEnd = () => {
    if (!isDragging) return;

    isDragging = false;
    button.classList.remove('super-chat-fab--dragging');

    // Save position if dragged
    if (hasDragged) {
      const rect = button.getBoundingClientRect();
      saveFABPosition(rect.left, rect.top);
    }
  };

  // Handle click - prevent if was dragging
  button.addEventListener('click', (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
      return;
    }
    toggleChatPanel();
  });

  // Mouse events
  button.addEventListener('mousedown', onStart);
  document.addEventListener('mousemove', onMove);
  document.addEventListener('mouseup', onEnd);

  // Touch events
  button.addEventListener('touchstart', onStart, { passive: false });
  document.addEventListener('touchmove', onMove, { passive: false });
  document.addEventListener('touchend', onEnd);

  // Update position on window resize
  window.addEventListener('resize', () => {
    const rect = button.getBoundingClientRect();
    const maxX = window.innerWidth - 60;
    const maxY = window.innerHeight - 60;

    if (rect.left > maxX || rect.top > maxY) {
      const newX = Math.min(rect.left, maxX);
      const newY = Math.min(rect.top, maxY);
      button.style.left = `${newX}px`;
      button.style.top = `${newY}px`;
      saveFABPosition(newX, newY);
    }
  });
}
