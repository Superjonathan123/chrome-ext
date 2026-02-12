// Super Menu Session Storage

function saveChatSession() {
  const patientId = getChatPatientId();
  if (!patientId) return;

  try {
    sessionStorage.setItem(`super-chat-${patientId}`, JSON.stringify({
      messages: SuperChat.messages,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.warn('Super LTC Chat: Failed to save session:', e);
  }
}

function loadChatSession() {
  const patientId = getChatPatientId();
  if (!patientId) return false;

  // Clear if patient changed
  if (SuperChat.patientId && SuperChat.patientId !== patientId) {
    SuperChat.messages = [];
    SuperChat.patientId = patientId;
    return false;
  }

  try {
    const saved = sessionStorage.getItem(`super-chat-${patientId}`);
    if (saved) {
      const data = JSON.parse(saved);
      SuperChat.messages = data.messages || [];
      SuperChat.patientId = patientId;
      return true;
    }
  } catch (e) {
    console.warn('Super LTC Chat: Failed to load session:', e);
  }

  SuperChat.patientId = patientId;
  return false;
}

function clearChatSession() {
  const patientId = getChatPatientId();
  if (patientId) {
    sessionStorage.removeItem(`super-chat-${patientId}`);
  }

  // Disconnect any active streaming port
  if (SuperChat.streamingPort) {
    try {
      SuperChat.streamingPort.disconnect();
    } catch (e) {
      // Port already disconnected
    }
  }

  // Reset all state
  SuperChat.messages = [];
  SuperChat.status = 'ready';
  SuperChat.streamingPort = null;
  SuperChat.currentAssistantMessage = null;

  // Update UI
  renderChatMessages();
  updateInputState();
}

// Make available globally for cross-file access
window.saveChatSession = saveChatSession;
window.loadChatSession = loadChatSession;
window.clearChatSession = clearChatSession;
