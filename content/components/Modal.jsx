// Preact Modal Component for Super LTC Chrome Extension
// Modern, accessible modal with focus management and backward compatibility

import { useEffect, useRef } from 'preact/hooks';

/**
 * Modal Component
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether modal is visible
 * @param {Function} props.onClose - Callback when modal closes
 * @param {string} props.title - Modal title
 * @param {string} [props.icon] - Icon character or emoji
 * @param {string} [props.badge] - Badge text
 * @param {preact.ComponentChildren} props.children - Modal content
 * @param {Array} [props.actions] - Array of {label, onClick, variant, disabled}
 * @param {string} [props.size='medium'] - 'small', 'medium', 'large'
 * @param {string} [props.className] - Additional CSS class
 * @param {boolean} [props.closeOnBackdrop=true] - Close when clicking backdrop
 * @param {boolean} [props.closeOnEscape=true] - Close when pressing ESC
 */
export const Modal = ({
  isOpen,
  onClose,
  title,
  icon,
  badge,
  children,
  actions = [],
  size = 'medium',
  className = '',
  closeOnBackdrop = true,
  closeOnEscape = true
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Focus management
  useEffect(() => {
    if (!isOpen) return;

    // Store previous focus
    previousActiveElement.current = document.activeElement;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus first focusable element after animation
    const timer = setTimeout(() => {
      const firstFocusable = modalRef.current?.querySelector(
        'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
      // Restore focus
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen]);

  // Keyboard handling (ESC + focus trap)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      // Close on Escape
      if (e.key === 'Escape' && closeOnEscape) {
        onClose();
        return;
      }

      // Focus trap on Tab
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, closeOnEscape]);

  if (!isOpen) return null;

  const handleBackdropClick = () => {
    if (closeOnBackdrop) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      className={`super-modal super-modal--${size} super-modal--visible ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="super-modal__backdrop" onClick={handleBackdropClick} />
      <div className="super-modal__container">
        <div className="super-modal__header">
          <div className="super-modal__title-row">
            {icon && <span className="super-modal__icon">{icon}</span>}
            <span id="modal-title" className="super-modal__title">{title}</span>
            {badge && <span className="super-modal__badge">{badge}</span>}
          </div>
          <button
            className="super-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="super-modal__body">
          {children}
        </div>
        {actions.length > 0 && (
          <div className="super-modal__footer">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`super-modal__btn super-modal__btn--${action.variant || 'secondary'}`}
                onClick={action.onClick}
                disabled={action.disabled}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================
// Backward Compatibility Bridge
// ============================================
// This allows vanilla JS code to continue using window.SuperModal API
// while the actual rendering uses the new Preact component

import { render } from 'preact';

const SuperModalBridge = {
  activeModal: null,
  previousActiveElement: null,
  modalRoot: null,

  /**
   * Create and show a modal (backward compatible API)
   * @param {Object} options
   * @param {string} options.title - Modal title
   * @param {string} options.icon - Icon character or emoji
   * @param {string} options.content - HTML content for body
   * @param {Array} options.actions - Array of {label, action, variant, disabled}
   * @param {string} options.size - 'small', 'medium', 'large'
   * @param {Function} options.onClose - Callback when modal is closed
   * @param {string} options.className - Additional CSS class
   * @param {string} options.badge - Badge text
   * @returns {Object} Modal API
   */
  show(options) {
    const {
      title = '',
      icon = '',
      content = '',
      actions = [],
      size = 'medium',
      className = '',
      badge = '',
      onClose = null
    } = options;

    // Create modal root if it doesn't exist
    if (!this.modalRoot) {
      this.modalRoot = document.createElement('div');
      this.modalRoot.id = 'super-modal-root';
      document.body.appendChild(this.modalRoot);
    }

    // Close existing modal
    if (this.activeModal) {
      this.close(false);
    }

    let isOpen = true;
    const modalApi = {
      element: this.modalRoot,
      updateContent: (newContent) => {
        content = newContent;
        renderModal();
      },
      updateActions: (newActions) => {
        actions.splice(0, actions.length, ...newActions);
        renderModal();
      },
      showLoading: (message = 'Loading...') => {
        content = `
          <div class="super-modal__loading">
            <div class="super-modal__spinner"></div>
            <span>${message}</span>
          </div>
        `;
        renderModal();
      },
      showError: (message) => {
        content = `
          <div class="super-modal__error">
            <div class="super-modal__error-icon">!</div>
            <p>${message}</p>
          </div>
        `;
        renderModal();
      }
    };

    const handleClose = () => {
      if (onClose) onClose();
      this.close();
    };

    // Convert vanilla actions to Preact format
    const preactActions = actions.map(action => ({
      label: action.label,
      onClick: (e) => {
        if (action.action) {
          action.action(e.currentTarget);
        }
      },
      variant: action.variant,
      disabled: action.disabled
    }));

    const renderModal = () => {
      render(
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          title={title}
          icon={icon}
          badge={badge}
          size={size}
          className={className}
          actions={preactActions}
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Modal>,
        this.modalRoot
      );
    };

    renderModal();
    this.activeModal = modalApi;
    return modalApi;
  },

  /**
   * Close the active modal
   * @param {boolean} animate - Whether to animate (not used in Preact version, but kept for compatibility)
   */
  close(animate = true) {
    if (this.modalRoot) {
      render(null, this.modalRoot);
      this.modalRoot.remove();
      this.modalRoot = null;
    }
    this.activeModal = null;
  },

  /**
   * Update modal content
   * @param {string} content - New HTML content
   */
  updateContent(content) {
    if (this.activeModal) {
      this.activeModal.updateContent(content);
    }
  },

  /**
   * Update modal actions
   * @param {Array} actions - New actions array
   */
  updateActions(actions) {
    if (this.activeModal) {
      this.activeModal.updateActions(actions);
    }
  },

  /**
   * Show loading state
   * @param {string} message - Loading message
   */
  showLoading(message = 'Loading...') {
    if (this.activeModal) {
      this.activeModal.showLoading(message);
    }
  },

  /**
   * Show error state
   * @param {string} message - Error message
   */
  showError(message) {
    if (this.activeModal) {
      this.activeModal.showError(message);
    }
  },

  /**
   * Get a button by its label
   * @param {string} label - Button label
   * @returns {HTMLElement|null}
   */
  getButton(label) {
    if (!this.modalRoot) return null;
    return Array.from(this.modalRoot.querySelectorAll('.super-modal__btn'))
      .find(btn => btn.textContent.trim() === label);
  },

  /**
   * Set button loading state
   * @param {string} label - Button label
   * @param {boolean} loading - Loading state
   * @param {string} loadingText - Text while loading
   */
  setButtonLoading(label, loading, loadingText = 'Loading...') {
    const btn = this.getButton(label);
    if (!btn) return;

    if (loading) {
      btn._originalText = btn.textContent;
      btn.textContent = loadingText;
      btn.disabled = true;
    } else {
      btn.textContent = btn._originalText || label;
      btn.disabled = false;
    }
  }
};

// Make available globally for backward compatibility with vanilla JS
window.SuperModal = SuperModalBridge;
