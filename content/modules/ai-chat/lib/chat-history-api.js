// API client for chat conversation persistence
// Uses the existing API_REQUEST chrome message pattern
// All endpoints require organizationId explicitly (no server session for extension callers)

// ── Conversations ──────────────────────────────────────────

export async function listConversations(organizationId, { limit = 20, q } = {}) {
  const params = new URLSearchParams({ organizationId });
  if (limit) params.set('limit', String(limit));
  if (q) params.set('q', q);

  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/chat/conversations?${params.toString()}`
  });
  if (!response.success) throw new Error(response.error || 'Failed to list conversations');
  return response.data; // { conversations: [...] }
}

export async function createConversation({ title, organizationId, scope, patientId, locationId }) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: '/api/chat/conversations',
    options: {
      method: 'POST',
      body: JSON.stringify({ title, organizationId, scope, patientId, locationId })
    }
  });
  if (!response.success) throw new Error(response.error || 'Failed to create conversation');
  return response.data; // { conversation: { id, ... } }
}

export async function loadConversation(conversationId) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/chat/conversations/${encodeURIComponent(conversationId)}`
  });
  if (!response.success) throw new Error(response.error || 'Failed to load conversation');
  return response.data; // { conversation, messages }
}

export async function updateConversation(conversationId, updates) {
  // updates: { title?, scope?, patientId?, locationId? }
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/chat/conversations/${encodeURIComponent(conversationId)}`,
    options: {
      method: 'PATCH',
      body: JSON.stringify(updates)
    }
  });
  if (!response.success) throw new Error(response.error || 'Failed to update conversation');
  return response.data; // { ok: true }
}

export async function deleteConversation(conversationId) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/chat/conversations/${encodeURIComponent(conversationId)}`,
    options: { method: 'DELETE' }
  });
  if (!response.success) throw new Error(response.error || 'Failed to delete conversation');
  return response.data; // { ok: true }
}

// ── Messages ───────────────────────────────────────────────

export async function saveMessage(conversationId, { role, content, parts, metadata }) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: `/api/chat/conversations/${encodeURIComponent(conversationId)}/messages`,
    options: {
      method: 'POST',
      body: JSON.stringify({ role, content, parts, metadata })
    }
  });
  if (!response.success) throw new Error(response.error || 'Failed to save message');
  return response.data; // { message: { id, ... } }
}

// ── Title Generation ───────────────────────────────────────

export async function generateTitle({ conversationId, userMessage, assistantMessage }) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: '/api/chat/title',
    options: {
      method: 'POST',
      body: JSON.stringify({ conversationId, userMessage, assistantMessage })
    }
  });
  if (!response.success) throw new Error(response.error || 'Failed to generate title');
  return response.data; // { title: "..." }
}

// ── Feedback ───────────────────────────────────────────────

export async function submitFeedback({ conversationId, messageId, rating, comment, organizationId }) {
  const response = await chrome.runtime.sendMessage({
    type: 'API_REQUEST',
    endpoint: '/api/chat/feedback',
    options: {
      method: 'POST',
      body: JSON.stringify({ conversationId, messageId, rating, comment, organizationId })
    }
  });
  if (!response.success) throw new Error(response.error || 'Failed to submit feedback');
  return response.data; // { feedback: { id, ... } }
}
