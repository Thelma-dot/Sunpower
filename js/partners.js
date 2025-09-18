// Partners Page JavaScript

// Initialize partners page
document.addEventListener('DOMContentLoaded', function () {
    initializePartnersPage();
});

function initializePartnersPage() {
    initializeAnimations();
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
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
    const animatedElements = document.querySelectorAll('.partnership-card, .benefit-item, .process-step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Staggered animation for partnership cards
    const partnershipCards = document.querySelectorAll('.partnership-card');
    partnershipCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Animate stats on scroll
    const statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, observerOptions);

    const statsContainer = document.querySelector('.partnership-stats');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }
}

// Animate statistics
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''));

        if (numericValue) {
            animateNumber(stat, 0, numericValue, 2000, finalValue);
        }
    });
}

function animateNumber(element, start, end, duration, suffix) {
    const startTime = performance.now();
    const isPercentage = suffix.includes('%');
    const isPlus = suffix.includes('+');

    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(start + (end - start) * easeOutQuart);

        let displayValue = currentValue.toString();
        if (isPercentage) displayValue += '%';
        if (isPlus) displayValue += '+';

        element.textContent = displayValue;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

// Add CSS for animations
const partnerStyles = `
    .partnership-card {
        transition: all 0.3s ease;
    }
    
    .partnership-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .benefit-item {
        transition: all 0.3s ease;
    }
    
    .benefit-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .process-step {
        transition: all 0.3s ease;
    }
    
    .process-step:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .step-number {
        transition: transform 0.3s ease;
    }
    
    .process-step:hover .step-number {
        transform: scale(1.1);
    }
    
    .benefit-icon {
        transition: transform 0.3s ease;
    }
    
    .benefit-item:hover .benefit-icon {
        transform: scale(1.1);
    }
    
    .stat-number {
        transition: all 0.3s ease;
    }
`;

// Add partner styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = partnerStyles;
document.head.appendChild(styleSheet);
