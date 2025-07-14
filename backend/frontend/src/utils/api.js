// API Utility for communicating with the backend
class API {
    constructor() {
        this.baseURL = window.location.origin; // Automatically detect the current server
        this.endpoints = {
            products: '/api/products',
            alternatives: '/alternatives',
            score: '/score'
        };
    }

    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };

        try {
            const response = await fetch(url, config);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return { success: true, data };
        } catch (error) {
            console.error('API request failed:', error);
            return { 
                success: false, 
                error: error.message || 'An error occurred while making the request' 
            };
        }
    }

    // Get all products
    async getProducts() {
        return await this.request(this.endpoints.products);
    }

    // Search products
    async searchProducts(query) {
        const params = new URLSearchParams({ search: query });
        return await this.request(`${this.endpoints.products}?${params}`);
    }

    // Get product by ID
    async getProductById(id) {
        return await this.request(`${this.endpoints.products}/${id}`);
    }

    // Find alternatives for a product
    async findAlternatives(productName) {
        return await this.request(this.endpoints.alternatives, {
            method: 'POST',
            body: JSON.stringify({ productName })
        });
    }

    // Calculate sustainability score
    async calculateScore(productName, productDescription) {
        return await this.request(this.endpoints.score, {
            method: 'POST',
            body: JSON.stringify({ 
                productName, 
                productDescription 
            })
        });
    }

    // Add a new product
    async addProduct(productData) {
        return await this.request(this.endpoints.products, {
            method: 'POST',
            body: JSON.stringify(productData)
        });
    }

    // Update a product
    async updateProduct(id, productData) {
        return await this.request(`${this.endpoints.products}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(productData)
        });
    }

    // Delete a product
    async deleteProduct(id) {
        return await this.request(`${this.endpoints.products}/${id}`, {
            method: 'DELETE'
        });
    }
}

// Create a global API instance
const api = new API();

// Utility functions for common operations
const APIUtils = {
    // Show loading state
    showLoading(element) {
        if (element) {
            element.innerHTML = '<div class="loading">Loading...</div>';
        }
    },

    // Show error message
    showError(element, message) {
        if (element) {
            element.innerHTML = `<div class="error">${message}</div>`;
        }
    },

    // Show success message
    showSuccess(element, message) {
        if (element) {
            element.innerHTML = `<div class="success">${message}</div>`;
        }
    },

    // Clear element content
    clearElement(element) {
        if (element) {
            element.innerHTML = '';
        }
    },

    // Format product data for display
    formatProduct(product) {
        return {
            id: product.id || product._id,
            name: product.name || product.title || 'Unknown Product',
            price: product.price ? `$${parseFloat(product.price).toFixed(2)}` : 'Price not available',
            description: product.description || product.desc || 'No description available',
            category: product.category || 'Uncategorized',
            image: product.image || product.imageUrl || null,
            url: product.url || product.productUrl || null,
            sustainabilityScore: product.sustainabilityScore || null,
            createdAt: product.createdAt ? new Date(product.createdAt).toLocaleDateString() : 'Unknown'
        };
    },

    // Create product card HTML
    createProductCard(product) {
        const formattedProduct = this.formatProduct(product);
        
        return `
            <div class="product-card" data-product-id="${formattedProduct.id}">
                ${formattedProduct.image ? 
                    `<img src="${formattedProduct.image}" alt="${formattedProduct.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">` : 
                    '<div style="width: 100%; height: 200px; background: #f0f0f0; border-radius: 8px; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; color: #666;">No Image</div>'
                }
                <h3>${formattedProduct.name}</h3>
                <p><strong>Price:</strong> ${formattedProduct.price}</p>
                <p><strong>Category:</strong> ${formattedProduct.category}</p>
                ${formattedProduct.sustainabilityScore ? 
                    `<p><strong>Sustainability Score:</strong> ${formattedProduct.sustainabilityScore}/10</p>` : 
                    ''
                }
                <p>${formattedProduct.description}</p>
                <div style="margin-top: 1rem;">
                    <button class="btn btn-primary" onclick="viewProductDetails('${formattedProduct.id}')">View Details</button>
                    <button class="btn btn-secondary" onclick="findAlternativesForProduct('${formattedProduct.name}')">Find Alternatives</button>
                </div>
            </div>
        `;
    },

    // Create alternative card HTML
    createAlternativeCard(alternative) {
        return `
            <div class="alternative-card">
                <h3>${alternative.name || 'Alternative Product'}</h3>
                <p><strong>Reason:</strong> ${alternative.reason || 'More sustainable option'}</p>
                <p><strong>Sustainability Score:</strong> ${alternative.sustainabilityScore || 'N/A'}/10</p>
                <p>${alternative.description || 'No description available'}</p>
                ${alternative.price ? `<p><strong>Price:</strong> ${alternative.price}</p>` : ''}
                ${alternative.url ? `<a href="${alternative.url}" target="_blank" class="btn btn-primary">View Product</a>` : ''}
            </div>
        `;
    }
};

// Export for use in other files
window.api = api;
window.APIUtils = APIUtils; 