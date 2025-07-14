// // Scoring Page Functionality
// class ScoringPage {
//     constructor() {
//         this.currentScore = null;
//         this.init();
//     }

//     init() {
//         this.setupEventListeners();
//     }

//     setupEventListeners() {
//         // Form submission
//         const form = document.querySelector('.scoring-form');
//         if (form) {
//             form.addEventListener('submit', (e) => {
//                 e.preventDefault();
//                 this.handleCalculateScore();
//             });
//         }

//         // Calculate button
//         const calculateButton = document.querySelector('#scoring .btn-primary');
//         if (calculateButton) {
//             calculateButton.addEventListener('click', () => {
//                 this.handleCalculateScore();
//             });
//         }

//         // Auto-save form data
//         this.setupAutoSave();
//     }

//     setupAutoSave() {
//         const productNameInput = document.getElementById('productName');
//         const productDescriptionInput = document.getElementById('productDescription');

//         // Load saved data on page load
//         if (productNameInput) {
//             const savedName = localStorage.getItem('scoring_productName');
//             if (savedName) {
//                 productNameInput.value = savedName;
//             }
//         }

//         if (productDescriptionInput) {
//             const savedDesc = localStorage.getItem('scoring_productDescription');
//             if (savedDesc) {
//                 productDescriptionInput.value = savedDesc;
//             }
//         }

//         // Save data on input
//         if (productNameInput) {
//             productNameInput.addEventListener('input', (e) => {
//                 localStorage.setItem('scoring_productName', e.target.value);
//             });
//         }

//         if (productDescriptionInput) {
//             productDescriptionInput.addEventListener('input', (e) => {
//                 localStorage.setItem('scoring_productDescription', e.target.value);
//             });
//         }
//     }

//     async handleCalculateScore() {
//         const productName = document.getElementById('productName')?.value.trim();
//         const productDescription = document.getElementById('productDescription')?.value.trim();

//         if (!productName) {
//             alert('Please enter a product name');
//             return;
//         }

//         if (!productDescription) {
//             alert('Please enter a product description');
//             return;
//         }

//         await this.calculateScore(productName, productDescription);
//     }

//     async calculateScore(productName, productDescription) {
//         const scoreResult = document.getElementById('scoreResult');
//         if (!scoreResult) return;

//         // Show loading state
//         APIUtils.showLoading(scoreResult);

//         try {
//             const response = await api.calculateScore(productName, productDescription);
            
//             if (response.success) {
//                 this.currentScore = response.data;
//                 this.displayScoreResult(productName, this.currentScore);
//             } else {
//                 APIUtils.showError(scoreResult, response.error || 'Failed to calculate score');
//             }
//         } catch (error) {
//             console.error('Error calculating score:', error);
//             APIUtils.showError(scoreResult, 'An error occurred while calculating the score');
//         }
//     }

//     displayScoreResult(productName, scoreData) {
//         const scoreResult = document.getElementById('scoreResult');
//         if (!scoreResult) return;

//         const score = scoreData.score || 0;
//         const breakdown = scoreData.breakdown || {};
//         const recommendations = scoreData.recommendations || [];

//         const scoreColor = this.getScoreColor(score);
//         const scoreLevel = this.getScoreLevel(score);

//         const resultHTML = `
//             <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
//                 <h3>Sustainability Score for "${productName}"</h3>
                
//                 <div style="text-align: center; margin: 2rem 0;">
//                     <div style="
//                         width: 120px;
//                         height: 120px;
//                         border-radius: 50%;
//                         background: ${scoreColor};
//                         display: flex;
//                         align-items: center;
//                         justify-content: center;
//                         margin: 0 auto 1rem;
//                         font-size: 2rem;
//                         font-weight: bold;
//                         color: white;
//                     ">
//                         ${score}/10
//                     </div>
//                     <h4 style="color: ${scoreColor}; margin: 0;">${scoreLevel}</h4>
//                 </div>

//                 ${this.renderScoreBreakdown(breakdown)}
                
//                 ${this.renderRecommendations(recommendations)}
                
//                 <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
//                     <button class="btn btn-primary" onclick="saveScore()">Save Score</button>
//                     <button class="btn btn-secondary" onclick="findAlternativesForScoredProduct('${productName}')">Find Alternatives</button>
//                     <button class="btn btn-secondary" onclick="clearScoreForm()">Calculate Another Score</button>
//                 </div>
//             </div>
//         `;

//         scoreResult.innerHTML = resultHTML;
//     }

//     renderScoreBreakdown(breakdown) {
//         if (!breakdown || Object.keys(breakdown).length === 0) {
//             return '';
//         }

//         const breakdownHTML = `
//             <div style="margin: 2rem 0;">
//                 <h4>Score Breakdown</h4>
//                 <div style="display: grid; gap: 1rem;">
//                     ${Object.entries(breakdown).map(([category, score]) => `
//                         <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
//                             <span><strong>${this.formatCategoryName(category)}</strong></span>
//                             <span style="color: ${this.getScoreColor(score)}; font-weight: bold;">${score}/10</span>
//                         </div>
//                     `).join('')}
//                 </div>
//             </div>
//         `;

