const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const scoreRoute = require('./routes/score');
const altRoute = require('./routes/alternatives');
const productsRoute = require('./routes/products');
const scoresRoute = require('./routes/scores');
const productsListRoute = require('./routes/products-list');
const userProgressRoute = require('./routes/user-progress');

const app = express();

// Configure CORS for the extension
app.use(cors({
  origin: ['chrome-extension://*', 'http://localhost:3000', 'https://www.walmart.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

// API routes
app.use('/score', scoreRoute);
app.use('/alternatives', altRoute);
app.use('/api/products', productsRoute);
app.use('/api/scores', scoresRoute);
app.use('/api/products-list', productsListRoute);
app.use('/api/user-progress', userProgressRoute);

// Serve new pages at their routes
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'public', 'dashboard.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'public', 'about.html'));
});
app.get('/popup', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'public', 'popup.html'));
});
app.get('/products.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'public', 'product.html'));
});

// Serve the main HTML file for all other routes (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
