// Hook for managing chat history — session list, active session, CRUD
import { useState, useCallback, useEffect, useRef } from 'preact/hooks';
import { listChatSessions, saveChatSession, deleteChatSession } from '../lib/chat-history-api.js';

export function useChatHistory(patientId) {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const saveTimeoutRef = useRef(null);

  // Fetch sessions list from API
  const loadSessions = useCallback(async () => {
    if (!patientId) return;
    setLoading(true);
    try {
      const data = await listChatSessions(patientId);
      setSessions(data || []);
    } catch (e) {
      console.warn('[AI Chat] Failed to load chat history:', e);
      setSessions([]);
    } finally {
      setLoading(false);
    }
  }, [patientId]);

  // Load on mount / patient change
  useEffect(() => {
    loadSessions();
    setActiveSessionId(null);
  }, [patientId]);

  // Start a new session — clears active, returns new sessionId
  const startNewSession = useCallback(() => {
    const newId = crypto.randomUUID();
    setActiveSessionId(newId);
    return newId;
  }, []);

  // Select an existing session by id — returns the session object (with messages)
  const selectSession = useCallback((sessionId) => {
    setActiveSessionId(sessionId);
    const session = sessions.find(s => s.id === sessionId);
    return session || null;
  }, [sessions]);

  // Save current session to backend (debounced)
  const saveSession = useCallback(({ sessionId, messages }) => {
    if (!patientId || !sessionId || !messages?.length) return;

    // Clear pending save
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);

    saveTimeoutRef.current = setTimeout(async () => {
      // Title = first user message, truncated
      const firstUserMsg = messages.find(m => m.role === 'user');
      const title = firstUserMsg
        ? firstUserMsg.content.slice(0, 60) + (firstUserMsg.content.length > 60 ? '...' : '')
        : 'New conversation';

      try {
        await saveChatSession({ sessionId, patientId, title, messages });
        // Refresh session list to reflect the save
        const data = await listChatSessions(patientId);
        setSessions(data || []);
      } catch (e) {
        console.warn('[AI Chat] Failed to save session:', e);
      }
    }, 500);
  }, [patientId]);

  // Delete a session
  const removeSession = useCallback(async (sessionId) => {
    try {
      await deleteChatSession(sessionId);
      setSessions(prev => prev.filter(s => s.id !== sessionId));
      if (activeSessionId === sessionId) {
        setActiveSessionId(null);
      }
    } catch (e) {
      console.warn('[AI Chat] Failed to delete session:', e);
    }
  }, [activeSessionId]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  return {
    sessions,
    loading,
    activeSessionId,
    setActiveSessionId,
    loadSessions,
    startNewSession,
    selectSession,
    saveSession,
    removeSession
  };
}
