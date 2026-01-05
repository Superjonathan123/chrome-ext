// Super LTC AI Chatbot for Chrome Extension
// Self-contained module for patient-specific AI chat

// ============================================
// State Management
// ============================================
const SuperChat = {
  isOpen: false,
  patientId: null,
  messages: [],
  status: 'ready', // ready | submitted | streaming
  streamingPort: null,
  currentAssistantMessage: null,
  initialized: false
};

// ============================================
// Patient ID Detection
// ============================================
function getChatPatientId() {
  const url = new URL(window.location.href);
  return url.searchParams.get('ESOLclientid');
}

// ============================================
// Session Storage
// ============================================
function saveChatSession() {
  const patientId = getChatPatientId();
  if (!patientId) return;

  try {
    sessionStorage.setItem(`super-chat-${patientId}`, JSON.stringify({
      messages: SuperChat.messages,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.warn('Super LTC Chat: Failed to save session:', e);
  }
}

function loadChatSession() {
  const patientId = getChatPatientId();
  if (!patientId) return false;

  // Clear if patient changed
  if (SuperChat.patientId && SuperChat.patientId !== patientId) {
    SuperChat.messages = [];
    SuperChat.patientId = patientId;
    return false;
  }

  try {
    const saved = sessionStorage.getItem(`super-chat-${patientId}`);
    if (saved) {
      const data = JSON.parse(saved);
      SuperChat.messages = data.messages || [];
      SuperChat.patientId = patientId;
      return true;
    }
  } catch (e) {
    console.warn('Super LTC Chat: Failed to load session:', e);
  }

  SuperChat.patientId = patientId;
  return false;
}

function clearChatSession() {
  const patientId = getChatPatientId();
  if (patientId) {
    sessionStorage.removeItem(`super-chat-${patientId}`);
  }

  // Disconnect any active streaming port
  if (SuperChat.streamingPort) {
    try {
      SuperChat.streamingPort.disconnect();
    } catch (e) {
      // Port already disconnected
    }
  }

  // Reset all state
  SuperChat.messages = [];
  SuperChat.status = 'ready';
  SuperChat.streamingPort = null;
  SuperChat.currentAssistantMessage = null;

  // Update UI
  renderChatMessages();
  updateInputState();
}

// ============================================
// UI Creation - Chat Button (FAB)
// ============================================
function createChatButton() {
  if (document.getElementById('super-chat-button')) return;

  const button = document.createElement('button');
  button.id = 'super-chat-button';
  button.className = 'super-chat-fab';
  button.setAttribute('aria-label', 'Open AI Assistant');
  button.innerHTML = `
    <svg class="super-chat-fab__icon super-chat-fab__icon--chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
    <svg class="super-chat-fab__icon super-chat-fab__icon--close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;

  button.addEventListener('click', toggleChatPanel);
  document.body.appendChild(button);
}

// ============================================
// UI Creation - Chat Panel
// ============================================
function createChatPanel() {
  if (document.getElementById('super-chat-panel')) return;

  const panel = document.createElement('div');
  panel.id = 'super-chat-panel';
  panel.className = 'super-chat-panel';
  panel.innerHTML = `
    <div class="super-chat-header">
      <div class="super-chat-header__title">
        <div class="super-chat-header__logo">S</div>
        Super Assistant
      </div>
      <div class="super-chat-header__actions">
        <button class="super-chat-header__btn" id="super-chat-clear" title="Clear chat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
        <button class="super-chat-header__btn" id="super-chat-close" title="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="super-chat-messages" id="super-chat-messages"></div>
    <div class="super-chat-input-area">
      <textarea
        class="super-chat-input"
        id="super-chat-input"
        placeholder="Ask about this patient..."
        rows="1"
      ></textarea>
      <button class="super-chat-send" id="super-chat-send" disabled>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(panel);
  setupChatPanelListeners();
}

function setupChatPanelListeners() {
  const input = document.getElementById('super-chat-input');
  const sendBtn = document.getElementById('super-chat-send');
  const clearBtn = document.getElementById('super-chat-clear');
  const closeBtn = document.getElementById('super-chat-close');

  // Auto-resize textarea
  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    sendBtn.disabled = !input.value.trim() || SuperChat.status !== 'ready';
  });

  // Send on Enter (Shift+Enter for newline)
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (input.value.trim() && SuperChat.status === 'ready') {
        sendChatMessage(input.value.trim());
        input.value = '';
        input.style.height = 'auto';
        sendBtn.disabled = true;
      }
    }
  });

  // Send button click
  sendBtn.addEventListener('click', () => {
    if (input.value.trim() && SuperChat.status === 'ready') {
      sendChatMessage(input.value.trim());
      input.value = '';
      input.style.height = 'auto';
      sendBtn.disabled = true;
    }
  });

  // Clear chat
  clearBtn.addEventListener('click', () => {
    if (confirm('Clear chat history?')) {
      clearChatSession();
    }
  });

  // Close panel
  closeBtn.addEventListener('click', () => {
    toggleChatPanel();
  });
}

