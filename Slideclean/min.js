document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather icons
    feather.replace();

    // Mobile navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Service selection and booking form display
    const serviceCards = document.querySelectorAll('.service-card');
    const bookingSection = document.getElementById('booking');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const service = card.dataset.service;
            bookingSection.classList.remove('hidden');
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form submission and confirmation modal
    const bookingForm = document.getElementById('booking-form');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModalButton = document.getElementById('close-modal');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulating form submission and database storage
        console.log('Storing data in database:', new FormData(bookingForm));

        // Show confirmation modal
        confirmationModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', () => {
        confirmationModal.classList.add('hidden');
        bookingForm.reset();
        bookingSection.classList.add('hidden');
    });

    // Intersection Observer for animations
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
});