import { useState, useEffect, useCallback } from 'preact/hooks';
import { useChat } from './hooks/useChat.js';
import { useChatSession } from './hooks/useChatSession.js';
import { useChatHistory } from './hooks/useChatHistory.js';
import { MessageList } from './components/MessageList.jsx';
import { ChatInput } from './components/ChatInput.jsx';
import { ChatHistoryDrawer } from './components/ChatHistoryDrawer.jsx';

export function AIChatOverlay({ patientId, onClose }) {
  const { messages, status, error, sessionId, send, clear, stop, setMessages, loadSession } = useChat(patientId);
  const [showHistory, setShowHistory] = useState(false);

  const {
    sessions, loading: historyLoading, activeSessionId, setActiveSessionId,
    startNewSession, selectSession, saveSession, removeSession
  } = useChatHistory(patientId);

  // Wire session persistence — auto-save to backend when streaming completes
  const handleSaveComplete = useCallback(({ sessionId: sid, messages: msgs }) => {
    saveSession({ sessionId: sid, messages: msgs });
  }, [saveSession]);

  useChatSession(patientId, messages, setMessages, {
    sessionId,
    status,
    onSaveComplete: handleSaveComplete
  });

  // Keep history's activeSessionId in sync
  useEffect(() => {
    setActiveSessionId(sessionId);
  }, [sessionId]);

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (showHistory) {
          setShowHistory(false);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, showHistory]);

  const handleNewChat = useCallback(() => {
    clear();
    setShowHistory(false);
  }, [clear]);

  const handleSelectSession = useCallback((sid) => {
    const session = selectSession(sid);
    if (session?.messages) {
      loadSession(sid, session.messages);
    }
    setShowHistory(false);
  }, [selectSession, loadSession]);

  const handleDeleteSession = useCallback(async (sid) => {
    await removeSession(sid);
    // If deleting the active session, start fresh
    if (sid === sessionId) {
      clear();
    }
  }, [removeSession, sessionId, clear]);

  const handleSuggestionClick = useCallback((suggestion) => {
    send(suggestion);
  }, [send]);

  const toggleHistory = useCallback(() => {
    setShowHistory(prev => !prev);
  }, []);

  return (
    <div class="super-chat-overlay">
      <div class="super-chat-overlay__backdrop" onClick={onClose} />
      <div class="super-chat-overlay__panel">
        {/* Header */}
        <div class="super-chat-overlay__header">
          <div class="super-chat-overlay__header-left">
            <span class="super-chat-overlay__header-icon">{'\u2728'}</span>
            <span class="super-chat-overlay__header-title">AI Assistant</span>
          </div>
          <div class="super-chat-overlay__header-actions">
            <button
              class={`super-chat-overlay__header-btn ${showHistory ? 'super-chat-overlay__header-btn--active' : ''}`}
              onClick={toggleHistory}
              title="Chat History"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </button>
            <button
              class="super-chat-overlay__header-btn"
              onClick={handleNewChat}
              title="New Chat"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button
              class="super-chat-overlay__header-btn"
              onClick={onClose}
              title="Close"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Error banner */}
        {error && (
          <div class="super-chat-overlay__error">
            <span>{'\u26A0'}</span>
            <span>{error}</span>
          </div>
        )}

        {/* History drawer (overlays the message area) */}
        {showHistory && (
          <ChatHistoryDrawer
            sessions={sessions}
            loading={historyLoading}
            activeSessionId={activeSessionId}
            onSelect={handleSelectSession}
            onNewChat={handleNewChat}
            onDelete={handleDeleteSession}
            onClose={() => setShowHistory(false)}
          />
        )}

        {/* Messages */}
        <MessageList
          messages={messages}
          status={status}
          onSuggestionClick={handleSuggestionClick}
        />

        {/* Input */}
        <ChatInput onSend={send} status={status} />
      </div>
    </div>
  );
}
