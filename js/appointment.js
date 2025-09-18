// Initialize EmailJS with your public key
emailjs.init("NH3ow-6uSDWPQwL8T");

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointment-form');
    
    if (!form) {
        console.error('Appointment form not found');
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Get form data
        const templateParams = {
            from_name: this.fullName.value,
            from_email: this.email.value,
            phone: this.phone.value,
            location: this.location.value,
            service: this.service.value,
            message: this.message.value,
            response_date: new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        };

        // Send email using EmailJS
        emailjs.send(
            'service_m8tl3za', // Your Service ID
            'template_jmdt0op', // Your Template ID
            templateParams
        ).then(
            function(response) {
                console.log('SUCCESS!', response.status, response.text);
                
                // Show success message
                const successMessage = `
                    <div class="success-popup">
                        <h3>✅ Request Received!</h3>
                        <p>Thank you for contacting SunPower Electrical Engineering.</p>
                        <p>We have received your request regarding <strong>${templateParams.service}</strong>.</p>
                        <p>Our team will get back to you within 2-3 business days.</p>
                        <p>For urgent matters, please call us at: <strong>0248303797</strong></p>
                    </div>
                `;
                
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = successMessage;
                document.body.appendChild(modal);
                
                // Remove modal after 5 seconds
                setTimeout(() => {
                    modal.remove();
                }, 5000);
                
                // Reset form
                form.reset();
            },
            function(error) {
                console.error('EmailJS error:', error);
                alert('Sorry, there was an error sending your request. Please try again.');
            }
        ).finally(function() {
            // Reset button state
            submitButton.disabled = false;
            submitButton.innerHTML = originalText;
        });
    });
});