// Toast Notification Component for Super LTC Chrome Extension
// Provides non-blocking notifications with auto-dismiss

const SuperToast = {
  container: null,

  /**
   * Initialize toast container
   */
  init() {
    if (this.container) return;

    this.container = document.createElement('div');
    this.container.className = 'super-toast-container';
    document.body.appendChild(this.container);
  },

  /**
   * Show a success toast
   * @param {string} message - Toast message
   * @param {Object} options - Additional options
   */
  success(message, options = {}) {
    this.show({
      type: 'success',
      icon: '&#10003;',
      message,
      ...options
    });
  },

  /**
   * Show an error toast
   * @param {string} message - Toast message
   * @param {Object} options - Additional options
   */
  error(message, options = {}) {
    this.show({
      type: 'error',
      icon: '!',
      message,
      duration: 5000, // Errors stay longer
      ...options
    });
  },

  /**
   * Show an info toast
   * @param {string} message - Toast message
   * @param {Object} options - Additional options
   */
  info(message, options = {}) {
    this.show({
      type: 'info',
      icon: 'i',
      message,
      ...options
    });
  },

  /**
   * Show a warning toast
   * @param {string} message - Toast message
   * @param {Object} options - Additional options
   */
  warning(message, options = {}) {
    this.show({
      type: 'warning',
      icon: '&#9888;',
      message,
      ...options
    });
  },

  /**
   * Show a toast notification
   * @param {Object} options
   * @param {string} options.type - 'success', 'error', 'info', 'warning'
   * @param {string} options.icon - Icon character
   * @param {string} options.message - Toast message
   * @param {number} options.duration - Auto-dismiss duration (ms), 0 to disable
   * @param {string} options.action - Action button text
   * @param {Function} options.onAction - Action button callback
   */
  show(options) {
    this.init();

    const {
      type = 'info',
      icon = '',
      message,
      duration = 3000,
      action,
      onAction
    } = options;

    const toast = document.createElement('div');
    toast.className = `super-toast super-toast--${type}`;

    toast.innerHTML = `
      <div class="super-toast__content">
        ${icon ? `<span class="super-toast__icon">${icon}</span>` : ''}
        <span class="super-toast__message">${message}</span>
      </div>
      ${action ? `<button class="super-toast__action">${action}</button>` /* NO_TRACK: toast action handled by caller */ : ''}
      <button class="super-toast__close">&times;</button> <!-- NO_TRACK: toast dismiss -->
    `;

    // Close button handler
    toast.querySelector('.super-toast__close').addEventListener('click', () => {
      this.dismiss(toast);
    });

    // Action button handler
    if (action && onAction) {
      toast.querySelector('.super-toast__action').addEventListener('click', () => {
        onAction();
        this.dismiss(toast);
      });
    }

    // Add to container
    this.container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('super-toast--visible');
    });

    // Auto-dismiss
    if (duration > 0) {
      toast._timeout = setTimeout(() => {
        this.dismiss(toast);
      }, duration);
    }

    return toast;
  },

  /**
   * Dismiss a toast
   * @param {HTMLElement} toast - Toast element to dismiss
   */
  dismiss(toast) {
    if (!toast || !toast.parentElement) return;

    // Clear timeout if exists
    if (toast._timeout) {
      clearTimeout(toast._timeout);
    }

    // Animate out
    toast.classList.remove('super-toast--visible');
    toast.classList.add('super-toast--dismissing');

    setTimeout(() => {
      toast.remove();
    }, 300);
  },

  /**
   * Dismiss all toasts
   */
  dismissAll() {
    if (!this.container) return;
    this.container.querySelectorAll('.super-toast').forEach(toast => {
      this.dismiss(toast);
    });
  }
};

// Make available globally
window.SuperToast = SuperToast;
