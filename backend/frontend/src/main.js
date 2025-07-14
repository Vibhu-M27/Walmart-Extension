// Main Application Entry Point
class WalmartScraperApp {
    constructor() {
        this.isInitialized = false;
        this.init();
    }

    init() {
        this.setupGlobalEventListeners();
        this.initializeApp();
        this.setupServiceWorker();
    }

    setupGlobalEventListeners() {
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.onPageVisible();
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Handle keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // Handle errors
        window.addEventListener('error', (e) => {
            this.handleError(e);
        });

        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            this.handlePromiseRejection(e);
        });
    }

    initializeApp() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.onDOMReady();
            });
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        if (this.isInitialized) return;

        console.log('🚀 Walmart Scraper App Initializing...');
        
        this.setupApp();
        this.loadInitialData();
        this.setupAnalytics();
        
        this.isInitialized = true;
        console.log('✅ Walmart Scraper App Initialized');
    }

    setupApp() {
        // Set up app-wide configurations
        this.setupAppConfig();
        
        // Initialize theme
        this.setupTheme();
        
        // Set up notifications
        this.setupNotifications();
    }

    setupAppConfig() {
        // App configuration
        window.appConfig = {
            name: 'Walmart Product Scraper',
            version: '1.0.0',
            apiBaseUrl: window.location.origin,
            features: {
                productExtraction: true,
                alternatives: true,
                scoring: true,
                analytics: true
            },
            settings: {
                autoSave: true,
                notifications: true,
                theme: 'light'
            }
        };
    }

    setupTheme() {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('app_theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Add theme toggle functionality
        this.addThemeToggle();
    }

    addThemeToggle() {
        // Create theme toggle button (could be added to navigation)
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '🌙';
        themeToggle.className = 'theme-toggle';
        themeToggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            z-index: 1001;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        `;
        
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
        
        document.body.appendChild(themeToggle);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('app_theme', newTheme);
        
        // Update theme toggle icon
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
        }
    }

    setupNotifications() {
        // Check if browser supports notifications
        if ('Notification' in window) {
            Notification.requestPermission();
        }
    }

    async loadInitialData() {
        try {
            // Load any initial data needed for the app
            await this.loadAppData();
        } catch (error) {
            console.error('Error loading initial data:', error);
        }
    }

    async loadAppData() {
        // Load any cached data or initial state
        const cachedData = localStorage.getItem('app_cache');
        if (cachedData) {
            try {
                const data = JSON.parse(cachedData);
                window.appCache = data;
            } catch (error) {
                console.error('Error parsing cached data:', error);
            }
        }
    }

    setupAnalytics() {
        // Simple analytics tracking
        this.trackPageView();
        
        // Track user interactions
        this.setupInteractionTracking();
    }

    trackPageView() {
        const page = window.location.hash.substring(1) || 'home';
        console.log(`📊 Page View: ${page}`);
        
        // Could send to analytics service here
        if (window.gtag) {
            window.gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: page,
                page_location: window.location.href
            });
        }
    }

    setupInteractionTracking() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn')) {
                this.trackEvent('button_click', {
                    button_text: e.target.textContent,
                    button_class: e.target.className,
                    page: this.getCurrentPage()
                });
            }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
            this.trackEvent('form_submit', {
                form_id: e.target.id,
                page: this.getCurrentPage()
            });
        });
    }

    trackEvent(eventName, parameters = {}) {
        console.log(`📊 Event: ${eventName}`, parameters);
        
        // Could send to analytics service here
        if (window.gtag) {
            window.gtag('event', eventName, parameters);
        }
    }

    getCurrentPage() {
        return window.location.hash.substring(1) || 'home';
    }

    onPageVisible() {
        // Refresh data when page becomes visible
        console.log('🔄 Page became visible, refreshing data...');
        
        // Refresh home page stats if on home page
        if (this.getCurrentPage() === 'home' && window.refreshHomeStats) {
            window.refreshHomeStats();
        }
    }

    handleResize() {
        // Handle responsive design adjustments
        const width = window.innerWidth;
        
        // Add mobile-specific adjustments if needed
        if (width < 768) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    }

    handleKeyboardShortcuts(e) {
        // Global keyboard shortcuts
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case '1':
                    e.preventDefault();
                    window.showPage('home');
                    break;
                case '2':
                    e.preventDefault();
                    window.showPage('products');
                    break;
                case '3':
                    e.preventDefault();
                    window.showPage('alternatives');
                    break;
                case '4':
                    e.preventDefault();
                    window.showPage('scoring');
                    break;
                case 'k':
                    e.preventDefault();
                    this.focusSearch();
                    break;
            }
        }
    }

    focusSearch() {
        // Focus on the search input of the current page
        const currentPage = this.getCurrentPage();
        let searchInput;
        
        switch (currentPage) {
            case 'products':
                searchInput = document.getElementById('productSearch');
                break;
            case 'alternatives':
                searchInput = document.getElementById('alternativeSearch');
                break;
        }
        
        if (searchInput) {
            searchInput.focus();
        }
    }

    handleError(error) {
        console.error('🚨 App Error:', error);
        
        // Show user-friendly error message
        this.showNotification('An error occurred. Please try again.', 'error');
    }

    handlePromiseRejection(event) {
        console.error('🚨 Unhandled Promise Rejection:', event.reason);
        
        // Show user-friendly error message
        this.showNotification('Something went wrong. Please refresh the page.', 'error');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'error' ? '#dc3545' : type === 'success' ? '#28a745' : '#667eea'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    setupServiceWorker() {
        // Register service worker for PWA functionality
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('✅ Service Worker registered:', registration);
                })
                .catch(error => {
                    console.log('❌ Service Worker registration failed:', error);
                });
        }
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Initialize the app
const app = new WalmartScraperApp();

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
    
    [data-theme="dark"] {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
        --card-bg: #2d2d2d;
    }
    
    [data-theme="dark"] body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }
    
    [data-theme="dark"] .feature-card,
    [data-theme="dark"] .product-card,
    [data-theme="dark"] .alternative-card,
    [data-theme="dark"] .scoring-form,
    [data-theme="dark"] .score-result {
        background: var(--card-bg);
        color: var(--text-color);
    }
`;
document.head.appendChild(style);

// Export for global access
window.app = app; 