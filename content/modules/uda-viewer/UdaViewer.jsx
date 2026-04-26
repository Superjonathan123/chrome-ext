import { useEffect, useRef } from 'preact/hooks';
import { track } from '../../utils/analytics.js';

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export function UdaViewer({ uda, matchKeys, quoteText, onClose }) {
  const matches = matchKeys instanceof Set ? matchKeys : new Set(matchKeys || []);
  const firstMatchRef = useRef(null);

  // Mount-only open event. The UDA viewer surface is launched from evidence
  // viewers / mds-overlay; we treat each mount as one "viewer opened".
  useEffect(() => {
    track('uda_viewer_opened', { source: 'evidence' });
  }, []);

  useEffect(() => {
    if (firstMatchRef.current) {
      const id = setTimeout(() => {
        firstMatchRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 80);
      return () => clearTimeout(id);
    }
  }, [uda]);

  const totalSections = uda?.answers?.sections?.length ?? 0;
  let firstMatchAssigned = false;

  return (
    <div className="super-uda-viewer">
      <div className="super-uda-viewer__header">
        <div className="super-uda-viewer__title">
          <svg className="super-uda-viewer__title-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M9 12h6M9 16h6M9 8h0" />
          </svg>
          <span>{uda?.description || 'UDA Assessment'}</span>
        </div>
        <div className="super-uda-viewer__meta">
          {uda?.date && (
            <span className="super-uda-viewer__meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {formatDate(uda.date)}
            </span>
          )}
          <span className="super-uda-viewer__meta-item">
            {totalSections} section{totalSections !== 1 ? 's' : ''}
          </span>
          {matches.size > 0 && (
            <span className="super-uda-viewer__meta-matches">
              {matches.size} match{matches.size !== 1 ? 'es' : ''}
            </span>
          )}
        </div>
        {onClose && (
          // NO_TRACK
          <button
            type="button"
            className="super-uda-viewer__close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        )}
      </div>

      {quoteText && (
        <div className="super-uda-viewer__quote-bar">
          <span className="super-uda-viewer__quote-label">Looking for:</span>
          <span className="super-uda-viewer__quote-text">&ldquo;{quoteText}&rdquo;</span>
        </div>
      )}

      <div className="super-uda-viewer__body">
        {!uda?.answers ? (
          <div className="super-uda-viewer__empty">
            UDA answers have not been synced for this assessment.
          </div>
        ) : (
          uda.answers.sections.map((section, s) => (
            <div className="super-uda-viewer__section" key={s}>
              <div className="super-uda-viewer__section-title">
                {section.description}
                {matches.size > 0 && (
                  <span className="super-uda-viewer__section-match-count">
                    ({matches.size} match{matches.size !== 1 ? 'es' : ''})
                  </span>
                )}
              </div>
              {section.content.map((content, c) => (
                <div className="super-uda-viewer__content-group" key={c}>
                  {content.sectionTitle && content.sectionTitle !== section.description && (
                    <div className="super-uda-viewer__subheader">{content.sectionTitle}</div>
                  )}
                  {content.questions.map((question, q) => {
                    const qKey = `${s}:${c}:${q}`;
                    const valueMatches = matches.has(qKey);
                    const anyOptionMatches =
                      question.options?.some((_, o) => matches.has(`${qKey}:${o}`)) ?? false;
                    const highlighted = valueMatches || anyOptionMatches;

                    const assignRef = highlighted && !firstMatchAssigned;
                    if (assignRef) firstMatchAssigned = true;

                    const displayValue =
                      question.value ??
                      question.options
                        ?.filter(o => o.selected)
                        .map(o => o.text)
                        .join('; ') ??
                      '';

                    return (
                      <div
                        key={q}
                        ref={assignRef ? firstMatchRef : undefined}
                        className={
                          'super-uda-viewer__row' +
                          (highlighted ? ' super-uda-viewer__row--highlighted' : '')
                        }
                      >
                        <div className="super-uda-viewer__row-question">
                          {question.questionText}
                        </div>
                        <div className="super-uda-viewer__row-answer">
                          {displayValue || <span className="super-uda-viewer__row-empty">—</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
