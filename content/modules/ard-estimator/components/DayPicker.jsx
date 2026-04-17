/**
 * DayPicker — ARD date selector (D1-D8) with Gantt timeline.
 *
 * Top row: day buttons showing date, selected/recommended state.
 * Below: Gantt rows for time-sensitive + needs_review items showing
 * which days capture each item.
 */

function formatShortDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  return `${parseInt(parts[1])}/${parseInt(parts[2])}`;
}

export function DayPicker({
  scores,
  selectedDay,
  recommendedDay,
  onSelectDay,
  ganttItems
}) {
  if (!scores || scores.length === 0) return null;

  return (
    <div className="ard-est__day-picker">
      <h3 className="ard-est__section-label">Pick ARD Date</h3>

      {/* Day header row + Gantt grid */}
      <div className="ard-est__timeline">
        {/* Day headers */}
        <div className="ard-est__timeline-row">
          <div className="ard-est__timeline-label" />
          <div className="ard-est__timeline-grid">
            {scores.map(score => {
              const isSelected = score.dayNumber === selectedDay;
              const isRec = score.dayNumber === recommendedDay;
              let cls = 'ard-est__day-btn';
              if (isSelected) cls += ' ard-est__day-btn--selected';
              else if (isRec) cls += ' ard-est__day-btn--recommended';

              return (
                <button
                  key={score.dayNumber}
                  className={cls}
                  onClick={() => onSelectDay(score.dayNumber)}
                  title={`Day ${score.dayNumber}: ${score.date}`}
                >
                  <span className="ard-est__day-num">D{score.dayNumber}</span>
                  <span className="ard-est__day-date">{formatShortDate(score.date)}</span>
                  {isRec && !isSelected && (
                    <span className="ard-est__day-best">BEST</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gantt rows */}
        {ganttItems.map((item, idx) => {
          const hasDateRange = item.firstAdministered && item.lastAdministered;
          const isReview = item.classification === 'needs_review';

          return (
            <div
              key={`${item.mdsItem}-${item.mdsColumn || ''}-${idx}`}
              className="ard-est__timeline-row"
            >
              <div className="ard-est__timeline-label" title={item.description}>
                <span className="ard-est__timeline-label-text">{item.description}</span>
                {item.ntaPoints > 0 && (
                  <span className="ard-est__timeline-label-pts">+{item.ntaPoints}</span>
                )}
              </div>
              <div className="ard-est__timeline-grid">
                {scores.map(score => {
                  const day = score.dayNumber;
                  const captured = item.capturedOnDays.includes(day);
                  const isSelectedDay = day === selectedDay;

                  if (!hasDateRange) {
                    return (
                      <div
                        key={day}
                        className={`ard-est__gantt-cell ard-est__gantt-cell--unknown${isSelectedDay ? ' ard-est__gantt-cell--ring' : ''}${isReview ? ' ard-est__gantt-cell--review' : ''}`}
                        title={`${item.description}: No date range`}
                      >
                        <span className="ard-est__gantt-q">?</span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={day}
                      className={`ard-est__gantt-cell${captured ? ' ard-est__gantt-cell--captured' : ''}${isSelectedDay ? ' ard-est__gantt-cell--ring' : ''}`}
                      title={`Day ${day}: ${captured ? 'Captured' : 'Not captured'}`}
                    >
                      {captured && <span className="ard-est__gantt-num">{day}</span>}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
