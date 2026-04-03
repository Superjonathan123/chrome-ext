// Session persistence hook — local sessionStorage cache for fast restore
// Backend persistence (save messages, title gen) is now handled in useChat.js
import { useEffect, useRef } from 'preact/hooks';

const SESSION_KEY = 'super-chat-v3';

export function useChatSession(conversationId, messages, setMessages) {
  const isInitialLoad = useRef(true);

  // Load from sessionStorage cache on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.messages?.length > 0) {
          setMessages(data.messages);
        }
      }
    } catch (e) {
      console.warn('[AI Chat] Failed to load session cache:', e);
    }

    isInitialLoad.current = false;
  }, []);

  // Write-through cache whenever messages change
  useEffect(() => {
    if (isInitialLoad.current) return;

    try {
      if (messages.length > 0) {
        const completed = messages.filter(m =>
          m.role === 'user' || (m.role === 'assistant' && m.content)
        );
        if (completed.length > 0) {
          sessionStorage.setItem(SESSION_KEY, JSON.stringify({
            messages: completed,
            conversationId,
            timestamp: Date.now()
          }));
        }
      } else {
        sessionStorage.removeItem(SESSION_KEY);
      }
    } catch (e) {
      console.warn('[AI Chat] Failed to save session cache:', e);
    }
  }, [messages, conversationId]);
}
