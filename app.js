document.addEventListener('DOMContentLoaded', ()=>{
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.getElementById("nav-menu");

    // Toggle hamburger
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Smooth scroll and highlight clicked menu
    const navLinks = document.querySelectorAll('.nav-link');
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


    function greeting(){
        const name =document.getElementById('name').value;
        alert("Thank you, " + name + " for your message.")
    }
})