/**
 * AssessmentDetail — expanded detail panel for a single assessment row.
 *
 * Shows:
 *   • HIPPS current → improved code (if applicable)
 *   • Section completion progress bar + per-section status dots
 *   • Compliance issues list
 *   • Query summary (pending / signed counts)
 *   • Action buttons: Open in PCC, View Queries, Go to MDS
 */

function HippsSection({ pdpm, assessment }) {
  if (!pdpm) return null;

  const current = pdpm.currentHipps || assessment.currentHipps || '—';
  const improved = pdpm.improvedHipps;
  const drivers = pdpm.improvementDrivers || [];

  return (
    <div class="mds-cc__detail-section">
      <div class="mds-cc__detail-label">HIPPS</div>
      <div class="mds-cc__hipps-row">
        <span class="mds-cc__hipps-code mds-cc__hipps-code--current">{current}</span>
        {improved && improved !== current && (
          <>
            <span class="mds-cc__hipps-arrow">→</span>
            <span class="mds-cc__hipps-code mds-cc__hipps-code--improved">{improved}</span>
            {drivers.length > 0 && (
              <span class="mds-cc__hipps-drivers">
                ({drivers.length} item{drivers.length !== 1 ? 's' : ''} driving change)
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function SectionStatus({ status }) {
  const iconMap = {
    complete: '✓',
    incomplete: '✗',
    in_progress: '●',
    not_started: '○',
  };
  const classMap = {
    complete: 'mds-cc__section-dot--complete',
    incomplete: 'mds-cc__section-dot--incomplete',
    in_progress: 'mds-cc__section-dot--progress',
    not_started: 'mds-cc__section-dot--empty',
  };
  return (
    <span class={`mds-cc__section-dot ${classMap[status] || ''}`} title={status}>
      {iconMap[status] || '○'}
    </span>
  );
}

function SectionsSection({ sectionProgress }) {
  if (!sectionProgress) return null;

  const { completed = 0, total = 0, sections = [] } = sectionProgress;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div class="mds-cc__detail-section">
      <div class="mds-cc__detail-label">Sections</div>
      <div class="mds-cc__progress-row">
        <div class="mds-cc__progress-bar">
          <div class="mds-cc__progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span class="mds-cc__progress-text">{completed}/{total}</span>
      </div>
      {sections.length > 0 && (
        <div class="mds-cc__sections-grid">
          {sections.map(s => (
            <span key={s.code} class="mds-cc__section-item" title={s.name || s.code}>
              <span class="mds-cc__section-code">{s.code}</span>
              <SectionStatus status={s.status} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ComplianceSection({ compliance }) {
  if (!compliance || compliance.status === 'ok') return null;
  const issues = compliance.issues || [];
  if (issues.length === 0) return null;

  return (
    <div class="mds-cc__detail-section">
      <div class="mds-cc__detail-label">Compliance</div>
      <ul class="mds-cc__compliance-list">
        {issues.map((issue, i) => (
          <li key={i} class="mds-cc__compliance-item">
            <span class="mds-cc__compliance-icon">⚠</span>
            {issue.message || issue}
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuerySection({ querySummary }) {
  if (!querySummary) return null;
  const { pending = 0, signed = 0 } = querySummary;
  if (pending === 0 && signed === 0) return null;

  return (
    <div class="mds-cc__detail-section">
      <div class="mds-cc__detail-label">Queries</div>
      <div class="mds-cc__query-summary">
        {pending > 0 && (
          <span class="mds-cc__query-stat mds-cc__query-stat--pending">
            {pending} pending
          </span>
        )}
        {pending > 0 && signed > 0 && <span class="mds-cc__query-sep">·</span>}
        {signed > 0 && (
          <span class="mds-cc__query-stat mds-cc__query-stat--signed">
            {signed} signed
          </span>
        )}
      </div>
    </div>
  );
}

function ActionButtons({ assessment }) {
  const { pccUrl, patientId, assessmentId, externalAssessmentId } = assessment;

  function openInPCC() {
    const url = pccUrl || `javascript:void(0)`;
    window.open(url, '_blank');
  }

  function goToMDS() {
    const id = externalAssessmentId || assessmentId;
    if (id) {
      const base = window.location.origin;
      window.open(`${base}/clinical/mds3/section.xhtml?ESOLassessid=${id}`, '_blank');
    }
  }

  function viewQueries() {
    if (patientId) {
      const base = window.location.origin;
      window.open(`${base}/pcc-ui/#!/facility/queries?patientId=${patientId}`, '_blank');
    }
  }

  return (
    <div class="mds-cc__actions">
      {pccUrl && (
        <button class="mds-cc__action-btn mds-cc__action-btn--secondary" onClick={openInPCC}>
          Open in PCC ↗
        </button>
      )}
      {(assessment.querySummary?.pending > 0 || assessment.querySummary?.signed > 0) && patientId && (
        <button class="mds-cc__action-btn mds-cc__action-btn--secondary" onClick={viewQueries}>
          View Queries →
        </button>
      )}
      {(externalAssessmentId || assessmentId) && (
        <button class="mds-cc__action-btn mds-cc__action-btn--primary" onClick={goToMDS}>
          Go to MDS →
        </button>
      )}
    </div>
  );
}

export function AssessmentDetail({ assessment }) {
  const { pdpm, sectionProgress, compliance, querySummary } = assessment;

  return (
    <div class="mds-cc__detail" onClick={(e) => e.stopPropagation()}>
      <HippsSection pdpm={pdpm} assessment={assessment} />
      <SectionsSection sectionProgress={sectionProgress} />
      <ComplianceSection compliance={compliance} />
      <QuerySection querySummary={querySummary} />
      <ActionButtons assessment={assessment} />
    </div>
  );
}
