import { useState, useEffect, useRef } from 'preact/hooks';
import { Modal } from '../../components/Modal.jsx';
import { track, toErrorCode } from '../../utils/analytics.js';
import { selectRegion, cropDataUrl, drawHighlightOnDataUrl } from './region-selector.js';

// Bucket free-text length so we never ship the message itself.
function messageLengthBucket(text) {
  const len = (text || '').length;
  if (len <= 100) return 'short';
  if (len <= 500) return 'medium';
  return 'long';
}

export const FeedbackModal = ({ onClose, initialScreenshot = null }) => {
  const [message, setMessage] = useState('');
  const [screenshot, setScreenshot] = useState(initialScreenshot);
  const [capturing, setCapturing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Track whether the close path is a dismissal (vs. a submit-success auto-close).
  // Set to false when submit succeeds so the post-success setTimeout(onClose) is silent.
  const dismissTrackingRef = useRef(true);

  useEffect(() => {
    track('feedback_modal_opened', { source: 'fab' });
  }, []);

  // Dismiss path: close X / Cancel / ESC / backdrop. Submit funnel is Task 22.
  const handleDismiss = () => {
    if (dismissTrackingRef.current) {
      track('feedback_modal_dismissed');
      dismissTrackingRef.current = false; // guard against double-fire
    }
    onClose();
  };

  const hideModal = () => {
    const overlay = document.getElementById('feedback-overlay');
    if (overlay) overlay.style.display = 'none';
  };
  const showModal = () => {
    const overlay = document.getElementById('feedback-overlay');
    if (overlay) overlay.style.display = '';
  };

  // Wait two animation frames so the just-hidden modal is fully painted away
  // before captureVisibleTab fires — otherwise the screenshot includes us.
  const captureVisibleViewport = async () => {
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const res = await chrome.runtime.sendMessage({ type: 'CAPTURE_VIEWPORT' });
    if (!res?.success) throw new Error(res?.error || 'Capture failed');
    return res.dataUrl;
  };

  const handleCapture = async () => {
    setError(null);
    setCapturing(true);
    hideModal();
    try {
      const dataUrl = await captureVisibleViewport();
      setScreenshot(dataUrl);
    } catch (e) {
      console.error('[Feedback] capture failed', e);
      setError(e.message || 'Could not capture screenshot');
    } finally {
      showModal();
      setCapturing(false);
    }
  };

  const handleCrop = async () => {
    setError(null);
    setCapturing(true);
    hideModal();
    try {
      const fresh = await captureVisibleViewport();
      const region = await selectRegion();
      if (!region) return; // user cancelled
      const cropped = await cropDataUrl(fresh, region);
      setScreenshot(cropped);
    } catch (e) {
      console.error('[Feedback] crop failed', e);
      setError(e.message || 'Could not crop screenshot');
    } finally {
      showModal();
      setCapturing(false);
    }
  };

  const handleHighlight = async () => {
    if (!screenshot) return;
    setError(null);
    setCapturing(true);
    hideModal();
    try {
      const region = await selectRegion();
      if (!region) return; // user cancelled
      // Draw on the existing screenshot so multiple highlights stack.
      const annotated = await drawHighlightOnDataUrl(screenshot, region);
      setScreenshot(annotated);
    } catch (e) {
      console.error('[Feedback] highlight failed', e);
      setError(e.message || 'Could not add highlight');
    } finally {
      showModal();
      setCapturing(false);
    }
  };

  const handleSubmit = async () => {
    if (!message.trim()) {
      setError('Please add a message before submitting.');
      return;
    }
    setSubmitting(true);
    setError(null);

    const manifest = chrome.runtime.getManifest();
    const payload = {
      message: message.trim(),
      screenshot: screenshot,
      url: window.location.href,
      pageTitle: document.title,
      extensionVersion: manifest.version,
      userAgent: navigator.userAgent,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      submittedAt: new Date().toISOString(),
    };

    // Modal does not currently collect sentiment (no thumbs / faces) — emit
    // 'neutral' so the funnel still has a categorical value. If sentiment UI
    // gets added later, swap in the user's selection here.
    const submitStart = Date.now();
    track('feedback_submit_started', {
      sentiment: 'neutral',
      has_screenshot: !!screenshot,
      message_length_bucket: messageLengthBucket(message),
    });

    try {
      const res = await chrome.runtime.sendMessage({ type: 'SUBMIT_FEEDBACK', payload });
      if (!res?.success) {
        throw new Error(res?.error || 'Submit failed');
      }
      track('feedback_submit_succeeded', { duration_ms: Date.now() - submitStart });
      setSuccess(true);
      // Submit succeeded — the auto-close below is NOT a dismissal.
      dismissTrackingRef.current = false;
      setTimeout(onClose, 1500);
    } catch (e) {
      track('feedback_submit_failed', { error_code: toErrorCode(e) });
      console.error('[Feedback] submit failed', e);
      setError(e.message || 'Could not send feedback');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <Modal
        isOpen={true}
        onClose={onClose}
        title="Thanks!"
        size="small"
      >
        <div className="super-feedback__success">
          <div className="super-feedback__success-check">✓</div>
          <p>Feedback sent. Thank you!</p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={true}
      onClose={handleDismiss}
      title="Send feedback"
      size="medium"
      closeOnBackdrop={!capturing && !submitting}
      closeOnEscape={!capturing && !submitting}
      actions={[
        { label: 'Cancel', variant: 'secondary', onClick: handleDismiss, disabled: submitting },
        {
          label: submitting ? 'Sending…' : 'Send feedback',
          variant: 'primary',
          onClick: handleSubmit,
          disabled: submitting || !message.trim(),
        },
      ]}
    >
      <div className="super-feedback">
        <label className="super-feedback__label" htmlFor="super-feedback-message">
          What's on your mind?
        </label>
        <textarea
          id="super-feedback-message"
          className="super-feedback__textarea"
          value={message}
          onInput={(e) => setMessage(e.target.value)}
          placeholder="Bug, idea, confusion, anything…"
          rows={5}
          disabled={submitting}
        />

        <div className="super-feedback__screenshot">
          {screenshot ? (
            <div className="super-feedback__preview">
              <img src={screenshot} alt="Captured screenshot" />
              <div className="super-feedback__preview-actions">
                {/* NO_TRACK: screenshot annotation sub-flow inside feedback modal */}
                <button
                  type="button"
                  className="super-feedback__link"
                  onClick={handleHighlight}
                  disabled={submitting || capturing}
                  title="Draw a red box on the screenshot to point at something"
                >
                  Highlight
                </button>
                {/* NO_TRACK: screenshot annotation sub-flow inside feedback modal */}
                <button
                  type="button"
                  className="super-feedback__link"
                  onClick={handleCrop}
                  disabled={submitting || capturing}
                >
                  Crop
                </button>
                {/* NO_TRACK: screenshot annotation sub-flow inside feedback modal */}
                <button
                  type="button"
                  className="super-feedback__link super-feedback__link--danger"
                  onClick={() => setScreenshot(null)}
                  disabled={submitting}
                >
                  Hide
                </button>
              </div>
            </div>
          ) : (
            // NO_TRACK: screenshot capture sub-flow inside feedback modal
            <button
              type="button"
              className="super-feedback__capture-btn"
              onClick={handleCapture}
              disabled={submitting || capturing}
            >
              {capturing ? 'Capturing…' : '📷 Add screenshot'}
            </button>
          )}
        </div>

        {error && <div className="super-feedback__error">{error}</div>}
      </div>
    </Modal>
  );
};
