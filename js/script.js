const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const body = document.body;

// Función global para alternar estados del menú
const toggleMenu = () => {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open"); // Bloquea el scroll del fondo
};

// Función para cerrar el menú por completo
const closeMenu = () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
};

/** ---------- Eventos ---------- */
menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

// Cerrar automáticamente al hacer click en cualquier enlace interno
const mobileLinks = document.querySelectorAll(".mobile-menu a");
mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});