const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { getCarbonFootprint } = require('../services/climatiqService');

const DATA_FILE = path.join(__dirname, '../data.json');

// Helper to read scores
function readScores() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

// Helper to write scores
function writeScores(scores) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(scores, null, 2));
}

// Helper to update all carbon footprints
async function updateAllCarbonFootprints() {
  const scores = readScores();
  for (const score of scores) {
    try {
      // Optionally skip if already set and not zero
      if (!score.carbonFootprint || score.carbonFootprint === 0) {
        score.carbonFootprint = await getCarbonFootprint(score);
        console.log(score.carbonFootprint);
      }
    } catch (e) {
      console.error('Failed to update carbon footprint for', score.name || score.productName, e);
    }
  }
  writeScores(scores);
  return scores;
}

// GET all scores
router.get('/', (req, res) => {
  const scores = readScores();
  res.json(scores);
});

// POST a new score
router.post('/', (req, res) => {
  const newScore = req.body;
  const scores = readScores();
  scores.push(newScore);
  writeScores(scores);
  res.json({ success: true });
});

// Place this after your other routes in scores.js

router.post('/update-carbon-footprints', async (req, res) => {
    try {
      const updatedScores = await updateAllCarbonFootprints();
      res.json({ success: true, updated: updatedScores });
    } catch (e) {
      res.status(500).json({ success: false, error: e.message });
    }
  });

// module.exports.updateAllCarbonFootprints = updateAllCarbonFootprints;
module.exports = router; 