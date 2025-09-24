// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "5KW Solar Inverter",
        description: "High-efficiency solar inverter with advanced MPPT technology for maximum energy conversion. Ideal for residential and small commercial applications.",
        image: "images/5KW-Solar-Inverter-02.jpg",
        category: "inverters",
        badge: "Popular",
        icon: "fa-bolt",
        features: [
            "MPPT Technology for optimal energy harvest",
            "High Efficiency (up to 98%)",
            "Grid-Tie capable with backup power",
            "5 Year Warranty",
            "Remote monitoring capability",
            "Weatherproof design for outdoor installation"
        ],
        specifications: {
            "Power Rating": "5000W",
            "Efficiency": "98%",
            "Input Voltage Range": "150-500V DC",
            "Output Voltage": "220V AC ±5%",
            "Frequency": "50/60Hz Auto detection",
            "MPPT Tracking": ">99.5% efficiency",
            "Display": "LCD with status indicators",
            "Communication": "WiFi/Ethernet optional",
            "Warranty": "5 Years"
        }
    },
    {
        id: 2,
        name: "5KWH LiFePO4 Battery",
        description: "Long-lasting lithium iron phosphate battery for reliable energy storage. Maintenance-free design with superior cycle life.",
        image: "images/5KWH-Lifepo4-Battery-01-1.jpg",
        category: "batteries",
        badge: "New",
        icon: "fa-battery-full",
        features: [
            "LiFePO4 Chemistry for safety and longevity",
            "5000+ Cycles at 80% depth of discharge",
            "Built-in BMS Protection",
            "10 Year Warranty",
            "Maintenance-free operation",
            "Compact and lightweight design"
        ],
        specifications: {
            "Capacity": "5KWH (100Ah @ 48V)",
            "Voltage": "48V nominal",
            "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
            "Cycle Life": "5000+ cycles to 80% DoD",
            "Weight": "45kg",
            "Dimensions": "440×410×200mm",
            "Operating Temperature": "-20°C to 60°C",
            "Communication": "RS485/CAN bus",
            "Warranty": "10 Years"
        }
    },
    {
        id: 3,
        name: "Deye Hybrid Inverter",
        description: "Hybrid solar inverter with battery backup capability for uninterrupted power. Seamlessly switches between solar, battery and grid power.",
        image: "images/deye-5kw-hybrid-inverter_1024x.jpg",
        category: "inverters",
        badge: "Premium",
        icon: "fa-exchange-alt",
        features: [
            "Hybrid Technology for flexible power management",
            "Battery Backup for power outages",
            "Grid-Tie + Off-Grid operation modes",
            "Smart Monitoring with mobile app",
            "Generator compatible",
            "Parallel operation for higher capacity"
        ],
        specifications: {
            "Power Rating": "5000W",
            "Type": "Hydual hybrid",
            "Max PV Input": "6000W",
            "Battery Voltage": "48V DC",
            "AC Output": "220V/230V/240V selectable",
            "Grid Connection": "Yes, with export limit",
            "Off-grid Operation": "Yes",
            "Efficiency": "97.5%",
            "Warranty": "5 Years"
        }
    },
    {
        id: 4,
        name: "SRNE Solar Inverter",
        description: "Reliable solar inverter for residential and commercial applications. Robust design with excellent performance in various conditions.",
        image: "images/SRNE-Solar-Hybrid-Inverter.jpg",
        category: "inverters",
        icon: "fa-plug",
        features: [
            "High Reliability with quality components",
            "Easy Installation with clear documentation",
            "Remote Monitoring capability",
            "3 Year Warranty",
            "Lightning and surge protection",
            "Quiet operation with smart cooling"
        ],
        specifications: {
            "Power Rating": "3000W",
            "Efficiency": "96%",
            "Input Voltage": "120-450V DC",
            "Output Voltage": "220V AC ±2%",
            "Frequency Stability": "50Hz/60Hz ±0.1%",
            "Protection": "Overload, short circuit, over temperature",
            "Display": "LED indicators",
            "Communication": "Optional WiFi dongle",
            "Warranty": "3 Years"
        }
    },
    {
        id: 5,
        name: "Solar Panel Set (6 Panels)",
        description: "High-efficiency solar panels for maximum energy generation. Monocrystalline cells with anti-reflective coating for better performance.",
        image: "images/SPE-13-768x1086.jpg",
        category: "panels",
        badge: "Best Value",
        icon: "fa-solar-panel",
        features: [
            "High Efficiency (up to 22%)",
            "Monocrystalline silicon cells",
            "Weather Resistant with IP67 rating",
            "25 Year Performance Warranty",
            "Anti-PID technology",
            "Salt mist and ammonia resistance"
        ],
        specifications: {
            "Power per Panel": "400W",
            "Total Power": "2400W",
            "Efficiency": "22%",
            "Type": "Monocrystalline",
            "Dimensions": "2000×1000×40mm",
            "Weight": "22kg per panel",
            "Frame": "Anodized aluminum",
            "Glass": "3.2mm tempered, anti-reflective",
            "Warranty": "25 Years linear performance"
        }
    },
    {
        id: 6,
        name: "Must Solar Inverter",
        description: "Pure sine wave solar inverter with excellent performance and reliability. Designed for off-grid and backup power applications.",
        image: "images/Must-PV3000-100-Pure-Sine-Wave-Solar-Inverter-Featured-Image.webp",
        category: "inverters",
        icon: "fa-tachometer-alt",
        features: [
            "Pure Sine Wave output for sensitive electronics",
            "High Efficiency design",
            "Overload Protection with automatic shutdown",
            "2 Year Comprehensive Warranty",
            "Multiple input sources",
            "Battery charging capability"
        ],
        specifications: {
            "Power Rating": "3000W",
            "Waveform": "Pure Sine Wave (<3% THD)",
            "Efficiency": "95%",
            "Input Voltage": "24V/48V DC options",
            "Output Voltage": "220V/230V/240V AC",
            "Protection": "Overload, short circuit, over temperature",
            "No Load Consumption": "<20W",
            "Cooling": "Smart temperature-controlled fan",
            "Warranty": "2 Years"
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

    // Request quote button (guard if exists)
    if (requestQuoteBtn) {
        requestQuoteBtn.addEventListener('click', function () {
            alert('Quote request functionality would open a form or redirect to a contact page.');
            closeModal();
        });
    }
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