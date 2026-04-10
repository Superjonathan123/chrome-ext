import { useState, useMemo } from 'preact/hooks';

function humanize(str) {
  if (!str) return '';
  if (str === str.toUpperCase() && str.length > 5) return str.charAt(0) + str.slice(1).toLowerCase();
  return str;
}

/**
 * CoveredList — items with full coverage, grouped by type, collapsed by default.
 */
export function CoveredList({ covered }) {
  const [open, setOpen] = useState(false);

  const { dxCovered, orderCovered } = useMemo(() => {
    if (!covered) return { dxCovered: [], orderCovered: [] };
    return {
      dxCovered: covered.filter(c => c.type === 'diagnosis'),
      orderCovered: covered.filter(c => c.type !== 'diagnosis'),
    };
  }, [covered]);

  if (!covered || !covered.length) return null;

  return (
    <div class="cpc__section">
      <div class="cpc__section-header" onClick={() => setOpen(!open)}>
        <span class={`cpc__section-arrow ${open ? 'cpc__section-arrow--open' : ''}`}>{'\u25b6'}</span>
        <span class="cpc__section-label">Covered</span>
        <span class="cpc__section-count">({covered.length})</span>
      </div>
      {open && (
        <div class="cpc__section-items">
          {dxCovered.length > 0 && (
            <div class="cpc__subgroup">
              <div class="cpc__subgroup-header">
                <span class="cpc__subgroup-icon">{'\u{1F9EC}'}</span>
                Diagnoses
                <span class="cpc__subgroup-count">{dxCovered.length}</span>
              </div>
              {dxCovered.map((item, i) => <CoveredItem key={`dx-${i}`} item={item} />)}
            </div>
          )}
          {orderCovered.length > 0 && (
            <div class="cpc__subgroup">
              <div class="cpc__subgroup-header">
                <span class="cpc__subgroup-icon">{'\u{1F4CB}'}</span>
                Orders
                <span class="cpc__subgroup-count">{orderCovered.length}</span>
              </div>
              {orderCovered.map((item, i) => <CoveredItem key={`ord-${i}`} item={item} />)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CoveredItem({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div class="cpc__item">
      <div class="cpc__item-row" onClick={() => setExpanded(!expanded)}>
        <span class="cpc__dot cpc__dot--covered" />
        {item.code && <span class="cpc__item-code">{item.code}</span>}
        <span class="cpc__item-desc">{humanize(item.description)}</span>
        <span class="cpc__status-pill cpc__status-pill--covered">Covered</span>
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
