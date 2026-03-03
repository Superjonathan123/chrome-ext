import { formatMarkdown } from '../lib/format-markdown.js';

export function AnswerCard({ content }) {
  if (!content?.trim()) return null;

  return (
    <div
      class="super-chat-message__content"
      dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
    />
  );
}
