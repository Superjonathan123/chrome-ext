// Core chat hook — manages messages, status, streaming via Chrome port
import { useState, useRef, useCallback, useEffect } from 'preact/hooks';
import { parseStreamBuffer, processStreamEvent } from '../lib/stream-parser.js';

export function useChat(patientId) {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('ready'); // ready | submitted | streaming
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState(() => crypto.randomUUID());
  const portRef = useRef(null);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  // Reset when patient changes
  useEffect(() => {
    clear();
  }, [patientId]);

  // Load a saved session (from history)
  const loadSession = useCallback((savedSessionId, savedMessages) => {
    // Disconnect any active stream
    if (portRef.current) {
      try { portRef.current.disconnect(); } catch (_) {}
      portRef.current = null;
    }
    setSessionId(savedSessionId);
    setMessages(savedMessages || []);
    setStatus('ready');
    setError(null);
  }, []);

  const send = useCallback(async (text) => {
    if (status !== 'ready' || !patientId || !text.trim()) return;

    setError(null);

    // Check auth
    let authState;
    try {
      authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
    } catch (e) {
      setError('Could not check authentication. Please refresh the page.');
      return;
    }

    if (!authState?.authenticated) {
      setError('Please log in to use the AI assistant.');
      return;
    }

    // Get org and facility
    let orgSlug, facilityName;
    try {
      const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
      orgSlug = orgResponse?.org;
      const facLink = document.getElementById('pccFacLink');
      facilityName = facLink?.title || facLink?.textContent?.trim() || null;
    } catch (e) {
      console.warn('[AI Chat] Could not get org/facility:', e);
    }

    // Add user message
    const userMsg = { role: 'user', content: text };
    const assistantMsg = { role: 'assistant', content: '', parts: [] };
    const newMessages = [...messagesRef.current, userMsg, assistantMsg];
    setMessages(newMessages);
    setStatus('submitted');

    // Prepare messages for API (without the empty assistant placeholder)
    const messagesToSend = newMessages.slice(0, -1).map(m => ({
      role: m.role,
      content: m.content
    }));

    // Start streaming via Chrome port
    const port = chrome.runtime.connect({ name: 'chat-stream' });
    portRef.current = port;

    let buffer = '';

    port.onMessage.addListener((msg) => {
      if (msg.type === 'CHUNK') {
        buffer += msg.data;
        const { parsed, remaining } = parseStreamBuffer(buffer);
        buffer = remaining;

        // Process events into the assistant message
        parsed.forEach(event => {
          processStreamEvent(event, assistantMsg);
        });

        setStatus('streaming');
        // Trigger re-render with updated message
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { ...assistantMsg };
          return updated;
        });
      }

      if (msg.type === 'DONE') {
        setStatus('ready');
        portRef.current = null;
        // Final re-render with completed message
        setMessages(prev => [...prev]);
      }

      if (msg.type === 'ERROR') {
        setStatus('ready');
        portRef.current = null;
        // Remove empty assistant message
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

    port.postMessage({
      type: 'START_STREAM',
      patientId,
      orgSlug,
      facilityName,
      messages: messagesToSend
    });
  }, [patientId, status]);

  const clear = useCallback(() => {
    // Disconnect streaming port if active
    if (portRef.current) {
      try { portRef.current.disconnect(); } catch (_) {}
      portRef.current = null;
    }
    setMessages([]);
    setStatus('ready');
    setError(null);
    setSessionId(crypto.randomUUID());
  }, []);

  const stop = useCallback(() => {
    if (portRef.current) {
      try { portRef.current.disconnect(); } catch (_) {}
      portRef.current = null;
    }
    setStatus('ready');
  }, []);

  return { messages, status, error, sessionId, send, clear, stop, setMessages, loadSession };
}
