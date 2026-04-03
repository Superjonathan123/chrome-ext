// Single conversation row in the chat history drawer
import { useCallback } from 'preact/hooks';

function formatRelativeDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function ChatHistoryItem({ conversation, isActive, onSelect, onDelete }) {
  const handleDelete = useCallback((e) => {
    e.stopPropagation();
    onDelete(conversation.id);
  }, [conversation.id, onDelete]);

  return (
    <button
      class={`super-chat-history-item ${isActive ? 'super-chat-history-item--active' : ''}`}
      onClick={() => onSelect(conversation.id)}
      title={conversation.title}
    >
      <div class="super-chat-history-item__content">
        <div class="super-chat-history-item__title">{conversation.title}</div>
        <div class="super-chat-history-item__meta">
          {formatRelativeDate(conversation.updatedAt || conversation.createdAt)}
          {conversation.scope && (
            <span> · {conversation.scope}</span>
          )}
        </div>
      </div>
      <button
        class="super-chat-history-item__delete"
        onClick={handleDelete}
        title="Delete conversation"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </button>
  );
}
