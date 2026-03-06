// Super LTC Chrome Extension Popup Script

document.addEventListener('DOMContentLoaded', async () => {
  const facilityEl = document.getElementById('facility');
  const orgEl = document.getElementById('org');
  const userEl = document.getElementById('user');
  const statusDot = document.querySelector('.status-dot');
  const statusText = document.getElementById('status-text');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');

  // Update UI based on auth state
  function updateAuthUI(authenticated, user) {
    if (authenticated && user) {
      userEl.textContent = user.email || user.name || 'Logged in';
      userEl.classList.remove('error');
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
    } else {
      userEl.textContent = 'Not logged in';
      userEl.classList.add('error');
      loginBtn.style.display = 'block';
      logoutBtn.style.display = 'none';
    }
  }

  // Check auth state on load
  try {
    const authState = await chrome.runtime.sendMessage({ type: 'GET_AUTH_STATE' });
    updateAuthUI(authState.authenticated, authState.user);
  } catch (error) {
    console.error('Error checking auth state:', error);
    updateAuthUI(false, null);
  }

  // Login button click
  loginBtn.addEventListener('click', async () => {
    loginBtn.disabled = true;
    loginBtn.textContent = 'Opening...';

    try {
      const response = await chrome.runtime.sendMessage({ type: 'LOGIN' });
      if (response.success && response.authUrl) {
        // Open auth URL in new tab
        chrome.tabs.create({ url: response.authUrl });
        // Close popup
        window.close();
      } else {
        loginBtn.textContent = 'Login failed';
        setTimeout(() => {
          loginBtn.textContent = 'Login with Super LTC';
          loginBtn.disabled = false;
        }, 2000);
      }
    } catch (error) {
      console.error('Login error:', error);
      loginBtn.textContent = 'Login failed';
      setTimeout(() => {
        loginBtn.textContent = 'Login with Super LTC';
        loginBtn.disabled = false;
      }, 2000);
    }
  });

  // Logout button click
  logoutBtn.addEventListener('click', async () => {
    logoutBtn.disabled = true;
    logoutBtn.textContent = 'Logging out...';

    try {
      await chrome.runtime.sendMessage({ type: 'LOGOUT' });
      updateAuthUI(false, null);
    } catch (error) {
      console.error('Logout error:', error);
    }

    logoutBtn.disabled = false;
    logoutBtn.textContent = 'Logout';
  });

  // Privacy policy link
  document.getElementById('privacy-link').addEventListener('click', (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: chrome.runtime.getURL('privacy-policy.html') });
  });

  // Check if we're on a PCC page
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const isPCCPage = tab?.url?.includes('pointclickcare.com');

  if (!isPCCPage) {
    facilityEl.textContent = 'N/A';
    facilityEl.classList.add('error');
    orgEl.textContent = 'N/A';
    orgEl.classList.add('error');
    statusDot.classList.add('warning');
    statusText.textContent = 'Not on Point Click Care';
    return;
  }

  // Get organization from content script (reads PCC's localStorage)
  try {
    const orgResponse = await chrome.tabs.sendMessage(tab.id, { type: 'GET_ORG' });
    if (orgResponse?.org) {
      orgEl.textContent = orgResponse.org.toUpperCase();
      orgEl.classList.remove('loading');
    } else {
      orgEl.textContent = 'Not found';
      orgEl.classList.add('error');
    }
  } catch (error) {
    console.error('Error getting org:', error);
    orgEl.textContent = 'Error';
    orgEl.classList.add('error');
  }

  // Get facility from content script
  try {
    const facilityResponse = await chrome.tabs.sendMessage(tab.id, { type: 'GET_FACILITY' });
    if (facilityResponse?.facility) {
      facilityEl.textContent = facilityResponse.facility;
      facilityEl.classList.remove('loading');
      statusDot.classList.add('connected');
      statusText.textContent = 'Connected to PCC';
    } else {
      facilityEl.textContent = 'Not found on page';
      facilityEl.classList.add('error');
      statusDot.classList.add('warning');
      statusText.textContent = 'Facility element not found';
    }
  } catch (error) {
    console.error('Error getting facility:', error);
    facilityEl.textContent = 'Error reading page';
    facilityEl.classList.add('error');
    statusDot.classList.add('disconnected');
    statusText.textContent = 'Content script not loaded';
  }
});
