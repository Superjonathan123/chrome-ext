import { useState, useEffect, useCallback } from 'preact/hooks';
import { useChat } from './hooks/useChat.js';
import { useChatSession } from './hooks/useChatSession.js';
import { useChatHistory } from './hooks/useChatHistory.js';
import { MessageList } from './components/MessageList.jsx';
import { ChatInput } from './components/ChatInput.jsx';
import { ChatHistoryDrawer } from './components/ChatHistoryDrawer.jsx';
import { track } from '../../utils/analytics.js';

export function AIChatOverlay({ onClose }) {
  const { messages, status, error, conversationId, send, clear, stop, setMessages, loadConversation } = useChat();
  const [showHistory, setShowHistory] = useState(false);

  // Mount-only open event. AI chat overlay is launched from the FAB.
  // The async funnel (chat_stream_*) is deferred to Task 22.
  useEffect(() => {
    track('chat_opened', { source: 'fab' });
  }, []);

  const {
    conversations, loading: historyLoading,
    loadHistory, selectConversation, removeConversation
  } = useChatHistory();

  // Local sessionStorage cache (fast restore on reopen)
  useChatSession(conversationId, messages, setMessages);

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
    track('chat_session_cleared');
    clear();
    setShowHistory(false);
  }, [clear]);

  const handleSelectConversation = useCallback(async (convId) => {
    const data = await selectConversation(convId);
    if (data?.conversation && data?.messages) {
      loadConversation(data.conversation.id, data.messages);
    }
    setShowHistory(false);
  }, [selectConversation, loadConversation]);

  const handleDeleteConversation = useCallback(async (convId) => {
    await removeConversation(convId);
    if (convId === conversationId) {
      clear();
    }
  }, [removeConversation, conversationId, clear]);

  const handleSuggestionClick = useCallback((suggestion) => {
    send(suggestion);
  }, [send]);

  const toggleHistory = useCallback(() => {
    setShowHistory(prev => {
      if (!prev) loadHistory(); // Refresh list when opening
      return !prev;
    });
  }, [loadHistory]);

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
            {/* NO_TRACK */}
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
            {/* handleNewChat fires chat_session_cleared explicitly */}
            {/* NO_TRACK */}
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
            {/* NO_TRACK */}
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
            conversations={conversations}
            loading={historyLoading}
            activeConversationId={conversationId}
            onSelect={handleSelectConversation}
            onNewChat={handleNewChat}
            onDelete={handleDeleteConversation}
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
