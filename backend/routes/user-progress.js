const express = require('express');
const router = express.Router();

// For now, use a static array (could be replaced with file/database read)
const userProgress = [
  { date: '2024-06-01', carbonSaved: 3 },
  { date: '2024-06-08', carbonSaved: 5 },
  { date: '2024-06-15', carbonSaved: 2 },
  { date: '2024-06-22', carbonSaved: 4 },
  { date: '2024-06-29', carbonSaved: 6 }
];

router.get('/', (req, res) => {
  res.json(userProgress);
});

module.exports = router; 