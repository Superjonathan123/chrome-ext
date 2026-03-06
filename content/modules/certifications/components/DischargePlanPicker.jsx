/**
 * DischargePlanPicker — radio group for Plan for Discharge.
 *
 * Options: Home Health Agency, Facility Care, Other (with free-text input).
 * Stores as plain string: "Home Health Agency", "Facility Care", or "Other: [text]".
 */

const DISCHARGE_OPTIONS = [
  { value: 'home_health', label: 'Home Health Agency' },
  { value: 'facility_care', label: 'Facility Care' },
  { value: 'other', label: 'Other' },
];

/** Parse a stored planForDischarge string back into option + otherText */
export function parseDischargePlan(str) {
  if (!str) return { option: '', otherText: '' };
  if (str === 'Home Health Agency') return { option: 'home_health', otherText: '' };
  if (str === 'Facility Care') return { option: 'facility_care', otherText: '' };
  if (str.startsWith('Other: ')) return { option: 'other', otherText: str.slice(7) };
  // Legacy free text — treat as "other" with the raw value
  return { option: 'other', otherText: str };
}

/** Compose option + otherText into a single string for the API */
export function composeDischargePlan(option, otherText) {
  if (option === 'home_health') return 'Home Health Agency';
  if (option === 'facility_care') return 'Facility Care';
  if (option === 'other') return `Other: ${otherText}`;
  return '';
}

/** Check if a valid discharge plan is selected */
export function isDischargePlanValid(option, otherText) {
  if (!option) return false;
  if (option === 'other') return otherText.trim().length > 0;
  return true;
}

export function DischargePlanPicker({ option, otherText, onOptionChange, onOtherTextChange }) {
  return (
    <div class="cm-discharge">
      {DISCHARGE_OPTIONS.map(opt => (
        <label
          key={opt.value}
          class={`cm-discharge__option${option === opt.value ? ' cm-discharge__option--selected' : ''}`}
        >
          <input
            type="radio"
            class="cm-discharge__radio"
            name="dischargePlan"
            value={opt.value}
            checked={option === opt.value}
            onChange={() => onOptionChange(opt.value)}
          />
          <span class="cm-discharge__dot" />
          <span class="cm-discharge__label">{opt.label}</span>
        </label>
      ))}
      {option === 'other' && (
        <input
          class="cm-input cm-discharge__other-input"
          type="text"
          value={otherText}
          onInput={(e) => onOtherTextChange(e.target.value)}
          placeholder="e.g., Assisted living, long-term care, hospice..."
          autoFocus
        />
      )}
    </div>
  );
}
