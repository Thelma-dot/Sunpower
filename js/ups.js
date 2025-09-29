// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "UPS Installation Services",
        description: "Professional UPS (Uninterruptible Power Supply) installation services for residential, commercial, and industrial applications. Reliable backup power solutions.",
        image: "images/ups.jpeg",
        category: "inverters",
        badge: "Popular",
        icon: "fa-battery-full",
        features: [
            "Complete UPS system installation",
            "Battery backup configuration",
            "Automatic transfer switching",
            "Load capacity planning",
            "Professional wiring and setup",
            "System testing and commissioning"
        ],
        specifications: {
            "Service Type": "UPS Installation",
            "Capacity Range": "500VA to 100kVA",
            "Backup Time": "5 minutes to 8 hours",
            "Transfer Time": "<10ms switching",
            "Installation": "Certified UPS technicians",
            "Testing": "Complete system testing",
            "Warranty": "2 years on installation",
            "Support": "24/7 technical support"
        }
    },
    {
        id: 2,
        name: "AVR Systems",
        description: "Automatic Voltage Regulator (AVR) systems for stable power supply and protection against voltage fluctuations. Essential for sensitive electronic equipment.",
        image: "images/ups.webp",
        category: "batteries",
        badge: "Stabilization",
        icon: "fa-chart-line",
        features: [
            "Automatic voltage regulation",
            "Wide input voltage range",
            "Fast response time",
            "Surge and spike protection",
            "Overload protection",
            "Digital display and monitoring"
        ],
        specifications: {
            "Service Type": "AVR Systems",
            "Input Range": "140V-280V AC",
            "Output": "220V ±1% regulated",
            "Capacity": "1kVA to 50kVA",
            "Response Time": "<5ms correction",
            "Protection": "Surge and spike protection",
            "Efficiency": "95%+ efficiency",
            "Warranty": "3 years on AVR units"
        }
    },
    {
        id: 3,
        name: "Power Backup Solutions",
        description: "Comprehensive power backup solutions including UPS systems, generators, and battery banks for critical applications requiring uninterrupted power supply.",
        image: "images/5KWH-Lifepo4-Battery-01-1.jpg",
        category: "inverters",
        badge: "Backup",
        icon: "fa-power-off",
        features: [
            "UPS and generator integration",
            "Battery bank systems",
            "Automatic failover switching",
            "Load shedding capabilities",
            "Remote monitoring systems",
            "Maintenance and support"
        ],
        specifications: {
            "Service Type": "Power Backup Solutions",
            "Backup Capacity": "Up to 500kVA",
            "Runtime": "Extended backup duration",
            "Integration": "UPS + Generator systems",
            "Monitoring": "Remote monitoring capability",
            "Maintenance": "Scheduled maintenance programs",
            "Response": "24/7 emergency service",
            "Warranty": "5 years comprehensive"
        }
    },
    {
        id: 4,
        name: "Voltage Stabilization",
        description: "Advanced voltage stabilization systems to protect sensitive equipment from voltage fluctuations, surges, and power quality issues.",
        image: "images/voltage.webp",
        category: "panels",
        icon: "fa-shield-alt",
        features: [
            "Voltage stabilization technology",
            "Power conditioning solutions",
            "Equipment protection",
            "Power quality monitoring",
            "Automatic voltage correction",
            "Energy efficiency optimization"
        ],
        specifications: {
            "Service Type": "Voltage Stabilization",
            "Stabilization Range": "160V-280V input",
            "Output Stability": "220V ±1%",
            "Capacity": "1kVA to 200kVA",
            "Correction Speed": "<10ms response",
            "Protection": "Multi-level protection",
            "Monitoring": "Real-time monitoring",
            "Warranty": "2 years on stabilization"
        }
    },
    {
        id: 5,
        name: "Data Center UPS",
        description: "Specialized UPS systems for data centers and server rooms. High-reliability backup power with advanced monitoring and management capabilities.",
        image: "images/macos-system-monitor.png",
        category: "accessories",
        badge: "Data Center",
        icon: "fa-server",
        features: [
            "Data center UPS systems",
            "High availability design",
            "Redundant power systems",
            "Remote monitoring and management",
            "Hot-swappable batteries",
            "Environmental monitoring"
        ],
        specifications: {
            "Service Type": "Data Center UPS",
            "Availability": "99.999% uptime",
            "Capacity": "10kVA to 500kVA",
            "Redundancy": "N+1 redundancy options",
            "Monitoring": "SNMP monitoring",
            "Batteries": "Hot-swappable design",
            "Cooling": "Integrated cooling systems",
            "Warranty": "5 years on data center UPS"
        }
    },
    {
        id: 6,
        name: "UPS Maintenance Services",
        description: "Comprehensive maintenance and support services for UPS systems. Regular inspections, battery replacement, and system optimization to ensure reliable operation.",
        image: "images/ups.jpeg",
        category: "panels",
        icon: "fa-tools",
        features: [
            "Regular UPS maintenance",
            "Battery testing and replacement",
            "System performance optimization",
            "Preventive maintenance programs",
            "Emergency repair services",
            "Remote monitoring and diagnostics"
        ],
        specifications: {
            "Service Type": "UPS Maintenance",
            "Inspection": "Quarterly maintenance checks",
            "Battery Testing": "Annual battery testing",
            "Replacement": "Battery replacement service",
            "Monitoring": "24/7 remote monitoring",
            "Response": "4-hour emergency response",
            "Reports": "Detailed maintenance reports",
            "Warranty": "1 year on maintenance work"
        }
    },
    {
        id: 7,
        name: "UPS Battery Replacement",
        description: "Professional UPS battery replacement services for all major UPS brands. High-quality replacement batteries with extended warranty and proper disposal of old batteries.",
        image: "images/battery-replacement.jpg",
        category: "batteries",
        badge: "Replacement",
        icon: "fa-battery-quarter",
        features: [
            "All major UPS brand batteries",
            "High-quality replacement batteries",
            "Proper battery disposal",
            "Battery testing and validation",
            "Extended warranty coverage",
            "Emergency replacement service"
        ],
        specifications: {
            "Service Type": "UPS Battery Replacement",
            "Battery Types": "VRLA, AGM, Gel, Lithium-ion",
            "Brands": "APC, Eaton, Tripp Lite, CyberPower",
            "Capacity": "All capacity ranges available",
            "Testing": "Battery health testing included",
            "Disposal": "Environmentally safe disposal",
            "Warranty": "2-3 years on replacement batteries",
            "Response": "Same-day replacement available"
        }
    },
    {
        id: 8,
        name: "UPS Remote Monitoring",
        description: "Advanced UPS remote monitoring and management services. Real-time monitoring, alerts, and proactive maintenance to ensure maximum uptime.",
        image: "images/remote-monitoring.jpg",
        category: "accessories",
        icon: "fa-desktop",
        features: [
            "Real-time UPS monitoring",
            "Email and SMS alerts",
            "Performance analytics",
            "Predictive maintenance",
            "Remote diagnostics",
            "24/7 monitoring center"
        ],
        specifications: {
            "Service Type": "UPS Remote Monitoring",
            "Monitoring": "24/7 real-time monitoring",
            "Alerts": "Email, SMS, and phone alerts",
            "Analytics": "Performance and usage analytics",
            "Maintenance": "Predictive maintenance alerts",
            "Diagnostics": "Remote diagnostic capabilities",
            "Uptime": "99.9% monitoring uptime",
            "Warranty": "Monitoring service guarantee"
        }
    },
    {
        id: 9,
        name: "UPS Load Testing",
        description: "Comprehensive UPS load testing services to verify system performance and capacity. Ensure your UPS system can handle critical loads during power outages.",
        image: "images/load-testing.jpg",
        category: "panels",
        icon: "fa-tachometer-alt",
        features: [
            "Full load capacity testing",
            "Runtime verification",
            "Battery performance testing",
            "Transfer time testing",
            "Load bank testing",
            "Detailed test reports"
        ],
        specifications: {
            "Service Type": "UPS Load Testing",
            "Testing": "Full load capacity testing",
            "Runtime": "Battery runtime verification",
            "Load Bank": "Professional load bank equipment",
            "Transfer": "Transfer time measurement",
            "Reports": "Detailed test documentation",
            "Frequency": "Annual testing recommended",
            "Warranty": "Test accuracy guarantee"
        }
    },
    {
        id: 10,
        name: "UPS System Design",
        description: "Custom UPS system design and engineering services. Right-sized UPS solutions for your specific power requirements and budget constraints.",
        image: "images/system-design.jpg",
        category: "inverters",
        icon: "fa-drafting-compass",
        features: [
            "Load analysis and sizing",
            "Redundancy planning",
            "System architecture design",
            "Cost optimization",
            "Future expansion planning",
            "Installation planning"
        ],
        specifications: {
            "Service Type": "UPS System Design",
            "Analysis": "Comprehensive load analysis",
            "Sizing": "Right-sized UPS selection",
            "Redundancy": "N+1 redundancy options",
            "Architecture": "System architecture design",
            "Planning": "Future expansion planning",
            "Optimization": "Cost and efficiency optimization",
            "Warranty": "Design accuracy guarantee"
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