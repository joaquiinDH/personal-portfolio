const menuButton = document.querySelector(".menu-toggle")
const navBar = document.querySelector(".navBar")


function toggleMenu() {
    menuButton.classList.toggle("active")
    navBar.classList.toggle("active")
}

menuButton.addEventListener("click", toggleMenu)

const proyectos = [
    {
        titulo: "Calculadora",
        descripcion: "Una web de calculadora que hice usando html, css y JavaScript."
    },
    {
        titulo: "To-Do List",
        descripcion: "Una web sobre una To-Do List con funcion de agregar, eliminar y editar las notas. Hecha con HTML, CSS y JavaScript."
    },
    {
        titulo: "Carrito",
        descripcion: "Simulacion de carrito de compras de una web de compraventa. Hecho con HTML, CSS y LocalStorage en JavaScript."
    }
];

const proyectosContenedor = document.querySelector(".proyectos-lista")
let varibleHTML = ""

proyectos.forEach(
    function(proyecto) {
        varibleHTML += `<article><h3>${proyecto.titulo}</h3><p>${proyecto.descripcion}</p></article>`
    }
)

proyectosContenedor.innerHTML = varibleHTML

