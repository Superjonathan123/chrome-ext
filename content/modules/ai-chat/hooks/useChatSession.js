// Session persistence hook — saves/loads chat per patient
// Uses sessionStorage as fast cache + backend API for durable persistence
import { useEffect, useRef } from 'preact/hooks';

const SESSION_KEY_PREFIX = 'super-chat-v2-';

export function useChatSession(patientId, messages, setMessages, { sessionId, status, onSaveComplete } = {}) {
  const isInitialLoad = useRef(true);
  const prevStatusRef = useRef(status);

  // Load session on mount or patient change (from sessionStorage cache)
  useEffect(() => {
    if (!patientId) return;

    try {
      const saved = sessionStorage.getItem(`${SESSION_KEY_PREFIX}${patientId}`);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.messages?.length > 0) {
          setMessages(data.messages);
        }
      }
    } catch (e) {
      console.warn('[AI Chat] Failed to load session:', e);
    }

    isInitialLoad.current = false;
  }, [patientId]);

  // Save to sessionStorage whenever messages change (write-through cache)
  useEffect(() => {
    if (isInitialLoad.current || !patientId) return;

    try {
      if (messages.length > 0) {
        const completed = messages.filter(m =>
          m.role === 'user' || (m.role === 'assistant' && m.content)
        );
        if (completed.length > 0) {
          sessionStorage.setItem(`${SESSION_KEY_PREFIX}${patientId}`, JSON.stringify({
            messages: completed,
            sessionId,
            timestamp: Date.now()
          }));
        }
      } else {
        sessionStorage.removeItem(`${SESSION_KEY_PREFIX}${patientId}`);
      }
    } catch (e) {
      console.warn('[AI Chat] Failed to save session:', e);
    }
  }, [messages, patientId, sessionId]);

  // Auto-save to backend when streaming completes (status: streaming → ready)
  useEffect(() => {
    const wasStreaming = prevStatusRef.current === 'streaming';
    prevStatusRef.current = status;

    if (wasStreaming && status === 'ready' && sessionId && messages.length > 0 && onSaveComplete) {
      const completed = messages.filter(m =>
        m.role === 'user' || (m.role === 'assistant' && m.content)
      );
      if (completed.length > 0) {
        onSaveComplete({ sessionId, messages: completed });
      }
    }
  }, [status, sessionId, messages, onSaveComplete]);
}
