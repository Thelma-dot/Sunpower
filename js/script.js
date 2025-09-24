// Global variables
let cart = [];
let products = [];
let currentSlide = 0;
let slideInterval;

// Sample products data
const sampleProducts = [
    {
        id: 1,
        name: "5KW Solar Inverter",
        price: 1200,
        description: "High-efficiency solar inverter with advanced MPPT technology",
        image: "images/5KW-Solar-Inverter-02.jpg",
        category: "inverters"
    },
    {
        id: 2,
        name: "5KWH LiFePO4 Battery",
        price: 800,
        description: "Long-lasting lithium iron phosphate battery for energy storage",
        image: "images/5KWH-Lifepo4-Battery-01-1.jpg",
        category: "batteries"
    },
    {
        id: 3,
        name: "Deye Hybrid Inverter",
        price: 1500,
        description: "Hybrid solar inverter with battery backup capability",
        image: "images/deye-5kw-hybrid-inverter_1024x.jpg",
        category: "inverters"
    },
    {
        id: 4,
        name: "SRNE Solar Inverter",
        price: 1000,
        description: "Reliable solar inverter for residential and commercial use",
        image: "images/SRNE-Solar-Hybrid-Inverter.jpg",
        category: "inverters"
    },
    {
        id: 5,
        name: "Solar Panel Set",
        price: 2000,
        description: "High-efficiency solar panels for maximum energy generation",
        image: "images/SPE-13-768x1086.jpg",
        category: "panels"
    },
    {
        id: 6,
        name: "Must Solar Inverter",
        price: 900,
        description: "Pure sine wave solar inverter with excellent performance",
        image: "images/Must-PV3000-100-Pure-Sine-Wave-Solar-Inverter-Featured-Image.webp",
        category: "inverters"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Load products
    products = sampleProducts;

    // Initialize navigation
    initializeNavigation();

    // Initialize search
    initializeSearch();

    // Load featured products
    loadFeaturedProducts();

    // Initialize newsletter form
    initializeNewsletterForm();

    // Initialize cart
    initializeCart();

    // Initialize smooth scrolling
    initializeSmoothScrolling();

    // Initialize testimonial slider
    initTestimonialSlider();

    // Initialize animations
    initializeAnimations();
}

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.className = 'fas fa-bars';
            }
        });
    });
}

