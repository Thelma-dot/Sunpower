// Contact Page JavaScript

// Initialize contact page
document.addEventListener('DOMContentLoaded', function () {
    initializeContactPage();
});

function initializeContactPage() {
    initializeContactForm();
    initializeFAQ();
}

// Contact Form Functionality
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        submitContactForm();
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });
    });
}

function submitContactForm() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const contactData = {};

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        contactData[key] = value;
    }

    // Add timestamp
    contactData.timestamp = new Date().toISOString();
    contactData.type = 'contact';

    // Validate form
    if (!validateContactForm()) {
        return;
    }

    // Show loading state
    showLoadingState();

    // Simulate form submission
    setTimeout(() => {
        hideLoadingState();
        showSuccessMessage();

        // Log the contact data (in a real app, this would be sent to a server)
        console.log('Contact form submitted:', contactData);

        // Store in localStorage for demo purposes
        const contacts = JSON.parse(localStorage.getItem('sunpower_contacts') || '[]');
        contacts.push(contactData);
        localStorage.setItem('sunpower_contacts', JSON.stringify(contacts));

        // Reset form after successful submission
        setTimeout(() => {
            resetContactForm();
        }, 3000);
    }, 2000);
}

function validateContactForm() {
    const form = document.getElementById('contact-form');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${getFieldLabel(field)} is required`;
    }

    // Email validation
    if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    }

    // Phone validation
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid phone number';
    }

    // Show error if validation failed
    if (!isValid) {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = errorMessage;
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        field.parentNode.appendChild(errorDiv);
    }

    return isValid;
}

function getFieldLabel(field) {
    const label = field.parentNode.querySelector('label');
    return label ? label.textContent.replace('*', '').trim() : field.name;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function showLoadingState() {
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Store original text for restoration
    submitBtn.dataset.originalText = originalText;
}

function hideLoadingState() {
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');
    const originalText = submitBtn.dataset.originalText;

    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
}

function showSuccessMessage() {
    // Create success message if it doesn't exist
    let successMessage = document.querySelector('.success-message');
    if (!successMessage) {
        successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <h3><i class="fas fa-check-circle"></i> Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
        `;

        const form = document.getElementById('contact-form');
        form.insertBefore(successMessage, form.firstChild);
    }

    successMessage.classList.add('show');

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetContactForm() {
    const form = document.getElementById('contact-form');
    form.reset();

    // Hide success message
    const successMessage = document.querySelector('.success-message');
    if (successMessage) {
        successMessage.classList.remove('show');
    }

    // Remove error styling
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));

    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
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

// Add CSS for error states and animations
const contactStyles = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }
    
    .error-message {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
    
    .success-message {
        background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
        color: white;
        padding: 1.5rem;
        border-radius: 8px;
        text-align: center;
        margin-bottom: 1.5rem;
        display: none;
    }
    
    .success-message.show {
        display: block;
        animation: slideDown 0.3s ease;
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
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Add contact styles to the page
const styleSheet = document.createElement('style');
styleSheet.textContent = contactStyles;
document.head.appendChild(styleSheet);
