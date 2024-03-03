const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Smooth scroll and highlight clicked menu
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Highlight clicked menu
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });

        this.classList.add('active');

        // Close the menu if it's open
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


function greeting(){
    const name =document.getElementById('name').value;
    alert("Thank you, " + name + " for your message")
}