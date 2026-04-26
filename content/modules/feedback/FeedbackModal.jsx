import { useState } from 'preact/hooks';
import { Modal } from '../../components/Modal.jsx';
import { selectRegion, cropDataUrl, drawHighlightOnDataUrl } from './region-selector.js';

export const FeedbackModal = ({ onClose, initialScreenshot = null }) => {
  const [message, setMessage] = useState('');
  const [screenshot, setScreenshot] = useState(initialScreenshot);
  const [capturing, setCapturing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

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

    try {
      const res = await chrome.runtime.sendMessage({ type: 'SUBMIT_FEEDBACK', payload });
      if (!res?.success) {
        throw new Error(res?.error || 'Submit failed');
      }
      setSuccess(true);
      setTimeout(onClose, 1500);
    } catch (e) {
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
      onClose={onClose}
      title="Send feedback"
      size="medium"
      closeOnBackdrop={!capturing && !submitting}
      closeOnEscape={!capturing && !submitting}
      actions={[
        { label: 'Cancel', variant: 'secondary', onClick: onClose, disabled: submitting },
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
                <button
                  type="button"
                  className="super-feedback__link"
                  onClick={handleHighlight}
                  disabled={submitting || capturing}
                  title="Draw a red box on the screenshot to point at something"
                >
                  Highlight
                </button>
                <button
                  type="button"
                  className="super-feedback__link"
                  onClick={handleCrop}
                  disabled={submitting || capturing}
                >
                  Crop
                </button>
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
