// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "Lighting Control Systems",
        description: "Advanced smart lighting control systems for residential and commercial properties. Automated lighting with dimming, scheduling, and energy management capabilities.",
        image: "images/smart-house.jpg",
        category: "inverters",
        badge: "Smart",
        icon: "fa-lightbulb",
        features: [
            "Smart dimming and switching",
            "Automated lighting schedules",
            "Motion sensor integration",
            "Energy monitoring and optimization",
            "Voice control compatibility",
            "Remote control via mobile app"
        ],
        specifications: {
            "Service Type": "Smart Lighting Control",
            "Protocols": "Zigbee, Z-Wave, WiFi",
            "Control": "Individual and group control",
            "Scheduling": "Advanced scheduling options",
            "Sensors": "Motion and occupancy sensors",
            "Integration": "Voice assistant compatibility",
            "Energy Savings": "Up to 60% energy reduction",
            "Warranty": "3 years on smart components"
        }
    },
    {
        id: 2,
        name: "Automated Climate Control",
        description: "Intelligent climate control systems with smart thermostats, HVAC automation, and environmental monitoring for optimal comfort and energy efficiency.",
        image: "images/smarthome.webp",
        category: "batteries",
        badge: "Climate",
        icon: "fa-thermometer-half",
        features: [
            "Smart thermostat installation",
            "HVAC system automation",
            "Zone-based temperature control",
            "Energy usage monitoring",
            "Weather-based adjustments",
            "Mobile app control"
        ],
        specifications: {
            "Service Type": "Climate Control Automation",
            "Thermostats": "Smart programmable thermostats",
            "Zones": "Multi-zone temperature control",
            "Scheduling": "Advanced scheduling algorithms",
            "Monitoring": "Real-time energy monitoring",
            "Integration": "Weather service integration",
            "Savings": "Up to 30% energy savings",
            "Warranty": "2 years on climate systems"
        }
    },
    {
        id: 3,
        name: "Voice-Activated Systems",
        description: "Complete voice-activated smart home systems with Amazon Alexa, Google Assistant, and Apple HomeKit integration for hands-free control.",
        image: "images/smart-house.jpg",
        category: "inverters",
        badge: "Voice",
        icon: "fa-microphone",
        features: [
            "Voice assistant integration",
            "Hands-free device control",
            "Custom voice commands",
            "Multi-room audio systems",
            "Smart speaker installation",
            "Voice recognition training"
        ],
        specifications: {
            "Service Type": "Voice-Activated Systems",
            "Platforms": "Alexa, Google Assistant, Siri",
            "Commands": "Custom voice command setup",
            "Audio": "Multi-room audio distribution",
            "Speakers": "Smart speaker installation",
            "Training": "Voice recognition training",
            "Integration": "Full home automation integration",
            "Warranty": "2 years on voice systems"
        }
    },
    {
        id: 4,
        name: "Remote Monitoring Systems",
        description: "Comprehensive remote monitoring and control systems for your smart home. Monitor and control all devices from anywhere in the world via mobile app.",
        image: "images/macos-system-monitor.png",
        category: "panels",
        icon: "fa-mobile-alt",
        features: [
            "Remote device monitoring",
            "Mobile app control",
            "Real-time notifications",
            "Security system integration",
            "Energy usage tracking",
            "Maintenance alerts"
        ],
        specifications: {
            "Service Type": "Remote Monitoring",
            "Platform": "iOS and Android apps",
            "Monitoring": "24/7 device monitoring",
            "Notifications": "Real-time alerts and notifications",
            "Security": "Encrypted communication",
            "Tracking": "Energy usage analytics",
            "Alerts": "Maintenance and fault alerts",
            "Warranty": "3 years on monitoring systems"
        }
    },
    {
        id: 5,
        name: "Smart Security Integration",
        description: "Integrated smart security systems including smart locks, cameras, sensors, and alarm systems with centralized control and monitoring.",
        image: "images/cctv.jpg",
        category: "accessories",
        badge: "Security",
        icon: "fa-shield-alt",
        features: [
            "Smart lock installation",
            "Security camera integration",
            "Motion and door sensors",
            "Alarm system integration",
            "Remote security monitoring",
            "Emergency response systems"
        ],
        specifications: {
            "Service Type": "Smart Security Integration",
            "Locks": "Smart lock installation and setup",
            "Cameras": "IP camera integration",
            "Sensors": "Motion and contact sensors",
            "Alarms": "Integrated alarm systems",
            "Monitoring": "24/7 security monitoring",
            "Response": "Emergency response integration",
            "Warranty": "2 years on security systems"
        }
    },
    {
        id: 6,
        name: "Smart Home Maintenance",
        description: "Ongoing maintenance and support services for smart home systems. Regular updates, troubleshooting, and system optimization to keep your smart home running smoothly.",
        image: "images/smart-house.jpg",
        category: "panels",
        icon: "fa-tools",
        features: [
            "Regular system maintenance",
            "Software updates and patches",
            "Troubleshooting and repairs",
            "System optimization",
            "New device integration",
            "User training and support"
        ],
        specifications: {
            "Service Type": "Smart Home Maintenance",
            "Maintenance": "Quarterly system checks",
            "Updates": "Automatic software updates",
            "Troubleshooting": "24/7 technical support",
            "Optimization": "Performance optimization",
            "Integration": "New device integration",
            "Training": "User training sessions",
            "Warranty": "1 year on maintenance services"
        }
    },
    {
        id: 7,
        name: "Smart Energy Management",
        description: "Advanced smart energy management systems to monitor, control, and optimize energy usage throughout your home. Reduce costs and improve efficiency.",
        image: "images/energy-management.jpg",
        category: "inverters",
        badge: "Eco-Friendly",
        icon: "fa-leaf",
        features: [
            "Real-time energy monitoring",
            "Smart appliance control",
            "Peak demand management",
            "Energy usage analytics",
            "Cost optimization",
            "Solar integration"
        ],
        specifications: {
            "Service Type": "Smart Energy Management",
            "Monitoring": "Real-time energy monitoring",
            "Control": "Smart appliance control",
            "Analytics": "Energy usage analytics",
            "Optimization": "Automatic cost optimization",
            "Integration": "Solar and battery integration",
            "Savings": "Up to 30% energy savings",
            "Warranty": "3 years on energy management"
        }
    },
    {
        id: 8,
        name: "Smart Window Treatments",
        description: "Automated window treatments including smart blinds, shades, and curtains. Control natural light and privacy with voice commands and scheduling.",
        image: "images/smart-blinds.jpg",
        category: "accessories",
        icon: "fa-window-maximize",
        features: [
            "Motorized blinds and shades",
            "Voice control integration",
            "Automated scheduling",
            "Sun tracking technology",
            "Privacy modes",
            "Energy efficiency optimization"
        ],
        specifications: {
            "Service Type": "Smart Window Treatments",
            "Types": "Blinds, shades, curtains",
            "Control": "Voice and app control",
            "Scheduling": "Automated scheduling",
            "Sensors": "Light and temperature sensors",
            "Integration": "Smart home integration",
            "Energy": "Energy efficiency optimization",
            "Warranty": "2 years on motorized systems"
        }
    },
    {
        id: 9,
        name: "Smart Irrigation Systems",
        description: "Intelligent irrigation systems that automatically water your garden based on weather conditions, soil moisture, and plant needs. Save water and maintain healthy landscapes.",
        image: "images/smart-irrigation.jpg",
        category: "panels",
        icon: "fa-seedling",
        features: [
            "Weather-based watering",
            "Soil moisture sensors",
            "Zone-specific control",
            "Water usage monitoring",
            "Mobile app control",
            "Leak detection"
        ],
        specifications: {
            "Service Type": "Smart Irrigation Systems",
            "Sensors": "Weather and soil moisture sensors",
            "Zones": "Multiple irrigation zones",
            "Control": "Smart controller with app",
            "Monitoring": "Water usage monitoring",
            "Detection": "Leak detection and alerts",
            "Savings": "Up to 50% water savings",
            "Warranty": "2 years on irrigation system"
        }
    },
    {
        id: 10,
        name: "Smart Home Integration",
        description: "Complete smart home integration services to connect and control all your smart devices from a single platform. Seamless integration and unified control.",
        image: "images/smart-integration.jpg",
        category: "batteries",
        icon: "fa-home",
        features: [
            "Unified smart home platform",
            "Device integration and setup",
            "Custom automation rules",
            "Voice assistant integration",
            "Mobile app configuration",
            "Ongoing support and updates"
        ],
        specifications: {
            "Service Type": "Smart Home Integration",
            "Platform": "Unified control platform",
            "Devices": "All major smart device brands",
            "Automation": "Custom automation rules",
            "Voice": "Voice assistant integration",
            "Control": "Single app control",
            "Support": "Ongoing technical support",
            "Warranty": "1 year integration support"
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