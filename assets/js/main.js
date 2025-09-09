// ===== GSAP REGISTRATION =====
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// ===== GLOBAL VARIABLES =====
let isLoading = true;
let tl = gsap.timeline();

// // ===== LOADING SCREEN =====
// window.addEventListener('load', function() {
//     // Hide loading screen after 3 seconds
//     setTimeout(() => {
//         gsap.to('#loading-screen', {
//             opacity: 1,
//             duration: 0.5,
//             onComplete: () => {
//                 document.getElementById('loading-screen').style.display = 'none';
//                 isLoading = false;
//                 initializeAnimations();
//             }
//         });
//     }, 2000);
// });

// ===== LOADING SCREEN =====
window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading-screen");

    // Detect if page load is from refresh/navigation
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        // Always show loader on refresh
        showLoader();
    } else if (!sessionStorage.getItem("hasLoaded")) {
        // First visit
        showLoader();
        sessionStorage.setItem("hasLoaded", "true");
    } else {
        // Skip loader
        loadingScreen.style.display = "none";
        initializeAnimations();
    }

    function showLoader() {
        setTimeout(() => {
            gsap.to("#loading-screen", {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loadingScreen.style.display = "none";
                    isLoading = false;
                    initializeAnimations();
                },
            });
        }, 1000);
    }
});


// ===== NAVIGATION =====
$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('.navbar-nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });

    // Active navigation highlighting
    $(window).on('scroll', function() {
        const scrollPos = $(window).scrollTop() + 100;
        
        $('.navbar-nav a[href^="#"]').each(function() {
            const target = $(this.getAttribute('href'));
            if (target.length && target.offset().top <= scrollPos && target.offset().top + target.outerHeight() > scrollPos) {
                $('.navbar-nav a').removeClass('active');
                $(this).addClass('active');
            }
        });

        // Glass navigation effect
        if (scrollPos > 50) {
            $('.glass-nav').addClass('scrolled');
        } else {
            $('.glass-nav').removeClass('scrolled');
        }

        // Back to top button
        if (scrollPos > 300) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    // Back to top functionality
    $('.back-to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Scroll indicator click
    $('.scroll-indicator').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top - 80
        }, 800);
    });
});

// ===== GSAP ANIMATIONS =====
function initializeAnimations() {
    // Hero section animations
    initHeroAnimations();
    
    // Scroll-triggered animations
    initScrollAnimations();
    
    // Skill progress animations
    initSkillAnimations();
    
    // Project hover animations
    initProjectAnimations();
    
    // Timeline animations
    initTimelineAnimations();
    
    // Contact form animations
    initContactAnimations();
    
    // Particle effects
    initParticleEffects();
}

// // ===== HERO ANIMATIONS =====
// function initHeroAnimations() {
//     // Typewriter effect for name
//     gsap.to('#typewriter-name', {
//         duration: 2,
//         text: "Anshul Chouhan",
//         ease: "none",
//         delay: 0.5
//     });

//     // Typewriter effect for role
//     gsap.to('#typewriter-role', {
//         duration: 2.5,
//         text: "Python Developer & Full-Stack Engineer",
//         ease: "none",
//         delay: 2.5
//     });

//     // Hero content animation
//     const heroTl = gsap.timeline({ delay: 1 });
    
//     heroTl.from('.greeting', {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         ease: "power2.out"
//     })
//     .from('.hero-description', {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         ease: "power2.out"
//     }, "-=0.3")
//     .from('.hero-buttons .neon-btn', {
//         opacity: 100,
//         y: 30,
//         duration: 0.6,
//         stagger: 0.2,
//         ease: "power2.out"
//     }, "-=0.3")
//     .from('.social-links .social-link', {
//         opacity: 0,
//         scale: 0,
//         duration: 0.5,
//         stagger: 0.1,
//         ease: "back.out(1.7)"
//     }, "-=0.3");

//     // Profile container animation
//     gsap.from('.profile-container', {
//         opacity: 0,
//         scale: 0.5,
//         duration: 1.2,
//         ease: "elastic.out(1, 0.5)",
//         delay: 1.5
//     });

//     // Floating shapes animation
//     gsap.to('.shape-1', {
//         rotation: 360,
//         duration: 20,
//         repeat: -1,
//         ease: "none"
//     });

//     gsap.to('.shape-2', {
//         rotation: -360,
//         duration: 25,
//         repeat: -1,
//         ease: "none"
//     });

