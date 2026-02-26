// Super Menu Panel — legacy panel removed; chat moves to overlay in Phase 3.
// This file retained as stub so init.js call to createChatPanel() is safe.

function createChatPanel() {
  // Panel DOM creation removed — chat will open via ChatOverlay (Phase 3).
  // No-op: bubbles are created by fab.js createBubbles() instead.
}

function toggleChatPanel() {
  // No panel to toggle. Chat overlay handled by openChatOverlay() in fab.js.
}

// Make available globally for backward compatibility
window.createChatPanel = createChatPanel;
window.toggleChatPanel = toggleChatPanel;
