import { ToolStep } from './ToolStep.jsx';
import { AnswerCard } from './AnswerCard.jsx';

export function AssistantMessage({ message }) {
  const parts = message.parts || [];
  const toolParts = parts.filter(p => p.type?.startsWith('tool-'));
  const textParts = parts.filter(p => p.type === 'text');
  const hasRunningTools = toolParts.some(p => p.status === 'running');

  // Get text content — from parts first, then from content string
  const textContent = textParts.length > 0
    ? textParts.map(p => p.content).join('')
    : message.content || '';

  // If no content at all yet, show loading indicator
  const hasContent = toolParts.length > 0 || textContent.trim();

  return (
    <div class="super-chat-message super-chat-message--assistant">
      {toolParts.length > 0 && (
        <div class="super-chat-tools-container">
          {toolParts.map(part => (
            <ToolStep key={part.toolCallId} part={part} />
          ))}
          {hasRunningTools && (
            <div class="super-chat-tools-progress">
              <span class="super-chat-tools-progress__spinner" />
              <span>Working...</span>
            </div>
          )}
        </div>
      )}

      {textContent.trim() && <AnswerCard content={textContent} />}

      {!hasContent && (
        <div class="super-chat-message__content super-chat-message__loading">
          <span class="super-chat-inline-loader">
            <span /><span /><span />
          </span>
        </div>
      )}
    </div>
  );
}
