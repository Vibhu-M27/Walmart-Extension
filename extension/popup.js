// Update status message
function updateStatus(message, type = 'info') {
  const statusElement = document.getElementById('status-message');
  const statusContainer = document.getElementById('status');
  
  statusElement.textContent = message;
  
  // Update status color based on type
  statusContainer.className = 'p-3 rounded text-sm mb-4';
  if (type === 'success') {
    statusContainer.classList.add('bg-green-50', 'text-green-800');
  } else if (type === 'error') {
    statusContainer.classList.add('bg-red-50', 'text-red-800');
  } else {
    statusContainer.classList.add('bg-blue-50', 'text-blue-800');
  }
}

// Update product information display
function updateProductInfo(data) {
  document.getElementById('product-name').textContent = data.name || 'Not found';
  document.getElementById('product-price').textContent = data.price || 'Not found';
  document.getElementById('product-category').textContent = data.category || 'Not found';
  document.getElementById('product-description').textContent = data.description || 'Not found';
  
  // Show image if available
  const imageContainer = document.getElementById('product-image');
  const imageElement = document.getElementById('product-image-url');
  
  if (data.imageUrl && data.imageUrl !== '') {
    imageElement.src = data.imageUrl;
    imageContainer.style.display = 'block';
  } else {
    imageContainer.style.display = 'none';
  }
  
  updateStatus('Product data extracted successfully!', 'success');
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'productData') {
    console.log('Received product data:', message.data);
    updateProductInfo(message.data);
  }
});

// Request data from content script
function requestProductData() {
  updateStatus('Extracting product data...', 'info');
  
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'getProductData' }, (response) => {
        if (chrome.runtime.lastError) {
          updateStatus('Error: Make sure you are on a Walmart product page', 'error');
        }
      });
    } else {
      updateStatus('Error: No active tab found', 'error');
    }
  });
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Request data when popup opens
  requestProductData();
  
  // Refresh button
  document.getElementById('refresh-btn').addEventListener('click', () => {
    requestProductData();
  });
  
  // View in app button
  document.getElementById('view-frontend-btn').addEventListener('click', () => {
    chrome.tabs.create({ url: 'http://localhost:3000/popup' });
  });
  
  // Debug button
  document.getElementById('debug-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['debug-walmart.js']
        }).then(() => {
          updateStatus('Debug script injected! Check browser console.', 'success');
        }).catch((error) => {
          updateStatus('Debug failed: ' + error.message, 'error');
        });
      }
    });
  });
  
  // Help button
  document.getElementById('help-btn').addEventListener('click', () => {
    const helpText = `
Walmart Product Scraper Help:

1. Make sure you're on a Walmart product page
2. Click "Refresh Data" to extract product info
3. Click "Debug Page" to analyze the page structure
4. Check browser console (F12) for detailed logs
5. If data shows "Unknown", use debug to find correct selectors

For support, share the debug output from the console.
    `;
    alert(helpText);
  });
});