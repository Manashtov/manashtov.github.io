/* 
  Archivo: js/scroll-effects.js
  Propósito: Añade efectos sutiles de fade-in cuando los elementos entran al viewport.
  Autor: Manashtov
*/

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos con la clase fade-in
    const faders = document.querySelectorAll('.fade-in');

    // Configuración del observador: activa cuando el 15% del elemento es visible
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Añadir la clase que desencadena la animación CSS
                entry.target.classList.add('visible');
                // Dejar de observar una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Asignar el observador a cada elemento
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});