// Hook for managing chat history — conversation list, active conversation, CRUD
import { useState, useCallback, useEffect } from 'preact/hooks';
import { listConversations, loadConversation, deleteConversation } from '../lib/chat-history-api.js';

export function useChatHistory() {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [organizationId, setOrganizationId] = useState(null);

  // Get orgSlug from PCC page context on mount
  useEffect(() => {
    const org = localStorage.getItem('CORE.org_code');
    if (org) setOrganizationId(org);
  }, []);

  // Fetch conversations list from API
  const loadHistory = useCallback(async (searchQuery) => {
    if (!organizationId) return;
    setLoading(true);
    try {
      const data = await listConversations(organizationId, { limit: 20, q: searchQuery });
      setConversations(data?.conversations || []);
    } catch (e) {
      console.warn('[AI Chat] Failed to load chat history:', e);
      setConversations([]);
    } finally {
      setLoading(false);
    }
  }, [organizationId]);

  // Load on mount / org change
  useEffect(() => {
    if (organizationId) {
      loadHistory();
    }
  }, [organizationId]);

  // Select a conversation — fetches full messages
  const selectConversation = useCallback(async (convId) => {
    try {
      const data = await loadConversation(convId);
      return data; // { conversation, messages }
    } catch (e) {
      console.warn('[AI Chat] Failed to load conversation:', e);
      return null;
    }
  }, []);

  // Delete a conversation
  const removeConversation = useCallback(async (convId) => {
    try {
      await deleteConversation(convId);
      setConversations(prev => prev.filter(c => c.id !== convId));
    } catch (e) {
      console.warn('[AI Chat] Failed to delete conversation:', e);
    }
  }, []);

  return {
    conversations,
    loading,
    organizationId,
    loadHistory,
    selectConversation,
    removeConversation
  };
}
