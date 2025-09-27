// Homeowners Page JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize homeowners page functionality
    initHomeownersPage();
});

function initHomeownersPage() {
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();

    // Initialize solution card interactions
    initSolutionCards();

    // Initialize financing card interactions
    initFinancingCards();

    // Initialize testimonial carousel (if needed)
    initTestimonials();

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize CTA tracking
    initCTATracking();

    // Initialize search functionality
    // Search functionality is handled globally in script.js

    // Initialize form validation
    initFormValidation();
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Solution card interactions
function initSolutionCards() {
    const solutionCards = document.querySelectorAll('.solution-card');

    solutionCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function () {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
        });

        // Add click tracking for analytics
        const quoteButton = card.querySelector('.btn');
        if (quoteButton) {
            quoteButton.addEventListener('click', function () {
                trackEvent('homeowners', 'solution_quote_click', {
                    solution: card.querySelector('h3').textContent,
                    price: card.querySelector('.solution-price').textContent
                });
            });
        }
    });
}

// Financing card interactions
function initFinancingCards() {
    const financingCards = document.querySelectorAll('.financing-card');

    financingCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function () {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
        });

        // Add click tracking for analytics
        const actionButton = card.querySelector('.btn');
        if (actionButton) {
            actionButton.addEventListener('click', function () {
                trackEvent('homeowners', 'financing_option_click', {
                    option: card.querySelector('h3').textContent,
                    price: card.querySelector('.financing-price').textContent
                });
            });
        }
    });
}

// Testimonial interactions
function initTestimonials() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Scroll animations
function initScrollAnimations() {
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

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.benefit-card, .solution-card, .financing-card, .testimonial-card, .step');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// CTA tracking
function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.cta-section .btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent.trim();
            trackEvent('homeowners', 'cta_click', {
                button_text: buttonText,
                section: 'cta'
            });
        });
    });
}

// Utility function for tracking events
function trackEvent(category, action, properties = {}) {
    // This would integrate with your analytics platform
    // For now, we'll just log to console
    console.log('Event tracked:', {
        category: category,
        action: action,
        properties: properties,
        timestamp: new Date().toISOString()
    });

    // Example integration with Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: properties.button_text || properties.solution || properties.option,
            value: 1
        });
    }
}

// Benefit cards animation on scroll
function animateBenefitCards() {
    const benefitCards = document.querySelectorAll('.benefit-card');

    benefitCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize benefit card animations
document.addEventListener('DOMContentLoaded', function () {
    animateBenefitCards();
});

// Process steps animation
function animateProcessSteps() {
    const steps = document.querySelectorAll('.step');

    steps.forEach((step, index) => {
        step.style.animationDelay = `${index * 0.2}s`;
    });
}

// Initialize process step animations
document.addEventListener('DOMContentLoaded', function () {
    animateProcessSteps();
});

// Mobile menu handling is managed globally in js/script.js.
// Avoid attaching a second toggle handler here to prevent double-toggling.

// Search functionality is handled globally in script.js

// Form validation (if there are forms on the page)
function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validate form data
            if (validateForm(data)) {
                submitForm(data);
            }
        });
    });
}

// Validate form data
function validateForm(data) {
    // Add your validation logic here
    return true;
}

// Submit form
function submitForm(data) {
    // Add your form submission logic here
    console.log('Form submitted:', data);
}


