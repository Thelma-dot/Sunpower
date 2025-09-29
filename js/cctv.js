// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "CCTV Installation Services",
        description: "Professional CCTV camera installation services for residential, commercial, and industrial properties. Complete surveillance system setup with high-quality cameras and recording equipment.",
        image: "images/cctv.jpg",
        category: "inverters",
        badge: "Popular",
        icon: "fa-video",
        features: [
            "HD and 4K camera installation",
            "Night vision capabilities",
            "Weatherproof outdoor cameras",
            "Remote viewing setup",
            "Mobile app configuration",
            "Professional wiring and setup"
        ],
        specifications: {
            "Service Type": "CCTV Installation",
            "Camera Types": "IP and analog cameras",
            "Resolution": "HD, Full HD, 4K options",
            "Night Vision": "Up to 100m IR range",
            "Storage": "Local and cloud storage",
            "Remote Access": "Mobile and web apps",
            "Installation": "Professional installation team",
            "Warranty": "2 years on installation"
        }
    },
    {
        id: 2,
        name: "Security Gadgets & Accessories",
        description: "Complete range of security gadgets and accessories including motion sensors, door alarms, smart locks, and security lighting for comprehensive protection.",
        image: "images/Affordable and High quality CCTV Cameras (security camera) in Dubai, UAE.jpeg",
        category: "batteries",
        badge: "Security",
        icon: "fa-shield-alt",
        features: [
            "Motion detection sensors",
            "Door and window alarms",
            "Smart lock systems",
            "Security lighting",
            "Panic buttons",
            "Integration with CCTV systems"
        ],
        specifications: {
            "Service Type": "Security Gadgets",
            "Sensors": "PIR motion sensors",
            "Alarms": "Door and window alarms",
            "Locks": "Smart lock installation",
            "Lighting": "Motion-activated lighting",
            "Integration": "CCTV system integration",
            "Control": "Mobile app control",
            "Warranty": "1 year on accessories"
        }
    },
    {
        id: 3,
        name: "Home Automation Integration",
        description: "Smart home automation integration with CCTV systems. Control and monitor your security system along with other smart home devices from a single platform.",
        image: "images/smarthome.webp",
        category: "inverters",
        badge: "Smart",
        icon: "fa-home",
        features: [
            "Smart home integration",
            "Voice control compatibility",
            "Automated security routines",
            "Mobile app control",
            "Energy management",
            "Remote monitoring"
        ],
        specifications: {
            "Service Type": "Home Automation",
            "Integration": "CCTV and smart home",
            "Control": "Voice and mobile control",
            "Automation": "Custom automation routines",
            "Platforms": "Alexa, Google Assistant",
            "Monitoring": "Centralized monitoring",
            "Energy": "Energy management features",
            "Warranty": "2 years on integration"
        }
    },
    {
        id: 4,
        name: "Smart Security Systems",
        description: "Advanced smart security systems with AI-powered analytics, facial recognition, and intelligent monitoring. Next-generation security technology for maximum protection.",
        image: "images/Pakistan Surveillance CCTV Security Cameras Installation services in Karachi.jpeg",
        category: "panels",
        badge: "AI-Powered",
        icon: "fa-brain",
        features: [
            "AI-powered analytics",
            "Facial recognition technology",
            "Intelligent motion detection",
            "Automated alerts",
            "Cloud-based storage",
            "Advanced reporting"
        ],
        specifications: {
            "Service Type": "Smart Security Systems",
            "AI Features": "Facial recognition and analytics",
            "Detection": "Intelligent motion detection",
            "Alerts": "Automated smart alerts",
            "Storage": "Cloud and local storage",
            "Analytics": "Advanced reporting and analytics",
            "Integration": "Third-party system integration",
            "Warranty": "3 years on smart systems"
        }
    },
    {
        id: 5,
        name: "Wireless Security Cameras",
        description: "Wireless security camera systems for easy installation and flexible placement. No wiring required with battery-powered and solar-powered options available.",
        image: "images/Wireless Cameras Installation Los Angeles.jpeg",
        category: "accessories",
        badge: "Wireless",
        icon: "fa-wifi",
        features: [
            "Wireless installation",
            "Battery-powered operation",
            "Solar-powered options",
            "Easy relocation",
            "Weatherproof design",
            "Mobile app control"
        ],
        specifications: {
            "Service Type": "Wireless Security Cameras",
            "Power": "Battery and solar options",
            "Range": "Up to 300m wireless range",
            "Battery Life": "6-12 months battery life",
            "Installation": "No wiring required",
            "Weatherproof": "IP65/IP66 rated",
            "Control": "Mobile app control",
            "Warranty": "2 years on wireless cameras"
        }
    },
    {
        id: 6,
        name: "CCTV Maintenance & Support",
        description: "Comprehensive maintenance and support services for CCTV systems. Regular maintenance, software updates, and technical support to keep your security system running optimally.",
        image: "images/cctv.jpg",
        category: "panels",
        icon: "fa-tools",
        features: [
            "Regular system maintenance",
            "Software updates and patches",
            "Camera cleaning and adjustment",
            "Storage management",
            "Technical support",
            "Emergency repair services"
        ],
        specifications: {
            "Service Type": "CCTV Maintenance",
            "Maintenance": "Quarterly maintenance checks",
            "Updates": "Software and firmware updates",
            "Cleaning": "Camera lens cleaning",
            "Storage": "Storage optimization",
            "Support": "24/7 technical support",
            "Repairs": "Emergency repair services",
            "Warranty": "1 year on maintenance services"
        }
    },
    {
        id: 7,
        name: "Video Analytics & AI",
        description: "Advanced video analytics and AI-powered surveillance systems. Intelligent monitoring with motion detection, facial recognition, and behavioral analysis.",
        image: "images/video-analytics.jpg",
        category: "inverters",
        badge: "AI-Powered",
        icon: "fa-brain",
        features: [
            "AI-powered video analytics",
            "Facial recognition technology",
            "Motion and intrusion detection",
            "Behavioral analysis",
            "Object tracking",
            "Smart alerts and notifications"
        ],
        specifications: {
            "Service Type": "Video Analytics & AI",
            "AI Technology": "Advanced machine learning",
            "Recognition": "Facial and object recognition",
            "Detection": "Motion and intrusion detection",
            "Analysis": "Behavioral pattern analysis",
            "Tracking": "Real-time object tracking",
            "Alerts": "Smart alert system",
            "Warranty": "2 years on AI software"
        }
    },
    {
        id: 8,
        name: "Access Control Systems",
        description: "Comprehensive access control systems including key cards, biometric readers, and smart locks. Secure entry management for residential and commercial properties.",
        image: "images/access-control.jpg",
        category: "panels",
        icon: "fa-key",
        features: [
            "Key card access systems",
            "Biometric readers",
            "Smart lock integration",
            "Visitor management",
            "Time-based access control",
            "Audit trail and reporting"
        ],
        specifications: {
            "Service Type": "Access Control Systems",
            "Readers": "Card and biometric readers",
            "Integration": "Smart lock integration",
            "Management": "Visitor management system",
            "Control": "Time-based access control",
            "Audit": "Complete audit trail",
            "Reporting": "Detailed access reports",
            "Warranty": "2 years on access control"
        }
    },
    {
        id: 9,
        name: "Security System Integration",
        description: "Complete security system integration services to connect CCTV, access control, alarms, and other security devices into a unified management platform.",
        image: "images/security-integration.jpg",
        category: "accessories",
        icon: "fa-shield-alt",
        features: [
            "Unified security platform",
            "Multi-device integration",
            "Centralized monitoring",
            "Automated responses",
            "Mobile app control",
            "Professional installation"
        ],
        specifications: {
            "Service Type": "Security System Integration",
            "Platform": "Unified security platform",
            "Integration": "Multi-device integration",
            "Monitoring": "Centralized monitoring",
            "Automation": "Automated response systems",
            "Control": "Mobile app control",
            "Installation": "Professional installation",
            "Warranty": "2 years on integration"
        }
    },
    {
        id: 10,
        name: "Security Consulting & Design",
        description: "Expert security consulting and system design services. Custom security solutions tailored to your specific needs, budget, and risk assessment.",
        image: "images/security-consulting.jpg",
        category: "batteries",
        icon: "fa-lightbulb",
        features: [
            "Security risk assessment",
            "Custom system design",
            "Technology recommendations",
            "Cost analysis and budgeting",
            "Compliance review",
            "Project management"
        ],
        specifications: {
            "Service Type": "Security Consulting & Design",
            "Assessment": "Comprehensive risk assessment",
            "Design": "Custom security system design",
            "Technology": "Technology recommendations",
            "Analysis": "Cost analysis and budgeting",
            "Compliance": "Compliance review",
            "Management": "Project management services",
            "Warranty": "Consultation accuracy guarantee"
        }
    }
];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const modal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalProductTitle');
const modalDescription = document.getElementById('modalProductDescription');
const modalIcon = document.getElementById('modalProductIcon');
const modalSpecs = document.getElementById('modalProductSpecs');
const modalFeatures = document.getElementById('modalProductFeatures');
const closeModalBtn = document.getElementById('closeModalBtn');
const requestQuoteBtn = document.getElementById('requestQuoteBtn');
const closeModalButton = document.querySelector('.close-modal');

