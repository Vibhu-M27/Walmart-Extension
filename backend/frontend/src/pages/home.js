// // Home Page Functionality
// class HomePage {
//     constructor() {
//         this.init();
//     }

//     init() {
//         this.setupEventListeners();
//         this.loadStatistics();
//     }

//     setupEventListeners() {
//         // Hero section buttons
//         const heroButtons = document.querySelectorAll('.hero-buttons .btn');
//         heroButtons.forEach(button => {
//             button.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 const action = button.textContent.toLowerCase();
//                 this.handleHeroAction(action);
//             });
//         });

//         // Feature cards
//         const featureCards = document.querySelectorAll('.feature-card');
//         featureCards.forEach(card => {
//             card.addEventListener('click', () => {
//                 this.handleFeatureCardClick(card);
//             });
//         });
//     }

//     handleHeroAction(action) {
//         switch (action) {
//             case 'view products':
//                 window.showPage('products');
//                 break;
//             case 'find alternatives':
//                 window.showPage('alternatives');
//                 break;
//             default:
//                 console.log('Unknown action:', action);
//         }
//     }

//     handleFeatureCardClick(card) {
//         const title = card.querySelector('h3')?.textContent;
//         if (!title) return;

//         switch (title.toLowerCase()) {
//             case 'product extraction':
//                 window.showPage('products');
//                 break;
//             case 'alternative products':
//                 window.showPage('alternatives');
//                 break;
//             case 'sustainability scoring':
//                 window.showPage('scoring');
//                 break;
//             default:
//                 console.log('Unknown feature:', title);
//         }
//     }

//     async loadStatistics() {
//         try {
//             // Load basic statistics for the home page
//             const stats = await this.getHomePageStats();
//             this.displayStatistics(stats);
//         } catch (error) {
//             console.error('Error loading statistics:', error);
//         }
//     }

//     async getHomePageStats() {
//         // This could be enhanced to fetch real statistics from the backend
//         const stats = {
//             totalProducts: 0,
//             totalScores: 0,
//             averageScore: 0,
//             recentActivity: []
//         };

//         try {
//             // Get products count
//             const productsResponse = await api.getProducts();
//             if (productsResponse.success) {
//                 stats.totalProducts = productsResponse.data?.length || 0;
//             }

//             // Get saved scores count
//             const savedScores = JSON.parse(localStorage.getItem('savedScores') || '[]');
//             stats.totalScores = savedScores.length;

//             if (savedScores.length > 0) {
//                 const totalScore = savedScores.reduce((sum, score) => sum + (score.score || 0), 0);
//                 stats.averageScore = (totalScore / savedScores.length).toFixed(1);
//             }

//             // Get recent activity (last 5 scores)
//             stats.recentActivity = savedScores
//                 .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
//                 .slice(0, 5);

//         } catch (error) {
//             console.error('Error fetching statistics:', error);
//         }

//         return stats;
//     }

//     displayStatistics(stats) {
//         // Add statistics section to home page if it doesn't exist
//         const homeSection = document.getElementById('home');
//         if (!homeSection) return;

//         // Check if stats section already exists
//         if (homeSection.querySelector('.stats-section')) return;

//         const statsHTML = `
//             <div class="stats-section" style="margin-top: 3rem;">
//                 <h3 style="text-align: center; margin-bottom: 2rem;">Your Sustainability Dashboard</h3>
                
//                 <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
//                     <div style="background: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
//                         <div style="font-size: 2rem; font-weight: bold; color: #667eea; margin-bottom: 0.5rem;">${stats.totalProducts}</div>
//                         <div style="color: #666;">Products Analyzed</div>
//                     </div>
                    
//                     <div style="background: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
//                         <div style="font-size: 2rem; font-weight: bold; color: #28a745; margin-bottom: 0.5rem;">${stats.totalScores}</div>
//                         <div style="color: #666;">Scores Calculated</div>
//                     </div>
                    
//                     <div style="background: white; padding: 1.5rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
//                         <div style="font-size: 2rem; font-weight: bold; color: #ffc107; margin-bottom: 0.5rem;">${stats.averageScore}</div>
//                         <div style="color: #666;">Average Score</div>
//                     </div>
//                 </div>

//                 ${this.renderRecentActivity(stats.recentActivity)}
//             </div>
//         `;

//         homeSection.querySelector('.container').insertAdjacentHTML('beforeend', statsHTML);
//     }

//     renderRecentActivity(recentActivity) {
//         if (recentActivity.length === 0) {
//             return `
//                 <div style="background: white; padding: 2rem; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
//                     <h4>No Recent Activity</h4>
//                     <p style="color: #666;">Start by calculating your first sustainability score!</p>
//                     <button class="btn btn-primary" onclick="showPage('scoring')">Calculate Score</button>
//                 </div>
//             `;
//         }

//         const activityHTML = `
//             <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
//                 <h4>Recent Activity</h4>
//                 <div style="max-height: 300px; overflow-y: auto;">
//                     ${recentActivity.map(activity => `
//                         <div style="padding: 1rem; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center;">
//                             <div>
//                                 <strong>${activity.productName || 'Unknown Product'}</strong>
//                                 <br>
//                                 <small style="color: #666;">${new Date(activity.timestamp).toLocaleDateString()}</small>
//                             </div>
//                             <div style="
//                                 background: ${this.getScoreColor(activity.score)};
//                                 color: white;
//                                 padding: 0.5rem 1rem;
//                                 border-radius: 20px;
//                                 font-weight: bold;
//                             ">
//                                 ${activity.score}/10
//                             </div>
//                         </div>
//                     `).join('')}
//                 </div>
//                 <div style="text-align: center; margin-top: 1rem;">
//                     <button class="btn btn-secondary" onclick="showPage('scoring')">Calculate New Score</button>
//                 </div>
//             </div>
//         `;

//         return activityHTML;
//     }

//     getScoreColor(score) {
//         if (score >= 8) return '#28a745'; // Green for excellent
//         if (score >= 6) return '#ffc107'; // Yellow for good
//         if (score >= 4) return '#fd7e14'; // Orange for fair
//         return '#dc3545'; // Red for poor
//     }

//     // Method to refresh statistics
//     async refreshStats() {
//         const stats = await this.getHomePageStats();
//         this.displayStatistics(stats);
//     }
// }

// // Initialize home page
// let homePage;

// document.addEventListener('DOMContentLoaded', () => {
//     homePage = new HomePage();
// });

// // Global function to refresh home page stats
// window.refreshHomeStats = async () => {
//     if (homePage) {
//         await homePage.refreshStats();
//     }
// }; 