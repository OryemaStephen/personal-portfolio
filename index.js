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

function greeting(){
    const name =document.getElementById('name').value;
    alert("Thank you, " + name + " for your message")
}