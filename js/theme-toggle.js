/* 
  Archivo: js/theme-toggle.js
  Propósito: Detección automática y control del modo claro/oscuro.
  Autor: Manashtov
*/

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');
    const htmlEl = document.documentElement;

    // 1. Detectar preferencia del sistema operativo
    const systemThemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Obtener tema guardado por el usuario (si existe)
    let currentTheme = localStorage.getItem('theme');

    // Si el usuario nunca ha tocado el botón, usamos el tema de su PC
    if (!currentTheme) {
        currentTheme = systemThemeMedia.matches ? 'dark' : 'light';
    }

    // Función para aplicar visualmente el tema
    function applyTheme(theme) {
        htmlEl.setAttribute('data-theme', theme);
        if (theme === 'light') {
            iconMoon.classList.add('hidden');
            iconSun.classList.remove('hidden');
        } else {
            iconSun.classList.add('hidden');
            iconMoon.classList.remove('hidden');
        }
    }

    // Aplicar al cargar
    applyTheme(currentTheme);

    // 2. Evento manual (cuando el usuario hace clic en el botón)
    themeBtn.addEventListener('click', () => {
        const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Guardamos su preferencia manual
    });

    // 3. Reaccionar en tiempo real si el PC del usuario cambia de tema
    systemThemeMedia.addEventListener('change', (e) => {
        // Solo cambiamos automáticamente si el usuario NO ha fijado un tema manual
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
});