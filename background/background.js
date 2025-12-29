// Background service worker for Super LTC Chrome Extension
// Handles cookie access and cross-origin requests

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_ORG') {
    // Get the last_org cookie from pointclickcare.com
    chrome.cookies.getAll({ domain: '.pointclickcare.com' }, (cookies) => {
      const lastOrgCookie = cookies.find(c => c.name === 'last_org');
      sendResponse({
        org: lastOrgCookie ? lastOrgCookie.value : null,
        allCookies: cookies.map(c => ({ name: c.name, value: c.value }))
      });
    });
    return true; // Will respond asynchronously
  }

  if (message.type === 'VALIDATE_TOKEN') {
    // Future: Validate auth token with Super LTC backend
    sendResponse({ valid: false, user: null });
    return true;
  }
});

// Log when service worker starts
console.log('Super LTC background service worker started');
