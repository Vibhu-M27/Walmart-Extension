// // Navigation Component
// class Navigation {
//     constructor() {
//         this.currentPage = 'home';
//         this.init();
//     }

//     init() {
//         this.setupEventListeners();
//         this.handleInitialPage();
//     }

//     setupEventListeners() {
//         // Add click listeners to navigation links
//         const navLinks = document.querySelectorAll('.nav-link');
//         navLinks.forEach(link => {
//             link.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 const pageId = link.getAttribute('href').substring(1);
//                 this.navigateToPage(pageId);
//             });
//         });

//         // Handle browser back/forward buttons
//         window.addEventListener('popstate', (e) => {
//             if (e.state && e.state.page) {
//                 this.showPage(e.state.page);
//             }
//         });
//     }

//     handleInitialPage() {
//         // Check if there's a hash in the URL
//         const hash = window.location.hash.substring(1);
//         if (hash && this.isValidPage(hash)) {
//             this.showPage(hash);
//         } else {
//             this.showPage('home');
//         }
//     }

//     navigateToPage(pageId) {
//         if (this.isValidPage(pageId)) {
//             // Update URL without page reload
//             window.history.pushState({ page: pageId }, '', `#${pageId}`);
//             this.showPage(pageId);
//         }
//     }

//     showPage(pageId) {
//         if (!this.isValidPage(pageId)) {
//             console.error(`Invalid page: ${pageId}`);
//             return;
//         }

//         // Hide all pages
//         const pages = document.querySelectorAll('.page');
//         pages.forEach(page => {
//             page.classList.remove('active');
//         });

//         // Show the target page
//         const targetPage = document.getElementById(pageId);
//         if (targetPage) {
//             targetPage.classList.add('active');
//         }

//         // Update navigation active state
//         this.updateNavigationActiveState(pageId);

//         // Update current page
//         this.currentPage = pageId;

//         // Trigger page-specific initialization
//         this.initializePage(pageId);
//     }

//     updateNavigationActiveState(pageId) {
//         // Remove active class from all nav links
//         const navLinks = document.querySelectorAll('.nav-link');
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add active class to current page link
//         const activeLink = document.querySelector(`[href="#${pageId}"]`);
//         if (activeLink) {
//             activeLink.classList.add('active');
//         }
//     }

//     isValidPage(pageId) {
//         const validPages = ['home', 'products', 'alternatives', 'scoring'];
//         return validPages.includes(pageId);
//     }

//     initializePage(pageId) {
//         switch (pageId) {
//             case 'home':
//                 this.initializeHomePage();
//                 break;
//             case 'products':
//                 this.initializeProductsPage();
//                 break;
//             case 'alternatives':
//                 this.initializeAlternativesPage();
//                 break;
//             case 'scoring':
//                 this.initializeScoringPage();
//                 break;
//         }
//     }

//     initializeHomePage() {
//         // Home page is already loaded with static content
//         console.log('Home page initialized');
//     }

//     initializeProductsPage() {
//         // Load products when the page is shown
//         if (window.loadProducts) {
//             window.loadProducts();
//         }
//     }

//     initializeAlternativesPage() {
//         // Clear previous results when page is shown
//         const alternativesList = document.getElementById('alternativesList');
//         if (alternativesList) {
//             APIUtils.clearElement(alternativesList);
//         }
//     }

//     initializeScoringPage() {
//         // Clear previous results when page is shown
//         const scoreResult = document.getElementById('scoreResult');
//         if (scoreResult) {
//             APIUtils.clearElement(scoreResult);
//         }
//     }

//     // Public method to be called from HTML
//     static showPage(pageId) {
//         if (window.navigation) {
//             window.navigation.showPage(pageId);
//         } else {
//             // Fallback if navigation isn't initialized yet
//             const pages = document.querySelectorAll('.page');
//             pages.forEach(page => {
//                 page.classList.remove('active');
//             });
            
//             const targetPage = document.getElementById(pageId);
//             if (targetPage) {
//                 targetPage.classList.add('active');
//             }
//         }
//     }
// }

// // Initialize navigation when DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     window.navigation = new Navigation();
// });

// // Global function for navigation (for use in HTML onclick handlers)
// window.showPage = Navigation.showPage; 