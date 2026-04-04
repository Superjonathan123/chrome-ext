const PATIENT_SUGGESTIONS = [
  'What medications is this patient currently taking?',
  'Summarize recent vital sign trends',
  'What are the active diagnoses?'
];

const FACILITY_SUGGESTIONS = [
  'How many falls happened this week?',
  'Show me patients with expiring certifications',
  'What is the current census?'
];

const ORG_SUGGESTIONS = [
  'Census across all facilities',
  'Compare fall rates by facility',
  'Show me facility-level trends'
];

function getScope() {
  const ctx = typeof window.getChatContext === 'function'
    ? window.getChatContext()
    : {};
  if (ctx.externalPatientId || ctx.externalAssessmentId) return 'patient';
  if (ctx.facilityName) return 'facility';
  return 'org';
}

const SCOPE_CONFIG = {
  patient: {
    text: 'I can search medications, labs, vitals, clinical notes, and help you find information about this patient.',
    suggestions: PATIENT_SUGGESTIONS
  },
  facility: {
    text: 'I can search across patients in this facility — ask about census, falls, medications, and more.',
    suggestions: FACILITY_SUGGESTIONS
  },
  org: {
    text: 'I can search across all your facilities — ask about census, trends, and more.',
    suggestions: ORG_SUGGESTIONS
  }
};

export function EmptyState({ onSuggestionClick }) {
  const scope = getScope();
  const { text, suggestions } = SCOPE_CONFIG[scope];

  return (
    <div class="super-chat-empty">
      <div class="super-chat-empty__icon">{'\u2728'}</div>
      <div class="super-chat-empty__title">Hi, I'm your AI assistant</div>
      <div class="super-chat-empty__text">{text}</div>
      <div class="super-chat-empty__suggestions">
        {suggestions.map(suggestion => (
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
