function extractProductData() {
  const name = document.querySelector('h1[itemprop="name"]')?.textContent.trim() ||
               document.querySelector('.w_DN')?.textContent.trim() ||
               'Unknown';
  const price = document.querySelector('[data-automation-id="sale-price"]')?.textContent.trim() ||
                document.querySelector('.price-group')?.textContent.trim() ||
                'Unknown';
  const categoryElements = document.querySelectorAll('[data-automation-id="breadcrumb-item"]');
  const category = Array.from(categoryElements).map(el => el.textContent.trim()).join(' > ') || 'Unknown';
  const description = document.querySelector('[data-automation-id="product-description"]')?.textContent.trim() ||
                      document.querySelector('.about-product-description')?.textContent.trim() ||
                      'Unknown';

  return { name, price, category, description };
}

// Send data to popup when requested
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getProductData') {
    const data = extractProductData();
    chrome.runtime.sendMessage({ type: 'productData', data });
  }
});

// Send data automatically when content script loads
const data = extractProductData();
chrome.runtime.sendMessage({ type: 'productData', data });