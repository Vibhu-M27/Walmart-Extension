#!/bin/bash

# Walmart Scraper Frontend Startup Script

echo "🚀 Starting Walmart Scraper Application..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file..."
    cat > .env << EOF
PORT=3000
NODE_ENV=development
EOF
    echo "✅ Created .env file with default settings"
fi

# Start the server
echo "🌐 Starting server on http://localhost:3000"
echo "📱 Frontend will be available at http://localhost:3000"
echo "🔧 Backend API endpoints:"
echo "   - GET  /api/products"
echo "   - POST /alternatives"
echo "   - POST /score"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start 