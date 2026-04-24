/**
 * Data shaping for the QM Board.
 *
 * The backend ships per-patient/per-measure matrices; the UI wants:
 *   - per-measure aggregates for tiles
 *   - flat "triggering rows" list (patient × measure) for the measure-detail
 *     and the cross-measure "Clearing soon" rail
 *   - per-measure alert buckets for the nested heads-up strip
 *   - a flat alert list for the "all heads-up" takeover view
 */

export const MS_PER_DAY = 24 * 60 * 60 * 1000;

function daysBetween(isoDate, fromIso) {
  if (!isoDate) return null;
  const a = new Date(isoDate).getTime();
  const b = new Date(fromIso).getTime();
  return Math.round((a - b) / MS_PER_DAY);
}

/**
 * Estimate the date a fresh OBRA would most likely be scheduled —
 * midpoint of the 46-165d CMS quarterly window (~92d after the current
 * target ARD). Used when the API returns clearsOnNextObra without a
 * concrete clearDate.
 */
function estimateNextObraDate(targetArd) {
  if (!targetArd) return null;
  const d = new Date(targetArd);
  d.setDate(d.getDate() + 92);
  return d.toISOString().slice(0, 10);
}

/**
 * Fold CurrentlyTriggering + PreventableAlerts into per-measure tile rows
 * (for the dashboard grid).
 */
export function deriveMeasureTiles(ct, pa) {
  if (!ct?.measuresEvaluated) return [];

  const facilityDate = ct.facilityDate || new Date().toISOString().slice(0, 10);
  const signalCounts = pa?.signalCounts || {};
  const summary = ct.summary?.byMeasure || {};

  // Map each measure id → summed actionable alert count. Some QMs receive
  // signal from more than one canary (e.g. weight → weight_decline_canary).
  const alertByQm = {
    uti:          (signalCounts.ua_canary?.actionable || 0),
    catheter:     (signalCounts.foley_order?.actionable || 0),
    antipsychotic_long: (signalCounts.antipsychotic_order?.actionable || 0),
    weight_loss:  (signalCounts.weight_decline_canary?.actionable || 0),
    adl_decline:  (signalCounts.gg_decline_canary?.actionable || 0),
  };

  return ct.measuresEvaluated.map(m => {
    const byM = summary[m.id] || { triggering: 0, excluded: 0, applicable: 0 };
    const alerts = alertByQm[m.id] || 0;

    let status;
    if (byM.triggering >= 5) status = 'hot';
    else if (byM.triggering > 0) status = 'warn';
    else if (alerts > 0) status = 'alert';
    else status = 'clean';

    return {
      id: m.id,
      label: shortLabel(m.id, m.label),
      triggering: byM.triggering,
      alerts,
      applicable: byM.applicable,
      status,
      _facilityDate: facilityDate,
    };
  });
}

/**
 * Shorter tile labels than the backend's full legal ones.
 */
export function shortLabel(id, fallback) {
  const map = {
    uti: 'UTI',
    catheter: 'Indwelling Catheter',
    falls_major_injury: 'Falls w/ Major Injury',
    antipsychotic_long: 'Antipsychotic (long)',
    weight_loss: 'Weight Loss',
    pressure_ulcer_long: 'Pressure Ulcer (long)',
    phq9_depression: 'Depression (PHQ-9)',
    adl_decline: 'ADL Decline',
    physical_restraints: 'Physical Restraints',
    low_risk_incontinence: 'Low-Risk Incontinence',
    discharge_function: 'Discharge Function',
    antipsychotic_new: 'Antipsychotic (new)',
    pressure_ulcer_short: 'Pressure Ulcer (short)',
    influenza_vaccine: 'Influenza Vaccination',
  };
  return map[id] || fallback || id;
}

/**
 * Flatten (patient × triggering measure) into one row per combination.
 * Used by measure detail rendering (filtered to a single measure) and by
 * Clearing Soon (all measures, sorted by clear date).
 */
