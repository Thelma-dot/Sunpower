// Cart Page JavaScript

// Initialize cart page
document.addEventListener('DOMContentLoaded', function () {
    initializeCartPage();
});

function initializeCartPage() {
    loadCart();
    initializeCartControls();
    loadRecommendedProducts();
}

function loadCart() {
    const cart = getCart();
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.getElementById('cart-content');
    const cartItemsList = document.getElementById('cart-items-list');

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
        return;
    }

    emptyCart.style.display = 'none';
    cartContent.style.display = 'grid';

    // Render cart items
    cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item" data-product-id="${item.id}">
            <div class="cart-item-image">
                <i class="fas fa-solar-panel"></i>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₵${item.price.toLocaleString()}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, parseInt(this.value))">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

function initializeCartControls() {
    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to clear your cart?')) {
                clearCart();
            }
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            proceedToCheckout();
        });
    }
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }

    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        saveCart(cart);
        loadCart();
        updateCartBadge();
    }
}

function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    loadCart();
    updateCartBadge();
    showNotification('Item removed from cart', 'info');
}

function clearCart() {
    saveCart([]);
    loadCart();
    updateCartBadge();
    showNotification('Cart cleared', 'info');
}

function updateCartSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 1000 ? 0 : 50; // Free shipping over ₵1000
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `₵${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `₵${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `₵${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₵${total.toFixed(2)}`;

    // Show free shipping message
    if (shipping === 0) {
        document.getElementById('shipping').style.color = '#28a745';
        document.getElementById('shipping').style.fontWeight = '600';
    } else {
        document.getElementById('shipping').style.color = '#666';
        document.getElementById('shipping').style.fontWeight = '400';
    }
}

function proceedToCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'warning');
        return;
    }

    // In a real application, this would redirect to a checkout page
    // For now, we'll show a success message
    showNotification('Redirecting to checkout...', 'success');

    // Simulate checkout process
    setTimeout(() => {
        showNotification('Checkout functionality coming soon!', 'info');
    }, 1000);
}

function loadRecommendedProducts() {
    const recommendedProducts = document.getElementById('recommended-products');
    const recommendedGrid = document.getElementById('recommended-grid');

    // Sample recommended products
    const products = [
        {
            id: 7,
            name: "Solar Panel Mounting Kit",
            price: 300,
            description: "Complete mounting system for secure installation"
        },
        {
            id: 8,
            name: "Solar Cable Set",
            price: 150,
            description: "High-quality DC cables for solar connections"
        },
        {
            id: 9,
            name: "Solar Monitoring System",
            price: 200,
            description: "Real-time monitoring of your solar system"
        }
    ];

    recommendedGrid.innerHTML = products.map(product => `
        <div class="recommended-product-card">
            <div class="recommended-product-image">
                <i class="fas fa-solar-panel"></i>
            </div>
            <div class="recommended-product-info">
                <div class="recommended-product-name">${product.name}</div>
                <div class="recommended-product-price">₵${product.price.toLocaleString()}</div>
                <p style="color: #666; font-size: 0.9rem; margin-bottom: 1rem;">${product.description}</p>
                <div class="recommended-product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        <i class="fas fa-plus"></i>
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i>
                        View
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Show recommended products if cart has items
    const cart = getCart();
    if (cart.length > 0) {
        recommendedProducts.style.display = 'block';
    }
}

// Cart utility functions
function getCart() {
    const cart = localStorage.getItem('sunpower_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('sunpower_cart', JSON.stringify(cart));
}

function addToCart(productId) {
    // This function should be available from the main script.js
    // For now, we'll implement a basic version
    const products = [
        { id: 7, name: "Solar Panel Mounting Kit", price: 300 },
        { id: 8, name: "Solar Cable Set", price: 150 },
        { id: 9, name: "Solar Monitoring System", price: 200 }
    ];

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart(cart);
    loadCart();
    updateCartBadge();
    showNotification(`${product.name} added to cart!`, 'success');
}

function viewProduct(productId) {
    // This would normally open a product modal or redirect to product page
    showNotification('Product details coming soon!', 'info');
}

// Export functions for global access
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.addToCart = addToCart;
window.viewProduct = viewProduct;
