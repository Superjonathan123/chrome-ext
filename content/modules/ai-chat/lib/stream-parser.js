// Stream parser — extracted from streaming.js for reuse
// Pure functions with zero framework dependency

export function parseStreamBuffer(buffer) {
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
      line = line.replace(/^message[\t\s]+/, '');
    }

    // Also handle "data:" prefix (standard SSE)
    if (line.startsWith('data:')) {
      line = line.slice(5).trim();
    }

    if (!line) continue;

    try {
      const json = JSON.parse(line);
      parsed.push(json);
    } catch {
      console.warn('Super LTC Chat: Failed to parse line:', line);
    }
  }

  return { parsed, remaining };
}

export function processStreamEvent(event, message) {
  const eventType = event.type;

  switch (eventType) {
    case 'text-delta': {
      const delta = event.delta || '';
      message.content += delta;

      const lastPart = message.parts[message.parts.length - 1];
      if (lastPart && lastPart.type === 'text') {
        lastPart.content += delta;
      } else {
        message.parts.push({ type: 'text', content: delta });
      }
      break;
    }

    case 'text-end':
    case 'tool-input-delta':
      break;

    case 'tool-input-available':
      if (event.toolName) {
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
      if (event.toolCallId) {
        const toolPart = message.parts.find(p => p.toolCallId === event.toolCallId);
        if (toolPart) {
          toolPart.output = event.output;
          toolPart.status = 'done';
        }
      }
      break;

    case 'tool-call':
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
      if (event.toolCallId) {
        const toolPart = message.parts.find(p => p.toolCallId === event.toolCallId);
        if (toolPart) {
          toolPart.output = event.result;
          toolPart.status = 'done';
        }
      }
      break;

    case 'start-step':
    case 'finish-step':
    case 'reasoning-start':
    case 'finish':
    case 'done':
      break;

    default:
      console.log('Super LTC Chat: Unknown event type:', eventType, event);
      break;
  }
}