export function flattenTriggeringRows(ct) {
  if (!ct?.patients) return [];
  const today = ct.facilityDate || new Date().toISOString().slice(0, 10);
  const rows = [];

  for (const p of ct.patients) {
    for (const m of (p.measures || [])) {
      if (!m.triggers) continue;
      const targetArd = p.target?.ardDate || null;
      const clearsOnNextObra = !!m.clearGuidance?.clearsOnNextObra;

      // Prefer the API's concrete clearDate (time-based measures like Falls).
      // Fall back to an estimated next-OBRA date when clearsOnNextObra is true.
      const apiClearDate = m.clearGuidance?.clearDate || null;
      const clearDate = apiClearDate || (clearsOnNextObra ? estimateNextObraDate(targetArd) : null);
      const daysUntil = clearDate ? daysBetween(clearDate, today) : null;

      // eslint-disable-next-line no-nested-ternary
      const urgency = daysUntil == null
        ? 'stable'
        : daysUntil < 0 ? 'overdue'
        : daysUntil <= 7 ? 'soon'
        : 'later';

      rows.push({
        patientId: p.patientId,
        externalPatientId: p.externalPatientId,
        name: formatName(p),
        targetType: p.target?.type || '—',
        ardDate: targetArd,
        measureId: m.id,
        measureLabel: shortLabel(m.id, m.label),
        clearDate,
        clearDateIsEstimate: !apiClearDate && clearsOnNextObra,
        daysUntilClear: daysUntil,
        clearActionType: m.clearGuidance?.actionType || 'none',
        clearsOnNextObra,
        clearActions: m.clearGuidance?.actions || [],
        evidence: m.evidence || [],
        urgency,
      });
    }
  }
  return rows;
}

/**
 * Flat list of actionable alerts across all patients, carrying signal data.
 * Snoozed/suppressed alerts are filtered out by default (matches API
 * `actionableCount` semantics).
 */
export function flattenAlerts(pa, { includeSuppressed = false } = {}) {
  if (!pa?.patients) return [];
  const out = [];
  for (const p of pa.patients) {
    for (const a of [...(p.events || []), ...(p.canaries || [])]) {
      if (!includeSuppressed && (a.snooze || a.suppressedByExistingCoding)) continue;
      out.push({
        patientId: p.patientId,
        externalPatientId: p.externalPatientId,
        name: formatName(p),
        alertId: a.id,
        category: a.category,
        label: a.label,
        qmId: a.qmId,
        urgency: a.urgency,
        latestSignalDate: a.latestSignalDate,
        suggestedAction: a.suggestedAction,
        signals: a.signals || [],
        snooze: a.snooze || null,
        suppressedByExistingCoding: !!a.suppressedByExistingCoding,
      });
    }
  }
  // Sort: urgency (high → low), then latest signal date (newer first)
  const uRank = { high: 0, medium: 1, low: 2 };
  out.sort((a, b) =>
    (uRank[a.urgency] ?? 9) - (uRank[b.urgency] ?? 9)
    || (b.latestSignalDate || '').localeCompare(a.latestSignalDate || '')
  );
  return out;
}

function formatName(p) {
  return `${p.lastName || ''}, ${p.firstName || ''}`.replace(/^, |, $/g, '').trim() || '—';
}

/**
 * Human-readable label for GG MDS keys. The raw item codes include a
 * column suffix (e.g. GG0170D5 = Sit to Stand, column *5 = OBRA/Interim).
 */
const GG_ITEM_NAMES = {
  GG0170B: 'Sit to Lying',
  GG0170D: 'Sit to Stand',
  GG0170F: 'Toilet Transfer',
  GG0130A: 'Eating',
  GG0170I: 'Walk 10 Feet',
  GG0170J: 'Walk 50 Feet',
  GG0170K: 'Walk 150 Feet',
};

function stripGgColumn(mdsItem) {
  if (!mdsItem) return mdsItem;
  return mdsItem.replace(/[1-9]$/, '');
}

/**
 * Produce a short "why is this triggering" line for a measure + evidence.
 * Reads the evidence array the currently-triggering API returns.
 *
 * Examples:
 *   ADL Decline   → "Sit to Stand 4 → 2, Toilet Transfer 4 → 2"
 *   Weight Loss   → "5.2% weight loss over 30d"
 *   Falls         → "Major-injury fall coded 2/20"
 *   UTI           → "I2300 coded on 2/5"
 *   (fallback)    → first target-row note from the evidence array
 */
export function summarizeEvidence(measureId, evidence) {
  if (!evidence || evidence.length === 0) return null;

  if (measureId === 'adl_decline') {
    const byItem = new Map();
    for (const e of evidence) {
      const key = stripGgColumn(e.mdsItem);
      if (!byItem.has(key)) byItem.set(key, { target: null, prior: null, name: GG_ITEM_NAMES[key] || key });
      const isTarget = /^Target\b/i.test(e.note || '');
      const isPrior = /^Prior\b/i.test(e.note || '');
      const val = parseInt(e.value, 10);
      if (isTarget) byItem.get(key).target = val;
      else if (isPrior) byItem.get(key).prior = val;
    }
    const parts = [];
    for (const [, v] of byItem) {
      if (v.target != null && v.prior != null && v.target !== v.prior) {
        parts.push(`${v.name} ${v.prior} → ${v.target}`);
      }
    }
    return parts.length ? parts.join(' · ') : null;
  }

  // Generic fallback — use the first evidence note that looks like a target.
  const target = evidence.find(e => /target/i.test(e.note || '')) || evidence[0];
  if (target?.note && !/^Prior/i.test(target.note)) return target.note;
  return null;
}

