/**
 * Shorten verbose MDS assessment descriptions for dense inline display.
 *
 * Backend (v4+) now ships clean, display-ready strings ("Annual",
 * "Admission + 5-Day PPS", "Entry", etc.) — the former "- None PPS /"
 * artifacts are gone. This helper only tightens the remaining long-form
 * canonical names that don't fit in a 120-column table cell.
 */
export function shortenDescription(desc) {
  if (!desc) return '';
  return desc
    .replace(/Significant Change( in Status)?/gi, 'Sig Change')
    .replace(/Significant Correction.*?(Assessment)?/gi, 'Sig Correction')
    .replace(/Interim Payment Assessment/gi, 'IPA')
    .replace(/Part A PPS Discharge( \(OMRA\))?/gi, 'PPS Discharge')
    .replace(/\bDeath in Facility\b/gi, 'Death')
    .replace(/\s+/g, ' ')
    .trim();
}
