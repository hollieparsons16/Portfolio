const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const navItems = document.getElementById("nav-items");
const largeNavItems = document.getElementById("large-nav-items")
const header = document.getElementById("top-nav");

navOpen.onclick = () => {
    navOpen.classList.remove("display-block")
    navOpen.classList.add("display-none")
    navClose.classList.add("display-block")
    navClose.classList.remove("display-none")
    navItems.style.display = "flex";
    header.style.height = "100vh";
}

navClose.onclick = () => {
    navOpen.classList.add("display-block")
    navOpen.classList.remove("display-none")
    navClose.classList.remove("display-block")
    navClose.classList.add("display-none")
    navItems.style.display = "none";
    header.style.height = "auto";
}