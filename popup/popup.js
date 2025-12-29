// Super LTC Chrome Extension Popup Script

document.addEventListener('DOMContentLoaded', async () => {
  const facilityEl = document.getElementById('facility');
  const orgEl = document.getElementById('org');
  const userEl = document.getElementById('user');
  const statusDot = document.querySelector('.status-dot');
  const statusText = document.getElementById('status-text');

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

  // Get organization from cookies (via background script)
  try {
    const orgResponse = await chrome.runtime.sendMessage({ type: 'GET_ORG' });
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

  // Placeholder user (will be replaced with auth)
  userEl.textContent = 'Demo User';
});
