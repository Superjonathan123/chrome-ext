/**
 * ItemDetailView — clean, action-oriented detail for a single MDS item.
 *
 * Two API shapes:
 *   Column-based (O-section):  item.columns.{A,B}, item.subItems
 *   Diagnosis-based (I-section): item.answer, item.keyFindings, item.queryEvidence, item.recommendedIcd10
 */
import { useState } from 'preact/hooks';
import { useItemDetail } from '../hooks/useItemDetail.js';
import { inferSourceType, SOURCE_LABELS, parseViewer, openEvidence, getActionText } from '../../../utils/evidence-helpers.js';

function EvidenceCard({ ev }) {
  const quote = ev.quoteText || ev.orderDescription || ev.quote || ev.snippet || ev.text || '';
  if (!quote) return null;

  const sourceType = ev.sourceType || inferSourceType(ev.displayName, ev.evidenceId);
  const typeLabel = ev.displayName || SOURCE_LABELS[sourceType] || sourceType;
  const actionText = getActionText(ev);
  const isClickable = !!actionText;

  return (
    <div
      class={`idv__ev-card${isClickable ? ' idv__ev-card--clickable' : ''}`}
      onClick={isClickable ? () => openEvidence(ev) : undefined}
      role={isClickable ? 'button' : undefined}
    >
      <div class="idv__ev-card-header">
        <span class={`idv__ev-card-type idv__ev-card-type--${sourceType}`}>{typeLabel}</span>
      </div>
      <div class="idv__ev-card-quote">{quote}</div>
      {ev.rationale && <div class="idv__ev-card-rationale">{ev.rationale}</div>}
      {isClickable && (
        <div class="idv__ev-card-action">
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
    <span class="idv__hip-chip">
      <span class="idv__hip-chip-k">{label}</span>
      <span class="idv__hip-chip-v">{from} → {to}</span>
    </span>
  );
}

/* ── Main ── */

export function ItemDetailView({ item, context, onBack }) {
  const mdsItem = item?.mdsItem;
  const categoryKey = item?.categoryKey;
  const [evExpanded, setEvExpanded] = useState(false);

  const { data, loading, error } = useItemDetail(mdsItem, categoryKey, context);
  const displayCode = mdsItem?.startsWith('I8000:') ? 'I8000' : mdsItem;

  const apiItem = data?.item;
  const isColumnBased = !!apiItem?.columns;
  const hasImpact = item?.impact && (item.impact.slp || item.impact.nta || item.impact.nursing || item.impact.ptot);

  // Diagnosis-based
  const isDiag = apiItem && !isColumnBased;
  const needsQuery = apiItem?.status === 'needs_physician_query';
  const icdCodes = apiItem?.recommendedIcd10 || [];
  const keyFindings = apiItem?.keyFindings || [];
  const diagEvidence = apiItem?.queryEvidence || [];

  // Column-based
  const columns = apiItem?.columns || {};
  const colA = columns.A;
  const colB = columns.B;
  const subItems = apiItem?.subItems || [];
  const [activeCol, setActiveCol] = useState('A');
  const activeColData = columns[activeCol] || colA;

  // Collect column evidence (deduplicated)
  const colEvidence = [];
  const seen = new Set();
  for (const col of Object.values(columns)) {
    if (col?.evidence) col.evidence.forEach(ev => {
      const k = ev.sourceId || ev.quote || JSON.stringify(ev);
      if (!seen.has(k)) { seen.add(k); colEvidence.push(ev); }
    });
  }

  // Which evidence set to show
  const evidence = isDiag ? diagEvidence : colEvidence;
  const visibleEvidence = evExpanded ? evidence : evidence.slice(0, 3);

  return (
    <div class="idv">
      {/* ── Header ── */}
      <div class="idv__head">
        <button class="idv__back" onClick={onBack} type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Back
        </button>
        <span class="idv__code">{displayCode}</span>
        <h2 class="idv__name">{apiItem?.description || apiItem?.kbCategory?.categoryName || item?.itemName || 'Item Detail'}</h2>
        {needsQuery && <span class="idv__badge idv__badge--amber">Needs Query</span>}
        {isDiag && !needsQuery && apiItem?.status && (
          <span class="idv__badge">{apiItem.status.replace(/_/g, ' ')}</span>
        )}
      </div>

      {loading && <div class="pdpm-an__state"><div class="pdpm-an__spinner" /><p>Loading…</p></div>}
      {error && <div class="pdpm-an__state"><p>{error}</p></div>}

      {!loading && !error && data && (
        <div class="idv__body">

          {/* ── HIPPS Impact ── */}
          {hasImpact && (
            <div class="idv__hip">
              <ImpactChip label="NTA" impact={item.impact.nta} />
              <ImpactChip label="Nursing" impact={item.impact.nursing} />
              <ImpactChip label="SLP" impact={item.impact.slp} />
              <ImpactChip label="PT/OT" impact={item.impact.ptot} />
            </div>
          )}

          {/* ═══ DIAGNOSIS LAYOUT ═══ */}
          {isDiag && (
            <>
              {/* ICD-10 codes — the actionable info, top of page */}
              {icdCodes.length > 0 && (
                <div class="idv__codes">
                  <div class="idv__codes-label">Suggested Codes</div>
                  <div class="idv__code-chips">
                    {icdCodes.map(icd => (
                      <div key={icd.code} class="idv__icd" title={icd.reason}>
                        <span class="idv__icd-code">{icd.code}</span>
                        <span class="idv__icd-desc">{icd.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Summary */}
              {apiItem.rationale && (
                <p class="idv__summary">{apiItem.rationale}</p>
              )}

              {/* Key findings — compact */}
              {keyFindings.length > 0 && (
                <ul class="idv__findings">
                  {keyFindings.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              )}
            </>
          )}

          {/* ═══ COLUMN-BASED LAYOUT ═══ */}
          {isColumnBased && (
            <>
              {/* Column tabs (only if both exist) */}
              {colA && colB && (
                <div class="idv__coltabs">
                  {Object.keys(columns).map(k => {
                    const c = columns[k];
                    const yes = c?.answer?.toLowerCase() === 'yes';
                    return (
                      <button key={k} type="button"
                        class={`idv__coltab ${activeCol === k ? 'idv__coltab--on' : ''}`}
                        onClick={() => setActiveCol(k)}>
                        Col {k}
                        <span class={`idv__coltab-dot ${yes ? 'idv__coltab-dot--yes' : ''}`} />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Active column verdict */}
              {activeColData && (
                <div class="idv__col-verdict">
                  <div class="idv__col-top">
                    <span class={`idv__ans ${activeColData.answer?.toLowerCase() === 'yes' ? 'idv__ans--yes' : 'idv__ans--no'}`}>
                      {activeColData.answer?.toUpperCase()}
                    </span>
                    {(activeColData.firstAdministered || activeColData.lastAdministered) && (
                      <span class="idv__col-dates">
                        {activeColData.firstAdministered && <>{activeColData.firstAdministered}</>}
                        {activeColData.firstAdministered && activeColData.lastAdministered && ' – '}
                        {activeColData.lastAdministered && <>{activeColData.lastAdministered}</>}
                      </span>
                    )}
                  </div>
                  {activeColData.rationale && <p class="idv__summary">{activeColData.rationale}</p>}
                </div>
              )}

              {/* Sub-items */}
              {subItems.length > 0 && (
                <div class="idv__subs">
                  {subItems.map((sub, i) => {
                    const a = sub.columns?.A;
                    if (!a) return null;
                    const yes = a.answer?.toLowerCase() === 'yes';
                    return (
                      <div key={sub.mdsItem || i} class={`idv__sub ${yes ? 'idv__sub--on' : ''}`}>
                        <span class={`idv__sub-dot ${yes ? 'idv__sub-dot--yes' : ''}`}>{yes ? '✓' : '–'}</span>
                        <span class="idv__sub-name">{sub.description}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* ── Evidence (rich cards) ── */}
          {evidence.length > 0 && (
            <div class="idv__evidence">
              <div class="idv__ev-section-label">Evidence ({evidence.length})</div>
              <div class="idv__ev-card-list">
                {visibleEvidence.map((ev, i) => <EvidenceCard key={i} ev={ev} />)}
              </div>
              {evidence.length > 3 && !evExpanded && (
                <button class="idv__ev-show-more" type="button" onClick={() => setEvExpanded(true)}>
                  Show all {evidence.length} &darr;
                </button>
              )}
            </div>
          )}

          {/* ── Actions ── */}
          <div class="idv__actions">
            <button class="idv__act idv__act--primary" onClick={() => window.QuerySendModal?.show(data.item || data)} type="button">
              Send Query
            </button>
            {mdsItem && (
              <button class="idv__act idv__act--secondary" onClick={() => window.navigateToMDSItem?.(mdsItem)} type="button">
                Go to {displayCode}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Fallback */}
      {!loading && !data && !error && hasImpact && (
        <div class="idv__body">
          <div class="idv__hip">
            <ImpactChip label="NTA" impact={item.impact.nta} />
            <ImpactChip label="Nursing" impact={item.impact.nursing} />
            <ImpactChip label="SLP" impact={item.impact.slp} />
            <ImpactChip label="PT/OT" impact={item.impact.ptot} />
          </div>
          <div class="idv__actions">
            {mdsItem && (
              <button class="idv__act idv__act--secondary" onClick={() => window.navigateToMDSItem?.(mdsItem)} type="button">
                Go to {displayCode}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