//     gsap.to('.shape-3', {
//         rotation: 360,
//         duration: 15,
//         repeat: -1,
//         ease: "none"
//     });

//     // Parallax effect for hero background
//     gsap.to('.particles-container', {
//         yPercent: -50,
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".hero-section",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true
//         }
//     });
// }

// // ===== SCROLL ANIMATIONS =====
// function initScrollAnimations() {
//     // Section titles animation
//     gsap.utils.toArray('.section-title').forEach(title => {
//         gsap.from(title, {
//             opacity: 0,
//             y: 50,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: title,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse"
//             }
//         });
//     });

//     // Section dividers animation
//     gsap.utils.toArray('.section-divider').forEach(divider => {
//         gsap.from(divider, {
//             scaleX: 0,
//             duration: 1,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: divider,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse"
//             }
//         });
//     });

//     // About content animation
//     gsap.from('.about-content', {
//         opacity: 0,
//         x: -50,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".about-content",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     gsap.from('.about-image', {
//         opacity: 0,
//         x: 50,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".about-image",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Stats animation
//     gsap.from('.stat-item', {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".about-stats",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Code snippet animation
//     gsap.from('.code-line', {
//         opacity: 0,
//         x: -20,
//         duration: 0.5,
//         stagger: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".code-snippet",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Project cards animation
//     gsap.from('.project-card', {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: "#projects",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Contact info animation
//     gsap.from('.contact-info-item', {
//         opacity: 0,
//         y: 30,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".contact-info-item",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });
// }

// // ===== SKILL ANIMATIONS =====
// function initSkillAnimations() {
//     // Skill items animation
//     gsap.from('.skill-item', {
//         opacity: 0,
//         x: -30,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: "#skills",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Soft skill items animation
//     gsap.from('.soft-skill-item', {
//         opacity: 0,
//         x: 30,
//         duration: 0.8,
//         stagger: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".soft-skills",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Certification items animation
//     gsap.from('.cert-item', {
//         opacity: 0,
//         y: 20,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".certifications",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Progress bar animations
//     $('.skill-item').each(function() {
//         const progressBar = $(this).find('.progress-bar');
//         const progress = progressBar.data('progress');
        
//         gsap.to(progressBar[0], {
//             width: progress + '%',
//             duration: 1.5,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: this,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 toggleActions: "play none none reverse"
//             }
//         });
//     });
// }

// // ===== PROJECT ANIMATIONS =====
// function initProjectAnimations() {
//     // Project card hover effects
//     $('.project-card').each(function() {
//         const card = this;
//         const overlay = $(card).find('.project-overlay')[0];
//         const links = $(card).find('.project-link');
        
//         $(card).on('mouseenter', function() {
//             gsap.to(overlay, {
//                 opacity: 0,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
            
//             gsap.from(links, {
//                 scale: 0,
//                 duration: 0.4,
//                 stagger: 0.1,
//                 ease: "back.out(1.7)",
//                 delay: 0.1
//             });
//         });
        
//         $(card).on('mouseleave', function() {
//             gsap.to(overlay, {
//                 opacity: 10,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });
//     });

//     // Tech tags animation
//     gsap.from('.tech-tag', {
//         opacity: 0,
//         scale: 0,
//         duration: 0.4,
//         stagger: 0.05,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//             trigger: "#projects",
//             start: "top 60%",
//             end: "bottom 40%",
//             toggleActions: "play none none reverse"
//         }
//     });
// }

// // ===== TIMELINE ANIMATIONS =====
// function initTimelineAnimations() {
//     // Timeline line animation
//     gsap.from('.timeline::before', {
//         scaleY: 0,
//         transformOrigin: "top",
//         duration: 1.5,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".timeline",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Timeline items animation
//     gsap.from('.timeline-item', {
//         opacity: 0,
//         x: -50,
//         duration: 0.8,
//         stagger: 0.3,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".timeline",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Timeline dots animation
//     gsap.from('.timeline-dot', {
//         scale: 0,
//         duration: 0.5,
//         stagger: 0.2,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//             trigger: ".timeline",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });
// }

// // ===== CONTACT ANIMATIONS =====
// function initContactAnimations() {
//     // Contact form animation
//     gsap.from('.contact-form', {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//             trigger: ".contact-form",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse"
//         }
//     });

//     // Form input focus animations
//     $('.neon-input').on('focus', function() {
//         gsap.to(this, {
//             scale: 1.02,
//             duration: 0.3,
//             ease: "power2.out"
//         });
//     });

