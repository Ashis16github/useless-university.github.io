var mob = document.querySelector(".mobile-navbar-btn");
const nav_header=document.querySelector(".header");
const toggleNavbar=()=>{
    nav_header.classList.toggle("active");
};
mob.addEventListener("click",()=> toggleNavbar());