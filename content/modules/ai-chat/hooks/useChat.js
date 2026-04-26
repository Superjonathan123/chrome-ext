// Core chat hook — manages messages, status, streaming via Chrome port
// Now uses /api/chat with conversation CRUD
import { useState, useRef, useCallback, useEffect } from 'preact/hooks';
import { parseStreamBuffer, processStreamEvent } from '../lib/stream-parser.js';
import { createConversation, saveMessage, generateTitle } from '../lib/chat-history-api.js';
import { track, toErrorCode } from '../../../utils/analytics.js';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('ready'); // ready | submitted | streaming
  const [error, setError] = useState(null);
  const [conversationId, setConversationId] = useState(null);
  const portRef = useRef(null);
  const messagesRef = useRef(messages);
  const turnCountRef = useRef(0);
  messagesRef.current = messages;

  // Load a saved conversation (from history)
  const loadConversation = useCallback((convId, savedMessages) => {
    if (portRef.current) {
      try { portRef.current.disconnect(); } catch (_) {}
      portRef.current = null;
    }
    setConversationId(convId);
    // Count existing user messages to know turn count
    turnCountRef.current = (savedMessages || []).filter(m => m.role === 'user').length;
    setMessages(savedMessages || []);
    setStatus('ready');
    setError(null);
  }, []);

  // Build context from current PCC page — orgSlug, facilityName, externalPatientId
  // Uses getChatContext() from context.js (exposed on window)
  async function getAuthAndContext() {
    const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
    if (!authState?.authenticated) {
      throw new Error('Please log in to use the AI assistant.');
    }

    // getChatContext() handles patient pages, MDS pages, facility pages, etc.
    const context = typeof window.getChatContext === 'function'
      ? window.getChatContext()
      : {};

    // Fallback: ensure orgSlug is present
    if (!context.orgSlug) {
      const org = localStorage.getItem('CORE.org_code');
      if (org) context.orgSlug = org;
    }

    if (!context.orgSlug) {
      throw new Error('Organization not found. Please make sure you are on a PCC page.');
    }

    return context;
  }

  const send = useCallback(async (text) => {
    if (status !== 'ready' || !text.trim()) return;

    setError(null);

    let context;
    try {
      context = await getAuthAndContext();
    } catch (e) {
      track('error_shown', { surface: 'chat_auth', error_code: toErrorCode(e), error_type: 'permission' });
      setError(e.message);
      return;
    }

    // Create conversation on first message if we don't have one
    let convId = conversationId;
    if (!convId) {
      try {
        const { conversation } = await createConversation({
          title: 'New conversation',
          organizationId: context.orgSlug
        });
        convId = conversation.id;
        setConversationId(convId);
      } catch (e) {
        console.error('[AI Chat] Failed to create conversation:', e);
        track('error_shown', { surface: 'chat_conversation_create', error_code: toErrorCode(e), error_type: 'api_error' });
        setError('Failed to start conversation. Please try again.');
        return;
      }
    }

    // Save user message to backend
    try {
      await saveMessage(convId, { role: 'user', content: text });
    } catch (e) {
      console.warn('[AI Chat] Failed to save user message:', e);
      // Non-blocking — continue with streaming
    }

    // Add user message + empty assistant placeholder
    const userMsg = { role: 'user', content: text };
    const assistantMsg = { role: 'assistant', content: '', parts: [] };
    const newMessages = [...messagesRef.current, userMsg, assistantMsg];
    setMessages(newMessages);
    setStatus('submitted');
    turnCountRef.current++;

    // Prepare messages for API (without the empty assistant placeholder)
    const messagesToSend = newMessages.slice(0, -1).map(m => ({
      role: m.role,
      content: m.content
    }));

    // Start streaming via Chrome port
    const port = chrome.runtime.connect({ name: 'chat-stream' });
    portRef.current = port;

    let buffer = '';
    const isFirstTurn = turnCountRef.current === 1;
    const streamStart = Date.now();
    let funnelClosed = false; // guard against firing completed/failed twice

    port.onMessage.addListener((msg) => {
      if (msg.type === 'CHUNK') {
        buffer += msg.data;
        const { parsed, remaining } = parseStreamBuffer(buffer);
        buffer = remaining;

        parsed.forEach(event => {
          processStreamEvent(event, assistantMsg);
        });

        setStatus('streaming');
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...assistantMsg };
          return updated;
        });
      }

      if (msg.type === 'DONE') {
        if (!funnelClosed) {
          funnelClosed = true;
          track('chat_stream_completed', { duration_ms: Date.now() - streamStart });
        }
        setStatus('ready');
        portRef.current = null;
        setMessages(prev => [...prev]);

        // Save assistant message + generate title (fire-and-forget)
        if (convId && assistantMsg.content) {
          saveMessage(convId, {
            role: 'assistant',
            content: assistantMsg.content,
            parts: assistantMsg.parts?.length ? assistantMsg.parts : undefined,
          }).catch(e => console.warn('[AI Chat] Failed to save assistant message:', e));

          if (isFirstTurn) {
            generateTitle({
              conversationId: convId,
              userMessage: text,
              assistantMessage: assistantMsg.content
            }).catch(e => console.warn('[AI Chat] Failed to generate title:', e));
          }
        }
      }

      if (msg.type === 'ERROR') {
        if (!funnelClosed) {
          funnelClosed = true;
          track('chat_stream_failed', { error_code: toErrorCode(msg.error) });
        }
        track('error_shown', { surface: 'chat_stream', error_code: toErrorCode(msg.error), error_type: 'api_error' });
        setStatus('ready');
        portRef.current = null;
        setMessages(prev => {
          const last = prev[prev.length - 1];
          if (last?.role === 'assistant' && !last.content && (!last.parts || last.parts.length === 0)) {
            return prev.slice(0, -1);
          }
          return prev;
        });
        setError(msg.error || 'Something went wrong.');
      }
    });

    port.onDisconnect.addListener(() => {
      if (portRef.current === port) {
        setStatus('ready');
        portRef.current = null;
      }
    });

    track('chat_stream_started');
    port.postMessage({
      type: 'START_STREAM',
      messages: messagesToSend,
      context
    });
  }, [status, conversationId]);

  const clear = useCallback(() => {
    if (portRef.current) {
      try { portRef.current.disconnect(); } catch (_) {}
      portRef.current = null;
    }
    setMessages([]);
    setStatus('ready');
    setError(null);
    setConversationId(null);
    turnCountRef.current = 0;
  }, []);

  const stop = useCallback(() => {
    if (portRef.current) {
      try { portRef.current.disconnect(); } catch (_) {}
      portRef.current = null;
    }
    setStatus('ready');
  }, []);

  return { messages, status, error, conversationId, send, clear, stop, setMessages, loadConversation };
}
