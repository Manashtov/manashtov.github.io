/* 
    Archivo: js/main.js
    Propósito: Lógica general miscelánea e inicializaciones simples.
    Autor: Manashtov
*/
document.addEventListener('DOMContentLoaded', () => {
    // 1. Año dinámico
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    // 2. Lógica del botón Scroll to Top
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', () => {
        // Mostrar el botón si hemos bajado más de 400px
        if (window.scrollY > 400) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});