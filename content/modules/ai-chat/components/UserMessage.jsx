import { escapeHtml } from '../lib/format-markdown.js';

export function UserMessage({ content }) {
  return (
    <div class="super-chat-message super-chat-message--user">
      <div
        class="super-chat-message__content"
        dangerouslySetInnerHTML={{ __html: escapeHtml(content) }}
      />
    </div>
  );
}
