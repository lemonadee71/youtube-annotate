console.log('This is a content script');

chrome.runtime.onMessage.addListener((o) => console.log(o));
