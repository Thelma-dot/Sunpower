// Initialize EmailJS (supports runtime override via window.EMAILJS_CONFIG)
const EMAILJS_CONFIG = window.EMAILJS_CONFIG || {};
emailjs.init(EMAILJS_CONFIG.publicKey || "NH3ow-6uSDWPQwL8T");

// IDs can be overridden without code changes by setting window.EMAILJS_CONFIG
const SERVICE_ID = EMAILJS_CONFIG.serviceId || 'service_srqwni8';
// Owner email disabled unless explicitly configured
const TEMPLATE_ID_OWNER = EMAILJS_CONFIG.templateOwner || '';
const TEMPLATE_ID_USER = EMAILJS_CONFIG.templateUser || '';
const COMPANY_NAME = 'SunPower Electrical Engineering';

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const faqItems = document.querySelectorAll('.faq-item');

    if (!form) {
        console.error('Quote form not found');
        return;
    }

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Get form data
        const formData = new FormData(this);
        const now = new Date();
        const submittedAt = now.toLocaleString();
        const submittedAtISO = now.toISOString();
        const templateParams = {
            from_name: formData.get('fullName'),
            from_email: formData.get('email'),
            phone: formData.get('phone'),
            location: formData.get('location'),
            service: formData.get('service'),
            message: formData.get('message'),
            subject: `New appointment request from ${formData.get('fullName')} – ${formData.get('service')}`,
            submitted_at: submittedAt,
            submitted_at_iso: submittedAtISO,
            company_name: COMPANY_NAME,
            to_name: 'SunPower Team',
            // aliases to match various template variable names
            name: formData.get('fullName'),
            client_name: formData.get('fullName'),
            client_email: formData.get('email'),
            reply_to: formData.get('email'),
            // owner recipient - set this in your EmailJS template as {{to_email}} or in service routing
            to_email: EMAILJS_CONFIG.ownerEmail || 'sunpowerelectricalengineering@gmail.com',
            // recipient aliases for templates that use different variable names
            email: EMAILJS_CONFIG.ownerEmail || 'sunpowerelectricalengineering@gmail.com',
            to: EMAILJS_CONFIG.ownerEmail || 'sunpowerelectricalengineering@gmail.com',
            recipient: EMAILJS_CONFIG.ownerEmail || 'sunpowerelectricalengineering@gmail.com'
        };

        // Prepare user confirmation email (aligns with your template variables)
        const userEmail = formData.get('email');
        const userName = formData.get('fullName');
        const ownerInbox = EMAILJS_CONFIG.ownerEmail || 'sunpowerelectricalengineering@gmail.com';

        // Debug logs to verify recipients and templates
        try {
            console.log('[Quote] Sending client email via templateUser:', TEMPLATE_ID_USER || '(not set)');
            console.log('[Quote] Client to_email:', userEmail);
            console.log('[Quote] Sending owner email via templateOwner:', TEMPLATE_ID_OWNER || '(not set)');
            console.log('[Quote] Owner to_email:', ownerInbox);
        } catch (e) { }
        const userEmailParams = {
            to_email: userEmail,
            to_name: userName,
            name: userName,
            service: formData.get('service'),
            location: formData.get('location'),
            phone: formData.get('phone'),
            subject: `We received your booking – ${COMPANY_NAME}`,
            company_name: COMPANY_NAME,
            submitted_at: submittedAt,
            submitted_at_iso: submittedAtISO,
            // recipient aliases for templates that use different variable names
            email: userEmail,
            to: userEmail,
            recipient: userEmail
        };

        const sendOwner = TEMPLATE_ID_OWNER
            ? emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_OWNER,
                templateParams
            )
            : Promise.resolve();

        // Only attempt user confirmation if a template is configured
        const maybeSendUser = TEMPLATE_ID_USER
            ? emailjs.send(SERVICE_ID, TEMPLATE_ID_USER, userEmailParams).catch(function (err) {
                console.warn('User confirmation email failed (non-blocking):', (err && err.text) || err);
            })
            : Promise.resolve();

        Promise.allSettled([sendOwner, maybeSendUser]).then(function (results) {
            const ownerResult = results[0];
            const ownerOk = TEMPLATE_ID_OWNER ? ownerResult.status === 'fulfilled' : true;
            if (ownerOk) {
                // Show success message
                const successMessage = `
                    <div class="success-popup">
                        <h3>✅ Request Received!</h3>
                        <p>Thank you for contacting SunPower Electrical Engineering.</p>
                        <p>We have received your request regarding <strong>${templateParams.service}</strong>.</p>
                        ${TEMPLATE_ID_USER ? `<p>We emailed a confirmation to <strong>${userEmail}</strong>.</p>` : ''}
                        ${TEMPLATE_ID_OWNER ? `<p>(Admin copy sent to <strong>${ownerInbox}</strong>.)</p>` : ''}
                        <p>Our team will get back to you within 2-3 business days.</p>
                        <p>For urgent matters, please call us at: <strong>0248303797</strong></p>
                    </div>
                `;

                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = successMessage;
                document.body.appendChild(modal);

                setTimeout(() => { modal.remove(); }, 5000);
                form.reset();
            } else {
                const reason = ownerResult.reason;
                console.error('EmailJS error (owner):', (reason && reason.text) || reason || 'Unknown error');
                alert('Sorry, there was an error sending your request. Please try again.');
            }
        }).finally(function () {
            // Reset button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        });
    });

    // Add form validation
    form.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('blur', function () {
            validateField(this);
        });
    });

    // FAQ accordion behavior
    if (faqItems && faqItems.length) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            if (!question || !answer) return;

            // Ensure collapsed state initially
            answer.style.maxHeight = null;

            question.addEventListener('click', function () {
                const isActive = item.classList.contains('active');

                // Close all
                faqItems.forEach(other => {
                    other.classList.remove('active');
                    const otherAnswer = other.querySelector('.faq-answer');
                    if (otherAnswer) otherAnswer.style.maxHeight = null;
                });

                // Open the clicked one if it was not active
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }
});

// Basic field validation
function validateField(field) {
    const value = field.value.trim();
    field.classList.remove('error');

    if (field.hasAttribute('required') && !value) {
        field.classList.add('error');
        return false;
    }

    if (field.type === 'email' && value && !isValidEmail(value)) {
        field.classList.add('error');
        return false;
    }

    if (field.type === 'tel' && value && !isValidPhone(value)) {
        field.classList.add('error');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[\+]?[0-9]{8,}$/.test(phone.replace(/[\s\-\(\)]/g, ''));
}

