// callback.js - Handles OAuth callback from SuperLTC

(function() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');
  const state = params.get('state');
  const error = params.get('error');

  const titleEl = document.getElementById('title');
  const messageEl = document.getElementById('message');
  const spinnerEl = document.getElementById('spinner');

  function showError(msg) {
    spinnerEl.style.display = 'none';
    titleEl.textContent = 'Authentication Failed';
    titleEl.className = 'error';
    messageEl.textContent = msg;
    messageEl.className = 'error';
  }

  function showSuccess() {
    spinnerEl.style.display = 'none';
    titleEl.textContent = 'Success!';
    titleEl.className = 'success';
    messageEl.textContent = 'You can close this tab.';
    messageEl.className = 'success';
  }

  if (error) {
    showError(error === 'cancelled' ? 'Authorization was cancelled.' : error);
    return;
  }

  if (!token || !state) {
    showError('Missing token or state parameter.');
    return;
  }

  // Send token to background script for validation
  chrome.runtime.sendMessage(
    {
      type: 'AUTH_CALLBACK',
      token: token,
      state: state
    },
    (response) => {
      if (chrome.runtime.lastError) {
        showError('Failed to communicate with extension.');
        return;
      }

      if (response && response.success) {
        showSuccess();

        // Find and focus a PCC tab, then close this callback tab
        chrome.tabs.query({ url: '*://*.pointclickcare.com/*' }, (tabs) => {
          if (tabs && tabs.length > 0) {
            // Focus the first PCC tab
            chrome.tabs.update(tabs[0].id, { active: true });
            chrome.windows.update(tabs[0].windowId, { focused: true });
          }

          // Close this callback tab after brief delay
          setTimeout(() => {
            window.close();
          }, 500);
        });
      } else {
        showError(response?.error || 'Authentication failed.');
      }
    }
  );
})();
