const burger = document.querySelector(".header__nav-burger");
const nav = document.querySelector(".header__nav");
const nav_menu = document.querySelector(".header__nav-list");

const toggle_burger = () => {
    burger.classList.toggle("active");
    if (burger.classList.contains("active")) {
        nav_menu.classList.add("active");
    } else {
        nav_menu.classList.remove("active");
    }
};

burger.addEventListener("click", toggle_burger);
