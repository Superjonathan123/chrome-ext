/**
 * Two small circles showing Step 1 (diagnosis) and Step 2 (active status) pass/fail
 */
export const StepIndicator = ({ diagnosisPassed, activeStatusPassed }) => {
  const getClass = (val) => {
    if (val === true) return 'pass';
    if (val === false) return 'fail';
    return 'na';
  };

  const getIcon = (val) => {
    if (val === true) return '\u2713';
    if (val === false) return '\u2717';
    return '\u2014';
  };

  return (
    <span className="query-items__steps" title={`Step 1: ${diagnosisPassed ? 'Pass' : diagnosisPassed === false ? 'Fail' : 'N/A'} | Step 2: ${activeStatusPassed ? 'Pass' : activeStatusPassed === false ? 'Fail' : 'N/A'}`}>
      <span className={`query-items__step-circle query-items__step-circle--${getClass(diagnosisPassed)}`}>
        {getIcon(diagnosisPassed)}
      </span>
      <span className={`query-items__step-circle query-items__step-circle--${getClass(activeStatusPassed)}`}>
        {getIcon(activeStatusPassed)}
      </span>
    </span>
  );
};
