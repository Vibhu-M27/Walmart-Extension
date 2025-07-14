function extractProductData() {
  console.log('🔍 Starting product data extraction...');
  console.log('📍 Current URL:', window.location.href);
  
  // Product Name - try multiple selectors
  let name = document.querySelector('h1[data-testid="product-title"]')?.textContent.trim() ||
             document.querySelector('h1[itemprop="name"]')?.textContent.trim() ||
             document.querySelector('[data-testid="product-title"]')?.textContent.trim() ||
             document.querySelector('.prod-ProductTitle')?.textContent.trim() ||
             document.querySelector('h1')?.textContent.trim() ||
             'Unknown';

  console.log('Product name found:', name);

  // Price - using the correct selector from debug output
  let price = 'Unknown';
  
  console.log('💰 Starting price extraction...');
  
  // --- Buy Box Price Extraction (Most Reliable, Improved) ---
  if (price === 'Unknown') {
    console.log('🔎 Looking for price in main buy box (improved)...');
    // Get all buy box columns
    const buyBoxes = Array.from(document.querySelectorAll('div.buy-box-column, div[data-testid="flex-container"].buy-box-column'));
    for (const buyBox of buyBoxes) {
      // Skip if inside an ad/sponsored section
      if (buyBox.closest('[data-testid="buy-box-ad"]')) continue;
      // Find the price element
      const priceEl = buyBox.querySelector('span[data-testid="price-wrap"] [itemprop="price"]');
      if (priceEl) {
        const foundPrice = priceEl.textContent.trim();
        // Only accept if it looks like a price
        if (/^\$\d+(\.\d{2})?$/.test(foundPrice)) {
          price = foundPrice;
          console.log('✅ Price found in main buy box:', price);
          break;
        }
      }
    }
    if (price === 'Unknown') {
      console.log('❌ No valid price found in main buy box');
    }
  }

  // --- Robust Price Extraction: Find price above Add to cart button ---
  if (price === 'Unknown') {
    console.log('🔎 Looking for price above "Add to cart" button (robust)...');
    // Find all Add to cart buttons
    const addToCartButtons = Array.from(document.querySelectorAll('button, input[type="submit"]')).filter(
      el => el.textContent.trim().toLowerCase().includes('add to cart')
    );
    let foundPrice = null;
    for (const btn of addToCartButtons) {
      // Walk up to 10 previous siblings
      let prev = btn.previousElementSibling;
      for (let i = 0; i < 10 && prev; i++, prev = prev.previousElementSibling) {
        const text = prev.textContent.trim();
        const priceMatch = text.match(/\$\d+\.?\d*/);
        if (priceMatch) {
          foundPrice = priceMatch[0];
          console.log('✅ Price found above Add to cart button:', foundPrice);
          break;
        }
      }
      if (foundPrice) break;
    }
    if (foundPrice) {
      price = foundPrice;
    }
  }

  // --- Robust Image Extraction: Avoid invalid selector errors ---
  let imageUrl = '';
  try {
    // Use product name to find image, but avoid invalid selector errors
    const name = productData.name || '';
    const imgEl = Array.from(document.querySelectorAll('img[alt]')).find(img => img.alt && img.alt.includes(name));
    if (imgEl) {
      imageUrl = imgEl.src;
      console.log('✅ Image found by alt:', imageUrl);
    }
  } catch (e) {
    console.log('❌ Error finding image:', e);
  }
  // If not found, fallback to previous logic or leave blank

  // Method 0: Look for price near 'Price when purchased online' (improved)
  if (price === 'Unknown') {
    console.log('🔎 Looking for price near "Price when purchased online" (improved)...');
    const labelElements = Array.from(document.querySelectorAll('body *')).filter(el =>
      el.textContent && el.textContent.trim().toLowerCase().includes('price when purchased online')
    );
    for (let labelEl of labelElements) {
      // Try previous siblings (most likely for Walmart layout)
      let prev = labelEl.previousElementSibling;
      for (let i = 0; i < 3 && prev; i++, prev = prev.previousElementSibling) {
        const text = prev.textContent.trim();
        const priceMatch = text.match(/\$\d+\.?\d*/);
        if (priceMatch) {
          price = priceMatch[0];
          console.log('✅ Price found in previous sibling:', price);
          break;
        }
      }
      if (price !== 'Unknown') break;
      // Try next siblings
      let sibling = labelEl.nextElementSibling;
      for (let i = 0; i < 3 && sibling; i++, sibling = sibling.nextElementSibling) {
        const text = sibling.textContent.trim();
        const priceMatch = text.match(/\$\d+\.?\d*/);
        if (priceMatch) {
          price = priceMatch[0];
          console.log('✅ Price found in next sibling:', price);
          break;
        }
      }
      if (price !== 'Unknown') break;
      // Try parent container, but avoid swatch/variant areas
      const parent = labelEl.parentElement;
      if (parent && !parent.className.toLowerCase().includes('swatch') && !parent.className.toLowerCase().includes('variant')) {
        const priceEl = Array.from(parent.querySelectorAll('*')).find(el =>
          el !== labelEl && /\$\d+\.?\d*/.test(el.textContent) &&
          !el.className.toLowerCase().includes('swatch') &&
          !el.className.toLowerCase().includes('variant')
        );
        if (priceEl) {
          const priceMatch = priceEl.textContent.match(/\$\d+\.?\d*/);
          if (priceMatch) {
            price = priceMatch[0];
            console.log('✅ Price found in parent container (filtered):', price);
            break;
          }
        }
      }
    }
  }

  // Method 1: Use the working selector from debug output
  const priceElements = document.querySelectorAll('[data-automation-id*="price"]');
  console.log('🔍 Found', priceElements.length, 'elements with [data-automation-id*="price"]');
  
  if (priceElements.length > 0) {
    // Look for the main product price by checking multiple elements
    let mainPriceFound = false;
    
    for (let i = 0; i < Math.min(priceElements.length, 10); i++) {
      const priceText = priceElements[i].textContent.trim();
      console.log(`📝 Price element ${i + 1} text:`, priceText);
      
      // Look for patterns that indicate main product price
      if (priceText.includes('current price') || 
          priceText.includes('Now') || 
          priceText.includes('Was') ||
          priceText.match(/^\$\d+\.?\d*$/)) {
        
        const priceMatch = priceText.match(/\$\d+\.?\d*/);
        if (priceMatch) {
          price = priceMatch[0];
          console.log(`✅ Main price found at element ${i + 1}:`, price);
          mainPriceFound = true;
          break;
        }
      }
    }
    
    // If no main price found, try the first element
    if (!mainPriceFound && priceElements.length > 0) {
      const priceText = priceElements[0].textContent.trim();
      const priceMatch = priceText.match(/\$\d+\.?\d*/);
      if (priceMatch) {
        price = priceMatch[0];
        console.log('✅ Fallback: Using first price element:', price);
      }
    }
  } else {
    console.log('❌ No elements found with [data-automation-id*="price"]');
  }
  
  // Method 2: Try more specific selectors for main product price
  if (price === 'Unknown') {
    console.log('🔄 Trying specific main product price selectors...');
    const priceSelectors = [
      '[data-testid="price-wrap"] [data-testid="price-current"]',
      '[data-testid="price-current"]',
      '[data-automation-id="sale-price"]',
      '.mr1.mr2-xl.b.black.lh-copy.f5.f4-l', // Regular price class
      '.mr1.mr2-xl.b.black.green.lh-copy.f5.f4-l', // Sale price class
      '[data-testid="price-wrap"]',
      '.price-characteristic'
    ];
    
    for (let selector of priceSelectors) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent.trim();
        console.log('🔍 Found element with selector:', selector, 'Text:', text);
        if (text.includes('$')) {
          const priceMatch = text.match(/\$\d+\.?\d*/);
          if (priceMatch) {
            price = priceMatch[0];
            console.log('✅ Price found with fallback selector:', selector, price);
            break;
          }
        }
      }
    }
  }
  
  // Method 3: Look for price in main product area
  if (price === 'Unknown') {
    console.log('🔍 Looking for price in main product area...');
    
    // Try to find the main product container
    const productContainers = [
      '[data-testid="product-details"]',
      '[data-testid="product-info"]',
      '.prod-ProductDetails',
      '.product-details',
      'main',
      'article'
    ];
    
    for (let containerSelector of productContainers) {
      const container = document.querySelector(containerSelector);
      if (container) {
        console.log('📍 Found product container:', containerSelector);
        const priceElements = container.querySelectorAll('[data-automation-id*="price"], [data-testid*="price"], .price, [class*="price"]');
        
        for (let el of priceElements) {
          const text = el.textContent.trim();
          if (text.includes('$') && /\$\d+\.?\d*/.test(text)) {
            const priceMatch = text.match(/\$\d+\.?\d*/);
            if (priceMatch) {
              price = priceMatch[0];
              console.log('✅ Price found in product container:', price);
              break;
            }
          }
        }
        if (price !== 'Unknown') break;
      }
    }
  }
  
  // Method 4: Last resort - search for any element with dollar sign
  if (price === 'Unknown') {
    console.log('🆘 Last resort: searching all elements for dollar signs...');
    const allElements = document.querySelectorAll('*');
    for (let el of allElements) {
      const text = el.textContent.trim();
      if (text.includes('$') && text.length < 50 && /\$\d+\.?\d*/.test(text)) {
        const priceMatch = text.match(/\$\d+\.?\d*/);
        if (priceMatch) {
          price = priceMatch[0];
          console.log('✅ Price found in element:', el.tagName, el.className, price);
          break;
        }
      }
    }
  }

  // Category - aggressive search
  let category = 'Unknown';
  
  // Method 1: Try breadcrumb selectors
  const breadcrumbSelectors = [
    '[data-testid="breadcrumb-item"]',
    '[data-automation-id="breadcrumb-item"]',
    '.breadcrumb-item',
    'nav[aria-label="Breadcrumb"] a',
    'nav a',
    '[class*="breadcrumb"] a',
    '[class*="Breadcrumb"] a'
  ];
  
  for (let selector of breadcrumbSelectors) {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      const breadcrumbText = Array.from(elements).map(el => el.textContent.trim()).join(' > ');
      if (breadcrumbText.length > 0) {
        category = breadcrumbText;
        console.log('Category found with selector:', selector, category);
        break;
      }
    }
  }
  
  // Method 2: Search for category-related links
  if (category === 'Unknown') {
    const links = document.querySelectorAll('a');
    const categoryLinks = Array.from(links).filter(link => {
      const text = link.textContent.trim();
      const href = link.href;
      return text.length > 0 && text.length < 50 && 
             (href.includes('category') || href.includes('department') || 
              text.toLowerCase().includes('clothing') || text.toLowerCase().includes('women') ||
              text.toLowerCase().includes('men') || text.toLowerCase().includes('apparel'));
    });
    
    if (categoryLinks.length > 0) {
      category = categoryLinks.map(link => link.textContent.trim()).join(' > ');
      console.log('Category found in links:', category);
    }
  }

  // Description - aggressive search
  let description = 'Unknown';
  
  // Method 1: Try specific selectors
  const descSelectors = [
    '[data-testid="product-description"]',
    '[data-automation-id="product-description"]',
    '.about-product-description',
    '[data-testid="product-description-content"]',
    '.prod-ProductDescription',
    '[class*="description"]',
    '[class*="Description"]',
    '.description',
    '.Description'
  ];
  
  for (let selector of descSelectors) {
    const element = document.querySelector(selector);
    if (element) {
      const text = element.textContent.trim();
      if (text.length > 20) {
        description = text;
        console.log('Description found with selector:', selector);
        break;
      }
    }
  }
  
  // Method 2: Search paragraphs for product info
  if (description === 'Unknown') {
    const paragraphs = document.querySelectorAll('p');
    for (let p of paragraphs) {
      const text = p.textContent.trim();
      if (text.length > 30 && text.length < 800 && 
          (text.includes('product') || text.includes('feature') || text.includes('material') ||
           text.includes('comfort') || text.includes('style') || text.includes('design') ||
           text.includes('fabric') || text.includes('fit'))) {
        description = text;
        console.log('Description found in paragraph');
        break;
      }
    }
  }
  
  // Method 3: Search for any text that looks like a description
  if (description === 'Unknown') {
    const allElements = document.querySelectorAll('*');
    for (let el of allElements) {
      const text = el.textContent.trim();
      if (text.length > 50 && text.length < 500 && 
          text.includes(' ') && 
          (text.includes('comfortable') || text.includes('soft') || text.includes('quality') ||
           text.includes('perfect') || text.includes('great') || text.includes('excellent'))) {
        description = text;
        console.log('Description found in element:', el.tagName, el.className);
        break;
      }
    }
  }

  // --- Material Extraction ---
  let material = 'Unknown';
  // Try common selectors for product details/specs
  const materialSelectors = [
    '[data-testid="product-details"]',
    '[data-automation-id="product-details"]',
    '.ProductDetails',
    '.product-details',
    '.about-desc',
    '.specs',
    '.product-specs',
    '.ProductSpecs',
    '.product-specification',
    '.ProductSpecification',
    'table',
    'section',
    'ul',
    'dl'
  ];
  for (let selector of materialSelectors) {
    const elements = document.querySelectorAll(selector);
    for (let el of elements) {
      const text = el.textContent;
      if (text && /material|fabric|composition|shell|lining/i.test(text)) {
        // Try to extract the material value
        const match = text.match(/(?:material|fabric|composition|shell|lining)[^:]*[:\-\s]+([A-Za-z0-9, %]+)/i);
        if (match && match[1]) {
          material = match[1].trim();
          break;
        }
        // Try to find a <td> or <li> with material
        const detailCells = el.querySelectorAll('td, li, dd');
        for (let cell of detailCells) {
          if (/material|fabric|composition|shell|lining/i.test(cell.textContent)) {
            // Look for the next sibling or the text after colon
            let value = '';
            if (cell.nextElementSibling) {
              value = cell.nextElementSibling.textContent.trim();
            } else {
              const colonIdx = cell.textContent.indexOf(':');
              if (colonIdx !== -1) {
                value = cell.textContent.slice(colonIdx + 1).trim();
              }
            }
            if (value) {
              material = value;
              break;
            }
          }
        }
      }
      if (material !== 'Unknown') break;
    }
    if (material !== 'Unknown') break;
  }
  // Fallback: look for material in description
  if (material === 'Unknown' && description && /material|fabric|composition|shell|lining/i.test(description)) {
    const match = description.match(/(?:material|fabric|composition|shell|lining)[^:]*[:\-\s]+([A-Za-z0-9, %]+)/i);
    if (match && match[1]) {
      material = match[1].trim();
    }
  }

  // Additional data extraction
  const productUrl = window.location.href;

  // Clean up the extracted data
  name = name.replace(/\s+/g, ' ').trim();
  price = price.replace(/\s+/g, ' ').trim();
  category = category.replace(/\s+/g, ' ').trim();
  description = description.replace(/\s+/g, ' ').trim();

  console.log('Extracted data:', { name, price, category, description, material, imageUrl, productUrl });

  return { 
    name, 
    price, 
    category, 
    description, 
    material,
    imageUrl, 
    productUrl,
    scrapedAt: new Date().toISOString()
  };
}

