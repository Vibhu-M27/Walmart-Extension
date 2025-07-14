// Test script to debug Walmart selectors
// Run this in the browser console on a Walmart product page

function testSelectors() {
  console.log('🧪 Testing Walmart Selectors...');
  
  const tests = [
    {
      name: 'Product Title',
      selectors: [
        'h1[data-testid="product-title"]',
        'h1[itemprop="name"]',
        '[data-testid="product-title"]',
        '.prod-ProductTitle',
        'h1'
      ]
    },
    {
      name: 'Price',
      selectors: [
        '[data-testid="price-wrap"] [data-testid="price-current"]',
        '[data-testid="price-current"]',
        '[data-automation-id="sale-price"]',
        '.price-characteristic',
        '[data-testid="price-wrap"]'
      ]
    },
    {
      name: 'Breadcrumbs',
      selectors: [
        '[data-testid="breadcrumb-item"]',
        '[data-automation-id="breadcrumb-item"]',
        '.breadcrumb-item',
        'nav[aria-label="Breadcrumb"] a'
      ]
    },
    {
      name: 'Description',
      selectors: [
        '[data-testid="product-description"]',
        '[data-automation-id="product-description"]',
        '.about-product-description',
        '[data-testid="product-description-content"]',
        '.prod-ProductDescription'
      ]
    },
    {
      name: 'Product Image',
      selectors: [
        '[data-testid="product-image"] img',
        '.prod-hero-image img',
        'img[alt*="product"]'
      ]
    }
  ];
  
  tests.forEach(test => {
    console.log(`\n📋 Testing ${test.name}:`);
    test.selectors.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`  ✅ ${selector}: "${element.textContent.trim().substring(0, 50)}..."`);
      } else {
        console.log(`  ❌ ${selector}: Not found`);
      }
    });
  });
  
  // Test all h1 elements
  console.log('\n📋 All H1 elements:');
  document.querySelectorAll('h1').forEach((h1, index) => {
    console.log(`  H1 ${index + 1}: "${h1.textContent.trim()}"`);
  });
  
  // Test all elements with price-related classes
  console.log('\n📋 Price-related elements:');
  document.querySelectorAll('[class*="price"], [class*="Price"]').forEach((el, index) => {
    console.log(`  Price element ${index + 1}: "${el.textContent.trim()}"`);
  });
}

// Run the test
testSelectors(); 