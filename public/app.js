document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Toggle hamburger
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Smooth scroll and highlight clicked menu
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function() {
            // Highlight clicked menu
            navLinks.forEach(link => link.classList.remove('active'));
            anchor.classList.add('active');

            const targetId = anchor.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Close the menu if it's open
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Highlight menu based on section position
    const observerOptions = {
        root: null,
        rootMargin: '-80px 0px -90% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    function greeting() {
        const name = document.getElementById('name').value;
        alert("Thank you, " + name + " for your message.");
    }
});
