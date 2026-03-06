import { useAutoScroll } from '../hooks/useAutoScroll.js';
import { UserMessage } from './UserMessage.jsx';
import { AssistantMessage } from './AssistantMessage.jsx';
import { EmptyState } from './EmptyState.jsx';

export function MessageList({ messages, status, onSuggestionClick }) {
  const { containerRef, handleScroll } = useAutoScroll(messages, status);

  if (messages.length === 0) {
    return (
      <div class="super-chat-messages" ref={containerRef}>
        <EmptyState onSuggestionClick={onSuggestionClick} />
      </div>
    );
  }

  return (
    <div class="super-chat-messages" ref={containerRef} onScroll={handleScroll}>
      {messages.map((msg, idx) => (
        msg.role === 'user'
          ? <UserMessage key={idx} content={msg.content} />
          : <AssistantMessage key={idx} message={msg} />
      ))}

      {status === 'submitted' && (
        <div class="super-chat-message super-chat-message--assistant">
          <div class="super-chat-typing">
            <div class="super-chat-typing__dots">
              <div class="super-chat-typing__dot" />
              <div class="super-chat-typing__dot" />
              <div class="super-chat-typing__dot" />
            </div>
            <span>Analyzing patient data...</span>
          </div>
        </div>
      )}
    </div>
  );
}
