// Background service worker for Super LTC Chrome Extension
// Handles cookie access, cross-origin requests, and authentication

// Import config
importScripts('../config.js');

// Helper: Make authenticated API requests
async function apiRequest(endpoint, options = {}) {
  const { authToken } = await chrome.storage.local.get('authToken');
  if (!authToken) {
    throw new Error('Not authenticated');
  }

  const response = await fetch(`${CONFIG.API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
      ...options.headers,
    },
  });

  if (response.status === 401) {
    // Token revoked or invalid - clear storage
    await chrome.storage.local.remove(['authToken', 'user']);
    throw new Error('Session expired');
  }

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Get PointClickCare org cookie
  if (message.type === 'GET_ORG') {
    chrome.cookies.getAll({ domain: '.pointclickcare.com' }, (cookies) => {
      const lastOrgCookie = cookies.find(c => c.name === 'last_org');
      sendResponse({
        org: lastOrgCookie ? lastOrgCookie.value : null,
        allCookies: cookies.map(c => ({ name: c.name, value: c.value }))
      });
    });
    return true;
  }

  // Initiate login - generate state and return auth URL
  if (message.type === 'LOGIN') {
    (async () => {
      try {
        const state = crypto.randomUUID();
        const redirectUri = chrome.runtime.getURL('callback.html');
        await chrome.storage.local.set({ authState: state });

        const authUrl = `${CONFIG.API_BASE}/auth/extension?redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
        sendResponse({ success: true, authUrl });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true;
  }

  // Handle OAuth callback - validate state and store token
  if (message.type === 'AUTH_CALLBACK') {
    (async () => {
      try {
        const { token, state } = message;

        // Verify state matches (CSRF protection)
        const { authState } = await chrome.storage.local.get('authState');
        if (state !== authState) {
          sendResponse({ success: false, error: 'State mismatch - possible CSRF attack' });
          return;
        }

        // Clear the auth state
        await chrome.storage.local.remove('authState');

        // Validate token with API
        const validateUrl = `${CONFIG.API_BASE}/api/auth/extension/validate`;
        console.log('Super LTC: Validating token at:', validateUrl);

        const response = await fetch(validateUrl, {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        console.log('Super LTC: Validation response status:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Super LTC: Validation failed:', response.status, errorText);
          sendResponse({ success: false, error: `Token validation failed: ${response.status} - ${errorText}` });
          return;
        }

        const data = await response.json();
        console.log('Super LTC: Validation response:', data);
        const { user } = data;

        // Store token and user info
        await chrome.storage.local.set({
          authToken: token,
          user: user,
        });

        sendResponse({ success: true, user });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true;
  }

  // Get current auth state
  if (message.type === 'GET_AUTH_STATE') {
    (async () => {
      try {
        const { authToken, user } = await chrome.storage.local.get(['authToken', 'user']);

        if (!authToken) {
          sendResponse({ authenticated: false, user: null });
          return;
        }

        // Optionally validate token is still valid
        if (message.validate) {
          try {
            const response = await fetch(`${CONFIG.API_BASE}/api/auth/extension/validate`, {
              headers: { 'Authorization': `Bearer ${authToken}` },
            });

            if (!response.ok) {
              // Token invalid - clear storage
              await chrome.storage.local.remove(['authToken', 'user']);
              sendResponse({ authenticated: false, user: null });
              return;
            }

            const { user: validatedUser } = await response.json();
            // Update stored user info
            await chrome.storage.local.set({ user: validatedUser });
            sendResponse({ authenticated: true, user: validatedUser });
          } catch {
            // Network error - return cached state
            sendResponse({ authenticated: true, user });
          }
        } else {
          sendResponse({ authenticated: true, user });
        }
      } catch (error) {
        sendResponse({ authenticated: false, user: null, error: error.message });
      }
    })();
    return true;
  }

  // Logout - clear stored auth data
  if (message.type === 'LOGOUT') {
    (async () => {
      try {
        await chrome.storage.local.remove(['authToken', 'user', 'authState']);
        sendResponse({ success: true });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true;
  }

  // Make authenticated API request (for use by popup/content scripts)
  if (message.type === 'API_REQUEST') {
    (async () => {
      try {
        const result = await apiRequest(message.endpoint, message.options);
        sendResponse({ success: true, data: result });
      } catch (error) {
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true;
  }
});

// Log when service worker starts
console.log('Super LTC background service worker started');
console.log('API Base:', CONFIG.API_BASE);
