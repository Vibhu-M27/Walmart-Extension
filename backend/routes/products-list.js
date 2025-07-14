const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const PRODUCTS_FILE = path.join(__dirname, '../products.json');

function readProducts() {
  try {
    if (!fs.existsSync(PRODUCTS_FILE)) return [];
    const data = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

function writeProducts(products) {
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
}

// GET all products
router.get('/', (req, res) => {
  const products = readProducts();
  res.json(products);
});

// POST a new product
router.post('/', (req, res) => {
  const newProduct = req.body;
  const products = readProducts();
  products.push(newProduct);
  writeProducts(products);
  res.json({ success: true });
});

module.exports = router; 