/**
 * ItemPopover — MDS-popover-style floating card for item detail.
 *
 * Replicates the rich evidence card design from the MDS page popover:
 *   - Purple gradient header with item code + name + status badge
 *   - HIPPS impact chips
 *   - Suggested ICD-10 codes
 *   - Rationale blockquote
 *   - Key findings
 *   - Rich evidence cards (source badge, quote, rationale, clickable action)
 *   - Action buttons at bottom
 */
import { useState } from 'preact/hooks';
import { useItemDetail } from '../pdpm-analyzer/hooks/useItemDetail.js';
import { inferSourceType, SOURCE_LABELS, parseViewer, openEvidence, getActionText } from '../../utils/evidence-helpers.js';

/* ── Sub-components ── */

function EvidenceCard({ ev }) {
  const quote = ev.quoteText || ev.orderDescription || ev.quote || ev.snippet || ev.text || '';
  if (!quote) return null;

  const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
  const typeLabel = ev.displayName || SOURCE_LABELS[sourceType] || sourceType;
  const actionText = getActionText(ev);
  const isClickable = !!actionText;

  return (
    <div
      class={`cc-pop__ev-card${isClickable ? ' cc-pop__ev-card--clickable' : ''}`}
      onClick={isClickable ? () => openEvidence(ev) : undefined}
      role={isClickable ? 'button' : undefined}
    >
      <div class="cc-pop__ev-header">
        <span class={`cc-pop__ev-type cc-pop__ev-type--${sourceType}`}>{typeLabel}</span>
      </div>
      <div class="cc-pop__ev-quote">{quote}</div>
      {ev.rationale && <div class="cc-pop__ev-rationale">{ev.rationale}</div>}
      {isClickable && (
        <div class="cc-pop__ev-action">
          <span>{actionText}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      )}
    </div>
  );
}

function ImpactChip({ label, impact }) {
  if (!impact) return null;
  if (!impact.wouldChangeGroup && !impact.wouldChangeLevel) return null;
  const from = impact.currentGroup || impact.currentLevel || impact.currentPaymentGroup;
  const to = impact.newGroup || impact.newLevel || impact.newPaymentGroup;
  return (
    <span class="cc-pop__impact">
      {label} <span class="cc-pop__impact-from">{from}</span> → <span class="cc-pop__impact-to">{to}</span>
    </span>
  );
}

/* ── Main Popover ── */

