import { useState, useRef, useEffect } from 'preact/hooks';

export function ChatInput({ onSend, status }) {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);
  const isReady = status === 'ready';

  // Auto-focus when status becomes ready
  useEffect(() => {
    if (isReady && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isReady]);

  const handleSubmit = () => {
    if (!text.trim() || !isReady) return;
    onSend(text.trim());
    setText('');
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInput = (e) => {
    setText(e.target.value);
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  const placeholder = isReady
    ? 'Ask me anything about this patient...'
    : status === 'submitted'
      ? 'Searching patient records...'
      : 'Generating response...';

  return (
    <div class="super-chat-input-container">
      <textarea
        ref={textareaRef}
        class="super-chat-input"
        value={text}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={!isReady}
        rows={1}
      />
      <button
        class="super-chat-send"
        onClick={handleSubmit}
        disabled={!isReady || !text.trim()}
        title="Send message"
      >
        {status !== 'ready' ? (
          <span class="super-chat-send__spinner" />
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        )}
      </button>
    </div>
  );
}
