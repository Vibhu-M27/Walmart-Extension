chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'productData') {
    document.getElementById('product-name').textContent = `Product Name: ${message.data.name || 'Not found'}`;
    document.getElementById('product-price').textContent = `Price: ${message.data.price || 'Not found'}`;
    document.getElementById('product-category').textContent = `Category: ${message.data.category || 'Not found'}`;
    document.getElementById('product-description').textContent = `Description: ${message.data.description || 'Not found'}`;
  }
});

// Request data from content script when popup opens
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { type: 'getProductData' });
});