// Load featured products
function loadFeaturedProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    // Show first 6 products as featured
    const featuredProducts = products.slice(0, 6);

    productsGrid.innerHTML = featuredProducts.map(product => `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <i class="fas fa-solar-panel"></i>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">₵${product.price.toLocaleString()}</div>
                <p class="product-description">${product.description}</p>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                    <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Cart functionality
function initializeCart() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('sunpower_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartBadge();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }

    // Save to localStorage
    localStorage.setItem('sunpower_cart', JSON.stringify(cart));

    // Update UI
    updateCartBadge();
    showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('sunpower_cart', JSON.stringify(cart));
    updateCartBadge();
    showNotification('Item removed from cart', 'info');
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Create modal for product details
    showProductModal(product);
}

function showProductModal(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-body">
                    <div class="product-image-large">
                        <i class="fas fa-solar-panel"></i>
                    </div>
                    <div class="product-details">
                        <h2>${product.name}</h2>
                        <div class="product-price-large">₵${product.price.toLocaleString()}</div>
                        <p class="product-description-large">${product.description}</p>
                        <div class="product-features">
                            <h3>Key Features:</h3>
                            <ul>
                                <li>High efficiency and reliability</li>
                                <li>Easy installation and maintenance</li>
                                <li>Warranty included</li>
                                <li>Professional support</li>
                            </ul>
                        </div>
                        <div class="modal-actions">
                            <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();">
                                <i class="fas fa-shopping-cart"></i>
                                Add to Cart
                            </button>
                            <button class="btn btn-secondary" onclick="closeModal()">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .product-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            background: white;
            border-radius: 16px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
            z-index: 1;
        }
        
        .modal-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        
        .product-image-large {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #667eea;
            min-height: 300px;
        }
        
        .product-details h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #333;
            margin-bottom: 1rem;
        }
        
        .product-price-large {
            font-size: 2.5rem;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 1.5rem;
        }
        
        .product-description-large {
            font-size: 1.125rem;
            color: #666;
            line-height: 1.6;
            margin-bottom: 2rem;
        }
        
        .product-features h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 1rem;
        }
        
        .product-features ul {
            list-style: none;
            padding: 0;
        }
        
        .product-features li {
            padding: 0.5rem 0;
            color: #666;
            position: relative;
            padding-left: 1.5rem;
        }
        
        .product-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
        }
        
        .modal-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .modal-actions {
                flex-direction: column;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.remove();
    }
}

// Newsletter functionality
function initializeNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        if (!email) {
            showNotification('Please enter your email address', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Simulate subscription
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        form.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation (broadened for About page)
    const animatedElements = document.querySelectorAll(
        '.feature-item, .service-card, .testimonial-card, .about-card, .mv-card, .team-member, .stat-item, .story-content, .timeline-item, .award-card'
    );
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add notification styles
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 10001;
                max-width: 400px;
                animation: slideIn 0.3s ease;
            }
            
            .notification-content {
                background: white;
                border-radius: 8px;
                padding: 1rem 1.5rem;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                display: flex;
                align-items: center;
                gap: 1rem;
                border-left: 4px solid #667eea;
            }
            
            .notification-success .notification-content {
                border-left-color: #28a745;
            }
            
            .notification-error .notification-content {
                border-left-color: #dc3545;
            }
            
            .notification-warning .notification-content {
                border-left-color: #ffc107;
            }
            
            .notification-content i:first-child {
                color: #667eea;
                font-size: 1.25rem;
            }
            
            .notification-success .notification-content i:first-child {
                color: #28a745;
            }
            
            .notification-error .notification-content i:first-child {
                color: #dc3545;
            }
            
            .notification-warning .notification-content i:first-child {
                color: #ffc107;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #666;
                cursor: pointer;
                font-size: 1rem;
                margin-left: auto;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

function debounce(func, wait) {
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

// Search functionality
function initializeSearch() {
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    console.log('Search elements found:', { searchIcon, searchContainer, searchInput, searchBtn });

    if (searchIcon && searchContainer) {
        // Toggle search container when icon is clicked
        searchIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            console.log('Search icon clicked');
            searchContainer.classList.toggle('active');
            console.log('Search container active class:', searchContainer.classList.contains('active'));
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            }
        });

        // Close search when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchContainer.contains(e.target) && !searchIcon.contains(e.target)) {
                searchContainer.classList.remove('active');
            }
        });
    }

    if (searchInput && searchBtn) {
        const triggerSearch = () => {
            const searchTerm = searchInput.value.trim();
            if (!searchTerm) return;
            searchProducts(searchTerm);
            searchContainer.classList.remove('active');
        };

        searchBtn.addEventListener('click', triggerSearch);

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                triggerSearch();
            }
        });
    }
}

function searchProducts(term) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase()) ||
        product.category.toLowerCase().includes(term.toLowerCase())
    );

    // Update products grid with search results
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid && filteredProducts.length > 0) {
        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <i class="fas fa-solar-panel"></i>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">₵${product.price.toLocaleString()}</div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                            <i class="fas fa-eye"></i>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        showNotification(`Found ${filteredProducts.length} product(s)`, 'success');
        return;
    }

    // If no grid is present (most pages) or no products matched, route to relevant page
    const pagePath = getPageForQuery(term);
    if (pagePath) {
        window.location.href = pagePath;
        return;
    }

    showNotification('No direct match found. Try different keywords.', 'info');
}







// Services Modal Functions
function openServicesPopup() {
    const modal = document.getElementById('servicesModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeServicesPopup() {
    const modal = document.getElementById('servicesModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('servicesModal');
    if (event.target === modal) {
        closeServicesPopup();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeServicesPopup();
    }
});

// Feature Cards Interactive Functionality
document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');
    const serviceCards = document.querySelectorAll('.service-card');

    // Feature cards functionality
    featureCards.forEach(card => {
        // Add click event listener
        card.addEventListener('click', function () {
            // Remove active class from all feature cards
            featureCards.forEach(c => c.classList.remove('active'));

            // Add active class to clicked card
            this.classList.add('active');

            // Optional: Add a small delay for smooth animation
            setTimeout(() => {
                // You can add additional functionality here if needed
            }, 100);
        });

        // Add hover effects
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px)';
        });

        card.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Service cards functionality
    serviceCards.forEach(card => {
        // Add click event listener
        card.addEventListener('click', function () {
            // Remove active class from all service cards
            serviceCards.forEach(c => c.classList.remove('active'));

            // Add active class to clicked card
            this.classList.add('active');

            // Optional: Add a small delay for smooth animation
            setTimeout(() => {
                // You can add additional functionality here if needed
            }, 100);
        });

        // Add hover effects
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px)';
        });

        card.addEventListener('mouseleave', function () {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Close card details when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.feature-card') && !event.target.closest('.service-card')) {
            featureCards.forEach(card => {
                card.classList.remove('active');
            });
            serviceCards.forEach(card => {
                card.classList.remove('active');
            });
        }
    });

    // Initialize slideshow
    initSlideshow();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Hero Slideshow Functions
function initSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (slides.length === 0) return;

    function showSlide(index) {
        // Remove all classes from slides
        slides.forEach(slide => {
            slide.classList.remove('active', 'prev');
        });
        dots.forEach(dot => dot.classList.remove('active'));

        // Add prev class to current slide before changing
        if (index !== currentSlide && slides[currentSlide]) {
            slides[currentSlide].classList.add('prev');
        }

        // Add active class to new slide and dot
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }

        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopSlideshow();
            startSlideshow(); // Restart the timer
        });
    });

    // Pause on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopSlideshow);
        heroSection.addEventListener('mouseleave', startSlideshow);
    }

    // Initialize
    showSlide(0);
    startSlideshow();
}

// Testimonial Slider
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoSlide() {
        return setInterval(nextSlide, 10000); // Change slide every 10 seconds
    }

    let autoSlideInterval = startAutoSlide();

    // Event listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            nextSlide();
            autoSlideInterval = startAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            prevSlide();
            autoSlideInterval = startAutoSlide();
        });
    }

    // Pause on hover
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
        testimonialSection.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        testimonialSection.addEventListener('mouseleave', () => {
            autoSlideInterval = startAutoSlide();
        });
    }

    // Initialize
    showSlide(0);
}

// Export functions for global access
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.viewProduct = viewProduct;
window.closeModal = closeModal;
window.openServicesPopup = openServicesPopup;
window.closeServicesPopup = closeServicesPopup;

// --- Search helpers: site-wide page routing ---
function resolvePagePath(filename) {
    const inPagesDir = window.location.pathname.includes('/pages/');
    // From homepage, prefix with pages/; from subpages, use filename directly
    return inPagesDir ? filename : `pages/${filename}`;
}

function getPageForQuery(rawTerm) {
    const term = rawTerm.toLowerCase();

    // Quick direct filename detections
    const directMap = {
        'homeowners': 'homeowners.html',
        'how solar works': 'how-solar-works.html',
        'installation': 'installation.html',
        'better solar panels': 'better-solar-panels.html',
        'solar battery storage': 'solar-battery-storage.html',
        'about': 'about.html',
        'support': 'support.html',
        'quote': 'quote.html',
        'privacy': 'privacy.html',
        'terms': 'terms.html',
        'services': 'services.html',
        'wiring': 'wiring.html',
        'elevator': 'lift.html',
        'lift': 'lift.html',
        'testing': 'testing.html',
        'wind': 'wind.html',
        'cctv': 'cctv.html',
        'security': 'cctv.html',
        'smart': 'smart.html',
        'smart home': 'smart.html',
        'ups': 'ups.html',
        'avr': 'ups.html',
        'voltage': 'voltage.html'
    };

    for (const key in directMap) {
        if (term.includes(key)) {
            return resolvePagePath(directMap[key]);
        }
    }

    // Category/keyword heuristics
    const keywordRules = [
        { keys: ['battery', 'storage', 'lifepo4'], file: 'solar-battery-storage.html' },
        { keys: ['panel', 'panels', 'module'], file: 'better-solar-panels.html' },
        { keys: ['inverter', 'hybrid'], file: 'wiring.html' },
        { keys: ['quote', 'price', 'estimate'], file: 'quote.html' },
        { keys: ['support', 'help'], file: 'support.html' },
        { keys: ['install', 'installation'], file: 'installation.html' },
        { keys: ['solar'], file: 'how-solar-works.html' }
    ];

    for (const rule of keywordRules) {
        if (rule.keys.some(k => term.includes(k))) {
            return resolvePagePath(rule.file);
        }
    }

    // Fallback: if we're on home already, stay; otherwise go home
    const onHome = !window.location.pathname.includes('/pages/');
    return onHome ? null : 'index.html';
}





