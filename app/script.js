// Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Handle Contact Form Submission
        function handleFormSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('contactForm');
            const successMsg = document.getElementById('contact-success');
            
            // Show custom message box (no alert used)
            successMsg.classList.remove('hidden');
            form.reset();

            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 6000);
        }
