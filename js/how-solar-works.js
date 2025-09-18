// How Solar Works Page JavaScript

// Initialize how solar works page
document.addEventListener('DOMContentLoaded', function () {
    initializeHowSolarWorksPage();
});

function initializeHowSolarWorksPage() {
    initializeFAQ();
    initializeAnimations();
}

// FAQ Functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current FAQ item
            item.classList.toggle('active');
        });
    });
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
    const animatedElements = document.querySelectorAll('.step-card, .benefit-item, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animate solar diagram elements
    const diagramElements = document.querySelectorAll('.sun, .solar-panel, .inverter, .home, .grid');
    diagramElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.8)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
        }, index * 200);
    });

    // Animate chart bars
    const chartBars = document.querySelectorAll('.bar');
    const chartObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const height = bar.style.height;
                bar.style.height = '0';
                bar.style.transition = 'height 1s ease';

                setTimeout(() => {
                    bar.style.height = height;
                }, 200);
            }
        });
    }, observerOptions);

    chartBars.forEach(bar => {
        chartObserver.observe(bar);
    });
}

// Add CSS for animations
const animationStyles = `
    .step-card {
        transition: all 0.3s ease;
    }
    
    .benefit-item {
        transition: all 0.3s ease;
    }
    
    .faq-item {
        transition: all 0.3s ease;
    }
    
    .faq-question {
        transition: all 0.3s ease;
    }
    
    .faq-answer {
        transition: all 0.3s ease;
    }
    
    .sun, .solar-panel, .inverter, .home, .grid {
        transition: all 0.6s ease;
    }
    
    .bar {
        transition: height 1s ease;
    }
`;

// Add animation styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