//         return breakdownHTML;
//     }

//     renderRecommendations(recommendations) {
//         if (!recommendations || recommendations.length === 0) {
//             return '';
//         }

//         const recommendationsHTML = `
//             <div style="margin: 2rem 0;">
//                 <h4>💡 Recommendations for Improvement</h4>
//                 <ul style="margin-top: 1rem;">
//                     ${recommendations.map(rec => `<li style="margin-bottom: 0.5rem;">${rec}</li>`).join('')}
//                 </ul>
//             </div>
//         `;

//         return recommendationsHTML;
//     }

//     getScoreColor(score) {
//         if (score >= 8) return '#28a745'; // Green for excellent
//         if (score >= 6) return '#ffc107'; // Yellow for good
//         if (score >= 4) return '#fd7e14'; // Orange for fair
//         return '#dc3545'; // Red for poor
//     }

//     getScoreLevel(score) {
//         if (score >= 8) return 'Excellent';
//         if (score >= 6) return 'Good';
//         if (score >= 4) return 'Fair';
//         return 'Poor';
//     }

//     formatCategoryName(category) {
//         return category
//             .split('_')
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' ');
//     }

//     async saveScore() {
//         if (!this.currentScore) {
//             alert('No score to save. Please calculate a score first.');
//             return;
//         }

//         try {
//             // Save to localStorage for now (could be enhanced to save to backend)
//             const savedScores = JSON.parse(localStorage.getItem('savedScores') || '[]');
//             const scoreToSave = {
//                 ...this.currentScore,
//                 timestamp: new Date().toISOString(),
//                 productName: document.getElementById('productName')?.value || 'Unknown Product'
//             };
            
//             savedScores.push(scoreToSave);
//             localStorage.setItem('savedScores', JSON.stringify(savedScores));

//             alert('Score saved successfully!');
//         } catch (error) {
//             console.error('Error saving score:', error);
//             alert('Failed to save score');
//         }
//     }

//     clearForm() {
//         const productNameInput = document.getElementById('productName');
//         const productDescriptionInput = document.getElementById('productDescription');
//         const scoreResult = document.getElementById('scoreResult');

//         if (productNameInput) productNameInput.value = '';
//         if (productDescriptionInput) productDescriptionInput.value = '';
//         if (scoreResult) APIUtils.clearElement(scoreResult);

//         // Clear saved form data
//         localStorage.removeItem('scoring_productName');
//         localStorage.removeItem('scoring_productDescription');

//         this.currentScore = null;
//     }

//     // Method to get saved scores
//     getSavedScores() {
//         try {
//             return JSON.parse(localStorage.getItem('savedScores') || '[]');
//         } catch (error) {
//             console.error('Error loading saved scores:', error);
//             return [];
//         }
//     }

//     // Method to display saved scores history
//     showScoreHistory() {
//         const savedScores = this.getSavedScores();
        
//         if (savedScores.length === 0) {
//             return '<p>No saved scores found.</p>';
//         }

//         const historyHTML = `
//             <div style="background: white; padding: 2rem; border-radius: 12px; margin-top: 2rem;">
//                 <h4>Score History</h4>
//                 <div style="max-height: 300px; overflow-y: auto;">
//                     ${savedScores.reverse().map(score => `
//                         <div style="padding: 1rem; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
//                             <div>
//                                 <strong>${score.productName}</strong>
//                                 <br>
//                                 <small style="color: #666;">${new Date(score.timestamp).toLocaleDateString()}</small>
//                             </div>
//                             <div style="
//                                 background: ${this.getScoreColor(score.score)};
//                                 color: white;
//                                 padding: 0.5rem 1rem;
//                                 border-radius: 20px;
//                                 font-weight: bold;
//                             ">
//                                 ${score.score}/10
//                             </div>
//                         </div>
//                     `).join('')}
//                 </div>
//             </div>
//         `;

//         return historyHTML;
//     }
// }

// // Initialize scoring page
// let scoringPage;

// document.addEventListener('DOMContentLoaded', () => {
//     scoringPage = new ScoringPage();
// });

// // Global functions for use in HTML
// window.calculateScore = async () => {
//     if (scoringPage) {
//         await scoringPage.handleCalculateScore();
//     }
// };

// window.saveScore = () => {
//     if (scoringPage) {
//         scoringPage.saveScore();
//     }
// };

// window.clearScoreForm = () => {
//     if (scoringPage) {
//         scoringPage.clearForm();
//     }
// };

// window.findAlternativesForScoredProduct = (productName) => {
//     // Navigate to alternatives page and search for the scored product
//     window.showPage('alternatives');
    
//     setTimeout(() => {
//         const alternativeSearch = document.getElementById('alternativeSearch');
//         if (alternativeSearch) {
//             alternativeSearch.value = productName;
//             if (window.findAlternatives) {
//                 window.findAlternatives();
//             }
//         }
//     }, 100);
// }; 