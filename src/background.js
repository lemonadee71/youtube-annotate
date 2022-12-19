console.log('This is a background script');

// this will run only on subsequent url changes
chrome.tabs.onUpdated.addListener(
  (tabId, changes, state) => {
    const params = new URLSearchParams(state.url.split('?')[1]);

    chrome.tabs.sendMessage(tabId, {
      type: 'NEW',
      videoId: params.get('v'),
    });
  },
  { urls: ['https://*.youtube.com/watch*'], properties: ['url'] }
);
