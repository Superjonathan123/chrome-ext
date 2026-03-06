import { useState } from 'preact/hooks';
import { CertModal } from './CertModal.jsx';

export function SkipCertModal({ isOpen, onClose, cert, onSkipped }) {
  const [reason, setReason] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function handleSkip() {
    if (!reason.trim()) return;
    setSubmitting(true);
    onSkipped(reason)
      .then(() => { setReason(''); onClose(); })
      .catch(() => setSubmitting(false));
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
      </div>
    </CertModal>
  );
}
