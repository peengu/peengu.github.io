// hamburger menu
const burger = document.querySelector("#burger-menu")
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show")
    });
});
