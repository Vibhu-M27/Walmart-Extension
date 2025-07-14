const axios = require('axios');

async function testScore() {
  try {
    const response = await axios.post('http://localhost:5000/score', {
      name: 'Eco Water Bottle',
      category: 'plastic',
      material: 'recycled plastic'
    });
    console.log('Response:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

testScore(); 