// Reusable Modal Component for Super LTC Chrome Extension
// Provides animated, accessible modals with focus management

const SuperModal = {
  activeModal: null,
  previousActiveElement: null,
  _loweredOverlays: null,

  /**
   * Create and show a modal
   * @param {Object} options
   * @param {string} options.title - Modal title
   * @param {string} options.icon - Icon character or emoji
   * @param {string} options.content - HTML content for body
   * @param {Array} options.actions - Array of {label, action, variant, disabled}
   * @param {string} options.size - 'small', 'medium', 'large' (default: medium)
   * @param {Function} options.onClose - Callback when modal is closed
   * @param {string} options.className - Additional CSS class for modal
   * @returns {HTMLElement} The modal element
   */
  show(options) {
    // Store previous focus
    this.previousActiveElement = document.activeElement;

    // Close any existing modal
    if (this.activeModal) {
      this.close(false);
    }

    // Temporarily lower z-index of overlays so modal always appears on top
    // (PCC host page CSS can create unexpected stacking contexts)
    this._loweredOverlays = [];
    for (const sel of ['.pdpm-an__overlay', '.pdpm-an__panel', '.pdpm-an__panel-backdrop', '.mds-cc__overlay']) {
      document.querySelectorAll(sel).forEach(el => {
        this._loweredOverlays.push({ el, original: el.style.zIndex });
        el.style.zIndex = '1';
      });
    }

    const modal = this._createModal(options);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Trigger animation
    requestAnimationFrame(() => {
      modal.classList.add('super-modal--visible');
    });

    // Setup keyboard handling
    this._setupKeyboardHandling(modal, options);

    // Focus first focusable element
    setTimeout(() => {
      const firstFocusable = modal.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }, 100);

    this.activeModal = modal;
    return modal;
  },

  /**
   * Close the active modal
   * @param {boolean} animate - Whether to animate the close
   */
  close(animate = true) {
    const modal = this.activeModal;
    if (!modal) return;

    const doClose = () => {
      modal.remove();
      document.body.style.overflow = '';
      this.activeModal = null;

      // Restore lowered overlay z-indices
      if (this._loweredOverlays) {
        for (const { el, original } of this._loweredOverlays) {
          el.style.zIndex = original;
        }
        this._loweredOverlays = null;
      }

      // Restore focus
      if (this.previousActiveElement) {
        this.previousActiveElement.focus();
        this.previousActiveElement = null;
      }
    };

    if (animate) {
      modal.classList.remove('super-modal--visible');
      modal.classList.add('super-modal--closing');
      setTimeout(doClose, 200);
    } else {
      doClose();
    }
  },

  /**
   * Update modal content
   * @param {string} content - New HTML content for body
   */
  updateContent(content) {
    if (!this.activeModal) return;
    const body = this.activeModal.querySelector('.super-modal__body');
    if (body) {
      body.innerHTML = content;
    }
  },

  /**
   * Update modal actions
   * @param {Array} actions - New actions array
   */
  updateActions(actions) {
    if (!this.activeModal) return;
    const footer = this.activeModal.querySelector('.super-modal__footer');
    if (footer) {
      footer.innerHTML = this._buildActionsHTML(actions);
      footer.style.display = actions.length > 0 ? '' : 'none';
      this._setupActionListeners(footer, actions);
    }
  },

  /**
   * Show loading state in modal body
   * @param {string} message - Loading message
   */
  showLoading(message = 'Loading...') {
    this.updateContent(`
      <div class="super-modal__loading">
        <div class="super-modal__spinner"></div>
        <span>${message}</span>
      </div>
    `);
  },

  /**
   * Show error state in modal body
   * @param {string} message - Error message
   */
  showError(message) {
    this.updateContent(`
      <div class="super-modal__error">
        <div class="super-modal__error-icon">!</div>
        <p>${message}</p>
      </div>
    `);
  },

  // Private methods

  _createModal(options) {
    const {
      title = '',
      icon = '',
      content = '',
      actions = [],
      size = 'medium',
      className = '',
      badge = ''
    } = options;

    const modal = document.createElement('div');
    modal.className = `super-modal super-modal--${size} ${className}`.trim();

    modal.innerHTML = `
      <div class="super-modal__backdrop"></div>
      <div class="super-modal__container">
        <div class="super-modal__header">
          <div class="super-modal__title-row">
            ${icon ? `<span class="super-modal__icon">${icon}</span>` : ''}
            <span class="super-modal__title">${title}</span>
            ${badge ? `<span class="super-modal__badge">${badge}</span>` : ''}
          </div>
          <button class="super-modal__close" aria-label="Close">&times;</button>
        </div>
        <div class="super-modal__body">
          ${content}
        </div>
        <div class="super-modal__footer" ${actions.length === 0 ? 'style="display:none"' : ''}>
          ${this._buildActionsHTML(actions)}
        </div>
      </div>
    `;

    // Close button handler
    modal.querySelector('.super-modal__close').addEventListener('click', () => {
      if (options.onClose) options.onClose();
      this.close();
    });

    // Backdrop click handler
    modal.querySelector('.super-modal__backdrop').addEventListener('click', () => {
      if (options.onClose) options.onClose();
      this.close();
    });

    // Setup action button listeners
    if (actions.length > 0) {
      this._setupActionListeners(modal.querySelector('.super-modal__footer'), actions);
    }

    return modal;
  },

  _buildActionsHTML(actions) {
    return actions.map((action, index) => {
      const variant = action.variant || 'secondary';
      const disabled = action.disabled ? 'disabled' : '';
      return `
        <button
          class="super-modal__btn super-modal__btn--${variant}"
          data-action-index="${index}"
          ${disabled}
        >
          ${action.label}
        </button>
      `;
    }).join('');
  },

  _setupActionListeners(footer, actions) {
    footer.querySelectorAll('[data-action-index]').forEach(btn => {
      const index = parseInt(btn.getAttribute('data-action-index'));
      const action = actions[index];
      if (action && action.action) {
        btn.addEventListener('click', () => action.action(btn));
      }
    });
  },

  _setupKeyboardHandling(modal, options) {
    const handler = (e) => {
      // Close on Escape
      if (e.key === 'Escape') {
        if (options.onClose) options.onClose();
        this.close();
        document.removeEventListener('keydown', handler);
        return;
      }

      // Focus trap
      if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
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

    document.addEventListener('keydown', handler);

    // Store handler for cleanup
    modal._keyboardHandler = handler;
  },

  /**
   * Get a button by its label
   * @param {string} label - Button label
   * @returns {HTMLElement|null}
   */
  getButton(label) {
    if (!this.activeModal) return null;
    return Array.from(this.activeModal.querySelectorAll('.super-modal__btn'))
      .find(btn => btn.textContent.trim() === label);
  },

  /**
   * Set button loading state
   * @param {string} label - Button label
   * @param {boolean} loading - Loading state
   * @param {string} loadingText - Text to show while loading
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

// Make available globally for other scripts
window.SuperModal = SuperModal;
