function calculateScore(product) {
    let score = 50; // base score
  
    if (product.material?.toLowerCase().includes('recycled')) score += 20;
    if (product.name?.toLowerCase().includes('eco')) score += 10;
    if (product.category === 'electronics') score -= 10;
  
    return Math.min(score, 100);
}

// New function to adjust score by carbon footprint
function adjustScoreByCarbon(score, category, kgCO2) {
    // Define thresholds
    const thresholds = {
        electronics: { good: 30, bad: 70 },
        fashion: { good: 10, bad: 25 },
        food: { good: 3, bad: 10 }
    };
    // Default: no adjustment
    let adj = 0;
    let cat = (category || '').toLowerCase();
    if (cat.includes('electronic')) cat = 'electronics';
    else if (cat.includes('fashion') || cat.includes('clothing') || cat.includes('apparel')) cat = 'fashion';
    else if (cat.includes('food') || cat.includes('grocery')) cat = 'food';
    if (thresholds[cat]) {
        if (kgCO2 < thresholds[cat].good) adj = 15;
        else if (kgCO2 > thresholds[cat].bad) adj = -15;
    }
    let newScore = score + adj;
    if (newScore > 100) newScore = 100;
    if (newScore < 0) newScore = 0;
    return newScore;
}

module.exports = { calculateScore, adjustScoreByCarbon };
