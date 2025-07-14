#!/bin/bash

echo "🧪 Testing Walmart Scraper Extension Components"
echo "================================================"

# Test 1: Check if server is running
echo "1. Testing Backend Server..."
if curl -s http://localhost:3000 > /dev/null; then
    echo "   ✅ Server is running at http://localhost:3000"
else
    echo "   ❌ Server is not running"
    echo "   Run: cd backend && node server.js"
    exit 1
fi

# Test 2: Check API endpoints
echo "2. Testing API Endpoints..."
if curl -s http://localhost:3000/api/products > /dev/null; then
    echo "   ✅ Products API endpoint working"
else
    echo "   ⚠️  Products API endpoint not responding"
fi

# Test 3: Check extension files
echo "3. Testing Extension Files..."
if [ -f "extension/manifest.json" ]; then
    echo "   ✅ Extension manifest found"
else
    echo "   ❌ Extension manifest missing"
fi

if [ -f "extension/content.js" ]; then
    echo "   ✅ Content script found"
else
    echo "   ❌ Content script missing"
fi

if [ -f "extension/popup.html" ]; then
    echo "   ✅ Popup HTML found"
else
    echo "   ❌ Popup HTML missing"
fi

# Test 4: Check frontend files
echo "4. Testing Frontend Files..."
if [ -f "backend/frontend/public/index.html" ]; then
    echo "   ✅ Frontend HTML found"
else
    echo "   ❌ Frontend HTML missing"
fi

if [ -f "backend/frontend/src/main.js" ]; then
    echo "   ✅ Frontend main.js found"
else
    echo "   ❌ Frontend main.js missing"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Open http://localhost:3000 in your browser"
echo "2. Load the extension in Chrome: chrome://extensions/"
echo "3. Go to Walmart.com and test the extension"
echo "4. Check if scraped data appears in the frontend"
echo ""
echo "📱 Frontend URL: http://localhost:3000"
echo "🔧 Extension folder: ./extension"
echo "🚀 Server status: Running on port 3000" 