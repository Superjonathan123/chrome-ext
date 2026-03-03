const SUGGESTIONS = [
  'What medications is this patient currently taking?',
  'Summarize recent vital sign trends',
  'What are the active diagnoses?'
];

export function EmptyState({ onSuggestionClick }) {
  return (
    <div class="super-chat-empty">
      <div class="super-chat-empty__icon">{'\u2728'}</div>
      <div class="super-chat-empty__title">Hi, I'm your AI assistant</div>
      <div class="super-chat-empty__text">
        I can search medications, labs, vitals, clinical notes, and help you find information about this patient.
      </div>
      <div class="super-chat-empty__suggestions">
        {SUGGESTIONS.map(suggestion => (
          <button
            key={suggestion}
            class="super-chat-empty__suggestion"
            onClick={() => onSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
