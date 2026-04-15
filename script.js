/* ====================================================
   PORTFOLIO – Hemanth Kumar P U
   Interactive Scripts
   ==================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Navbar scroll effect ----------
    const navbar = document.getElementById('navbar');

    const handleScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ---------- Mobile nav toggle ----------
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.navbar__links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate hamburger to X
        const spans = navToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile nav when clicking a link
    document.querySelectorAll('.navbar__link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // ---------- Scroll reveal ----------
    const revealElements = document.querySelectorAll(
        '.about__heading, .about__bio, .about__image-frame, .education__heading, .education__card'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    // ---------- Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ---------- Typing effect for greeting ----------
    const greeting = document.querySelector('.hero__greeting');
    if (greeting) {
        const text = greeting.textContent;
        greeting.textContent = '';
        greeting.style.visibility = 'visible';

        let i = 0;
        const typeSpeed = 50;

        function typeChar() {
            if (i < text.length) {
                greeting.textContent += text.charAt(i);
                i++;
                setTimeout(typeChar, typeSpeed);
            }
        }

        // Small delay before starting
        setTimeout(typeChar, 800);
    }
});