function toggleChatPanel() {
  SuperChat.isOpen = !SuperChat.isOpen;

  const panel = document.getElementById('super-chat-panel');
  const button = document.getElementById('super-chat-button');

  if (SuperChat.isOpen) {
    panel.classList.add('super-chat-panel--open');
    button.classList.add('super-chat-fab--open');
    document.getElementById('super-chat-input').focus();
    scrollToBottom();
  } else {
    panel.classList.remove('super-chat-panel--open');
    button.classList.remove('super-chat-fab--open');
  }
}

// ============================================
// Message Rendering
// ============================================
function renderChatMessages() {
  const container = document.getElementById('super-chat-messages');
  if (!container) return;

  if (SuperChat.messages.length === 0) {
    container.innerHTML = `
      <div class="super-chat-empty">
        <div class="super-chat-empty__icon">&#128172;</div>
        <div class="super-chat-empty__title">Ask me anything</div>
        <div class="super-chat-empty__text">I can search this patient's medications, vitals, clinical notes, and more.</div>
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
          <span>Thinking...</span>
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
  if (toolParts.length > 0) {
    html += toolParts.map(renderToolCall).join('');
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

  return html || '<div class="super-chat-message__content">...</div>';
}

function renderToolCall(part) {
  const toolName = part.type.replace('tool-', '');
  const isThinking = toolName === 'think';
  const hasResult = part.output !== undefined && part.output !== null;
  const displayName = isThinking ? 'Thinking' : formatToolName(toolName);
  const isRunning = part.status === 'running' && !hasResult;

  // Create a friendly summary of what's being searched
  const summary = getToolSummary(toolName, part.input);

  let inputDisplay = '';
  if (part.input) {
    if (isThinking && part.input.thought) {
      inputDisplay = `<div class="super-chat-tool__section">
        <div class="super-chat-tool__section-label">Thought</div>
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
      <div class="super-chat-tool__section-label">Result</div>
      <pre>${escapeHtml(outputStr)}</pre>
    </div>`;
  }

  // Status indicator
  const statusClass = hasResult ? 'super-chat-tool__status--done' : 'super-chat-tool__status--loading';
  const statusIcon = hasResult ? '&#10003;' : (isRunning ? '<span class="super-chat-tool__spinner"></span>' : '&#8987;');

  return `
    <div class="super-chat-tool ${isThinking ? 'super-chat-tool--thinking' : ''} ${isRunning ? 'super-chat-tool--running' : ''}">
      <div class="super-chat-tool__header">
        <span class="super-chat-tool__icon">${isThinking ? '&#128161;' : '&#128269;'}</span>
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

// Generate a friendly summary of what the tool is doing
function getToolSummary(toolName, input) {
  if (!input) return '';

  switch (toolName) {
    case 'searchVitals':
      return input.vitalType ? `"${input.vitalType}"` : '';
    case 'searchLabs':
      return input.keyword ? `"${input.keyword}"` : '';
    case 'searchMedications':
    case 'searchOrders':
      return input.keyword ? `"${input.keyword}"` : '';
    case 'searchClinicalNotes':
      return input.keyword ? `"${input.keyword}"` : (input.noteType ? input.noteType : '');
    case 'searchDocuments':
      return input.keyword ? `"${input.keyword}"` : '';
    case 'getPatientContext':
      return 'diagnoses';
    case 'readDocument':
      return input.documentId ? `doc #${input.documentId}` : '';
    case 'searchSemantically':
      return input.query ? `"${input.query.slice(0, 30)}..."` : '';
    default:
      // Try to find a keyword or query in the input
      if (input.keyword) return `"${input.keyword}"`;
      if (input.query) return `"${input.query.slice(0, 30)}..."`;
      return '';
  }
}

function formatToolName(name) {
  // Convert camelCase to Title Case with spaces
  return name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

function formatMarkdown(text) {
  if (!text) return '';

  // Basic markdown formatting
  return text
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Lists (basic)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    // Clean up multiple consecutive br tags
    .replace(/(<br>)+/g, '<br>');
}

function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function scrollToBottom() {
  const container = document.getElementById('super-chat-messages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

// ============================================
// Context Helpers
// ============================================
function getChatFacilityInfo() {
  const facLink = document.getElementById('pccFacLink');
  if (facLink) {
    return facLink.title || facLink.textContent?.trim() || null;
  }
  return null;
}

// ============================================
// Streaming Communication
// ============================================
async function sendChatMessage(userMessage) {
  if (SuperChat.status !== 'ready') return;

  const patientId = getChatPatientId();
  if (!patientId) {
    console.error('Super LTC Chat: No patient ID');
    return;
  }

  // Check auth first
  const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
  if (!authState.authenticated) {
    showChatError('Please log in to use the AI assistant.');
    return;
  }

  // Get org and facility for API call
  const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
  const orgSlug = orgResponse?.org;
  const facilityName = getChatFacilityInfo();

  if (!orgSlug || !facilityName) {
    console.warn('Super LTC Chat: Missing org or facility', { orgSlug, facilityName });
  }

  // Add user message
  SuperChat.messages.push({ role: 'user', content: userMessage });

  // Create assistant message placeholder
  const assistantMessage = {
    role: 'assistant',
    content: '',
    parts: []
  };
  SuperChat.messages.push(assistantMessage);
  SuperChat.currentAssistantMessage = assistantMessage;

  SuperChat.status = 'submitted';
  renderChatMessages();
  updateInputState();

  // Start streaming via port
  const port = chrome.runtime.connect({ name: 'chat-stream' });
  SuperChat.streamingPort = port;

  let buffer = '';

  port.onMessage.addListener((msg) => {
    if (msg.type === 'CHUNK') {
      buffer += msg.data;
      const { parsed, remaining } = parseStreamBuffer(buffer);
      buffer = remaining;

      parsed.forEach(event => {
        processStreamEvent(event, assistantMessage);
      });

      SuperChat.status = 'streaming';
      // Use efficient update during streaming - only update the last message
      updateStreamingMessage();
    }

    if (msg.type === 'DONE') {
      SuperChat.status = 'ready';
      SuperChat.streamingPort = null;
      SuperChat.currentAssistantMessage = null;
      saveChatSession();
      updateInputState();
      // Full re-render after streaming completes to clean up IDs
      renderChatMessages();
    }

    if (msg.type === 'ERROR') {
      SuperChat.status = 'ready';
      SuperChat.streamingPort = null;
      SuperChat.currentAssistantMessage = null;
      // Remove the empty assistant message
      if (SuperChat.messages.length > 0 &&
          SuperChat.messages[SuperChat.messages.length - 1].role === 'assistant' &&
          !SuperChat.messages[SuperChat.messages.length - 1].content) {
        SuperChat.messages.pop();
      }
      showChatError(msg.error);
      updateInputState();
      renderChatMessages();
    }
  });

  port.onDisconnect.addListener(() => {
    if (SuperChat.status !== 'ready') {
      SuperChat.status = 'ready';
      SuperChat.streamingPort = null;
      updateInputState();
    }
  });

  // Prepare messages for API (without the empty placeholder)
  const messagesToSend = SuperChat.messages.slice(0, -1).map(m => ({
    role: m.role,
    content: m.content
  }));

  port.postMessage({
    type: 'START_STREAM',
    patientId,
    orgSlug,
    facilityName,
    messages: messagesToSend
  });
}

function parseStreamBuffer(buffer) {
  const lines = buffer.split('\n');
  const parsed = [];
  let remaining = '';

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // Incomplete line at end
    if (i === lines.length - 1 && !buffer.endsWith('\n') && line) {
      remaining = lines[i];
      continue;
    }

    if (!line) continue;

    // Handle [DONE] marker
    if (line === '[DONE]' || line === 'message\t[DONE]') {
      parsed.push({ type: 'done' });
      continue;
    }

    // Handle SSE format: "message\t{json}" or "message {json}"
    if (line.startsWith('message')) {
      // Remove "message" prefix and any whitespace/tab
      line = line.replace(/^message[\t\s]+/, '');
    }

    // Also handle "data:" prefix (standard SSE)
    if (line.startsWith('data:')) {
      line = line.slice(5).trim();
    }

    // Skip if line is now empty or just whitespace
    if (!line) continue;

    // Parse JSON objects
    try {
      const json = JSON.parse(line);
      parsed.push(json);
    } catch {
      // Not valid JSON, log for debugging
      console.warn('Super LTC Chat: Failed to parse line:', line);
    }
  }

  return { parsed, remaining };
}

function processStreamEvent(event, message) {
  const eventType = event.type;

  switch (eventType) {
    case 'text-delta':
      // Append text delta to content
      const delta = event.delta || '';
      message.content += delta;

      // Add or update text part
      const lastPart = message.parts[message.parts.length - 1];
      if (lastPart && lastPart.type === 'text') {
        lastPart.content += delta;
      } else {
        message.parts.push({ type: 'text', content: delta });
      }
      break;

    case 'text-end':
      // Text streaming complete for this message
      break;

    case 'tool-input-delta':
      // Incremental tool input - could accumulate if needed
      break;

    case 'tool-input-available':
      // Tool call with full input available - show it immediately
      if (event.toolName) {
        // Check if we already have this tool call (from tool-call event)
        let existingTool = message.parts.find(p => p.toolCallId === event.toolCallId);
        if (!existingTool) {
          message.parts.push({
            type: `tool-${event.toolName}`,
            toolCallId: event.toolCallId,
            input: event.input,
            output: null,
            status: 'running'
          });
        } else {
          existingTool.input = event.input;
          existingTool.status = 'running';
        }
      }
      break;

    case 'tool-output-available':
      // Tool call result ready
      if (event.toolCallId) {
        const toolPart = message.parts.find(
          p => p.toolCallId === event.toolCallId
        );
        if (toolPart) {
          toolPart.output = event.output;
          toolPart.status = 'done';
        }
      }
      break;

    case 'tool-call':
      // Legacy: Tool call started
      if (event.toolName) {
        message.parts.push({
          type: `tool-${event.toolName}`,
          toolCallId: event.toolCallId,
          input: event.args,
          output: null,
          status: 'running'
        });
      }
      break;

    case 'tool-result':
      // Legacy: Tool call completed
      if (event.toolCallId) {
        const toolPart = message.parts.find(
          p => p.toolCallId === event.toolCallId
        );
        if (toolPart) {
          toolPart.output = event.result;
          toolPart.status = 'done';
        }
      }
      break;

    case 'start-step':
      // New agent step starting
      break;

    case 'finish-step':
      // A step in the agent finished
      break;

    case 'reasoning-start':
      // Model is reasoning (could show a thinking indicator)
      break;

    case 'finish':
      // Stream complete - could extract metadata here if needed
      break;

    case 'done':
      // [DONE] marker
      break;

    default:
      // Unknown event type, log for debugging
      console.log('Super LTC Chat: Unknown event type:', eventType, event);
      break;
  }
}

function updateInputState() {
  const input = document.getElementById('super-chat-input');
  const sendBtn = document.getElementById('super-chat-send');

  if (input && sendBtn) {
    const isReady = SuperChat.status === 'ready';
    input.disabled = !isReady;
    sendBtn.disabled = !isReady || !input.value.trim();
    input.placeholder = isReady ? 'Ask about this patient...' : 'Waiting for response...';
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

// ============================================
// Initialization
// ============================================
function initSuperChat() {
  const patientId = getChatPatientId();

  if (!patientId) {
    console.log('Super LTC Chat: No patient ID found, skipping initialization');
    return;
  }

  if (SuperChat.initialized) {
    console.log('Super LTC Chat: Already initialized');
    return;
  }

  console.log('Super LTC Chat: Initializing for patient', patientId);

  // Load existing session
  loadChatSession();

  // Create UI
  createChatButton();
  createChatPanel();

  // Render any existing messages
  renderChatMessages();

  SuperChat.initialized = true;
  console.log('Super LTC Chat: Initialization complete');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initSuperChat, 500);
  });
} else {
  setTimeout(initSuperChat, 500);
}

// Re-check on URL changes (SPA navigation)
let chatLastUrl = window.location.href;
const chatUrlObserver = new MutationObserver(() => {
  if (window.location.href !== chatLastUrl) {
    chatLastUrl = window.location.href;
    SuperChat.initialized = false;

    // Remove existing UI
    document.getElementById('super-chat-button')?.remove();
    document.getElementById('super-chat-panel')?.remove();

    // Re-initialize after short delay
    setTimeout(initSuperChat, 500);
  }
});

chatUrlObserver.observe(document.body, { childList: true, subtree: true });
