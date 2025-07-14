// // Alternatives Page Functionality
// class AlternativesPage {
//     constructor() {
//         this.alternatives = [];
//         this.init();
//     }

//     init() {
//         this.setupEventListeners();
//     }

//     setupEventListeners() {
//         // Search functionality
//         const searchInput = document.getElementById('alternativeSearch');
//         if (searchInput) {
//             searchInput.addEventListener('keypress', (e) => {
//                 if (e.key === 'Enter') {
//                     this.handleSearch();
//                 }
//             });
//         }

//         // Search button
//         const searchButton = document.querySelector('#alternatives .btn-primary');
//         if (searchButton) {
//             searchButton.addEventListener('click', () => {
//                 this.handleSearch();
//             });
//         }
//     }

//     async handleSearch() {
//         const searchInput = document.getElementById('alternativeSearch');
//         if (!searchInput) return;

//         const productName = searchInput.value.trim();
//         if (!productName) {
//             alert('Please enter a product name to find alternatives');
//             return;
//         }

//         await this.findAlternatives(productName);
//     }

//     async findAlternatives(productName) {
//         const alternativesList = document.getElementById('alternativesList');
//         if (!alternativesList) return;

//         // Show loading state
//         APIUtils.showLoading(alternativesList);

//         try {
//             const response = await api.findAlternatives(productName);
            
//             if (response.success) {
//                 this.alternatives = response.data || [];
//                 this.displayAlternatives(productName);
//             } else {
//                 APIUtils.showError(alternativesList, response.error || 'Failed to find alternatives');
//             }
//         } catch (error) {
//             console.error('Error finding alternatives:', error);
//             APIUtils.showError(alternativesList, 'An error occurred while finding alternatives');
//         }
//     }

//     displayAlternatives(originalProductName) {
//         const alternativesList = document.getElementById('alternativesList');
//         if (!alternativesList) return;

//         if (this.alternatives.length === 0) {
//             alternativesList.innerHTML = `
//                 <div style="text-align: center; padding: 2rem; color: #666;">
//                     <h3>No alternatives found for "${originalProductName}"</h3>
//                     <p>Try searching for a different product or check back later for more sustainable options.</p>
//                 </div>
//             `;
//             return;
//         }

//         const alternativesHTML = `
//             <div style="margin-bottom: 2rem;">
//                 <h3>Alternatives for "${originalProductName}"</h3>
//                 <p>Found ${this.alternatives.length} sustainable alternative(s):</p>
//             </div>
//             <div class="alternatives-grid">
//                 ${this.alternatives.map(alternative => 
//                     APIUtils.createAlternativeCard(alternative)
//                 ).join('')}
//             </div>
//         `;

//         alternativesList.innerHTML = alternativesHTML;
//     }

//     async getSustainabilityComparison(originalProduct, alternatives) {
//         // This could be enhanced to show a comparison chart
//         const comparisonData = {
//             original: {
//                 name: originalProduct,
//                 score: 0 // Would need to calculate this
//             },
//             alternatives: alternatives.map(alt => ({
//                 name: alt.name,
//                 score: alt.sustainabilityScore || 0,
//                 reason: alt.reason
//             }))
//         };

//         return comparisonData;
//     }

//     showComparisonChart(comparisonData) {
//         // Create a simple comparison visualization
//         const chartHTML = `
//             <div style="background: white; padding: 2rem; border-radius: 12px; margin-top: 2rem;">
//                 <h3>Sustainability Comparison</h3>
//                 <div style="display: flex; flex-direction: column; gap: 1rem;">
//                     <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
//                         <span><strong>${comparisonData.original.name}</strong></span>
//                         <span>Score: ${comparisonData.original.score}/10</span>
//                     </div>
//                     ${comparisonData.alternatives.map(alt => `
//                         <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #e8f5e8; border-radius: 8px; border-left: 4px solid #28a745;">
//                             <div>
//                                 <span><strong>${alt.name}</strong></span>
//                                 <br>
//                                 <small style="color: #666;">${alt.reason}</small>
//                             </div>
//                             <span>Score: ${alt.score}/10</span>
//                         </div>
//                     `).join('')}
//                 </div>
//             </div>
//         `;

//         const alternativesList = document.getElementById('alternativesList');
//         if (alternativesList) {
//             alternativesList.insertAdjacentHTML('beforeend', chartHTML);
//         }
//     }

//     // Method to suggest categories for better alternatives
//     suggestCategories(productName) {
//         const categories = [
//             'Organic',
//             'Fair Trade',
//             'Recycled Materials',
//             'Biodegradable',
//             'Local Production',
//             'Energy Efficient',
//             'Water Saving',
//             'Carbon Neutral'
//         ];

//         // Simple keyword matching for suggestions
//         const suggestions = categories.filter(category => {
//             const productLower = productName.toLowerCase();
//             const categoryLower = category.toLowerCase();
            
//             // Add some basic logic for category suggestions
//             if (categoryLower.includes('organic') && (productLower.includes('food') || productLower.includes('produce'))) {
//                 return true;
//             }
//             if (categoryLower.includes('recycled') && (productLower.includes('paper') || productLower.includes('plastic'))) {
//                 return true;
//             }
//             if (categoryLower.includes('energy') && (productLower.includes('appliance') || productLower.includes('electronic'))) {
//                 return true;
//             }
            
//             return false;
//         });

//         return suggestions.slice(0, 3); // Return top 3 suggestions
//     }

//     displayCategorySuggestions(productName) {
//         const suggestions = this.suggestCategories(productName);
        
//         if (suggestions.length === 0) return;

//         const suggestionsHTML = `
//             <div style="background: #e3f2fd; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
//                 <h4>💡 Sustainability Tips for "${productName}"</h4>
//                 <p>Consider looking for products with these certifications:</p>
//                 <ul style="margin-top: 0.5rem;">
//                     ${suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
//                 </ul>
//             </div>
//         `;

//         const alternativesList = document.getElementById('alternativesList');
//         if (alternativesList) {
//             alternativesList.insertAdjacentHTML('afterbegin', suggestionsHTML);
//         }
//     }
// }

// // Initialize alternatives page
// let alternativesPage;

// document.addEventListener('DOMContentLoaded', () => {
//     alternativesPage = new AlternativesPage();
// });

// // Global functions for use in HTML
// window.findAlternatives = async () => {
//     if (alternativesPage) {
//         await alternativesPage.handleSearch();
//     }
// };

// // Enhanced find alternatives function that can be called from other pages
// window.findAlternativesForProduct = async (productName) => {
//     const searchInput = document.getElementById('alternativeSearch');
//     if (searchInput) {
//         searchInput.value = productName;
//     }
    
//     if (alternativesPage) {
//         await alternativesPage.findAlternatives(productName);
//     }
// }; 