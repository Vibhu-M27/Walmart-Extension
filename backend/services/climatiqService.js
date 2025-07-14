const axios = require('axios');

const API_KEY = 'DF69YSXQMS5GX476PYD6PZMNQC';

async function getCarbonFootprint(product) {
  try {
    // Default activity_id and parameters
    let activity_id = "consumer_goods-type_product";
    let parameters = { weight: 1, weight_unit: "kg" };

    // Try to use material/category for more accurate activity_id
    if (product.category && /clothing|apparel|shirt|t-shirt|jeans|pants|dress|skirt|jacket|sweater|socks|underwear|shorts|outerwear|activewear/i.test(product.category)) {
      activity_id = "consumer_goods-type_clothing";
    }
    if (product.material) {
      // Example: if material is cotton, use cotton-specific activity_id
      if (/cotton/i.test(product.material)) {
        activity_id = "consumer_goods-type_clothing_cotton";
      } else if (/polyester/i.test(product.material)) {
        activity_id = "consumer_goods-type_clothing_polyester";
      } else if (/wool/i.test(product.material)) {
        activity_id = "consumer_goods-type_clothing_wool";
      } else if (/nylon/i.test(product.material)) {
        activity_id = "consumer_goods-type_clothing_nylon";
      } else if (/leather/i.test(product.material)) {
        activity_id = "consumer_goods-type_clothing_leather";
      }
      // Add more mappings as needed
    }

    // Optionally, try to extract weight from product description or specs
    if (product.description && /([0-9.]+)\s*(kg|g|grams|pounds|lbs)/i.test(product.description)) {
      const match = product.description.match(/([0-9.]+)\s*(kg|g|grams|pounds|lbs)/i);
      let weight = parseFloat(match[1]);
      let unit = match[2].toLowerCase();
      if (unit === 'g' || unit === 'grams') weight = weight / 1000;
      if (unit === 'pounds' || unit === 'lbs') weight = weight * 0.453592;
      parameters.weight = weight;
    }

    const response = await axios.post('https://beta3.api.climatiq.io/estimate', {
      emission_factor: {
        activity_id: activity_id,
      },
      parameters: parameters
    }, {
      headers: {
        Authorization: `Bearer ${'DF69YSXQMS5GX476PYD6PZMNQC'}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.co2e || 0;
  } catch (error) {
    console.error("Carbon API Error:", error.message);
    return 0;
  }
}

module.exports = { getCarbonFootprint };
