// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "Domestic Elevator Installation",
        description: "Professional residential elevator installation services for homes and small buildings. Custom-designed elevators for accessibility and convenience.",
        image: "images/internet-v-lifti.jpg",
        category: "inverters",
        badge: "Residential",
        icon: "fa-home",
        features: [
            "Custom residential elevator design",
            "Accessibility compliance",
            "Quiet and smooth operation",
            "Energy-efficient systems",
            "Safety features and certification",
            "Maintenance and support"
        ],
        specifications: {
            "Service Type": "Domestic Elevator Installation",
            "Capacity": "Up to 1000kg (8 persons)",
            "Speed": "0.15-0.5 m/s",
            "Floors": "Up to 6 floors",
            "Drive System": "Traction or hydraulic",
            "Safety": "Full safety certification",
            "Installation": "Professional installation team",
            "Warranty": "2 years comprehensive"
        }
    },
    {
        id: 2,
        name: "Commercial Elevator Installation",
        description: "High-performance commercial elevator systems for office buildings, retail spaces, and commercial facilities. Reliable and efficient vertical transportation.",
        image: "images/internet-v-lifti.jpg",
        category: "batteries",
        badge: "Commercial",
        icon: "fa-building",
        features: [
            "High-capacity commercial elevators",
            "Advanced control systems",
            "Energy-efficient operation",
            "Traffic management systems",
            "Emergency backup systems",
            "24/7 monitoring and support"
        ],
        specifications: {
            "Service Type": "Commercial Elevator Installation",
            "Capacity": "Up to 5000kg (40 persons)",
            "Speed": "0.5-2.5 m/s",
            "Floors": "Up to 50 floors",
            "Drive System": "Traction with VVVF control",
            "Safety": "Full commercial safety standards",
            "Monitoring": "Remote monitoring system",
            "Warranty": "3 years comprehensive"
        }
    },
    {
        id: 3,
        name: "Industrial Elevator Installation",
        description: "Heavy-duty industrial elevator systems for manufacturing facilities, warehouses, and industrial applications. Robust and reliable vertical transportation.",
        image: "images/internet-v-lifti.jpg",
        category: "inverters",
        badge: "Industrial",
        icon: "fa-industry",
        features: [
            "Heavy-duty industrial elevators",
            "High load capacity",
            "Durable construction",
            "Harsh environment operation",
            "Custom configurations",
            "Industrial safety standards"
        ],
        specifications: {
            "Service Type": "Industrial Elevator Installation",
            "Capacity": "Up to 20,000kg",
            "Speed": "0.1-1.0 m/s",
            "Floors": "Up to 20 floors",
            "Drive System": "Heavy-duty traction",
            "Safety": "Industrial safety standards",
            "Environment": "Harsh environment rated",
            "Warranty": "5 years on major components"
        }
    },
    {
        id: 4,
        name: "Elevator Maintenance Services",
        description: "Comprehensive elevator maintenance and repair services to ensure safe and reliable operation. Preventive maintenance programs and emergency repair services.",
        image: "images/internet-v-lifti.jpg",
        category: "panels",
        icon: "fa-tools",
        features: [
            "Preventive maintenance programs",
            "Emergency repair services",
            "Component replacement",
            "Safety inspection and testing",
            "Performance optimization",
            "24/7 emergency response"
        ],
        specifications: {
            "Service Type": "Elevator Maintenance",
            "Maintenance": "Monthly/quarterly schedules",
            "Inspection": "Annual safety inspections",
            "Repairs": "All component repairs",
            "Response": "24/7 emergency service",
            "Testing": "Regular safety testing",
            "Certification": "Safety certification renewal",
            "Warranty": "1 year on maintenance work"
        }
    },
    {
        id: 5,
        name: "Elevator Modernization",
        description: "Complete elevator modernization services to upgrade existing elevators with new technology, improved safety features, and enhanced performance.",
        image: "images/internet-v-lifti.jpg",
        category: "accessories",
        badge: "Modernization",
        icon: "fa-sync-alt",
        features: [
            "Control system upgrades",
            "Safety system modernization",
            "Energy efficiency improvements",
            "Aesthetic enhancements",
            "Performance optimization",
            "Compliance updates"
        ],
        specifications: {
            "Service Type": "Elevator Modernization",
            "Upgrades": "Control and safety systems",
            "Efficiency": "Energy efficiency improvements",
            "Safety": "Latest safety standards",
            "Performance": "Enhanced performance",
            "Aesthetics": "Modern design updates",
            "Compliance": "Current code compliance",
            "Warranty": "3 years on modernization"
        }
    },
    {
        id: 6,
        name: "Remote Elevator Monitoring",
        description: "Advanced remote monitoring systems for elevators. Real-time monitoring, predictive maintenance, and remote diagnostics for optimal elevator performance.",
        image: "images/internet-v-lifti.jpg",
        category: "panels",
        icon: "fa-desktop",
        features: [
            "Real-time elevator monitoring",
            "Predictive maintenance alerts",
            "Remote diagnostics",
            "Performance analytics",
            "Emergency response coordination",
            "Maintenance scheduling"
        ],
        specifications: {
            "Service Type": "Remote Monitoring",
            "Monitoring": "24/7 real-time monitoring",
            "Alerts": "Predictive maintenance alerts",
            "Diagnostics": "Remote diagnostic capabilities",
            "Analytics": "Performance analytics",
            "Response": "Emergency response coordination",
            "Scheduling": "Automated maintenance scheduling",
            "Warranty": "2 years on monitoring systems"
        }
    },
    {
        id: 7,
        name: "Elevator Safety Systems",
        description: "Advanced elevator safety systems and emergency equipment installation. Ensure passenger safety with modern safety features and emergency communication systems.",
        image: "images/elevator-safety.jpg",
        category: "panels",
        badge: "Safety",
        icon: "fa-shield-alt",
        features: [
            "Emergency communication systems",
            "Safety sensors and detectors",
            "Emergency lighting",
            "Fire safety integration",
            "Overload protection",
            "Emergency rescue systems"
        ],
        specifications: {
            "Service Type": "Elevator Safety Systems",
            "Communication": "Emergency phone systems",
            "Sensors": "Advanced safety sensors",
            "Lighting": "Emergency lighting systems",
            "Fire Safety": "Fire service integration",
            "Protection": "Overload and overspeed protection",
            "Rescue": "Emergency rescue systems",
            "Warranty": "2 years on safety systems"
        }
    },
    {
        id: 8,
        name: "Elevator Modernization",
        description: "Complete elevator modernization services to upgrade existing elevators with new technology, improved performance, and enhanced safety features.",
        image: "images/elevator-modernization.jpg",
        category: "inverters",
        icon: "fa-sync-alt",
        features: [
            "Control system upgrades",
            "Door system modernization",
            "Safety system updates",
            "Energy efficiency improvements",
            "Aesthetic enhancements",
            "Performance optimization"
        ],
        specifications: {
            "Service Type": "Elevator Modernization",
            "Control": "Modern control systems",
            "Doors": "Advanced door systems",
            "Safety": "Updated safety systems",
            "Energy": "Energy-efficient components",
            "Aesthetics": "Modern car interiors",
            "Performance": "Improved speed and comfort",
            "Warranty": "3 years on modernization"
        }
    },
    {
        id: 9,
        name: "Elevator Consulting Services",
        description: "Expert elevator consulting services for new installations, modernization projects, and compliance requirements. Professional guidance for optimal elevator solutions.",
        image: "images/elevator-consulting.jpg",
        category: "accessories",
        icon: "fa-lightbulb",
        features: [
            "Elevator system design",
            "Capacity and traffic analysis",
            "Code compliance review",
            "Cost analysis and budgeting",
            "Project management",
            "Technical specifications"
        ],
        specifications: {
            "Service Type": "Elevator Consulting",
            "Design": "Complete system design",
            "Analysis": "Traffic and capacity analysis",
            "Compliance": "Code compliance review",
            "Budgeting": "Cost analysis and budgeting",
            "Management": "Project management services",
            "Specifications": "Technical specifications",
            "Warranty": "Consultation accuracy guarantee"
        }
    },
    {
        id: 10,
        name: "Elevator Emergency Services",
        description: "24/7 emergency elevator services for breakdowns, entrapments, and urgent repairs. Rapid response team to restore elevator service quickly and safely.",
        image: "images/elevator-emergency.jpg",
        category: "batteries",
        badge: "Emergency",
        icon: "fa-exclamation-triangle",
        features: [
            "24/7 emergency response",
            "Passenger rescue services",
            "Rapid breakdown repair",
            "Emergency maintenance",
            "Safety inspection",
            "Preventive maintenance"
        ],
        specifications: {
            "Service Type": "Elevator Emergency Services",
            "Response": "24/7 emergency response",
            "Rescue": "Passenger rescue services",
            "Repair": "Rapid breakdown repair",
            "Maintenance": "Emergency maintenance",
            "Inspection": "Safety inspection included",
            "Prevention": "Preventive maintenance",
            "Warranty": "Emergency response guarantee"
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