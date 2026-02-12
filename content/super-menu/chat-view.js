// Super Menu Chat View

function renderChatMessages() {
  const container = document.getElementById('super-chat-messages');
  if (!container) return;

  if (SuperChat.messages.length === 0) {
    container.innerHTML = `
      <div class="super-chat-empty">
        <div class="super-chat-empty__icon">&#10024;</div>
        <div class="super-chat-empty__title">Hi, I'm your AI assistant</div>
        <div class="super-chat-empty__text">I can search medications, labs, vitals, clinical notes, and help you find information about this patient.</div>
      </div>
    `;
    return;
  }

  // Full rebuild - used for initial render and after streaming completes
  container.innerHTML = SuperChat.messages.map((msg, idx) => {
    const isStreaming = SuperChat.status === 'streaming' && idx === SuperChat.messages.length - 1;
    return renderMessage(msg, isStreaming ? 'streaming-message' : null);
  }).join('');

  // Add typing indicator if waiting for response
  if (SuperChat.status === 'submitted') {
    container.innerHTML += `
      <div class="super-chat-message super-chat-message--assistant" id="typing-indicator">
        <div class="super-chat-typing">
          <div class="super-chat-typing__dots">
            <div class="super-chat-typing__dot"></div>
            <div class="super-chat-typing__dot"></div>
            <div class="super-chat-typing__dot"></div>
          </div>
          <span>Analyzing patient data...</span>
        </div>
      </div>
    `;
  }

  setupToolToggleListeners(container);
  scrollToBottom();
}

// Efficient update for streaming - only updates the last message
function updateStreamingMessage() {
  const container = document.getElementById('super-chat-messages');
  if (!container) return;

  // Remove typing indicator if present
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) {
    typingIndicator.remove();
  }

  // Find or create the streaming message element
  let streamingEl = document.getElementById('streaming-message');
  const lastMessage = SuperChat.messages[SuperChat.messages.length - 1];

  if (!lastMessage || lastMessage.role !== 'assistant') return;

  if (!streamingEl) {
    // Create new streaming message element
    streamingEl = document.createElement('div');
    streamingEl.id = 'streaming-message';
    streamingEl.className = 'super-chat-message super-chat-message--assistant';
    container.appendChild(streamingEl);
  }

  // Update only this element's content
  streamingEl.innerHTML = renderAssistantContent(lastMessage);
  setupToolToggleListeners(streamingEl);
  scrollToBottom();
}

function setupToolToggleListeners(container) {
  container.querySelectorAll('.super-chat-tool__header').forEach(header => {
    // Remove existing listener to avoid duplicates
    const newHeader = header.cloneNode(true);
    header.parentNode.replaceChild(newHeader, header);
    newHeader.addEventListener('click', () => {
      newHeader.parentElement.classList.toggle('super-chat-tool--expanded');
    });
  });
}

function renderMessage(message, id = null) {
  const idAttr = id ? ` id="${id}"` : '';

  if (message.role === 'user') {
    return `
      <div class="super-chat-message super-chat-message--user"${idAttr}>
        <div class="super-chat-message__content">${escapeHtml(message.content)}</div>
      </div>
    `;
  }

  // Assistant message
  return `
    <div class="super-chat-message super-chat-message--assistant"${idAttr}>
      ${renderAssistantContent(message)}
    </div>
  `;
}

function renderAssistantContent(message) {
  const parts = message.parts || [];
  let html = '';

  // Render tool calls first
  const toolParts = parts.filter(p => p.type && p.type.startsWith('tool-'));
  const hasRunningTools = toolParts.some(p => p.status === 'running');

  if (toolParts.length > 0) {
    html += '<div class="super-chat-tools-container">';
    html += toolParts.map(renderToolCall).join('');

    // Show progress indicator if any tools are still running
    if (hasRunningTools) {
      html += `<div class="super-chat-tools-progress">
        <span class="super-chat-tools-progress__spinner"></span>
        <span>Working...</span>
      </div>`;
    }
    html += '</div>';
  }

  // Render text content
  const textParts = parts.filter(p => p.type === 'text');
  if (textParts.length > 0) {
    const textContent = textParts.map(p => p.content).join('');
    if (textContent.trim()) {
      html += `<div class="super-chat-message__content">${formatMarkdown(textContent)}</div>`;
    }
  } else if (message.content && message.content.trim()) {
    html += `<div class="super-chat-message__content">${formatMarkdown(message.content)}</div>`;
  }

  // If we have tool calls but no text yet, don't show anything extra (tools container handles it)
  // If we have nothing at all, show a minimal loading indicator
  if (!html) {
    return `<div class="super-chat-message__content super-chat-message__loading">
      <span class="super-chat-inline-loader">
        <span></span><span></span><span></span>
      </span>
    </div>`;
  }

  return html;
}