//     $('.neon-input').on('blur', function() {
//         gsap.to(this, {
//             scale: 1,
//             duration: 0.3,
//             ease: "power2.out"
//         });
//     });

//     // Contact form submission
//     $('#contactForm').on('submit', function(e) {
//         e.preventDefault();
        
//         const submitBtn = $(this).find('button[type="submit"]');
//         const btnText = submitBtn.find('.btn-text');
//         const btnLoading = submitBtn.find('.btn-loading');
        
//         // Button loading animation
//         gsap.to(btnText[0], {
//             opacity: 0,
//             duration: 0.3,
//             onComplete: () => {
//                 gsap.to(btnLoading[0], {
//                     opacity: 1,
//                     duration: 0.3
//                 });
//             }
//         });
        
//         // Simulate form submission
//         setTimeout(() => {
//             gsap.to(btnLoading[0], {
//                 opacity: 0,
//                 duration: 0.3,
//                 onComplete: () => {
//                     gsap.to(btnText[0], {
//                         opacity: 1,
//                         duration: 0.3
//                     });
//                 }
//             });
            
//             // Show success message
//             showNotification('Message sent successfully!', 'success');
//             this.reset();
//         }, 2000);
//     });
// }

// // ===== PARTICLE EFFECTS =====
// function initParticleEffects() {
//     // Create floating particles
//     const particleContainer = document.querySelector('.particles-container');
    
//     for (let i = 0; i < 50; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'particle';
//         particle.style.cssText = `
//             position: absolute;
//             width: 2px;
//             height: 2px;
//             background: ${getRandomNeonColor()};
//             border-radius: 50%;
//             pointer-events: none;
//         `;
        
//         // Random position
//         particle.style.left = Math.random() * 100 + '%';
//         particle.style.top = Math.random() * 100 + '%';
        
//         particleContainer.appendChild(particle);
        
//         // Animate particle
//         gsap.to(particle, {
//             y: -100,
//             x: Math.random() * 200 - 100,
//             opacity: 0,
//             duration: Math.random() * 3 + 2,
//             repeat: -1,
//             delay: Math.random() * 2,
//             ease: "none"
//         });
//     }
// }

// // ===== UTILITY FUNCTIONS =====
// function getRandomNeonColor() {
//     const colors = ['#00ffff', '#6614d2ff', '#1d0aeeff', '#6200ffff'];
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// function showNotification(message, type = 'info') {
//     const notification = $(`
//         <div class="notification notification-${type}">
//             <i class="fas fa-check-circle"></i>
//             <span>${message}</span>
//         </div>
//     `);
    
//     $('body').append(notification);
    
//     gsap.from(notification[0], {
//         opacity: 0,
//         y: -50,
//         duration: 0.5,
//         ease: "power2.out"
//     });
    
//     setTimeout(() => {
//         gsap.to(notification[0], {
//             opacity: 0,
//             y: -50,
//             duration: 0.5,
//             ease: "power2.out",
//             onComplete: () => {
//                 notification.remove();
//             }
//         });
//     }, 3000);
// }

// // ===== TESTIMONIALS SLIDER =====
// function initTestimonialsSlider() {
//     let currentTestimonial = 0;
//     const testimonials = $('.testimonial-item');
//     const totalTestimonials = testimonials.length;
    
//     // Hide all except first
//     testimonials.not(':first').hide();
    
//     // Auto-rotate testimonials
//     setInterval(() => {
//         const current = testimonials.eq(currentTestimonial);
//         const next = testimonials.eq((currentTestimonial + 1) % totalTestimonials);
        
//         gsap.to(current[0], {
//             opacity: 0,
//             x: -50,
//             duration: 0.5,
//             ease: "power2.out",
//             onComplete: () => {
//                 current.hide();
//                 next.show();
//                 gsap.from(next[0], {
//                     opacity: 0,
//                     x: 50,
//                     duration: 0.5,
//                     ease: "power2.out"
//                 });
//             }
//         });
        
//         currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
//     }, 5000);
// }

// // ===== BUTTON HOVER EFFECTS =====
// function initButtonEffects() {
//     $('.neon-btn').each(function() {
//         const btn = this;
        
//         $(btn).on('mouseenter', function() {
//             gsap.to(btn, {
//                 scale: 1.05,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });
        
//         $(btn).on('mouseleave', function() {
//             gsap.to(btn, {
//                 scale: 1,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });
//     });
// }

