const express = require('express');
const router = express.Router();

// Endpoint to receive product data from extension
router.post('/', async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    
    // TODO: Add your backend logic here
    // For now, just return the received data
    res.json({
      status: 'success',
      data: {
        name,
        price,
        category,
        description
      }
    });
  } catch (error) {
    console.error('Error processing product data:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to process product data'
    });
  }
});

module.exports = router;
