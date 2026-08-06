// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});



// ANIMATION TRANSISITON BETWEEN IMAGES IN THE FRONT PAGE
const slides = document.querySelectorAll('.hero-slide');
let current = 0;

if (slides.length > 0) {
    slides[current].classList.add('active');

    if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setInterval(() => {
            const next = (current + 1) % slides.length;
            slides[next].classList.add('active');
            slides[current].classList.remove('active');
            current = next;
        }, 5000);
    }
}






// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(212, 84, 59, 0.98)';
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.25)';
        } else {
            navbar.style.background = 'rgba(212, 84, 59, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        }
    });
}

// Add fade-in animation on scroll for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section:not(.hero)').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
}

// Product cards hover effect enhancement
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Log page load
console.log('Toyo Specialty Coffee + Matcha website loaded successfully!');
