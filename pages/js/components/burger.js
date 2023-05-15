class Burger {
    constructor() {
        this.burger_btn = document.querySelector(".header__nav-burger");
        this.burger_btn.addEventListener("click", this.toggle_burger);
        this.nav_menu = document.querySelector(".header__nav-list");
    }
    toggle_burger = () => {
        this.burger_btn.classList.toggle("active");
        if (this.burger_btn.classList.contains("active")) {
            this.nav_menu.classList.add("active");
        } else {
            this.nav_menu.classList.remove("active");
        }
    };
}

export default Burger;
