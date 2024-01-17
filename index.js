//Add smooth scroll behaviour and highlight clicked menu.
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle hamburger
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll('#nav-link'.forEach(anchor=>{
    anchor.addEventListener('click',(e)=>{
        e.preventDefault();
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
}))

// document.querySelectorAll('.nav-link').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         // Remove the 'active' class from all nav links
//         document.querySelectorAll('.nav-link').forEach(link => {
//             link.classList.remove('active');
//         });

//         // Add the 'active' class to the clicked nav link
//         this.classList.add('active');

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

