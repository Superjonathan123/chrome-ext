import { useState } from 'preact/hooks';
import { getFriendlyToolName, getToolIcon, getSearchParamsDescription, getResultSummary } from '../lib/tool-helpers.js';
import { escapeHtml } from '../lib/format-markdown.js';

export function ToolStep({ part }) {
  const [expanded, setExpanded] = useState(false);

  const toolName = part.type.replace('tool-', '');
  const isThinking = toolName === 'think';
  const hasResult = part.output !== undefined && part.output !== null;
  const isRunning = part.status === 'running' && !hasResult;
  const displayName = getFriendlyToolName(toolName);
  const icon = getToolIcon(toolName);
  const summary = getSearchParamsDescription(toolName, part.input);
  const resultSummary = hasResult ? getResultSummary(toolName, part.output) : '';

  const statusClass = hasResult ? 'super-chat-tool__status--done' : 'super-chat-tool__status--loading';

  return (
    <div class={`super-chat-tool ${isThinking ? 'super-chat-tool--thinking' : ''} ${isRunning ? 'super-chat-tool--running' : ''} ${expanded ? 'super-chat-tool--expanded' : ''}`}>
      <div
        class="super-chat-tool__header"
        onClick={() => setExpanded(!expanded)}
      >
        <span class="super-chat-tool__icon">{icon}</span>
        <span class="super-chat-tool__name">{displayName}</span>
        {summary && <span class="super-chat-tool__summary">{summary}</span>}
        {resultSummary && !isRunning && (
          <span class="super-chat-tool__result-summary">{resultSummary}</span>
        )}
        <span class={`super-chat-tool__status ${statusClass}`}>
          {hasResult ? '\u2713' : isRunning ? (
            <span class="super-chat-tool__spinner" />
          ) : '\u23F7'}
        </span>
        <span class="super-chat-tool__toggle">{expanded ? '\u25B4' : '\u25BE'}</span>
      </div>

      {expanded && (
        <div class="super-chat-tool__body">
          {part.input && (
            <div class="super-chat-tool__section">
              <div class="super-chat-tool__section-label">
                {isThinking && part.input.thought ? 'Thought Process' : 'Parameters'}
              </div>
              <pre>{isThinking && part.input.thought
                ? escapeHtml(part.input.thought)
                : escapeHtml(JSON.stringify(part.input, null, 2))
              }</pre>
            </div>
          )}

          {hasResult && !isThinking && (
            <div class="super-chat-tool__section">
              <div class="super-chat-tool__section-label">Results</div>
              <pre>{escapeHtml(
                typeof part.output === 'string'
                  ? part.output
                  : JSON.stringify(part.output, null, 2)
              )}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
