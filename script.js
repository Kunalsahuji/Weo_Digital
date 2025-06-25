// GSAP Animation Script for WEO3 Website
gsap.registerPlugin(ScrollTrigger);


// Global Variables
let customCursor = document.querySelector('.custom-cursor');
let cursorDot = document.querySelector('.cursor-dot');
let cursorOutline = document.querySelector('.cursor-outline');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    initializeLoading();
    initializeCursor();
    initializeMobileMenu();
    // initializeScrollAnimations();
    initializeHoverEffects();
    initializeParallax();
});

// Loading Animation
function initializeLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loaderProgress = document.querySelector('.loader-progress');

    // Animate loader progress
    gsap.to(loaderProgress, {
        width: '100%',
        duration: 1,
        ease: 'power2.out'
    });

    // Hide loading screen after animation
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.01,
        delay: 3,
        onComplete: () => {
            loadingScreen.style.display = 'none';
            // Start main animations
            startMainAnimations();
        }
    });
}

// Main Animations
function startMainAnimations() {
    // Hero Title Animation
    gsap.fromTo('.hero-title .title-line', {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Navigation Animation
    gsap.fromTo('.nav', {
        y: -100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    // Hero Content Animation
    gsap.fromTo('.leftContent .stat-card', {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        delay: 0.8,
        ease: 'power3.out'
    });

    gsap.fromTo('.rightContent', {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });

    // Hero Image Animation
    gsap.fromTo('.hero-image-container', {
        scale: 0.8,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay: 0.6,
        ease: 'back.out(1.7)'
    });

    // Floating elements animation
    gsap.to('.float-element', {
        y: '-=20',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3
    });

    // Scroller Animation
    gsap.fromTo('.scroller', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out'
    });
}

// Custom Cursor
function initializeCursor() {
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            gsap.to(cursorOutline, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .stat-card, .testimonial-card, .service-image');

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorOutline, {
                    scale: 2,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            el.addEventListener('mouseleave', () => {
                gsap.to(cursorOutline, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
}

// Mobile Menu
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');

        if (mobileMenuOverlay.classList.contains('active')) {
            // Animate menu items
            gsap.fromTo('.mobile-nav-links li', {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }
    });

    // Close mobile menu
    mobileMenuClose.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
    });

    // Close menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
        });
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    // Section animations
    gsap.utils.toArray('.page2, .page3, .page4').forEach(section => {
        gsap.fromTo(section.querySelector('.section-title'), {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Services section animation
    gsap.fromTo('.page2left', {
        x: -100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.page2content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    gsap.fromTo('.page2right', {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.page2content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Stats grid animation
    gsap.fromTo('.stat-box', {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Testimonials animation
    gsap.fromTo('.testimonial-card', {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.customerratings',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Footer animation
    gsap.fromTo('.footer-content > div', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.main-footer',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
}

// Hover Effects
function initializeHoverEffects() {
    // Button hover animations
    document.querySelectorAll('.primary-button, .secondary-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Stat card hover effects
    document.querySelectorAll('.stat-card, .stat-box').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Testimonial card hover effects
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Social links animation
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -5,
                scale: 1.1,
                duration: 0.3,
                ease: 'back.out(1.7)'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Parallax Effects
function initializeParallax() {
    // Background elements parallax
    gsap.to('.leftbgcolor', {
        y: '-50%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.page1',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to('.rightbgcolor', {
        y: '50%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.page1',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Hero image parallax
    gsap.to('.hero-image', {
        y: '-20%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-image-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Service image parallax
    gsap.to('.service-image', {
        y: '-30%',
        ease: 'none',
        scrollTrigger: {
            trigger: '.service-image-container',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// Additional Animations
function initializeAnimations() {
    // Continuous animations
    gsap.to('.image-glow', {
        scale: 1.2,
        opacity: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Navigation link hover effects
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Logo hover animation
    document.querySelector('.logo').addEventListener('mouseenter', () => {
        gsap.to('.logo', {
            scale: 1.1,
            duration: 0.3,
            ease: 'back.out(1.7)'
        });
    });

    document.querySelector('.logo').addEventListener('mouseleave', () => {
        gsap.to('.logo', {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: target,
                ease: 'power2.inOut'
            });
        }
    });
});

// Resize handler
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Performance optimization
gsap.set('.will-animate', {
    willChange: 'transform, opacity'
});

// Intersection Observer for performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #ff4000, #ff0090);
        z-index: 9999;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// Add page transition effects
window.addEventListener('beforeunload', () => {
    gsap.to('body', {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
});
