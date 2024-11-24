// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Initialize Swiper
const testimonialSwiper = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

// Navbar functionality
const navbar = document.getElementById('navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navHeight = navbar.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animate button
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Duke dërguar...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        submitButton.innerHTML = '<i class="fas fa-check"></i> Mesazhi u dërgua!';
        submitButton.classList.add('success');
        
        // Reset form
        setTimeout(() => {
            this.reset();
            submitButton.innerHTML = 'Dërgo Mesazhin';
            submitButton.disabled = false;
            submitButton.classList.remove('success');
        }, 3000);
    }, 2000);
});