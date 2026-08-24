/**
 * Functional Decline view model — chip text, filtering and runway counts.
 *
 * Ported verbatim from qm-handoff/gg-decline-view.ts (types stripped). Keep the
 * two in step: the web screen and this one make the SAME clinical claims, and a
 * divergence here would have the extension telling a nurse something the web app
 * does not. The mirrored test file is the guard.
 *
 * Tones are the extension's palette words (rose/amber/slate), not the web's
 * danger/warning/neutral — that is the only intentional difference.
 *
 * @typedef {'rose'|'amber'|'slate'} ChipTone
 * @typedef {{ label: string, detail?: string, tone: ChipTone, loud: boolean }} Chip
 * @typedef {'closing'|'act_now'|'time_to_correct'|'monitor'|'no_obra'} RunwayBucket
 */

/** Sentinel for "we could not classify this resident" in the payer dropdown. */
export const UNKNOWN_PAYER = 'UNKNOWN';

export const EMPTY_FILTERS = {
  severity: null,
  runway: null,
  stayType: null,
  payer: null,
  therapy: null,
  search: '',
};

/**
 * The OBRA runway chip.
 *
 * "ARD 16d" means the assessment exists in PCC with that real date. "Due 34d" is
 * OUR computed CMS deadline — a ceiling the facility may beat by weeks. The two
 * must stay visibly different: a ceiling read as a plan tells a nurse she has more
 * time to course-correct than she does, which is the dangerous direction.
 *
 * @param {object|null|undefined} nextObra
 * @returns {Chip|null}
 */
export function formatObraChip(nextObra) {
  if (!nextObra) return null;

  const { daysUntil, isOpened } = nextObra;
  const prefix = isOpened ? 'ARD' : 'Due';
  const label = daysUntil < 0 ? `${prefix} ${Math.abs(daysUntil)}d ago` : `${prefix} ${daysUntil}d`;
  const tone = daysUntil <= 7 ? 'rose' : daysUntil <= 21 ? 'amber' : 'slate';

  return { label, tone, loud: false };
}

/**
 * The therapy chip — rendered only when there is something to say.
 *
 * `unavailable` (NetHealth not wired for this facility or resident) and
 * `not_on_therapy` both render NOTHING. Blank is the expected state on a pickup
 * list. Crucially `unavailable` must never render as "no therapy": NetHealth
 * answers for only 12 of 19 facilities, so on the other 7 that would turn every
 * resident into a false pickup candidate.
 *
 * @param {object|null|undefined} therapy
 * @returns {Chip|null}
 */
export function formatTherapyChip(therapy) {
  if (!therapy) return null;

  if (therapy.state === 'on_therapy') {
    // ALWAYS "On therapy", never the raw typeOfCare. NetHealth returns a
    // level-of-care word ("Skilled"), not a discipline — a bare "Skilled" chip
    // beside a resident's name does not read as "someone is already treating
    // them", which is the entire question this chip answers.
    return {
      label: 'On therapy',
      detail: therapy.disciplines?.length ? therapy.disciplines.join(', ') : undefined,
      tone: 'slate',
      loud: false,
    };
  }

  if (therapy.state === 'recently_ended') {
    const days = therapy.endedDaysAgo;
    return {
      label: days === undefined ? 'Therapy ended' : `Therapy ended ${days}d`,
      tone: 'amber',
      loud: true,
    };
  }

  return null;
}

/**
 * Client-side filtering over the cached payload.
 *
 * Every dimension keeps its Unknown bucket REACHABLE. A row missing enrichment —
 * the extension ships independently of the backend, so a build can meet an older
 * API — reads as unknown rather than vanishing. A filter that silently drops
 * residents it cannot classify is a safety defect.
 *
 * @param {Array<object>} patients
 * @param {object} filters
 * @returns {Array<object>}
 */
export function applyDeclineFilters(patients, filters) {
  const search = (filters.search || '').trim().toLowerCase();

  return patients.filter((p) => {
    if (filters.severity === 'all' && !p.hasDecline) return false;
    if (filters.severity && filters.severity !== 'all' && p.overallSeverity !== filters.severity) return false;

    if (filters.stayType && (p.stayType ?? 'unknown') !== filters.stayType) return false;

    if (filters.payer) {
      const payer = p.payerClass ?? UNKNOWN_PAYER;
      if (payer !== filters.payer) return false;
    }

    if (filters.runway) {
      // Runway is a DECLINE triage axis: the cards count decliners only, so the
      // filter must too, or clicking "Closing 3" yields a longer list than the
      // control promised.
      if (!p.hasDecline) return false;
      if ((p.runway ?? 'no_obra') !== filters.runway) return false;
    }

    if (filters.therapy && (p.therapy?.state ?? 'unavailable') !== filters.therapy) return false;

    if (search && !p.patientName.toLowerCase().includes(search)) return false;

    return true;
  });
}

/** Runway buckets in the order a nurse triages them: least time left first. */
export const RUNWAY_ORDER = ['closing', 'act_now', 'time_to_correct', 'monitor', 'no_obra'];

export const RUNWAY_LABELS = {
  closing: { title: 'Closing', detail: '≤ 7d' },
  act_now: { title: 'Act now', detail: '8–21d' },
  time_to_correct: { title: 'Time to correct', detail: '22–60d' },
  monitor: { title: 'Monitor', detail: '60d+' },
  no_obra: { title: 'No OBRA', detail: '—' },
};

export const RUNWAY_TONE = {
  closing: 'rose',
  act_now: 'amber',
  time_to_correct: 'emerald',
  monitor: 'slate',
  no_obra: 'slate',
};

/**
 * Count residents per runway bucket, DECLINERS ONLY — the triage number.
 * @param {Array<object>} patients
 */
export function countByRunway(patients) {
  const counts = { closing: 0, act_now: 0, time_to_correct: 0, monitor: 0, no_obra: 0 };
  for (const p of patients) {
    if (!p.hasDecline) continue;
    counts[p.runway ?? 'no_obra'] += 1;
  }
  return counts;
}

/** Payer options actually present, so the dropdown reflects the data, not a guess. */
export function payerOptions(patients) {
  const seen = new Set();
  let hasUnknown = false;
  for (const p of patients) {
    if (p.payerClass) seen.add(p.payerClass);
    else hasUnknown = true;
  }
  const sorted = [...seen].sort((a, b) => a.localeCompare(b));
  return hasUnknown ? [...sorted, UNKNOWN_PAYER] : sorted;
}
