/**
 * MDSCommandCenter — root component for the MDS Command Center overlay.
 *
 * Manages:
 *   - Data fetching via useCommandCenter hook
 *   - Expanded row state (accordion - one at a time)
 *   - Active filter (all / urgent / hipps / queries)
 *   - Sort order (ard / urgency / name)
 *   - Overlay mounting / unmounting
 */
import { useState, useMemo } from 'preact/hooks';
import { useCommandCenter } from './hooks/useCommandCenter.js';
import { CommandCenterHeader } from './CommandCenterHeader.jsx';
import { AssessmentRow } from './AssessmentRow.jsx';
import { AssessmentDetail } from './AssessmentDetail.jsx';

// Urgency ordering for sort
const URGENCY_ORDER = { overdue: 0, urgent: 1, approaching: 2, on_track: 3, completed: 4 };

function getUrgency(assessment) {
  return assessment.urgency || assessment.deadline?.urgency || 'on_track';
}

function filterAssessments(assessments, activeFilter) {
  switch (activeFilter) {
    case 'urgent':
      return assessments.filter(a => {
        const u = getUrgency(a);
        return u === 'urgent' || u === 'overdue';
      });
    case 'hipps':
      return assessments.filter(a => a.pdpm?.hasImprovements);
    case 'queries':
      return assessments.filter(a => (a.querySummary?.pending ?? 0) > 0);
    default:
      return assessments;
  }
}

function sortAssessments(assessments, sortBy) {
  const sorted = [...assessments];
  switch (sortBy) {
    case 'name':
      sorted.sort((a, b) => (a.patientName || '').localeCompare(b.patientName || ''));
      break;
    case 'urgency':
      sorted.sort((a, b) => {
        const uA = URGENCY_ORDER[getUrgency(a)] ?? 99;
        const uB = URGENCY_ORDER[getUrgency(b)] ?? 99;
        return uA - uB;
      });
      break;
    case 'ard':
    default:
      sorted.sort((a, b) => {
        const dA = a.ardDate ? new Date(a.ardDate) : new Date(0);
        const dB = b.ardDate ? new Date(b.ardDate) : new Date(0);
        return dA - dB;
      });
      break;
  }
  return sorted;
}

function LoadingState() {
  return (
    <div class="mds-cc__state-container">
      <div class="mds-cc__spinner" />
      <p class="mds-cc__state-text">Loading assessments...</p>
    </div>
  );
}

function ErrorState({ message, onRetry }) {
  return (
    <div class="mds-cc__state-container">
      <div class="mds-cc__state-icon">⚠</div>
      <p class="mds-cc__state-text">{message}</p>
      <button class="mds-cc__retry-btn" onClick={onRetry}>Retry</button>
    </div>
  );
}

function EmptyState({ activeFilter }) {
  const messages = {
    all: 'No assessments found for this facility.',
    urgent: 'No urgent assessments.',
    hipps: 'No assessments with HIPPS improvement opportunities.',
    queries: 'No assessments with pending queries.',
  };
  return (
    <div class="mds-cc__state-container">
      <div class="mds-cc__state-icon">📋</div>
      <p class="mds-cc__state-text">{messages[activeFilter] || 'No assessments found.'}</p>
    </div>
  );
}

export function MDSCommandCenter({ facilityName, orgSlug, onClose }) {
  const [expandedId, setExpandedId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('ard');

  const { data, loading, error, retry } = useCommandCenter({ facilityName, orgSlug });

  const assessments = data?.assessments || [];
  const summary = data?.summary || {};

  const displayedAssessments = useMemo(() => {
    const filtered = filterAssessments(assessments, activeFilter);
    return sortAssessments(filtered, sortBy);
  }, [assessments, activeFilter, sortBy]);

  function handleToggle(id) {
    setExpandedId(prev => prev === id ? null : id);
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div class="mds-cc__overlay" onClick={handleBackdropClick}>
      <div class="mds-cc__modal" role="dialog" aria-modal="true" aria-label="MDS Command Center">
        <CommandCenterHeader
          summary={summary}
          activeFilter={activeFilter}
          sortBy={sortBy}
          onFilterChange={(f) => { setActiveFilter(f); setExpandedId(null); }}
          onSortChange={setSortBy}
          onClose={onClose}
          facilityName={facilityName}
        />

        <div class="mds-cc__list">
          {loading && <LoadingState />}
          {!loading && error && <ErrorState message={error} onRetry={retry} />}
          {!loading && !error && displayedAssessments.length === 0 && (
            <EmptyState activeFilter={activeFilter} />
          )}
          {!loading && !error && displayedAssessments.map(assessment => {
            const id = assessment.id || assessment.assessmentId || assessment.externalAssessmentId;
            const isExpanded = expandedId === id;
            return (
              <div key={id} class="mds-cc__row-wrapper">
                <AssessmentRow
                  assessment={assessment}
                  isExpanded={isExpanded}
                  onToggle={() => handleToggle(id)}
                />
                {isExpanded && (
                  <AssessmentDetail assessment={assessment} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
