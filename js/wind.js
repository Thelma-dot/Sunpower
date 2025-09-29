// Products data with specifications for modal
const productsData = [
    {
        id: 1,
        name: "Solar Panel Installation",
        description: "Professional solar panel installation services for residential and commercial properties. High-efficiency panels with optimal positioning for maximum energy generation.",
        image: "images/Solar-Power-panels-Brisbane_700788_large.jpg",
        category: "inverters",
        badge: "Popular",
        icon: "fa-solar-panel",
        features: [
            "High-efficiency solar panel installation",
            "Optimal positioning for maximum sun exposure",
            "Professional mounting and wiring",
            "Grid-tie and off-grid systems",
            "25-year performance warranty",
            "Complete system integration"
        ],
        specifications: {
            "Panel Type": "Monocrystalline/Polycrystalline",
            "Efficiency": "Up to 22% conversion rate",
            "Installation": "Professional certified installers",
            "Mounting": "Roof or ground mounting options",
            "Warranty": "25 years performance guarantee",
            "Maintenance": "Minimal maintenance required",
            "Output": "Up to 400W per panel",
            "Standards": "IEC 61215 certified"
        }
    },
    {
        id: 2,
        name: "Wind Energy Systems",
        description: "Small-scale wind turbine systems for residential and commercial applications. Clean, renewable energy generation with low maintenance requirements.",
        image: "images/wind.jpg",
        category: "batteries",
        badge: "Eco-Friendly",
        icon: "fa-wind",
        features: [
            "Small-scale wind turbine installation",
            "Low wind speed operation",
            "Quiet and efficient design",
            "Grid-tie and battery backup options",
            "Weather-resistant construction",
            "Remote monitoring capabilities"
        ],
        specifications: {
            "Turbine Type": "Horizontal axis wind turbine",
            "Power Output": "1-10kW systems available",
            "Cut-in Speed": "2.5 m/s wind speed",
            "Rated Speed": "10-12 m/s wind speed",
            "Installation": "Professional wind energy installers",
            "Maintenance": "Annual inspection recommended",
            "Warranty": "5 years on turbine, 2 years on inverter",
            "Noise Level": "<45 dB at 10m distance"
        }
    },
    {
        id: 3,
        name: "Hybrid Solar-Wind Systems",
        description: "Combined solar and wind energy systems for maximum renewable energy generation. Optimal for areas with varying weather conditions.",
        image: "images/renewable.jpg",
        category: "inverters",
        badge: "Hybrid",
        icon: "fa-leaf",
        features: [
            "Combined solar and wind generation",
            "Maximum renewable energy output",
            "Battery storage integration",
            "Smart energy management",
            "Weather-adaptive operation",
            "Complete system monitoring"
        ],
        specifications: {
            "System Type": "Hybrid renewable energy",
            "Solar Capacity": "Up to 20kW solar panels",
            "Wind Capacity": "Up to 10kW wind turbine",
            "Battery Storage": "Optional 10-50kWh",
            "Inverter": "Hybrid multi-source inverter",
            "Monitoring": "Real-time energy production",
            "Backup": "Grid-tie with battery backup",
            "Warranty": "5 years comprehensive"
        }
    },
    {
        id: 4,
        name: "Solar System Design & Planning",
        description: "Custom solar system design and planning services. Site assessment, energy analysis, and optimal system configuration for your specific needs.",
        image: "images/China_solar_PV_rooftop_Jiaxing_Zhejiang_Image_Huawei-p1c3317r0s1sfr1uki49q1n6vvoe.jpg",
        category: "panels",
        icon: "fa-drafting-compass",
        features: [
            "Site assessment and analysis",
            "Energy consumption evaluation",
            "Custom system design",
            "Financial analysis and ROI",
            "Permit and approval assistance",
            "Installation planning and scheduling"
        ],
        specifications: {
            "Service Type": "System Design & Planning",
            "Assessment": "Comprehensive site evaluation",
            "Design": "Custom system configuration",
            "Analysis": "Energy production modeling",
            "Permits": "Permit application assistance",
            "Timeline": "2-4 weeks design process",
            "Support": "Ongoing design consultation",
            "Warranty": "Design accuracy guarantee"
        }
    },
    {
        id: 5,
        name: "Solar Battery Storage",
        description: "Advanced battery storage solutions for solar energy systems. Store excess solar power for use during peak hours or power outages.",
        image: "images/energiespeicher_c310_2x.jpg",
        category: "accessories",
        badge: "Storage",
        icon: "fa-battery-full",
        features: [
            "Lithium-ion battery technology",
            "High energy density storage",
            "Smart charging management",
            "Backup power capability",
            "Long cycle life",
            "Remote monitoring and control"
        ],
        specifications: {
            "Battery Type": "LiFePO4 lithium-ion",
            "Capacity": "5-50kWh storage options",
            "Voltage": "48V nominal system",
            "Cycle Life": "6000+ cycles at 80% DoD",
            "Efficiency": "95% round-trip efficiency",
            "Management": "Built-in BMS protection",
            "Warranty": "10 years on battery cells",
            "Installation": "Professional installation included"
        }
    },
    {
        id: 6,
        name: "Solar System Maintenance",
        description: "Comprehensive maintenance and monitoring services for solar and wind energy systems. Keep your renewable energy systems operating at peak efficiency.",
        image: "images/solar.jpeg",
        category: "panels",
        icon: "fa-tools",
        features: [
            "Regular system inspections",
            "Performance monitoring",
            "Cleaning and maintenance",
            "Component replacement",
            "System optimization",
            "Emergency repair services"
        ],
        specifications: {
            "Service Type": "Maintenance & Monitoring",
            "Inspection": "Quarterly system checks",
            "Cleaning": "Panel cleaning service",
            "Monitoring": "24/7 system monitoring",
            "Repairs": "All component repairs",
            "Response": "24-hour emergency service",
            "Reports": "Detailed maintenance reports",
            "Warranty": "1 year on maintenance work"
        }
    },
    {
        id: 7,
        name: "Solar Water Heating Systems",
        description: "Efficient solar water heating systems for residential and commercial applications. Reduce energy costs with renewable solar thermal technology.",
        image: "images/solar-water-heating.jpg",
        category: "inverters",
        badge: "Eco-Friendly",
        icon: "fa-sun",
        features: [
            "Solar thermal collectors",
            "Hot water storage tanks",
            "Backup heating systems",
            "Temperature control systems",
            "Energy monitoring",
            "Professional installation"
        ],
        specifications: {
            "Service Type": "Solar Water Heating",
            "Collector Type": "Flat plate or evacuated tube",
            "Capacity": "80-300 liter storage",
            "Efficiency": "Up to 80% solar fraction",
            "Backup": "Electric or gas backup",
            "Installation": "Professional installation",
            "Savings": "Up to 70% water heating costs",
            "Warranty": "5 years on collectors"
        }
    },
    {
        id: 8,
        name: "Wind Turbine Installation",
        description: "Small-scale wind turbine installation for residential and commercial properties. Harness wind energy to reduce electricity bills and carbon footprint.",
        image: "images/wind-turbine.jpg",
        category: "panels",
        badge: "Wind Power",
        icon: "fa-wind",
        features: [
            "Small wind turbine installation",
            "Tower and foundation work",
            "Grid-tie or off-grid systems",
            "Wind resource assessment",
            "Performance monitoring",
            "Maintenance services"
        ],
        specifications: {
            "Service Type": "Wind Turbine Installation",
            "Turbine Size": "1kW to 10kW systems",
            "Tower Height": "10-30 meter towers",
            "Wind Speed": "Minimum 4 m/s required",
            "Installation": "Professional installation team",
            "Grid-tie": "Grid-tie or off-grid options",
            "Monitoring": "Real-time performance monitoring",
            "Warranty": "2 years installation warranty"
        }
    },
    {
        id: 9,
        name: "Solar Carport Systems",
        description: "Innovative solar carport systems that provide covered parking while generating clean energy. Perfect for residential and commercial parking areas.",
        image: "images/solar-carport.jpg",
        category: "batteries",
        icon: "fa-car",
        features: [
            "Solar panel carport structure",
            "Electric vehicle charging",
            "Weather protection",
            "Energy generation",
            "Custom design options",
            "Professional installation"
        ],
        specifications: {
            "Service Type": "Solar Carport Systems",
            "Structure": "Steel or aluminum frame",
            "Panels": "High-efficiency solar panels",
            "Charging": "EV charging integration",
            "Coverage": "1-4 car parking spaces",
            "Installation": "Professional installation",
            "Design": "Custom design options",
            "Warranty": "10 years structural warranty"
        }
    },
    {
        id: 10,
        name: "Renewable Energy Consulting",
        description: "Expert renewable energy consulting services to help you choose the best solar and wind energy solutions for your specific needs and location.",
        image: "images/consulting.jpg",
        category: "accessories",
        icon: "fa-lightbulb",
        features: [
            "Energy needs assessment",
            "Site evaluation",
            "System design consultation",
            "Financial analysis",
            "Permit assistance",
            "Project management"
        ],
        specifications: {
            "Service Type": "Renewable Energy Consulting",
            "Assessment": "Comprehensive energy audit",
            "Design": "Custom system design",
            "Analysis": "Financial ROI analysis",
            "Permits": "Permit application assistance",
            "Management": "Project management services",
            "Support": "Ongoing technical support",
            "Warranty": "Consultation satisfaction guarantee"
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