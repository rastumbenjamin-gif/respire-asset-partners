// ===========================
// Smooth Scrolling & Navigation
// ===========================

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Navigation Scroll Effect
    // ===========================

    const nav = document.getElementById('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scrolled class for styling
        if (scrollTop > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // ===========================
    // Intersection Observer for Fade-in Animations
    // ===========================

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay * 1000);

                // Unobserve after animation triggers
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // ===========================
    // Data Visualization Animation
    // ===========================

    const vizObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateVisualization();
                vizObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const dataViz = document.querySelector('.data-viz');
    if (dataViz) {
        vizObserver.observe(dataViz);
    }

    function animateVisualization() {
        const bars = document.querySelectorAll('.viz-bar');
        const dots = document.querySelectorAll('.viz-dot');
        const line = document.querySelector('.viz-line');

        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('animate');
            }, index * 100);
        });

        setTimeout(() => {
            dots.forEach((dot, index) => {
                setTimeout(() => {
                    dot.classList.add('animate');
                }, index * 150);
            });
        }, 400);

        setTimeout(() => {
            if (line) {
                line.classList.add('animate');
            }
        }, 800);
    }

    // ===========================
    // Contact Form Handler
    // ===========================

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    showFormFeedback('Thank you for reaching out! We\'ll be in touch shortly.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                showFormFeedback('Oops! There was a problem sending your message. Please try again or email us directly at benjamin@respire.icu', 'error');
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    function showFormFeedback(message, type) {
        // Remove any existing feedback
        const existingFeedback = document.querySelector('.form-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Create feedback element
        const feedback = document.createElement('div');
        feedback.className = `form-feedback form-feedback-${type}`;
        feedback.textContent = message;
        feedback.style.cssText = `
            padding: 1rem 1.5rem;
            margin-top: 1rem;
            border-radius: 4px;
            font-size: 0.95rem;
            animation: slideIn 0.3s ease-out;
            background: ${type === 'success' ? 'var(--color-sage)' : 'var(--color-terracotta)'};
            color: white;
        `;

        contactForm.appendChild(feedback);

        // Remove feedback after 5 seconds
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => feedback.remove(), 300);
        }, 5000);
    }

    // ===========================
    // CTA Button Click Handlers
    // ===========================

    const ctaButtons = document.querySelectorAll('[data-form-type]');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const formType = this.dataset.formType;
            const interestSelect = document.getElementById('interest');

            if (interestSelect) {
                // Pre-select the form type based on CTA clicked
                if (formType === 'seller') {
                    interestSelect.value = 'selling';
                } else if (formType === 'buyer') {
                    interestSelect.value = 'buying';
                }
            }
        });
    });

    // ===========================
    // Form Input Enhancements
    // ===========================

    const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');

    formInputs.forEach(input => {
        // Add floating label effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });

        // Check if already has value on load
        if (input.value !== '') {
            input.parentElement.classList.add('focused');
        }
    });

    // ===========================
    // Parallax Effect for Hero Background
    // ===========================

    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;

            if (scrolled < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }

    // ===========================
    // Button Hover Effects
    // ===========================

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            // Animate ripple
            ripple.animate([
                { width: '0px', height: '0px', opacity: 1 },
                { width: '300px', height: '300px', opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            }).onfinish = () => ripple.remove();
        });
    });

    // ===========================
    // Highlight Items Animation
    // ===========================

    const highlightObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateHighlights();
                highlightObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const highlightsSection = document.querySelector('.asset-highlights');
    if (highlightsSection) {
        highlightObserver.observe(highlightsSection);
    }

    function animateHighlights() {
        const highlights = document.querySelectorAll('.highlight-item');

        highlights.forEach((highlight, index) => {
            setTimeout(() => {
                highlight.style.opacity = '0';
                highlight.style.transform = 'translateX(-20px)';
                highlight.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';

                requestAnimationFrame(() => {
                    highlight.style.opacity = '1';
                    highlight.style.transform = 'translateX(0)';
                });
            }, index * 150);
        });
    }

    // ===========================
    // Keyboard Navigation Support
    // ===========================

    document.addEventListener('keydown', function(e) {
        // ESC key to close modals or forms (if you add any)
        if (e.key === 'Escape') {
            const focusedElement = document.activeElement;
            if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                focusedElement.blur();
            }
        }
    });

    // ===========================
    // Performance: Debounce Scroll Events
    // ===========================

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-intensive functions
    const debouncedScroll = debounce(function() {
        // Any additional scroll logic here
    }, 10);

    window.addEventListener('scroll', debouncedScroll);

    // ===========================
    // Add CSS animations dynamically
    // ===========================

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);

    // ===========================
    // Loading Animation (Optional)
    // ===========================

    window.addEventListener('load', function() {
        document.body.classList.add('loaded');

        // Trigger initial animations
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
    });

    // ===========================
    // Console Message
    // ===========================

    console.log('%cREspire Asset Partners', 'font-size: 20px; font-weight: bold; color: #8B9D83;');
    console.log('%cWebsite built with care.', 'font-size: 12px; color: #6B6B6B;');
});
