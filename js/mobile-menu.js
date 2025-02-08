const buttonEl = document.querySelector(".button-mobile");
const mobileMenuEl = document.querySelector(".mobile-menu");
const btnCloseEl = document.querySelector(".mobile-menu__button");

btnCloseEl.addEventListener("click", onCloseMobileMenu)
buttonEl.addEventListener("click", onOpenMobileMenu);

function onOpenMobileMenu() {
    mobileMenuEl.classList.toggle("is-open");
};

function onCloseMobileMenu() {
    mobileMenuEl.classList.toggle("is-open");
}