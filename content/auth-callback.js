// Auth callback content script
// Runs on superltc.com/auth/extension/callback to relay token back to the extension

(function () {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const state = params.get('state');
  const error = params.get('error');

  if (error) {
    // Nothing to do — the server-side page already shows the error
    return;
  }

  if (!token || !state) {
    return;
  }

  // Send token to background script for validation
  chrome.runtime.sendMessage(
    {
      type: 'AUTH_CALLBACK',
      token: token,
      state: state,
    },
    (response) => {
      if (chrome.runtime.lastError) {
        document.body.innerHTML =
          '<div style="text-align:center;padding:40px;font-family:system-ui"><h2 style="color:#dc2626">Authentication Failed</h2><p>Could not communicate with the extension.</p></div>';
        return;
      }

      if (response && response.success) {
        document.body.innerHTML =
          '<div style="text-align:center;padding:40px;font-family:system-ui"><h2 style="color:#16a34a">Success!</h2><p>You can close this tab.</p></div>';

        // Auto-close after a moment
        setTimeout(() => {
          window.close();
        }, 1000);
      } else {
        document.body.innerHTML =
          '<div style="text-align:center;padding:40px;font-family:system-ui"><h2 style="color:#dc2626">Authentication Failed</h2><p>' +
          (response?.error || 'Unknown error') +
          '</p></div>';
      }
    }
  );
})();
