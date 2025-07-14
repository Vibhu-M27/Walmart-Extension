const express = require('express');
const router = express.Router();
const { calculateScore, adjustScoreByCarbon } = require('../utils/scoringLogic');
const { getCarbonFootprint } = require('../services/climatiqService');

router.post('/', async (req, res) => {
  try {
    const product = req.body; // expects: name, category, material, etc.
    let score = calculateScore(product);
    const carbon = await getCarbonFootprint(product);
    // Adjust score by carbon footprint
    score = adjustScoreByCarbon(score, product.category, carbon);
    res.json({
      sustainabilityScore: score,
      carbonFootprint: carbon,
    });
  } catch (err) {
    res.status(500).json({ error: 'Error calculating score' });
  }
});

module.exports = router;