// Initialize products page
document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
    initializeFilters();
    setupModalEvents();
});

function loadProducts(category = 'all') {
    if (!productsGrid) return;

    let filteredProducts = productsData;
    if (category !== 'all') {
        filteredProducts = productsData.filter(product => product.category === category);
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
                <div class="product-card" data-product-id="${product.id}" data-category="${product.category}">
                    <div class="product-image">
                        <img src="../${product.image}" alt="${product.name}" />
                        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-features">
                            <h4>Key Features:</h4>
                            <ul class="feature-list">
                                ${product.features.slice(0, 3).map(feature => `<li>${feature}</li>`).join('')}
                                ${product.features.length > 3 ? '<li>...and more</li>' : ''}
                            </ul>
                        </div>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-small view-details" data-product-id="${product.id}">
                                <i class="fas fa-info-circle"></i>
                                More Details
                            </button>
                             <a href="quote.html" class="btn btn-secondary btn-small request-quote">
                                <i class="fas fa-envelope"></i>
                                Request Quote
                            </a>
                        </div>
                    </div>
                </div>
            `).join('');

    // Add event listeners to the new buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            showProductDetails(parseInt(productId));
        });
    });

    document.querySelectorAll('.request-quote').forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            requestQuote(parseInt(productId));
        });
    });
}

function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Get category and load products
            const category = this.getAttribute('data-category');
            loadProducts(category);
        });
    });
}

function setupModalEvents() {
    // Close modal when clicking on close button
    closeModalBtn.addEventListener('click', closeModal);
    closeModalButton.addEventListener('click', closeModal);

    // Close modal when clicking outside content
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Request quote button
    requestQuoteBtn.addEventListener('click', function () {
        alert('Quote request functionality would open a form or redirect to a contact page.');
        closeModal();
    });
}

function showProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    // Update modal content
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    const modalImageWrapper = modal.querySelector('.modal-image');
    if (modalImageWrapper) {
        modalImageWrapper.innerHTML = `<img src="../${product.image}" alt="${product.name}" style="width:100%;height:auto;object-fit:cover;"/>`;
    }

    // Add specifications
    modalSpecs.innerHTML = '';
    for (const [key, value] of Object.entries(product.specifications)) {
        const li = document.createElement('li');
        li.innerHTML = `<span class="spec-label">${key}:</span><span class="spec-value">${value}</span>`;
        modalSpecs.appendChild(li);
    }

    // Add features
    modalFeatures.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });

    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable scrolling
}

function requestQuote(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    alert(`Quote request for: ${product.name}\n\nThis would typically open a contact form or redirect to a quote page.`);
}