// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "Domestic Electrical Wiring",
        description: "Complete electrical wiring solutions for residential properties. Professional installation of outlets, switches, lighting circuits, and electrical panels.",
        image: "images/electrical-wiring-scaled-1.jpg",
        category: "inverters",
        badge: "Popular",
        icon: "fa-home",
        features: [
            "Complete residential wiring installation",
            "Code-compliant electrical work",
            "Modern outlet and switch installation",
            "Lighting circuit design and installation",
            "Electrical panel upgrades",
            "Safety inspection and testing"
        ],
        specifications: {
            "Service Type": "Residential Wiring",
            "Voltage": "220V/110V systems",
            "Standards": "IEC 60364 compliance",
            "Materials": "Copper wiring, PVC conduit",
            "Installation": "Professional certified electricians",
            "Testing": "Complete electrical testing",
            "Warranty": "2 Years on workmanship",
            "Safety": "GFCI protection included"
        }
    },
    {
        id: 2,
        name: "Commercial Electrical Installation",
        description: "Comprehensive electrical solutions for commercial buildings, offices, and retail spaces. High-capacity wiring and specialized electrical systems.",
        image: "images/how-to-deal-with-unsafe-wiring-coynecollege-scaled-1.jpeg",
        category: "batteries",
        badge: "Professional",
        icon: "fa-building",
        features: [
            "Commercial-grade electrical systems",
            "High-capacity power distribution",
            "Emergency lighting systems",
            "Fire safety electrical integration",
            "Energy-efficient lighting solutions",
            "Maintenance and support services"
        ],
        specifications: {
            "Service Type": "Commercial Installation",
            "Voltage": "380V/220V three-phase",
            "Capacity": "Up to 1000A main panels",
            "Standards": "Commercial electrical codes",
            "Materials": "Industrial-grade components",
            "Installation": "Licensed commercial electricians",
            "Testing": "Full electrical system testing",
            "Warranty": "3 Years comprehensive"
        }
    },
    {
        id: 3,
        name: "Industrial Electrical Systems",
        description: "Heavy-duty electrical installations for industrial facilities, manufacturing plants, and large-scale operations. Robust and reliable power systems.",
        image: "images/provesti_elektriku_v_novostrojke.png",
        category: "inverters",
        badge: "Industrial",
        icon: "fa-industry",
        features: [
            "High-voltage industrial systems",
            "Motor control centers",
            "Power distribution networks",
            "Industrial lighting solutions",
            "Hazardous area installations",
            "24/7 maintenance support"
        ],
        specifications: {
            "Service Type": "Industrial Installation",
            "Voltage": "Up to 11kV systems",
            "Capacity": "Unlimited power requirements",
            "Standards": "Industrial electrical standards",
            "Materials": "Heavy-duty industrial components",
            "Installation": "Certified industrial electricians",
            "Testing": "Comprehensive system testing",
            "Warranty": "5 Years on major components"
        }
    },
    {
        id: 4,
        name: "Electrical Maintenance Services",
        description: "Regular maintenance and repair services to keep your electrical systems running safely and efficiently. Preventive maintenance programs available.",
        image: "images/electrician-729240_640_4cb05477-d693-4ae4-94be-0aca572c83d6.jpg",
        category: "panels",
        icon: "fa-tools",
        features: [
            "Preventive maintenance programs",
            "Emergency repair services",
            "Electrical safety inspections",
            "System performance optimization",
            "Upgrade and modernization",
            "24/7 emergency response"
        ],
        specifications: {
            "Service Type": "Maintenance & Repair",
            "Response Time": "24/7 emergency service",
            "Inspection": "Annual safety inspections",
            "Maintenance": "Scheduled preventive care",
            "Repairs": "All electrical components",
            "Upgrades": "System modernization",
            "Support": "Ongoing technical support",
            "Warranty": "1 Year on repairs"
        }
    },
    {
        id: 5,
        name: "Smart Home Wiring",
        description: "Modern smart home electrical infrastructure with integrated automation systems, smart switches, and intelligent lighting controls.",
        image: "images/smarthome.webp",
        category: "accessories",
        badge: "Smart",
        icon: "fa-lightbulb",
        features: [
            "Smart home infrastructure",
            "Automated lighting systems",
            "Smart switches and outlets",
            "Home automation integration",
            "Energy monitoring systems",
            "Future-proof wiring design"
        ],
        specifications: {
            "Service Type": "Smart Home Wiring",
            "Technology": "KNX, Zigbee, Z-Wave",
            "Integration": "Home automation systems",
            "Controls": "Smart switches and dimmers",
            "Monitoring": "Energy usage tracking",
            "Installation": "Certified smart home installers",
            "Testing": "Full system integration testing",
            "Warranty": "3 Years on smart components"
        }
    },
    {
        id: 6,
        name: "Electrical Safety Inspection",
        description: "Comprehensive electrical safety inspections and testing services to ensure your electrical systems meet safety standards and regulations.",
        image: "images/earth.webp",
        category: "panels",
        icon: "fa-shield-alt",
        features: [
            "Complete electrical safety audit",
            "Code compliance verification",
            "Ground fault testing",
            "Circuit breaker testing",
            "Safety certificate issuance",
            "Detailed inspection reports"
        ],
        specifications: {
            "Service Type": "Safety Inspection",
            "Testing": "Complete electrical testing",
            "Standards": "IEC 60364 compliance",
            "Equipment": "Professional testing tools",
            "Reports": "Detailed inspection documentation",
            "Certification": "Official safety certificates",
            "Follow-up": "Remediation recommendations",
            "Warranty": "Inspection validity 1 year"
        }
    },
    {
        id: 7,
        name: "Electrical Panel Upgrades",
        description: "Professional electrical panel upgrade services to increase capacity, improve safety, and meet modern electrical demands. Complete panel replacement and modernization.",
        image: "images/works.png",
        category: "inverters",
        badge: "Upgrade",
        icon: "fa-cogs",
        features: [
            "Main panel replacement",
            "Sub-panel installation",
            "Circuit breaker upgrades",
            "GFCI outlet installation",
            "Load capacity increase",
            "Safety compliance updates"
        ],
        specifications: {
            "Service Type": "Panel Upgrades",
            "Capacity": "Up to 400A main panels",
            "Breakers": "Modern circuit breakers",
            "Safety": "GFCI and AFCI protection",
            "Installation": "Licensed electricians",
            "Testing": "Complete system testing",
            "Compliance": "Current code compliance",
            "Warranty": "3 years on panel work"
        }
    },
    {
        id: 8,
        name: "Emergency Electrical Services",
        description: "24/7 emergency electrical services for urgent electrical issues. Rapid response team for power outages, electrical failures, and safety hazards.",
        image: "images/electrician-729240_640_4cb05477-d693-4ae4-94be-0aca572c83d6.jpg",
        category: "batteries",
        badge: "Emergency",
        icon: "fa-exclamation-triangle",
        features: [
            "24/7 emergency response",
            "Power outage restoration",
            "Electrical failure diagnosis",
            "Safety hazard resolution",
            "Temporary power solutions",
            "Emergency repairs"
        ],
        specifications: {
            "Service Type": "Emergency Electrical",
            "Response Time": "1-2 hours emergency response",
            "Availability": "24/7 emergency service",
            "Diagnosis": "Rapid fault diagnosis",
            "Repairs": "Emergency repair services",
            "Safety": "Immediate safety assessment",
            "Temporary": "Temporary power solutions",
            "Warranty": "Emergency response guarantee"
        }
    },
    {
        id: 9,
        name: "Electrical Troubleshooting",
        description: "Professional electrical troubleshooting services to identify and resolve electrical problems. Advanced diagnostic equipment and experienced technicians.",
        image: "images/how-to-deal-with-unsafe-wiring-coynecollege-scaled-1.jpeg",
        category: "panels",
        icon: "fa-search",
        features: [
            "Advanced electrical diagnostics",
            "Fault location and identification",
            "Power quality analysis",
            "Circuit testing and analysis",
            "Equipment performance evaluation",
            "Detailed troubleshooting reports"
        ],
        specifications: {
            "Service Type": "Electrical Troubleshooting",
            "Diagnostics": "Advanced diagnostic equipment",
            "Testing": "Comprehensive electrical testing",
            "Analysis": "Power quality analysis",
            "Reports": "Detailed diagnostic reports",
            "Equipment": "Professional testing tools",
            "Resolution": "Problem resolution guarantee",
            "Warranty": "Diagnostic accuracy guarantee"
        }
    },
    {
        id: 10,
        name: "Energy Efficiency Solutions",
        description: "Comprehensive energy efficiency solutions to reduce electrical consumption and costs. LED lighting upgrades, smart controls, and energy management systems.",
        image: "images/smarthome.webp",
        category: "accessories",
        badge: "Eco-Friendly",
        icon: "fa-leaf",
        features: [
            "LED lighting upgrades",
            "Smart lighting controls",
            "Energy monitoring systems",
            "Power factor correction",
            "Load management systems",
            "Energy audit services"
        ],
        specifications: {
            "Service Type": "Energy Efficiency",
            "Lighting": "LED lighting upgrades",
            "Controls": "Smart lighting controls",
            "Monitoring": "Real-time energy monitoring",
            "Savings": "Up to 50% energy reduction",
            "Audit": "Comprehensive energy audit",
            "ROI": "Quick return on investment",
            "Warranty": "2 years on efficiency upgrades"
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