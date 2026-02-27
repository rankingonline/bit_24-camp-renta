/**
 * main.js - Lógica e interacciones para CampRenta
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Efecto Scroll en Navbar
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scroll para Enlaces Internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Altura de la navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Pequeño efecto dinámico al pasar el cursor sobre las situaciones
    const cards = document.querySelectorAll('.situacion-item');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(59, 130, 246, 0.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255, 255, 255, 0.1)'; // vuelve a --glass-border
        });
    });
    // 4. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');

            // Close all items first (optional: if you want only 1 open at a time)
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.ph-plus, .ph-x').classList.replace('ph-x', 'ph-plus');
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const icon = item.querySelector('.ph-plus');
                if (icon) icon.classList.replace('ph-plus', 'ph-x');
            }
        });
    });

});
