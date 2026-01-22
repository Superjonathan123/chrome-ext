// Super Menu Streaming Communication

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
