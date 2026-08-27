// --- SMOOTH SCROLLING FOR NAVIGATION LINKS ---
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

window.addEventListener('load', function() {
    const loader = document.getElementById('site-loader');
    
    // Keeps the loading screen visible for 2 seconds before fading out
    setTimeout(function() {
        loader.classList.add('fade-out');
        setTimeout(function() {
            loader.style.display = 'none';
        }, 300); // Matches the 0.3s CSS transition
    }, 2000); // 2000 milliseconds = 2 seconds
});

// --- HERO SLIDESHOW ANIMATION ---
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        slides[currentSlide].classList.add('active');

        if (slides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000); 
        }
    }
});

// --- MENU PAGE SWITCHER FUNCTION ---
function switchMenuPage(evt, pageId) {
    // Hide all menu panes
    const panes = document.querySelectorAll('.menu-page-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    // Remove active class from all tab buttons
    const buttons = document.querySelectorAll('.menu-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the target menu pane and mark button as active
    document.getElementById(pageId).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- ADD FADE-IN ANIMATION ON SCROLL FOR SECTIONS ---
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

// --- PRODUCT CARDS HOVER EFFECT ENHANCEMENT ---
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// --- LOG PAGE LOAD ---
console.log('Toyo Specialty Coffee + Matcha website loaded successfully!');