/**
 * Concise alert-signal text for rail/list rendering:
 *   weight → "Lost 6 lb in 42d (6.8%)"
 *   gg     → "Eating 4 → 2 (moderate)"
 *   foley/antipsych/ua → original order/note text is usually fine
 *   fallback → signal.text
 */
export function formatSignalText(signal) {
  if (!signal) return '';

  // Weight — the API text is verbose ("Weight 79.6 lb today vs 85.6 lb on 2026-02-03");
  // synthesize a shorter line from the text + detail.
  if (signal.source === 'vitals') {
    const m = /([0-9.]+)\s*lb.*?vs\s*([0-9.]+)\s*lb.*?on\s*(\d{4}-\d{2}-\d{2})/i.exec(signal.text || '');
    if (m) {
      const now = parseFloat(m[1]);
      const past = parseFloat(m[2]);
      const pastDate = new Date(m[3]);
      const today = signal.date ? new Date(signal.date) : new Date();
      const dayDelta = Math.max(1, Math.round((today - pastDate) / MS_PER_DAY));
      const lbDelta = Math.abs(past - now).toFixed(1).replace(/\.0$/, '');
      const pct = signal.detail?.observedPct;
      const pctStr = pct != null ? ` (${pct.toFixed(1)}%)` : '';
      const verb = now < past ? 'Lost' : 'Gained';
      return `${verb} ${lbDelta} lb in ${dayDelta}d${pctStr}`;
    }
  }

  // GG decline — use detail if present for a tight one-liner
  if (signal.source === 'gg_decline_service' && signal.detail) {
    const d = signal.detail;
    if (d.name && d.baseline != null && d.worstShiftAverage != null) {
      return `${d.name}: ${d.baseline} → ${d.worstShiftAverage.toFixed(1)} (${d.severity})`;
    }
  }

  return signal.text || '';
}

/**
 * Format ARD-like dates into "Mar 14"-style short strings.
 */
export function formatShortDate(iso) {
  if (!iso) return '';
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  } catch {
    return iso;
  }
}

/**
 * Human-readable clear-date text for a row. Prefer concrete days.
 *   "OVERDUE" / "in 4d" / "~72d" (estimated) / "next admit" / "—"
 */
export function clearLabel(row) {
  if (!row) return '';
  if (row.urgency === 'overdue') return 'OVERDUE';
  const d = row.daysUntilClear;
  if (d != null) {
    const prefix = row.clearDateIsEstimate ? '~' : '';
    if (d === 0) return 'today';
    if (d === 1) return `${prefix}1d`;
    return `${prefix}${d}d`;
  }
  if (row.clearActionType === 'stay_locked') return 'next admit';
  return '—';
}

/**
 * Action-verb CTA for a triggering row. Drives the right column on
 * rail + list + measure-detail rows so the reader always sees
 * *what to do*, not just a bare number of days.
 *
 *   { verb, detail, tone }
 *   tone: 'passive' (no action — rolls off) | 'active' (review/code) | 'urgent' (past due)
 */
export function clearCta(row) {
  if (!row) return null;
  if (row.urgency === 'overdue') {
    const past = row.daysUntilClear != null ? Math.abs(row.daysUntilClear) : 0;
    return {
      verb: 'Schedule new ARD',
      detail: past ? `${past}d past target` : 'past target',
      tone: 'urgent',
    };
  }
  if (row.clearActionType === 'stay_locked') {
    return { verb: 'Clears on discharge', detail: 'no action', tone: 'passive' };
  }
  if (row.clearsOnNextObra) {
    const est = row.clearDateIsEstimate;
    const d = row.daysUntilClear;
    const detail = d != null ? `next ARD ${est ? '~' : ''}${d}d out` : 'on next ARD';
    return { verb: 'Code clean', detail, tone: 'active' };
  }
  if (row.clearActionType === 'time' && row.daysUntilClear != null) {
    return {
      verb: `Rolls off ${row.daysUntilClear}d`,
      detail: 'no action',
      tone: 'passive',
    };
  }
  if (row.daysUntilClear != null) {
    return {
      verb: `Clears ${row.daysUntilClear}d`,
      detail: null,
      tone: 'passive',
    };
  }
  return { verb: 'Review', detail: null, tone: 'active' };
}

/**
 * Action-verb CTA for a heads-up alert row. Heads-up == preventable,
 * so the verb is always "Prevent" unless the backend shipped a more
 * specific suggestedAction short enough to fit.
 */
export function alertCta(a) {
  if (!a) return null;
  const suggested = a.suggestedAction;
  const verb = (suggested && suggested.length <= 22) ? suggested : 'Prevent';
  return {
    verb,
    detail: formatShortDate(a.latestSignalDate) || null,
    tone: 'alert',
  };
}
