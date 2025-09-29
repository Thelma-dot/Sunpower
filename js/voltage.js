// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "High Voltage Systems",
        description: "Professional high voltage electrical systems for industrial and commercial applications. Safe and reliable power distribution at voltages above 1000V.",
        image: "images/voltage.webp",
        category: "inverters",
        badge: "High Voltage",
        icon: "fa-bolt",
        features: [
            "High voltage power distribution",
            "Industrial-grade switchgear",
            "Safety compliance and testing",
            "Professional installation and maintenance",
            "Emergency response services",
            "Comprehensive documentation"
        ],
        specifications: {
            "Voltage Range": "1kV to 33kV systems",
            "Current Rating": "Up to 4000A",
            "Standards": "IEC 62271 compliance",
            "Protection": "Advanced protection systems",
            "Installation": "Certified high voltage technicians",
            "Testing": "Comprehensive HV testing",
            "Maintenance": "Scheduled maintenance programs",
            "Warranty": "2 years on installation"
        }
    },
    {
        id: 2,
        name: "Low Voltage Systems",
        description: "Complete low voltage electrical solutions for residential, commercial, and light industrial applications. Safe and efficient power distribution up to 1000V.",
        image: "images/AI & Electric Grid 1600x900.jpg",
        category: "batteries",
        badge: "Standard",
        icon: "fa-plug",
        features: [
            "Low voltage power distribution",
            "Residential and commercial wiring",
            "Energy-efficient solutions",
            "Smart grid integration",
            "Safety compliance",
            "Cost-effective installation"
        ],
        specifications: {
            "Voltage Range": "Up to 1000V AC/DC",
            "Current Rating": "Up to 630A",
            "Standards": "IEC 60364 compliance",
            "Protection": "RCD and MCB protection",
            "Installation": "Licensed electricians",
            "Testing": "Complete electrical testing",
            "Efficiency": "Energy-efficient design",
            "Warranty": "3 years comprehensive"
        }
    },
    {
        id: 3,
        name: "Power Distribution Systems",
        description: "Advanced power distribution solutions including main distribution boards, sub-distribution panels, and power management systems.",
        image: "images/works.png",
        category: "inverters",
        badge: "Distribution",
        icon: "fa-sitemap",
        features: [
            "Main distribution board installation",
            "Sub-distribution panel design",
            "Power factor correction",
            "Load balancing and management",
            "Remote monitoring capabilities",
            "Emergency power systems"
        ],
        specifications: {
            "System Type": "Power Distribution",
            "Voltage": "220V/380V three-phase",
            "Capacity": "Up to 2000A main panels",
            "Protection": "Advanced protection relays",
            "Monitoring": "Real-time power monitoring",
            "Efficiency": "Optimized power distribution",
            "Backup": "Emergency power integration",
            "Warranty": "5 years on major components"
        }
    },
    {
        id: 4,
        name: "Electrical Infrastructure",
        description: "Complete electrical infrastructure solutions including transformers, switchgear, cables, and protective devices for reliable power systems.",
        image: "images/work.webp",
        category: "panels",
        icon: "fa-cogs",
        features: [
            "Transformer installation and maintenance",
            "Switchgear and control panels",
            "Cable installation and management",
            "Protective device coordination",
            "System integration services",
            "Infrastructure upgrades"
        ],
        specifications: {
            "Service Type": "Electrical Infrastructure",
            "Transformers": "Up to 2.5MVA capacity",
            "Switchgear": "Medium voltage switchgear",
            "Cables": "High-quality power cables",
            "Protection": "Coordinated protection systems",
            "Installation": "Professional infrastructure team",
            "Testing": "Comprehensive system testing",
            "Warranty": "3 years on infrastructure"
        }
    },
    {
        id: 5,
        name: "Voltage Stabilization",
        description: "Advanced voltage stabilization and power conditioning systems to protect sensitive equipment from voltage fluctuations and power quality issues.",
        image: "images/ups.webp",
        category: "accessories",
        badge: "Stabilization",
        icon: "fa-chart-line",
        features: [
            "Voltage stabilization systems",
            "Power conditioning solutions",
            "Surge protection devices",
            "Power quality monitoring",
            "Automatic voltage regulation",
            "Equipment protection"
        ],
        specifications: {
            "Service Type": "Voltage Stabilization",
            "Input Range": "160V-280V AC",
            "Output": "220V ±1% stabilized",
            "Capacity": "1kVA to 100kVA",
            "Response Time": "<10ms correction time",
            "Protection": "Surge and spike protection",
            "Monitoring": "Real-time voltage monitoring",
            "Warranty": "2 years on stabilization equipment"
        }
    },
    {
        id: 6,
        name: "Power Quality Solutions",
        description: "Comprehensive power quality solutions including harmonic filtering, power factor correction, and voltage regulation for optimal electrical performance.",
        image: "images/macos-system-monitor.png",
        category: "panels",
        icon: "fa-tachometer-alt",
        features: [
            "Harmonic filtering systems",
            "Power factor correction",
            "Voltage regulation",
            "Power quality analysis",
            "Energy efficiency optimization",
            "Compliance and reporting"
        ],
        specifications: {
            "Service Type": "Power Quality Solutions",
            "Harmonic Filtering": "Up to 50th harmonic",
            "Power Factor": "Corrected to 0.95+",
            "Voltage Regulation": "±1% output stability",
            "Analysis": "Comprehensive power quality analysis",
            "Efficiency": "Improved energy efficiency",
            "Compliance": "IEEE 519 standard compliance",
            "Warranty": "3 years on power quality equipment"
        }
    },
    {
        id: 7,
        name: "Electrical Substation Services",
        description: "Complete electrical substation design, installation, and maintenance services for industrial and utility applications. High-voltage power distribution solutions.",
        image: "images/substation.jpg",
        category: "inverters",
        badge: "Industrial",
        icon: "fa-industry",
        features: [
            "Substation design and engineering",
            "High-voltage equipment installation",
            "Protection and control systems",
            "Commissioning and testing",
            "Maintenance and upgrades",
            "Emergency response services"
        ],
        specifications: {
            "Service Type": "Electrical Substation Services",
            "Voltage Levels": "11kV to 400kV systems",
            "Design": "Complete substation design",
            "Equipment": "Switchgear and transformers",
            "Protection": "Advanced protection systems",
            "Testing": "Comprehensive commissioning tests",
            "Maintenance": "Scheduled maintenance programs",
            "Warranty": "3 years on substation work"
        }
    },
    {
        id: 8,
        name: "Motor Control Centers",
        description: "Professional motor control center (MCC) design, installation, and maintenance services. Centralized motor control and protection systems.",
        image: "images/motor-control.jpg",
        category: "panels",
        icon: "fa-cogs",
        features: [
            "MCC design and engineering",
            "Motor starter installation",
            "Variable frequency drives",
            "Protection and monitoring",
            "Control system integration",
            "Maintenance and support"
        ],
        specifications: {
            "Service Type": "Motor Control Centers",
            "Capacity": "Up to 1000A MCC panels",
            "Motors": "Up to 500HP motor control",
            "Drives": "VFD integration available",
            "Protection": "Motor protection relays",
            "Control": "PLC and HMI integration",
            "Installation": "Professional installation team",
            "Warranty": "2 years on MCC equipment"
        }
    },
    {
        id: 9,
        name: "Emergency Power Systems",
        description: "Emergency power generation and distribution systems for critical applications. Standby generators, automatic transfer switches, and emergency lighting.",
        image: "images/emergency-power.jpg",
        category: "batteries",
        badge: "Emergency",
        icon: "fa-exclamation-triangle",
        features: [
            "Standby generator installation",
            "Automatic transfer switches",
            "Emergency lighting systems",
            "Load shedding controls",
            "Fuel management systems",
            "Testing and maintenance"
        ],
        specifications: {
            "Service Type": "Emergency Power Systems",
            "Generator Size": "10kW to 2MW systems",
            "Transfer Time": "<10 seconds automatic transfer",
            "Fuel Type": "Diesel, natural gas, or propane",
            "Runtime": "Up to 72 hours continuous",
            "Testing": "Weekly automatic testing",
            "Maintenance": "Scheduled maintenance included",
            "Warranty": "2 years on generator systems"
        }
    },
    {
        id: 10,
        name: "Electrical Safety Training",
        description: "Comprehensive electrical safety training programs for personnel working with electrical systems. OSHA-compliant training and certification programs.",
        image: "images/safety-training.jpg",
        category: "accessories",
        icon: "fa-graduation-cap",
        features: [
            "OSHA-compliant training",
            "Electrical safety procedures",
            "Lockout/tagout training",
            "Arc flash safety",
            "Emergency response training",
            "Certification programs"
        ],
        specifications: {
            "Service Type": "Electrical Safety Training",
            "Standards": "OSHA 29 CFR 1910 compliance",
            "Duration": "8-40 hour programs available",
            "Certification": "Nationally recognized certificates",
            "Topics": "Comprehensive safety curriculum",
            "Instructors": "Certified electrical safety trainers",
            "Materials": "Training materials included",
            "Warranty": "Training effectiveness guarantee"
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