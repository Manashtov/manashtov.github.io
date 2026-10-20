document.addEventListener('DOMContentLoaded', () => {
    // 1. Año dinámico
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    // 2. Lógica del botón Scroll to Top
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', () => {
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

    // 3. Lógica del Menú Hamburguesa Móvil
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');
    const navItems = document.querySelectorAll('.nav-item');

    function closeMobileMenu() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    if (menuToggle && navMenu && navOverlay) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active', isOpen);
            navOverlay.classList.toggle('active', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
        });

        navOverlay.addEventListener('click', closeMobileMenu);
        navItems.forEach(item => item.addEventListener('click', closeMobileMenu));
    }

    // 4. Animación de Nieve en el Background (Modo Oscuro y Modo Claro)
    const canvas = document.getElementById('snow-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Cantidad de copos adaptada al tamaño de pantalla para cuidar el rendimiento
        const flakeCount = window.innerWidth < 768 ? 45 : 90;
        const snowflakes = [];

        function createFlake() {
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2.6 + 1,
                speedY: Math.random() * 0.9 + 0.35,
                speedX: Math.random() * 0.6 - 0.3,
                opacity: Math.random() * 0.55 + 0.25,
                swing: Math.random() * Math.PI * 2,
                swingSpeed: Math.random() * 0.02 + 0.005
            };
        }

        for (let i = 0; i < flakeCount; i++) {
            snowflakes.push(createFlake());
        }

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        function drawSnow() {
            ctx.clearRect(0, 0, width, height);
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';

            for (let i = 0; i < snowflakes.length; i++) {
                const f = snowflakes[i];
                f.swing += f.swingSpeed;
                f.y += f.speedY;
                f.x += f.speedX + Math.sin(f.swing) * 0.3;

                // Reiniciar el copo cuando sale por abajo o por los lados
                if (f.y > height + 5) {
                    f.y = -5;
                    f.x = Math.random() * width;
                }
                if (f.x > width + 5) f.x = -5;
                if (f.x < -5) f.x = width + 5;

                ctx.beginPath();
                ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);

                // Color adaptable: Blanco hielo en modo oscuro / Azul suave en modo claro
                if (isLight) {
                    ctx.fillStyle = `rgba(51, 153, 255, ${f.opacity * 0.75})`;
                } else {
                    ctx.fillStyle = `rgba(227, 242, 253, ${f.opacity})`;
                }

                ctx.fill();
            }

            requestAnimationFrame(drawSnow);
        }

        drawSnow();
    }
});