/**
 * ComplianceCard — compact chip layout with expandable detail.
 *
 * Default: horizontal row of pass/fail chips.
 * Click a chip to expand its detail (UDA grid, unsigned orders, etc.)
 */
import { useState } from 'preact/hooks';

const CHECK_ORDER = ['bims', 'phq9', 'gg', 'orders', 'therapyDocs'];
const CHECK_LABELS = { bims: 'BIMS', phq9: 'PHQ-9', gg: 'GG', orders: 'Orders', therapyDocs: 'Therapy' };
const MAX_ORDERS_SHOWN = 6;

function fmtDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function truncateOrder(name) {
  if (!name) return '';
  const line = name.split('\n')[0].trim();
  return line.length > 80 ? line.slice(0, 77) + '\u2026' : line;
}

function isInWindow(dateStr, range) {
  if (!dateStr || !range?.start || !range?.end) return null;
  const d = new Date(dateStr).getTime();
  return d >= new Date(range.start).getTime() && d <= new Date(range.end).getTime();
}

// ── UDA detail — grid layout ─────────────────────────────────────────

function UdaDetail({ check }) {
  const uda = check?.foundUda;
  if (!uda) return null;

  const locked = !!uda.lockedDate;
  const inWindow = isInWindow(uda.lockedDate || uda.date, check.searchedDateRange);

  return (
    <div class="pdpm-an__cc-detail">
      <div class="pdpm-an__cc-uda-grid">
        <span class="pdpm-an__cc-uda-key">Assessment</span>
        <span class="pdpm-an__cc-uda-val">{uda.description}</span>

        {uda.date && (
          <>
            <span class="pdpm-an__cc-uda-key">Completed</span>
            <span class="pdpm-an__cc-uda-val">{fmtDate(uda.date)}</span>
          </>
        )}

        <span class="pdpm-an__cc-uda-key">Lock</span>
        <span class="pdpm-an__cc-uda-val">
          {locked ? (
            <span class="pdpm-an__cc-lock pdpm-an__cc-lock--yes">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="2" y="5" width="8" height="6" rx="1.5" fill="currentColor"/><path d="M4 5V3.5a2 2 0 014 0V5" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
              {fmtDate(uda.lockedDate)}
            </span>
          ) : (
            <span class="pdpm-an__cc-lock pdpm-an__cc-lock--no">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="2" y="5" width="8" height="6" rx="1.5" fill="currentColor"/><path d="M4 5V3.5a2 2 0 014 0" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>
              Unlocked
            </span>
          )}
        </span>

        {check.searchedDateRange && (
          <>
            <span class="pdpm-an__cc-uda-key">Window</span>
            <span class="pdpm-an__cc-uda-val">
              {fmtDate(check.searchedDateRange.start)} {'\u2013'} {fmtDate(check.searchedDateRange.end)}
              {inWindow === true && <span class="pdpm-an__cc-window pdpm-an__cc-window--in">In range</span>}
              {inWindow === false && <span class="pdpm-an__cc-window pdpm-an__cc-window--out">Outside range</span>}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

// ── Orders detail ────────────────────────────────────────────────────

function OrdersDetail({ check }) {
  const orders = check?.unsignedOrders;
  if (!orders || orders.length === 0) return null;
  const showing = orders.slice(0, MAX_ORDERS_SHOWN);
  const remaining = orders.length - MAX_ORDERS_SHOWN;
  return (
    <div class="pdpm-an__cc-detail">
      <div class="pdpm-an__cc-detail-summary">
        <span class="pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--fail">{check.unsignedCount} unsigned</span>
        <span class="pdpm-an__cc-detail-stat">{check.totalOrders} total</span>
      </div>
      <div class="pdpm-an__cc-orders">
        {showing.map((o, i) => (
          <div key={i} class="pdpm-an__cc-order">
            <span class="pdpm-an__cc-order-name">{truncateOrder(o.orderName)}</span>
            <span class="pdpm-an__cc-order-meta">
              {o.category !== 'Other' && <span class="pdpm-an__cc-order-cat">{o.category}</span>}
              {o.startDate && <span>{fmtDate(o.startDate)}</span>}
            </span>
          </div>
        ))}
        {remaining > 0 && (
          <span class="pdpm-an__cc-orders-more">+{remaining} more unsigned</span>
        )}
      </div>
    </div>
  );
}

// ── Therapy detail ───────────────────────────────────────────────────

function TherapyDetail({ check }) {
  if (!check) return null;
  const unsigned = check.unsignedDocs || [];
  return (
    <div class="pdpm-an__cc-detail">
      <div class="pdpm-an__cc-detail-summary">
        <span class="pdpm-an__cc-detail-stat pdpm-an__cc-detail-stat--pass">{check.signedDocs} signed</span>
        <span class="pdpm-an__cc-detail-stat">{check.totalDocs} total</span>
      </div>
      {unsigned.length > 0 && (
        <div class="pdpm-an__cc-orders">
          {unsigned.slice(0, MAX_ORDERS_SHOWN).map((d, i) => (
            <div key={i} class="pdpm-an__cc-order">
              <span class="pdpm-an__cc-order-name">{d.description || d.name || `Document ${i + 1}`}</span>
              {d.date && <span class="pdpm-an__cc-order-meta">{fmtDate(d.date)}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CheckDetail({ checkKey, check }) {
  if (checkKey === 'orders') return <OrdersDetail check={check} />;
  if (checkKey === 'therapyDocs') return <TherapyDetail check={check} />;
  return <UdaDetail check={check} />;
}

// ── Card wrapper — compact chips ────────────────────────────────────

export function ComplianceCard({ data, collapsed, onToggleCollapse }) {
  const [expandedKey, setExpandedKey] = useState(null);
  const compliance = data?.compliance || {};
  const checks = compliance.checks || {};
  const passed = compliance.summary?.passed ?? 0;
  const total = compliance.summary?.total ?? CHECK_ORDER.length;
  const na = compliance.summary?.notApplicable ?? 0;
  const effectiveTotal = total - na;

  const toggleChip = (key) => setExpandedKey(expandedKey === key ? null : key);

  return (
    <div class={`pdpm-an__card${passed === effectiveTotal ? ' pdpm-an__card--success' : ' pdpm-an__card--warning'}`}>
      <div class="pdpm-an__card-header pdpm-an__card-header--collapsible" onClick={onToggleCollapse} role="button" tabIndex={0}>
        <span class="pdpm-an__card-icon">{'\u2713'}</span>
        <span class="pdpm-an__card-title">Compliance</span>
        <span class="pdpm-an__card-badge">{passed}/{effectiveTotal}</span>
        <svg class={`pdpm-an__card-chevron${collapsed ? '' : ' pdpm-an__card-chevron--open'}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      {!collapsed && (
        <div class="pdpm-an__cc-body">
          <div class="pdpm-an__cc-chips">
            {CHECK_ORDER.map(key => {
              const check = checks[key];
              if (!check || check.status === 'not_applicable') return null;
              const isPassed = check.status === 'passed';
              const hasDetail = check.foundUda || key === 'orders' || key === 'therapyDocs';
              const isActive = expandedKey === key;
              return (
                <button
                  key={key}
                  class={`pdpm-an__cc-chip${isPassed ? ' pdpm-an__cc-chip--pass' : ' pdpm-an__cc-chip--fail'}${isActive ? ' pdpm-an__cc-chip--active' : ''}`}
                  onClick={hasDetail ? () => toggleChip(key) : undefined}
                  title={check.message || ''}
                >
                  <span class="pdpm-an__cc-chip-icon">{isPassed ? '\u2713' : '\u2717'}</span>
                  {CHECK_LABELS[key] || key}
                </button>
              );
            })}
          </div>
          {expandedKey && checks[expandedKey] && checks[expandedKey].status !== 'not_applicable' && (
            <div class="pdpm-an__cc-expanded">
              <div class="pdpm-an__cc-expanded-label">{CHECK_LABELS[expandedKey]}: {checks[expandedKey].message}</div>
              <CheckDetail checkKey={expandedKey} check={checks[expandedKey]} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
