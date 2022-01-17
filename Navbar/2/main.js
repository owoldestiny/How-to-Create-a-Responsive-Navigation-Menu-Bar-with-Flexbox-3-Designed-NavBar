const burgerMenu = document.getElementById("burger");
const navberMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navberMenu.classList.toggle("active");

    if (navberMenu.classList.contains("active")) {
        navberMenu.style.maxHeight = navberMenu.scrollHeight + "px";
    } else {
        navberMenu.removeAttribute("style");
    }
})