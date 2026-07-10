const menuButton = document.querySelector(".menu-toggle")
const navBar = document.querySelector(".navBar")


function toggleMenu() {
    menuButton.classList.toggle("active")
    navBar.classList.toggle("active")
}

menuButton.addEventListener("click", toggleMenu)

