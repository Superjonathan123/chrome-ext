/**
 * Pretty-formatting for 24-hour report findings. Mirrors the web app's
 * category/subcategory rendering so the extension panel looks the same.
 *
 * Payload snake_case keys (from /api/extension/24hr-report):
 *   category:    "vitals_labs" | "other_clinical" | "falls_safety" | ...
 *   subcategory: "abnormal_vitals" | "neuro_change" | "fall_event" | ...
 *   finding:     full narrative text
 */

const CATEGORY_MAP = {
  falls_safety:          { emoji: '🚑', label: 'Falls & Safety' },
  behavioral:            { emoji: '🧠', label: 'Behavioral' },
  vitals_labs:           { emoji: '📊', label: 'Vitals & Labs' },
  respiratory:           { emoji: '🫁', label: 'Respiratory' },
  skin_wounds:           { emoji: '🩹', label: 'Skin & Wounds' },
  medications:           { emoji: '💊', label: 'Medications' },
  abuse_neglect:         { emoji: '⚠️', label: 'Abuse & Neglect' },
  other_clinical:        { emoji: '🏥', label: 'Other Clinical' },
  medications_pain:      { emoji: '💊', label: 'Medications & Pain' },
  abuse_neglect_rights:  { emoji: '⚠️', label: 'Abuse / Neglect / Rights' },
};

/**
 * Split "snake_case_thing" → "Snake Case Thing".
 */
function titleCaseFromSnake(raw) {
  if (!raw) return '';
  return String(raw)
    .split(/[_\s]+/)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

export function categoryInfo(raw) {
  if (!raw) return null;
  const key = String(raw).toLowerCase();
  if (CATEGORY_MAP[key]) return CATEGORY_MAP[key];
  return { emoji: '', label: titleCaseFromSnake(raw) };
}

export function subcategoryLabel(raw) {
  if (!raw) return '';
  return titleCaseFromSnake(raw);
}

/**
 * Pull the narrative text off a finding regardless of which field the
 * backend used. "finding" is the canonical payload key; others are
 * historical fallbacks kept for safety.
 */
export function findingText(f) {
  return f?.finding
      || f?.findingText
      || f?.narrative
      || f?.description
      || '';
}

/**
 * Source excerpt — shorter raw string ("Weight 235.6 | Respiration 20.0 | BP 102/46 ...")
 * attached when the finding was extracted from a specific note/order.
 */
export function findingSourceExcerpt(f) {
  return f?.sourceExcerpt || f?.source_excerpt || '';
}
