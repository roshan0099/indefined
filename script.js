// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    function closeMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileMenu.classList.remove('show');
        mobileMenu.classList.add('closing');
        
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('closing');
        }, 400);
    }
    
    function openMenu() {
        mobileMenuBtn.classList.add('active');
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.remove('closing');
        
        setTimeout(() => {
            mobileMenu.classList.add('show');
        }, 10);
    }
    
    mobileMenuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('show')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            if (mobileMenu.classList.contains('show')) {
                closeMenu();
            }
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all service cards and other elements
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .about-content');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-black/95');
        navbar.classList.remove('bg-black/90');
    } else {
        navbar.classList.add('bg-black/90');
        navbar.classList.remove('bg-black/95');
    }
});

// Active Navigation Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-light-green');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-light-green');
        }
    });
});

// Particle System
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 20000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000);
}

// Initialize particles on load
document.addEventListener('DOMContentLoaded', createParticles);

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});

// Initialize hero section animations
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.animate-fade-in');
    const heroTitle = document.querySelector('h1');
    const heroParagraph = document.querySelector('.hero-paragraph');
    const heroButtons = document.querySelector('.animate-fade-in .flex');
    
    if (heroTitle && heroSection) {
        const originalText = heroTitle.textContent;
        
        // Hide the title initially
        heroTitle.style.opacity = '0';
        
        // Start typing animation
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 300);
        
        // Show paragraph after typing completes
        setTimeout(() => {
            if (heroParagraph) {
                heroParagraph.classList.add('show');
            }
        }, 3000); // Increased time to account for longer typing
        
        // Show buttons after paragraph appears
        setTimeout(() => {
            if (heroButtons) {
                heroButtons.classList.add('show');
            }
        }, 3700);
    }
});

// Typing Animation for Hero Text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    element.style.opacity = '1';
    
    function type() {
        if (i < text.length) {
            let currentText = text.substring(0, i + 1);
            
            // Add line break after "Digital Excellence"
            currentText = currentText.replace('Digital Excellence', 'Digital Excellence<br>');
            
            // Apply the green styling to "defined" part when we reach it
            if (currentText.includes('Redefined')) {
                currentText = currentText.replace('Redefined', 'Re<span class="text-light-green">defined</span>');
            }
            
            element.innerHTML = currentText;
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Service Card Tilt Effect
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
});

// Loading Screen
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
});

// Cursor Trail Effect
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(74, 124, 89, 0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Hide cursor trail on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.floating-shapes');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.textContent);
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.text-4xl');
    counters.forEach(counter => {
        if (counter.textContent.includes('+')) {
            counterObserver.observe(counter);
        }
    });
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        konamiCode = [];
    }
});

// Performance optimization: Debounce scroll events
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

// Apply debounce to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-based animations here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);
