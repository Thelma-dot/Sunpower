// Installation Page JavaScript

// Initialize installation page
document.addEventListener('DOMContentLoaded', function () {
    initializeInstallationPage();
});

function initializeInstallationPage() {
    initializeAnimations();
    initializeTimeline();
}

// Timeline functionality
function initializeTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Intersection Observer for timeline animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
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
    const animatedElements = document.querySelectorAll('.team-member, .gallery-item, .quality-feature, .warranty-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Staggered animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Add CSS for animations
const animationStyles = `
    .timeline-item {
        transition: all 0.6s ease;
    }
    
    .timeline-item.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .team-member {
        transition: all 0.3s ease;
    }
    
    .gallery-item {
        transition: all 0.3s ease;
    }
    
    .quality-feature {
        transition: all 0.3s ease;
    }
    
    .warranty-item {
        transition: all 0.3s ease;
    }
    
    .timeline-content {
        transition: all 0.3s ease;
    }
    
    .timeline-content:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .team-member:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .gallery-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .quality-feature:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
`;

// Add animation styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);
