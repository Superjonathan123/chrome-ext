// Background service worker for Super LTC Chrome Extension
// Handles cross-origin requests and authentication

// CONFIG is inlined here since service workers use ES modules and can't use importScripts
// __DEV_MODE__ is replaced at build time by Vite:
//   npm run dev        → true  (uses localhost:3000)
//   npm run build:prod → false (uses superltc.com)
const CONFIG = {
  DEV_MODE: __DEV_MODE__,
  get API_BASE() {
    return this.DEV_MODE ? 'http://localhost:3000' : 'https://superltc.com';
  },
};

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
  // Initiate login - generate state and return auth URL
  if (message.type === 'LOGIN') {
    (async () => {
      try {
        const state = crypto.randomUUID();
        const redirectUri = `${CONFIG.API_BASE}/auth/extension/callback`;
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

  // Unhandled message type - don't hold the channel open
  return false;
});

// ============================================
// Streaming Chat Handler (Port-based)
// ============================================
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== 'chat-stream') return;

  port.onMessage.addListener(async (msg) => {
    if (msg.type === 'START_STREAM') {
      await handleChatStream(port, msg.messages, msg.context);
    }
  });
});

async function handleChatStream(port, messages, context) {
  try {
    const { authToken } = await chrome.storage.local.get('authToken');
    if (!authToken) {
      port.postMessage({ type: 'ERROR', error: 'Not authenticated' });
      return;
    }

    const url = `${CONFIG.API_BASE}/api/chat`;
    console.log('Super LTC Chat: Starting stream to', url);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      body: JSON.stringify({ messages, context })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Super LTC Chat: API error', response.status, errorText);
      port.postMessage({ type: 'ERROR', error: `API error: ${response.status}` });
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      try {
        port.postMessage({ type: 'CHUNK', data: chunk });
      } catch (e) {
        // Port disconnected
        console.log('Super LTC Chat: Port disconnected during stream');
        break;
      }
    }

    try {
      port.postMessage({ type: 'DONE' });
    } catch (e) {
      // Port already disconnected
    }

    console.log('Super LTC Chat: Stream complete');

  } catch (error) {
    console.error('Super LTC Chat: Stream error', error);
    try {
      port.postMessage({ type: 'ERROR', error: error.message });
    } catch (e) {
      // Port disconnected
    }
  }
}

// Log when service worker starts
console.log('Super LTC background service worker started');
console.log('API Base:', CONFIG.API_BASE);