// // ===== SKILL ITEM HOVER EFFECTS =====
// function initSkillHoverEffects() {
//     $('.skill-item').each(function() {
//         const item = this;
//         const icon = $(item).find('.skill-icon')[0];
        
//         $(item).on('mouseenter', function() {
//             gsap.to(icon, {
//                 rotation: 360,
//                 scale: 1.1,
//                 duration: 0.5,
//                 ease: "power2.out"
//             });
//         });
        
//         $(item).on('mouseleave', function() {
//             gsap.to(icon, {
//                 rotation: 0,
//                 scale: 1,
//                 duration: 0.5,
//                 ease: "power2.out"
//             });
//         });
//     });
// }

// // ===== SOCIAL LINK EFFECTS =====
// function initSocialEffects() {
//     $('.social-link').each(function() {
//         const link = this;
        
//         $(link).on('mouseenter', function() {
//             gsap.to(link, {
//                 rotation: 360,
//                 duration: 0.5,
//                 ease: "power2.out"
//             });
//         });
        
//         $(link).on('mouseleave', function() {
//             gsap.to(link, {
//                 rotation: 0,
//                 duration: 0.5,
//                 ease: "power2.out"
//             });
//         });
//     });
// }

// // ===== INITIALIZE ALL EFFECTS =====
// $(document).ready(function() {
//     // Initialize testimonials slider
//     initTestimonialsSlider();
    
//     // Initialize button effects
//     initButtonEffects();
    
//     // Initialize skill hover effects
//     initSkillHoverEffects();
    
//     // Initialize social effects
//     initSocialEffects();
    
//     // Add custom cursor effect
//     initCustomCursor();
// });

// // ===== CUSTOM CURSOR =====
// function initCustomCursor() {
//     const cursor = $('<div class="custom-cursor"></div>');
//     $('body').append(cursor);
    
//     cursor.css({
//         position: 'fixed',
//         width: '20px',
//         height: '20px',
//         background: 'rgba(0, 255, 255, 0.5)',
//         borderRadius: '50%',
//         pointerEvents: 'none',
//         zIndex: '9999',
//         mixBlendMode: 'difference',
//         transition: 'transform 0.1s ease'
//     });
    
//     $(document).on('mousemove', function(e) {
//         gsap.to(cursor[0], {
//             x: e.clientX - 10,
//             y: e.clientY - 10,
//             duration: 0.1,
//             ease: "power2.out"
//         });
//     });
    
//     // Cursor hover effects
//     $('a, button, .neon-btn, .project-card, .skill-item').on('mouseenter', function() {
//         gsap.to(cursor[0], {
//             scale: 2,
//             duration: 0.3,
//             ease: "power2.out"
//         });
//     });
    
//     $('a, button, .neon-btn, .project-card, .skill-item').on('mouseleave', function() {
//         gsap.to(cursor[0], {
//             scale: 1,
//             duration: 0.3,
//             ease: "power2.out"
//         });
//     });
// }

// // ===== PERFORMANCE OPTIMIZATION =====
// // Throttle scroll events
// function throttle(func, limit) {
//     let inThrottle;
//     return function() {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => inThrottle = false, limit);
//         }
//     }
// }

// // Optimize scroll performance
// $(window).on('scroll', throttle(function() {
//     // Scroll-dependent animations here
// }, 16)); // ~60fps

// // ===== ACCESSIBILITY =====
// // Keyboard navigation
// $(document).on('keydown', function(e) {
//     if (e.key === 'Tab') {
//         $('.custom-cursor').hide();
//     }
// });

// $(document).on('mousemove', function() {
//     $('.custom-cursor').show();
// });

// // Reduce motion for users who prefer it
// if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
//     gsap.globalTimeline.timeScale(0.5);
// }

// // ===== ERROR HANDLING =====
// window.addEventListener('error', function(e) {
//     console.error('JavaScript error:', e.error);
// });

// // ===== CONSOLE SIGNATURE =====
// console.log(`
// %c
// ╔══════════════════════════════════════╗
// ║                                      ║
// ║        ANSHUL CHOUHAN PORTFOLIO      ║
// ║        Python Developer             ║
// ║                                      ║
// ║        Built with ❤️ and GSAP        ║
// ║                                      ║
// ╚══════════════════════════════════════╝
// `, 'color: #00ffff; font-family: monospace; font-size: 12px;');

// console.log('%cLooking for a developer? Let\'s connect! 🚀', 'color: #1e90ff; font-size: 16px; font-weight: bold;');

