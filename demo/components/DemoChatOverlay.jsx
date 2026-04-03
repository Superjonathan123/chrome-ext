import { useState, useCallback, useRef, useEffect } from 'preact/hooks';
import { useDemoChat } from '../hooks/useDemoChat.js';
import { FakeDocumentViewer } from './FakeDocumentViewer.jsx';
import { UserMessage } from '../../content/modules/ai-chat/components/UserMessage.jsx';
import { AssistantMessage } from '../../content/modules/ai-chat/components/AssistantMessage.jsx';
import { ChatInput } from '../../content/modules/ai-chat/components/ChatInput.jsx';

const DEMO_SUGGESTIONS = [
  'Does this patient have malnutrition?',
  'What are the PDPM opportunities?',
  'Look for IV fluids in hospital docs',
  'What medications is this patient on?',
];

export function DemoChatOverlay({ patientId, onClose }) {
  const { messages, status, send, clear } = useDemoChat(patientId);
  const [viewingDoc, setViewingDoc] = useState(null);
  const messagesRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  // Intercept clicks on #doc: links in rendered message content
  const handleContentClick = useCallback((e) => {
    const link = e.target.closest('a[href^="#doc:"]');
    if (link) {
      e.preventDefault();
      const parts = link.getAttribute('href').replace('#doc:', '').split(':');
      setViewingDoc({ docId: parts[0], page: parseInt(parts[1], 10) || 1 });
      return;
    }
    const viewerLink = e.target.closest('a[href^="#viewer:"]');
    if (viewerLink) {
      e.preventDefault();
      // Future: could open MAR/Orders viewer
    }
  }, []);

  const handleSuggestionClick = useCallback((text) => {
    send(text);
  }, [send]);

  return (
    <>
      <div class="super-chat-overlay" onClick={(e) => { if (e.target.classList.contains('super-chat-overlay')) onClose(); }}>
        <div class="super-chat-overlay__panel">
          {/* Header */}
          <div class="super-chat-header">
            <div class="super-chat-header__left">
              <div class="super-chat-header__sparkle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span class="super-chat-header__title">AI Assistant</span>
              <span class="super-chat-header__patient">Doe, Jane</span>
            </div>
            <div class="super-chat-header__actions-right">
              <button class="super-chat-header__btn" onClick={clear} title="New Chat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </button>
              <button class="super-chat-header__btn" onClick={onClose} title="Close">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div class="super-chat-messages" ref={messagesRef} onClick={handleContentClick}>
            {messages.length === 0 ? (
              // Custom demo empty state with our specific suggestions
              <div class="super-chat-empty">
                <div class="super-chat-empty__icon">{'\u2728'}</div>
                <div class="super-chat-empty__title">Hi, I'm your AI assistant</div>
                <div class="super-chat-empty__text">
                  I can search clinical notes, hospital records, labs, medications, and help analyze MDS coding opportunities.
                </div>
                <div class="super-chat-empty__suggestions">
                  {DEMO_SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      class="super-chat-empty__suggestion"
                      onClick={() => handleSuggestionClick(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, idx) => (
                  msg.role === 'user'
                    ? <UserMessage key={idx} content={msg.content} />
                    : <AssistantMessage key={idx} message={msg} />
                ))}
                {status === 'submitted' && (
                  <div class="super-chat-message super-chat-message--assistant">
                    <div class="super-chat-typing">
                      <div class="super-chat-typing__dots">
                        <div class="super-chat-typing__dot" />
                        <div class="super-chat-typing__dot" />
                        <div class="super-chat-typing__dot" />
                      </div>
                      <span>Analyzing patient data...</span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input */}
          <ChatInput onSend={send} status={status} />
        </div>
      </div>

      {/* Document Viewer Overlay */}
      {viewingDoc && (
        <FakeDocumentViewer
          docId={viewingDoc.docId}
          page={viewingDoc.page}
          highlightText={true}
          onClose={() => setViewingDoc(null)}
        />
      )}
    </>
  );
}
