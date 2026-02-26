/**
 * PDPMAnalyzer — focused per-assessment overlay.
 *
 * Opens when MDS bubble is clicked on a patient or MDS page.
 * Shows: HIPPS, revenue opportunity, would-change-HIPPS items,
 * pending queries, compliance.
 *
 * Layout: ~700px centered overlay.
 */
import { useState } from 'preact/hooks';
import { usePDPMAnalyzer } from './hooks/usePDPMAnalyzer.js';
import { HippsDisplay } from './components/HippsDisplay.jsx';
import { PaymentCard } from './components/PaymentCard.jsx';
import { ComplianceCard } from './components/ComplianceCard.jsx';

// ─── Assessment selector (patient scope — multiple assessments) ────────────────

function AssessmentSelector({ assessments, selectedIdx, onChange }) {
  if (!assessments || assessments.length <= 1) return null;

  return (
    <select
      class="pdpm-an__assessment-select"
      value={selectedIdx}
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
    >
      {assessments.map((a, i) => (
        <option key={i} value={i}>
          {a.assessmentType || `Assessment ${i + 1}`}
          {a.ardDate ? ` · ARD ${new Date(a.ardDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : ''}
        </option>
      ))}
    </select>
  );
}

// ─── Would-change-HIPPS section ───────────────────────────────────────────────

function WouldChangeSection({ data }) {
  const drivers = data?.summary?.improvementDrivers || data?.improvementDrivers || [];
  if (drivers.length === 0) return null;

  return (
    <div class="pdpm-an__card">
      <div class="pdpm-an__card-header">
        <span class="pdpm-an__card-icon">⚡</span>
        <span class="pdpm-an__card-title">Would Change HIPPS</span>
        <span class="pdpm-an__card-badge">{drivers.length}</span>
      </div>
      <ul class="pdpm-an__driver-list">
        {drivers.map((d, i) => (
          <li key={i} class="pdpm-an__driver-item">
            <span class="pdpm-an__driver-section">{d.section || d.sectionCode || ''}</span>
            <span class="pdpm-an__driver-text">{d.description || d.message || d}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Pending queries section ──────────────────────────────────────────────────

function PendingQueriesSection({ data }) {
  const queries = data?.outstandingQueries || data?.queries || [];
  const pending = queries.filter(q => q.status === 'pending' || !q.status);
  if (pending.length === 0) return null;

  return (
    <div class="pdpm-an__card">
      <div class="pdpm-an__card-header">
        <span class="pdpm-an__card-icon">✉</span>
        <span class="pdpm-an__card-title">Pending Queries</span>
        <span class="pdpm-an__card-badge">{pending.length}</span>
      </div>
      <ul class="pdpm-an__query-list">
        {pending.map((q, i) => (
          <li key={i} class="pdpm-an__query-item">
            {q.itemCode && <span class="pdpm-an__query-code">{q.itemCode}</span>}
            <span class="pdpm-an__query-text">{q.question || q.description || q.text || 'Query'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Loading / Error states ────────────────────────────────────────────────────

function LoadingState() {
  return (
    <div class="pdpm-an__state">
      <div class="pdpm-an__spinner" />
      <p>Loading assessment data…</p>
    </div>
  );
}

function ErrorState({ message, onRetry }) {
  return (
    <div class="pdpm-an__state">
      <div class="pdpm-an__state-icon">⚠</div>
      <p>{message}</p>
      <button class="pdpm-an__retry-btn" onClick={onRetry}>Retry</button>
    </div>
  );
}

// ─── Assessment detail view ────────────────────────────────────────────────────

function AssessmentView({ assessmentData }) {
  if (!assessmentData) {
    return (
      <div class="pdpm-an__state">
        <p>No assessment data available.</p>
      </div>
    );
  }

  return (
    <div class="pdpm-an__content">
      <HippsDisplay data={assessmentData} />
      <PaymentCard data={assessmentData} />
      <WouldChangeSection data={assessmentData} />
      <PendingQueriesSection data={assessmentData} />
      <ComplianceCard data={assessmentData} />
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function PDPMAnalyzer({ context, onClose }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { data, loading, error, retry } = usePDPMAnalyzer(context);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  function openCommandCenter() {
    onClose();
    if (typeof MDSCommandCenterLauncher !== 'undefined') {
      MDSCommandCenterLauncher.open();
    }
  }

  // Determine what to show
  let patientName = context?.patientName || '';
  let assessmentData = null;
  let assessments = [];

  if (data) {
    if (data.scope === 'mds') {
      assessmentData = data.assessment;
      patientName = data.assessment?.patientName || patientName;
    } else if (data.scope === 'patient') {
      assessments = data.assessments || [];
      patientName = data.patientName || patientName;
      assessmentData = assessments[selectedIdx] || null;
    }
  }

  const assessmentLabel = assessmentData?.assessmentType || assessmentData?.type || '';
  const ardDate = assessmentData?.ardDate
    ? new Date(assessmentData.ardDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : '';

  return (
    <div class="pdpm-an__overlay" onClick={handleBackdropClick}>
      <div class="pdpm-an__modal" role="dialog" aria-modal="true" aria-label="PDPM Analyzer">
        {/* Header */}
        <div class="pdpm-an__header">
          <div class="pdpm-an__header-left">
            <button class="pdpm-an__back-btn" onClick={openCommandCenter}>
              ← Command Center
            </button>
            <div class="pdpm-an__patient-info">
              {patientName && <span class="pdpm-an__patient-name">{patientName}</span>}
              {assessmentLabel && <span class="pdpm-an__assessment-label">{assessmentLabel}</span>}
              {ardDate && <span class="pdpm-an__ard-date">ARD {ardDate}</span>}
            </div>
          </div>
          <div class="pdpm-an__header-right">
            <AssessmentSelector
              assessments={assessments}
              selectedIdx={selectedIdx}
              onChange={setSelectedIdx}
            />
            <button class="pdpm-an__close-btn" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>

        {/* Body */}
        <div class="pdpm-an__body">
          {loading && <LoadingState />}
          {!loading && error && <ErrorState message={error} onRetry={retry} />}
          {!loading && !error && <AssessmentView assessmentData={assessmentData} />}
        </div>
      </div>
    </div>
  );
}
