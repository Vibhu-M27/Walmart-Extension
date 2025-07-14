const express = require('express');
const router = express.Router();

// Mock greener alternatives (can later be replaced with real data or AI logic)
const mockAlternatives = {
  "plastic bag": [
    { name: "Reusable Cotton Bag", ecoScore: 90 },
    { name: "Jute Bag", ecoScore: 85 }
  ]
};

router.post('/', (req, res) => {
  const { productName } = req.body;
  const alternatives = mockAlternatives[productName.toLowerCase()] || [];
  res.json({ alternatives });
});

module.exports = router;