export function ItemPopover({ item, context, onClose }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const [showAllEv, setShowAllEv] = useState(false);

  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith('I8000:') ? 'I8000' : mdsItem;

  const apiItem = data?.item;
  const isColumnBased = !!apiItem?.columns;
  const isDiag = apiItem && !isColumnBased;

  // Status badge
  const status = apiItem?.status;
  const needsQuery = status === 'needs_physician_query';

  // ICD codes
  const icdCodes = apiItem?.recommendedIcd10 || [];
  const keyFindings = apiItem?.keyFindings || [];

  // Evidence — collect from multiple sources
  const diagEvidence = apiItem?.queryEvidence || [];
  const colEvidence = [];
  if (isColumnBased) {
    const seen = new Set();
    for (const col of Object.values(apiItem.columns || {})) {
      if (col?.evidence) col.evidence.forEach(ev => {
        const k = ev.sourceId || ev.quote || JSON.stringify(ev);
        if (!seen.has(k)) { seen.add(k); colEvidence.push(ev); }
      });
    }
  }
  const evidence = isDiag ? diagEvidence : colEvidence;
  const visibleEvidence = showAllEv ? evidence : evidence.slice(0, 4);

  // Column answer for column-based items
  const colA = apiItem?.columns?.A;

  // Impact from the detection item passed in
  const hasImpact = item?.impact && (item.impact.slp || item.impact.nta || item.impact.nursing || item.impact.ptot);

  return (
    <div class="cc-pop__backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div class="cc-pop" onClick={(e) => e.stopPropagation()}>
        {/* ── Header ── */}
        <div class="cc-pop__header">
          <div class="cc-pop__header-top">
            <div class="cc-pop__header-left">
              <span class="cc-pop__code">{displayCode}</span>
              <span class="cc-pop__name">{item?.itemName || apiItem?.description || 'Item Detail'}</span>
            </div>
            <button class="cc-pop__close" onClick={onClose} type="button">&times;</button>
          </div>
          <div class="cc-pop__header-sub">
            {needsQuery && <span class="cc-pop__status cc-pop__status--amber">Needs Query</span>}
            {isDiag && !needsQuery && status && status !== 'needs_physician_query' && (
              <span class="cc-pop__status">{status.replace(/_/g, ' ')}</span>
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div class="cc-pop__body">
          {loading && (
            <div class="cc-pop__loading">
              <div class="mds-cc__spinner mds-cc__spinner--sm" />
              <span>Loading…</span>
            </div>
          )}
          {error && <div class="cc-pop__error">{error}</div>}

          {!loading && !error && data && (
            <>
              {/* HIPPS Impact */}
              {hasImpact && (
                <div class="cc-pop__impacts">
                  <ImpactChip label="NTA" impact={item.impact.nta} />
                  <ImpactChip label="Nursing" impact={item.impact.nursing} />
                  <ImpactChip label="SLP" impact={item.impact.slp} />
                  <ImpactChip label="PT/OT" impact={item.impact.ptot} />
                </div>
              )}

              {/* Column answer (for column-based items) */}
              {isColumnBased && colA && (
                <div class="cc-pop__answer-row">
                  <span class="cc-pop__answer-label">Super Answer:</span>
                  <span class={`cc-pop__answer-value cc-pop__answer-value--${colA.answer?.toLowerCase() === 'yes' ? 'yes' : 'no'}`}>
                    {colA.answer?.toUpperCase()}
                  </span>
                </div>
              )}

              {/* ICD-10 Suggested Codes */}
              {icdCodes.length > 0 && (
                <div class="cc-pop__section">
                  <div class="cc-pop__section-label">Suggested Codes</div>
                  <div class="cc-pop__codes">
                    {icdCodes.map(icd => (
                      <div key={icd.code} class="cc-pop__icd">
                        <span class="cc-pop__icd-code">{icd.code}</span>
                        <span class="cc-pop__icd-desc">{icd.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Rationale */}
              {(apiItem?.rationale || colA?.rationale) && (
                <div class="cc-pop__rationale">
                  {apiItem?.rationale || colA?.rationale}
                </div>
              )}

              {/* Key findings */}
              {keyFindings.length > 0 && (
                <div class="cc-pop__findings">
                  {keyFindings.map((f, i) => (
                    <div key={i} class="cc-pop__finding">
                      <span class="cc-pop__finding-dot" />
                      {f}
                    </div>
                  ))}
                </div>
              )}

              {/* Evidence */}
              {evidence.length > 0 && (
                <div class="cc-pop__section">
                  <div class="cc-pop__section-label">Evidence ({evidence.length})</div>
                  <div class="cc-pop__ev-list">
                    {visibleEvidence.map((ev, i) => <EvidenceCard key={i} ev={ev} />)}
                  </div>
                  {evidence.length > 4 && !showAllEv && (
                    <button class="cc-pop__show-more" type="button" onClick={() => setShowAllEv(true)}>
                      Show all {evidence.length} &darr;
                    </button>
                  )}
                </div>
              )}
            </>
          )}

          {/* Fallback: no data but has impact */}
          {!loading && !data && !error && hasImpact && (
            <div class="cc-pop__impacts">
              <ImpactChip label="NTA" impact={item.impact.nta} />
              <ImpactChip label="Nursing" impact={item.impact.nursing} />
              <ImpactChip label="SLP" impact={item.impact.slp} />
              <ImpactChip label="PT/OT" impact={item.impact.ptot} />
            </div>
          )}
        </div>

        {/* ── Actions ── */}
        <div class="cc-pop__actions">
          <button class="cc-pop__btn cc-pop__btn--query" onClick={() => window.QuerySendModal?.show(apiItem || data)} type="button">
            ? Query Physician
          </button>
          {mdsItem && (
            <button class="cc-pop__btn cc-pop__btn--goto" onClick={() => window.navigateToMDSItem?.(mdsItem)} type="button">
              Go to {displayCode} {'\u2197'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
