// Slide-in drawer showing chat history conversations
import { ChatHistoryItem } from './ChatHistoryItem.jsx';

export function ChatHistoryDrawer({ conversations, loading, activeConversationId, onSelect, onNewChat, onDelete, onClose }) {
  return (
    <div class="super-chat-history-drawer">
      <div class="super-chat-history-drawer__header">
        <span class="super-chat-history-drawer__title">Chat History</span>
        {/* NO_TRACK */}
        <button class="super-chat-history-drawer__close" onClick={onClose} title="Close history">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* onNewChat fires chat_session_cleared */}
      {/* NO_TRACK */}
      <button class="super-chat-history-drawer__new-btn" onClick={onNewChat}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        New Chat
      </button>

      <div class="super-chat-history-drawer__list">
        {loading && (
          <div class="super-chat-history-drawer__loading">Loading...</div>
        )}

        {!loading && conversations.length === 0 && (
          <div class="super-chat-history-drawer__empty">
            No previous conversations
          </div>
        )}

        {!loading && conversations.map(conv => (
          <ChatHistoryItem
            key={conv.id}
            conversation={conv}
            isActive={conv.id === activeConversationId}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
