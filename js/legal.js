// Legal Pages JavaScript (Privacy Policy & Terms of Service)

// Initialize legal pages
document.addEventListener('DOMContentLoaded', function () {
    initializeLegalPage();
});

function initializeLegalPage() {
    initializeTOC();
    initializeScrollSpy();
}

// Table of Contents functionality
function initializeTOC() {
    const tocLinks = document.querySelectorAll('.toc a');
    const sections = document.querySelectorAll('.content section[id]');

    // Add click handlers for smooth scrolling
    tocLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll spy for highlighting active TOC items
function initializeScrollSpy() {
    const sections = document.querySelectorAll('.content section[id]');
    const tocLinks = document.querySelectorAll('.toc a');

    if (sections.length === 0 || tocLinks.length === 0) return;

    // Create intersection observer
    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all TOC links
                tocLinks.forEach(link => link.classList.remove('active'));

                // Add active class to corresponding TOC link
                const activeLink = document.querySelector(`.toc a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Add CSS for legal page interactions
const legalStyles = `
    .toc a {
        transition: all 0.3s ease;
    }
    
    .toc a:hover {
        color: #667eea;
        transform: translateX(5px);
    }
    
    .toc a.active {
        color: #667eea;
        font-weight: 600;
        background: rgba(102, 126, 234, 0.1);
        padding: 0.5rem;
        border-radius: 6px;
        margin: 0 -0.5rem;
    }
    
    .content section {
        scroll-margin-top: 120px;
    }
    
    .content h2 {
        transition: all 0.3s ease;
    }
    
    .content h2:hover {
        color: #667eea;
    }
    
    .content h3 {
        transition: all 0.3s ease;
    }
    
    .content h3:hover {
        color: #667eea;
    }
    
    .contact-info {
        transition: all 0.3s ease;
    }
    
    .contact-info:hover {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .contact-item {
        transition: all 0.3s ease;
    }
    
    .contact-item:hover {
        transform: translateX(5px);
    }
    
    .contact-item i {
        transition: color 0.3s ease;
    }
    
    .contact-item:hover i {
        color: #5a6fd8;
    }
`;

// Add legal styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = legalStyles;
document.head.appendChild(styleSheet);
