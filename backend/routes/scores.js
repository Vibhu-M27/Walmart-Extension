const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

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

module.exports = router; 