// Support Page JavaScript

// Initialize support page
document.addEventListener('DOMContentLoaded', function () {
    initializeSupportPage();
});

function initializeSupportPage() {
    initializeFAQ();
    initializeKnowledgeSearch();
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

// Knowledge Base Search functionality (scoped to support page)
function initializeKnowledgeSearch() {
    const searchInput = document.getElementById('knowledge-search');
    const searchBtn = document.querySelector('.knowledge-base .search-btn');

    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                searchKnowledge();
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', searchKnowledge);
    }
}

function searchKnowledge() {
    const searchTerm = document.getElementById('knowledge-search').value.trim();

    if (!searchTerm) {
        showNotification('Please enter a search term', 'warning');
        return;
    }

    // Simulate search functionality
    showNotification(`Searching for "${searchTerm}"...`, 'info');

    // In a real application, this would make an API call
    setTimeout(() => {
        showNotification(`Found 5 results for "${searchTerm}"`, 'success');
    }, 1000);
}

// Live chat functionality
function startLiveChat() {
    // Simulate live chat
    showNotification('Live chat is currently offline. Please use phone or email support.', 'info');

    // In a real application, this would open a chat widget
    setTimeout(() => {
        showNotification('Redirecting to contact form...', 'info');
        window.location.href = 'contact.html';
    }, 2000);
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
    const animatedElements = document.querySelectorAll('.support-card, .category-card, .faq-item, .warranty-feature');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Staggered animation for support cards
    const supportCards = document.querySelectorAll('.support-card');
    supportCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Add CSS for animations and interactions
const supportStyles = `
    .support-card {
        transition: all 0.3s ease;
    }
    
    .support-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .category-card {
        transition: all 0.3s ease;
    }
    
    .category-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
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
    
    .warranty-feature {
        transition: all 0.3s ease;
    }
    
    .warranty-feature:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .search-container {
        transition: all 0.3s ease;
    }
    
    .search-container:focus-within {
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
    }
    
    .search-btn {
        transition: all 0.3s ease;
    }
    
    .search-btn:hover {
        background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
    }
    
    .category-links a {
        transition: color 0.3s ease;
    }
    
    .category-links a:hover {
        color: #5a6fd8;
        text-decoration: underline;
    }
`;

// Add support styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = supportStyles;
document.head.appendChild(styleSheet);

// Export functions for global access
window.searchKnowledge = searchKnowledge;
window.startLiveChat = startLiveChat;