// Send data to backend
async function sendToBackend(data) {
  try {
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Failed to send data to backend');
    }
    
    const result = await response.json();
    console.log('Backend response:', result);
    return result;
  } catch (error) {
    console.error('Error sending data to backend:', error);
    return null;
  }
}

// Send product data to products-list for My Products tab
async function saveProductToBackend(productData) {
  try {
    await fetch('http://localhost:3000/api/products-list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    console.log('Product saved to backend /api/products-list');
  } catch (err) {
    console.error('Failed to save product to backend:', err);
  }
}

// Add this function to calculate and save score
async function calculateAndSaveScore(productData) {
  try {
    const response = await fetch('http://localhost:3000/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    });
    if (!response.ok) throw new Error('Failed to calculate score');
    const result = await response.json();
    // Save to localStorage as in frontend scoring page
    const savedScores = JSON.parse(localStorage.getItem('savedScores') || '[]');
    const scoreToSave = {
      ...productData,
      score: result.sustainabilityScore,
      carbonFootprint: result.carbonFootprint,
      timestamp: new Date().toISOString(),
      productName: productData.name || 'Unknown Product'
    };
    savedScores.push(scoreToSave);
    localStorage.setItem('savedScores', JSON.stringify(savedScores));
    console.log('Score and carbon footprint saved to localStorage:', scoreToSave);
    // Also send to backend scores API
    try {
      await fetch('http://localhost:3000/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scoreToSave)
      });
      console.log('Score also saved to backend /api/scores');
    } catch (err) {
      console.error('Failed to save score to backend:', err);
    }
  } catch (error) {
    console.error('Error calculating/saving score:', error);
  }
}

// Send data to popup when requested
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getProductData') {
    console.log('Content script: Received request for product data');
    const data = extractProductData();
    console.log('Content script: Extracted data:', data);
    
    // Send to backend
    sendToBackend(data).then(result => {
      console.log('Content script: Backend response:', result);
    });
    
    // Send to popup
    chrome.runtime.sendMessage({ type: 'productData', data });
    
    // Send response back to popup
    if (sendResponse) {
      sendResponse({ success: true, data });
    }
  }
});

// Send data automatically when content script loads
console.log('Content script: Loaded on', window.location.href);
const data = extractProductData();
console.log('Content script: Auto-extracted data:', data);
sendToBackend(data);
saveProductToBackend(data);
calculateAndSaveScore(data);
chrome.runtime.sendMessage({ type: 'productData', data });