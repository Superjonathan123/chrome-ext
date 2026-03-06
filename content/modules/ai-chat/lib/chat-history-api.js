// API client for chat session persistence
// Uses the existing API_REQUEST chrome message pattern

export async function listChatSessions(patientId) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/extension/patients/${encodeURIComponent(patientId)}/chat-sessions`
  });
  if (!response.success) throw new Error(response.error || 'Failed to list chat sessions');
  return response.data; // Array of { id, title, createdAt, updatedAt, messageCount }
}

export async function saveChatSession({ sessionId, patientId, title, messages }) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: '/api/extension/chat-sessions',
    options: {
      method: 'POST',
      body: JSON.stringify({ sessionId, patientId, title, messages })
    }
  });
  if (!response.success) throw new Error(response.error || 'Failed to save chat session');
  return response.data;
}

export async function deleteChatSession(sessionId) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/extension/chat-sessions/${encodeURIComponent(sessionId)}`,
    options: { method: 'DELETE' }
  });
  if (!response.success) throw new Error(response.error || 'Failed to delete chat session');
  return response.data;
}
