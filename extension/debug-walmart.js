// Comprehensive Walmart Debug Script
// Run this in the browser console on a Walmart product page

console.log('🔍 Walmart Debug Script - Finding Product Elements');
console.log('==================================================');

// Function to find price elements
function findPriceElements() {
  console.log('\n💰 SEARCHING FOR PRICE ELEMENTS:');
  
  // Method 1: Look for elements with dollar signs
  const dollarElements = Array.from(document.querySelectorAll('*')).filter(el => {
    const text = el.textContent.trim();
    return text.includes('$') && text.length < 30 && !text.includes('$0') && !text.includes('$0.00');
  });
  
  console.log('Elements with $ symbol:');
  dollarElements.forEach((el, i) => {
    console.log(`  ${i + 1}. "${el.textContent.trim()}" - Class: "${el.className}" - Tag: ${el.tagName}`);
  });
  
  // Method 2: Look for common price selectors
  const priceSelectors = [
    '[data-testid*="price"]',
    '[class*="price"]',
    '[class*="Price"]',
    '[data-automation-id*="price"]',
    '[data-automation-id*="Price"]',
    '.price',
    '.Price',
    '[class*="cost"]',
    '[class*="Cost"]'
  ];
  
  console.log('\nPrice-related selectors:');
  priceSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      console.log(`  ${selector}:`);
      elements.forEach((el, i) => {
        console.log(`    ${i + 1}. "${el.textContent.trim()}"`);
      });
    }
  });
}

// Function to find category/breadcrumb elements
function findCategoryElements() {
  console.log('\n📂 SEARCHING FOR CATEGORY/BREADCRUMB ELEMENTS:');
  
  // Method 1: Look for navigation elements
  const navElements = document.querySelectorAll('nav, [role="navigation"], [class*="breadcrumb"], [class*="Breadcrumb"]');
  console.log('Navigation elements:');
  navElements.forEach((el, i) => {
    console.log(`  ${i + 1}. Tag: ${el.tagName}, Class: "${el.className}", Text: "${el.textContent.trim().substring(0, 100)}"`);
  });
  
  // Method 2: Look for links that might be breadcrumbs
  const links = document.querySelectorAll('a');
  const breadcrumbLinks = Array.from(links).filter(link => {
    const text = link.textContent.trim();
    const href = link.href;
    return text.length > 0 && text.length < 50 && 
           (href.includes('category') || href.includes('department') || 
            text.toLowerCase().includes('home') || text.toLowerCase().includes('clothing') ||
            text.toLowerCase().includes('women') || text.toLowerCase().includes('men'));
  });
  
  console.log('\nPotential breadcrumb links:');
  breadcrumbLinks.forEach((link, i) => {
    console.log(`  ${i + 1}. "${link.textContent.trim()}" - href: "${link.href}"`);
  });
}

// Function to find description elements
function findDescriptionElements() {
  console.log('\n📝 SEARCHING FOR DESCRIPTION ELEMENTS:');
  
  // Method 1: Look for paragraphs with product info
  const paragraphs = document.querySelectorAll('p');
  const productParagraphs = Array.from(paragraphs).filter(p => {
    const text = p.textContent.trim();
    return text.length > 30 && text.length < 1000 && 
           (text.includes('product') || text.includes('feature') || text.includes('material') ||
            text.includes('comfort') || text.includes('style') || text.includes('design'));
  });
  
  console.log('Product-related paragraphs:');
  productParagraphs.forEach((p, i) => {
    console.log(`  ${i + 1}. "${p.textContent.trim().substring(0, 100)}..."`);
  });
  
  // Method 2: Look for description selectors
  const descSelectors = [
    '[data-testid*="description"]',
    '[data-testid*="Description"]',
    '[class*="description"]',
    '[class*="Description"]',
    '[data-automation-id*="description"]',
    '[data-automation-id*="Description"]',
    '.description',
    '.Description',
    '[class*="about"]',
    '[class*="About"]'
  ];
  
  console.log('\nDescription-related selectors:');
  descSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      console.log(`  ${selector}:`);
      elements.forEach((el, i) => {
        console.log(`    ${i + 1}. "${el.textContent.trim().substring(0, 100)}..."`);
      });
    }
  });
}

// Function to find all elements with specific text patterns
function findElementsWithPatterns() {
  console.log('\n🔍 SEARCHING FOR ELEMENTS WITH SPECIFIC PATTERNS:');
  
  const patterns = [
    { name: 'Price patterns', regex: /\$\d+\.?\d*/ },
    { name: 'Category patterns', regex: /(clothing|apparel|women|men|shoes|accessories)/i },
    { name: 'Product patterns', regex: /(product|feature|material|comfort|style)/i }
  ];
  
  patterns.forEach(pattern => {
    const elements = Array.from(document.querySelectorAll('*')).filter(el => {
      return pattern.regex.test(el.textContent);
    });
    
    console.log(`\n${pattern.name}:`);
    elements.slice(0, 10).forEach((el, i) => {
      console.log(`  ${i + 1}. "${el.textContent.trim().substring(0, 80)}..." - Class: "${el.className}"`);
    });
  });
}

// Function to analyze the page structure
function analyzePageStructure() {
  console.log('\n🏗️ PAGE STRUCTURE ANALYSIS:');
  
  // Find all h1, h2, h3 elements
  ['h1', 'h2', 'h3'].forEach(tag => {
    const elements = document.querySelectorAll(tag);
    if (elements.length > 0) {
      console.log(`\n${tag.toUpperCase()} elements:`);
      elements.forEach((el, i) => {
        console.log(`  ${i + 1}. "${el.textContent.trim()}" - Class: "${el.className}"`);
      });
    }
  });
  
  // Find main content areas
  const mainSelectors = ['main', '[role="main"]', '.main', '.content', '.product-content'];
  console.log('\nMain content areas:');
  mainSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      console.log(`  ${selector}: ${elements.length} found`);
    }
  });
}

// Run all debug functions
function runFullDebug() {
  console.log('🚀 Starting comprehensive Walmart page analysis...');
  console.log('Page URL:', window.location.href);
  console.log('Page Title:', document.title);
  
  findPriceElements();
  findCategoryElements();
  findDescriptionElements();
  findElementsWithPatterns();
  analyzePageStructure();
  
  console.log('\n✅ Debug analysis complete!');
  console.log('📋 Copy the output above and share it to help fix the selectors.');
}

// Auto-run the debug
runFullDebug(); 