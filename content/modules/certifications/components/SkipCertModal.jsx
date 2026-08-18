import { useState } from 'preact/hooks';
import { CertModal } from './CertModal.jsx';

export function SkipCertModal({ isOpen, onClose, cert, onSkipped }) {
  const [reason, setReason] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  function handleSkip() {
    if (!reason.trim()) return;
    setSubmitting(true);
    setError(null);
    onSkipped(reason)
      .then(() => { setReason(''); setError(null); onClose(); })
      .catch((err) => {
        // Swallowing this is what turned a 400 into a dead button: the
        // extension posted { reason } while the route destructures
        // { skipReason }, so every skip failed silently and looked like
        // nothing happened. Never fail quietly here again.
        console.error('[Certifications] Skip failed:', err);
        setError(err?.message || 'Could not skip. Try again.');
        setSubmitting(false);
      });
  }

  return (
    <CertModal
      isOpen={isOpen}
      onClose={onClose}
      title="Skip Certification"
      subtitle={cert?.patientName}
      actions={[
        { label: 'Cancel', variant: 'secondary', onClick: onClose },
        { label: submitting ? 'Skipping...' : 'Skip', variant: 'primary', onClick: handleSkip, disabled: !reason.trim() || submitting }
      ]}
    >
      <div class="cm-section">
        <div class="cm-section__head">
          <span class="cm-section__label">Reason for Skipping</span>
        </div>
        <textarea
          class="cm-input cm-input--textarea"
          rows={3}
          value={reason}
          onInput={(e) => setReason(e.target.value)}
          placeholder="Why is this certification being skipped?"
        />
        {error && <div class="cm-error" role="alert">{error}</div>}
      </div>
    </CertModal>
  );
}