function renderToolCall(part) {
  const toolName = part.type.replace('tool-', '');
  const isThinking = toolName === 'think';
  const hasResult = part.output !== undefined && part.output !== null;
  const displayName = isThinking ? 'Reasoning' : formatToolName(toolName);
  const isRunning = part.status === 'running' && !hasResult;

  // Create a friendly summary of what's being searched
  const summary = getToolSummary(toolName, part.input);

  // Get appropriate icon for tool type
  const toolIcon = getToolIcon(toolName);

  let inputDisplay = '';
  if (part.input) {
    if (isThinking && part.input.thought) {
      inputDisplay = `<div class="super-chat-tool__section">
        <div class="super-chat-tool__section-label">Thought Process</div>
        <pre>${escapeHtml(part.input.thought)}</pre>
      </div>`;
    } else {
      inputDisplay = `<div class="super-chat-tool__section">
        <div class="super-chat-tool__section-label">Parameters</div>
        <pre>${escapeHtml(JSON.stringify(part.input, null, 2))}</pre>
      </div>`;
    }
  }

  let outputDisplay = '';
  if (hasResult && !isThinking) {
    const outputStr = typeof part.output === 'string'
      ? part.output
      : JSON.stringify(part.output, null, 2);
    outputDisplay = `<div class="super-chat-tool__section">
      <div class="super-chat-tool__section-label">Results</div>
      <pre>${escapeHtml(outputStr)}</pre>
    </div>`;
  }

  // Status indicator
  const statusClass = hasResult ? 'super-chat-tool__status--done' : 'super-chat-tool__status--loading';
  const statusIcon = hasResult ? '&#10003;' : (isRunning ? '<span class="super-chat-tool__spinner"></span>' : '&#8987;');

  return `
    <div class="super-chat-tool ${isThinking ? 'super-chat-tool--thinking' : ''} ${isRunning ? 'super-chat-tool--running' : ''}">
      <div class="super-chat-tool__header">
        <span class="super-chat-tool__icon">${toolIcon}</span>
        <span class="super-chat-tool__name">${displayName}</span>
        ${summary ? `<span class="super-chat-tool__summary">${escapeHtml(summary)}</span>` : ''}
        <span class="super-chat-tool__status ${statusClass}">
          ${statusIcon}
        </span>
        <span class="super-chat-tool__toggle">&#9662;</span>
      </div>
      <div class="super-chat-tool__body">
        ${inputDisplay}
        ${outputDisplay}
      </div>
    </div>
  `;
}

function scrollToBottom() {
  const container = document.getElementById('super-chat-messages');
  if (container) {
    // Use smooth scrolling for better UX
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth'
    });
  }
}

function updateInputState() {
  const input = document.getElementById('super-chat-input');
  const sendBtn = document.getElementById('super-chat-send');

  if (input && sendBtn) {
    const isReady = SuperChat.status === 'ready';
    input.disabled = !isReady;
    sendBtn.disabled = !isReady || !input.value.trim();

    // Dynamic placeholder based on state
    if (isReady) {
      input.placeholder = 'Ask me anything about this patient...';
    } else if (SuperChat.status === 'submitted') {
      input.placeholder = 'Searching patient records...';
    } else {
      input.placeholder = 'Generating response...';
    }
  }
}

function showChatError(errorMessage) {
  const container = document.getElementById('super-chat-messages');
  if (!container) return;

  // Remove existing error
  container.querySelectorAll('.super-chat-error').forEach(el => el.remove());

  const errorDiv = document.createElement('div');
  errorDiv.className = 'super-chat-error';
  errorDiv.innerHTML = `
    <span class="super-chat-error__icon">&#9888;</span>
    <span class="super-chat-error__text">${escapeHtml(errorMessage)}</span>
  `;
  container.appendChild(errorDiv);
  scrollToBottom();
}

// Make available globally for cross-file access
window.renderChatMessages = renderChatMessages;
window.updateStreamingMessage = updateStreamingMessage;
window.updateInputState = updateInputState;
window.scrollToBottom = scrollToBottom;
window.showChatError = showChatError;
