import { useState, useMemo } from 'preact/hooks';

function humanize(str) {
  if (!str) return '';
  if (str === str.toUpperCase() && str.length > 5) return str.charAt(0) + str.slice(1).toLowerCase();
  return str;
}

/**
 * GapsList — missing and partial coverage items, grouped by type.
 */
export function GapsList({ gaps }) {
  const [open, setOpen] = useState(true);

  const { dxGaps, orderGaps } = useMemo(() => {
    if (!gaps) return { dxGaps: [], orderGaps: [] };
    return {
      dxGaps: gaps.filter(g => g.type === 'diagnosis'),
      orderGaps: gaps.filter(g => g.type !== 'diagnosis'),
    };
  }, [gaps]);

  if (!gaps || !gaps.length) return null;

  return (
    <div class="cpc__section">
      <div class="cpc__section-header" onClick={() => setOpen(!open)}>
        <span class={`cpc__section-arrow ${open ? 'cpc__section-arrow--open' : ''}`}>{'\u25b6'}</span>
        <span class="cpc__section-label">Gaps</span>
        <span class="cpc__section-count">({gaps.length})</span>
      </div>
      {open && (
        <div class="cpc__section-items">
          {dxGaps.length > 0 && (
            <div class="cpc__subgroup">
              <div class="cpc__subgroup-header">
                <span class="cpc__subgroup-icon">{'\u{1F9EC}'}</span>
                Diagnoses
                <span class="cpc__subgroup-count">{dxGaps.length}</span>
              </div>
              {dxGaps.map((item, i) => <CoverageItem key={`dx-${i}`} item={item} />)}
            </div>
          )}
          {orderGaps.length > 0 && (
            <div class="cpc__subgroup">
              <div class="cpc__subgroup-header">
                <span class="cpc__subgroup-icon">{'\u{1F4CB}'}</span>
                Orders
                <span class="cpc__subgroup-count">{orderGaps.length}</span>
              </div>
              {orderGaps.map((item, i) => <CoverageItem key={`ord-${i}`} item={item} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CoverageItem({ item }) {
  const [expanded, setExpanded] = useState(false);
  const isMissing = item.status === 'missing';

  return (
    <div class="cpc__item">
      <div class="cpc__item-row" onClick={() => setExpanded(!expanded)}>
        <span class={`cpc__dot cpc__dot--${item.status}`} />
        {item.code && <span class="cpc__item-code">{item.code}</span>}
        <span class="cpc__item-desc">{humanize(item.description)}</span>
        <span class={`cpc__status-pill cpc__status-pill--${item.status}`}>
          {isMissing ? 'Missing' : 'Partial'}
        </span>
        <span class={`cpc__item-expand ${expanded ? 'cpc__item-expand--open' : ''}`}>{'\u25b6'}</span>
      </div>
      {expanded && (
        <div class="cpc__item-detail">
          {item.matchedFocus && (
            <div class="cpc__detail-field">
              <span class="cpc__detail-label">Matched Focus</span>
              <span class="cpc__detail-value">{item.matchedFocus}</span>
            </div>
          )}
          {item.matchedIntervention && (
            <div class="cpc__detail-field">
              <span class="cpc__detail-label">Intervention</span>
              <span class="cpc__detail-value">{item.matchedIntervention}</span>
            </div>
          )}
          {item.reason && (
            <div class="cpc__detail-reason">{item.reason}</div>
          )}
        </div>
      )}
    </div>
  );
}
