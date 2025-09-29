// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "Earth Testing Services",
        description: "Comprehensive earth testing and grounding system verification services. Essential for electrical safety and compliance with electrical codes and standards.",
        image: "images/earth.avif",
        category: "inverters",
        badge: "Safety",
        icon: "fa-shield-alt",
        features: [
            "Earth resistance testing",
            "Grounding system verification",
            "Soil resistivity testing",
            "Step and touch potential testing",
            "Lightning protection testing",
            "Compliance certification"
        ],
        specifications: {
            "Service Type": "Earth Testing",
            "Testing Method": "Fall of potential method",
            "Resistance Range": "0.1Ω to 1000Ω",
            "Standards": "IEC 60364 compliance",
            "Equipment": "Professional earth testers",
            "Certification": "Official test certificates",
            "Frequency": "Annual testing recommended",
            "Warranty": "Test validity 1 year"
        }
    },
    {
        id: 2,
        name: "Fault Detection Services",
        description: "Advanced fault detection and location services for electrical systems. Identify and locate faults quickly to minimize downtime and ensure safety.",
        image: "images/earth.webp",
        category: "batteries",
        badge: "Diagnostic",
        icon: "fa-search",
        features: [
            "Cable fault location",
            "Insulation resistance testing",
            "Partial discharge detection",
            "Thermal imaging analysis",
            "Power quality analysis",
            "Emergency fault response"
        ],
        specifications: {
            "Service Type": "Fault Detection",
            "Detection Range": "Up to 10km cable length",
            "Accuracy": "±1% fault location accuracy",
            "Methods": "TDR, bridge, and surge methods",
            "Response Time": "24-hour emergency service",
            "Equipment": "Advanced fault locators",
            "Reports": "Detailed fault analysis reports",
            "Warranty": "Detection accuracy guarantee"
        }
    },
    {
        id: 3,
        name: "Safety Compliance Testing",
        description: "Complete electrical safety compliance testing services to ensure your electrical installations meet all safety standards and regulations.",
        image: "images/electrician-729240_640_4cb05477-d693-4ae4-94be-0aca572c83d6.jpg",
        category: "inverters",
        badge: "Compliance",
        icon: "fa-check-circle",
        features: [
            "Electrical safety inspections",
            "Code compliance verification",
            "RCD testing and calibration",
            "Insulation testing",
            "Polarity and continuity testing",
            "Safety certificate issuance"
        ],
        specifications: {
            "Service Type": "Safety Compliance Testing",
            "Standards": "IEC 60364, local electrical codes",
            "Testing": "Complete electrical system testing",
            "Certification": "Official safety certificates",
            "Frequency": "Annual compliance testing",
            "Equipment": "Calibrated testing instruments",
            "Reports": "Detailed compliance reports",
            "Warranty": "Compliance validity 1 year"
        }
    },
    {
        id: 4,
        name: "Electrical System Certification",
        description: "Professional electrical system certification services for new installations, modifications, and existing systems. Official certification for insurance and compliance.",
        image: "images/works.png",
        category: "panels",
        icon: "fa-certificate",
        features: [
            "New installation certification",
            "System modification certification",
            "Periodic inspection certification",
            "Insurance compliance certification",
            "Legal compliance verification",
            "Official documentation"
        ],
        specifications: {
            "Service Type": "System Certification",
            "Certification Type": "Electrical installation certificates",
            "Validity": "1-3 years depending on system type",
            "Standards": "National electrical codes",
            "Inspection": "Comprehensive system inspection",
            "Documentation": "Official certification documents",
            "Renewal": "Certification renewal services",
            "Warranty": "Certification accuracy guarantee"
        }
    },
    {
        id: 5,
        name: "Power Quality Testing",
        description: "Comprehensive power quality testing and analysis services to identify and resolve power quality issues affecting your electrical systems and equipment.",
        image: "images/macos-system-monitor.png",
        category: "accessories",
        badge: "Quality",
        icon: "fa-chart-line",
        features: [
            "Harmonic distortion analysis",
            "Voltage and current monitoring",
            "Power factor measurement",
            "Flicker analysis",
            "Transient analysis",
            "Power quality reporting"
        ],
        specifications: {
            "Service Type": "Power Quality Testing",
            "Analysis": "Comprehensive power quality analysis",
            "Harmonics": "Up to 50th harmonic analysis",
            "Monitoring": "Continuous power monitoring",
            "Standards": "IEEE 519 compliance",
            "Equipment": "Professional power analyzers",
            "Reports": "Detailed power quality reports",
            "Warranty": "Analysis accuracy guarantee"
        }
    },
    {
        id: 6,
        name: "Emergency Testing Services",
        description: "24/7 emergency electrical testing services for critical situations. Rapid response testing to identify and resolve electrical issues quickly and safely.",
        image: "images/earth.avif",
        category: "panels",
        icon: "fa-exclamation-triangle",
        features: [
            "24/7 emergency response",
            "Rapid fault identification",
            "Critical system testing",
            "Safety hazard assessment",
            "Immediate reporting",
            "Emergency repair coordination"
        ],
        specifications: {
            "Service Type": "Emergency Testing",
            "Response Time": "2-4 hours emergency response",
            "Availability": "24/7 emergency service",
            "Testing": "Rapid diagnostic testing",
            "Safety": "Immediate safety assessment",
            "Coordination": "Emergency repair coordination",
            "Documentation": "Emergency test reports",
            "Warranty": "Emergency response guarantee"
        }
    },
    {
        id: 7,
        name: "Insulation Resistance Testing",
        description: "Comprehensive insulation resistance testing services to ensure electrical insulation integrity. Critical for preventing electrical failures and ensuring safety.",
        image: "images/insulation-testing.jpg",
        category: "panels",
        icon: "fa-shield-alt",
        features: [
            "Insulation resistance measurement",
            "Polarization index testing",
            "Dielectric absorption testing",
            "Step voltage testing",
            "Comprehensive test reports",
            "Remediation recommendations"
        ],
        specifications: {
            "Service Type": "Insulation Resistance Testing",
            "Test Voltage": "Up to 10kV DC test voltage",
            "Resistance Range": "1MΩ to 10GΩ measurement",
            "Standards": "IEC 60364 compliance",
            "Equipment": "Professional insulation testers",
            "Testing": "Complete insulation assessment",
            "Reports": "Detailed test documentation",
            "Warranty": "Test accuracy guarantee"
        }
    },
    {
        id: 8,
        name: "Circuit Breaker Testing",
        description: "Professional circuit breaker testing and maintenance services. Ensure proper operation of protective devices and electrical safety systems.",
        image: "images/circuit-breaker-testing.jpg",
        category: "inverters",
        badge: "Safety",
        icon: "fa-toggle-on",
        features: [
            "Circuit breaker operation testing",
            "Trip time measurement",
            "Contact resistance testing",
            "Insulation testing",
            "Mechanical operation testing",
            "Calibration and adjustment"
        ],
        specifications: {
            "Service Type": "Circuit Breaker Testing",
            "Breaker Types": "All types and ratings",
            "Testing": "Complete operation testing",
            "Trip Time": "Trip time measurement",
            "Resistance": "Contact resistance testing",
            "Calibration": "Trip unit calibration",
            "Standards": "IEC 60947 compliance",
            "Warranty": "Testing service guarantee"
        }
    },
    {
        id: 9,
        name: "Power Quality Analysis",
        description: "Advanced power quality analysis and monitoring services. Identify and resolve power quality issues that can damage equipment and reduce efficiency.",
        image: "images/power-quality-analysis.jpg",
        category: "accessories",
        icon: "fa-chart-line",
        features: [
            "Harmonic analysis",
            "Voltage and current monitoring",
            "Power factor analysis",
            "Flicker measurement",
            "Transient analysis",
            "Comprehensive reporting"
        ],
        specifications: {
            "Service Type": "Power Quality Analysis",
            "Harmonics": "Up to 50th harmonic analysis",
            "Monitoring": "Continuous power monitoring",
            "Standards": "IEEE 519 compliance",
            "Equipment": "Professional power analyzers",
            "Analysis": "Comprehensive power quality assessment",
            "Reports": "Detailed analysis reports",
            "Warranty": "Analysis accuracy guarantee"
        }
    },
    {
        id: 10,
        name: "Electrical Commissioning",
        description: "Complete electrical system commissioning services for new installations. Ensure all electrical systems are properly installed, tested, and ready for operation.",
        image: "images/commissioning.jpg",
        category: "batteries",
        icon: "fa-check-circle",
        features: [
            "Pre-commissioning inspections",
            "System performance testing",
            "Safety verification",
            "Documentation review",
            "Operator training",
            "Final acceptance testing"
        ],
        specifications: {
            "Service Type": "Electrical Commissioning",
            "Inspection": "Complete system inspection",
            "Testing": "Comprehensive performance testing",
            "Safety": "Safety system verification",
            "Documentation": "Complete documentation package",
            "Training": "Operator training included",
            "Acceptance": "Final acceptance testing",
            "Warranty": "Commissioning service guarantee"
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