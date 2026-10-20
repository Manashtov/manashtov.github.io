const translations = {
    es: {
        nav_about: "Sobre mí",
        nav_skills: "Stack Tecnológico",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_greeting: "Hola, mi nombre es",
        hero_subtitle: "Construyo soluciones de software robustas.",
        hero_bio: "Analista programador especializado en automatización con Python e Inteligencia Artificial, con certificaciones de Google. Construyo software de escritorio, aplicaciones móviles, proyectos con IA y pipelines CI/CD.",
        hero_btn_projects: "Ver mis proyectos",
        hero_btn_github: "Visitar GitHub",
        hero_btn_certs: "Certificados de Google",
        about_title: "Sobre mí",
        about_p1: 'Soy Manuel <strong>"Manashtov"</strong> Calderón, Analista Programador titulado de Duoc UC (2025) y certificado por Google en IT Automation with Python y Google AI Essentials (2026).',
        about_p2: "Me especializo en automatización con Python, desarrollo de software de escritorio por capas, aplicaciones móviles y proyectos que integran IA. Implemento prácticas de Integración y Despliegue Continuo (CI/CD) usando GitHub Actions para asegurar entregas confiables. Me obsesiona la arquitectura limpia y resolver problemas reales con tecnología.",
        about_edu_title: "Educación y Certificaciones",
        edu_1_title: "Analista Programador",
        edu_1_date: "(Titulado 2025)",
        edu_2_title: "Certificación Profesional de Google",
        edu_3_title: "Certificación Profesional de Google",
        verify_cert: "Verificar credencial ↗",
        skill_testing: "Testing & Debugging",
        skill_regex: "Expresiones Regulares",
        skill_ai_chip: "IA",
        skills_title: "Stack Tecnológico",
        skills_intro: "Conjunto de lenguajes, frameworks, herramientas y modelos de inteligencia artificial con los que diseño y construyo soluciones:",
        skills_cat_backend: "Backend & Software",
        skills_cat_frontend: "Frontend & Mobile",
        skills_cat_ai: "IA & Integraciones",
        skills_cat_devops: "DevOps & Flujo de Trabajo",
        skill_rest: "APIs RESTful",
        skill_api_consume: "Consumo de APIs",
        skill_architecture: "Arquitectura por Capas",
        projects_title: "Proyectos Destacados",
        projects_intro: "Proyectos de software automatizados en Python, plataformas web con API REST y aplicaciones móviles.",
        footer_title: "Mantengámonos en contacto",
        footer_desc: "Siempre abierto a nuevos desafíos y oportunidades profesionales.",
        footer_phone: "Teléfono:",
        footer_made: "Diseñado y desarrollado con 💙 por Manashtov — Chile 🇨🇱",
        modal_btn_repo: "Ver Repositorio",
        modal_btn_prev: "← Anterior",
        modal_btn_next: "Siguiente →",
        toast_copied: "✓ Email copiado al portapapeles"
    },
    en: {
        nav_about: "About me",
        nav_skills: "Tech Stack",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_greeting: "Hi, my name is",
        hero_subtitle: "I build robust software solutions.",
        hero_bio: "Programmer Analyst specialised in Python automation and Artificial Intelligence, Google certified. I build desktop software, mobile applications, AI-integrated projects, and CI/CD pipelines.",
        hero_btn_projects: "View my projects",
        hero_btn_github: "Visit GitHub",
        hero_btn_certs: "Google Certificates",
        about_title: "About me",
        about_p1: 'I am Manuel <strong>"Manashtov"</strong> Calderón, graduated Programmer Analyst from Duoc UC (2025) and Google certified in IT Automation with Python and Google AI Essentials (2026).',
        about_p2: "I specialise in Python automation, layered desktop software development, mobile apps, and AI-integrated projects. I implement Continuous Integration and Deployment (CI/CD) practices using GitHub Actions to ensure reliable deliveries. I am obsessed with clean architecture and solving real problems with technology.",
        about_edu_title: "Education & Certifications",
        edu_1_title: "Programmer Analyst",
        edu_1_date: "(Graduated 2025)",
        edu_2_title: "Google Professional Certification",
        edu_3_title: "Google Professional Certification",
        verify_cert: "Verify credential ↗",
        skill_testing: "Testing & Debugging",
        skill_regex: "Regular Expressions",
        skill_ai_chip: "AI",
        skills_title: "Technical Stack",
        skills_intro: "Languages, frameworks, toolsets, and artificial intelligence models I utilise to architect and engineer software solutions:",
        skills_cat_backend: "Backend & Software",
        skills_cat_frontend: "Frontend & Mobile",
        skills_cat_ai: "AI & Integrations",
        skills_cat_devops: "DevOps & Workflow",
        skill_rest: "RESTful APIs",
        skill_api_consume: "API Consumption",
        skill_architecture: "Layered Architecture",
        projects_title: "Featured Projects",
        projects_intro: "Automated Python software, REST API web platforms, and mobile applications.",
        footer_title: "Let's keep in touch",
        footer_desc: "Always open to new challenges and professional opportunities.",
        footer_phone: "Phone:",
        footer_made: "Designed and developed with 💙 by Manashtov — Chile 🇨🇱",
        modal_btn_repo: "View Repository",
        modal_btn_prev: "← Previous",
        modal_btn_next: "Next →",
        toast_copied: "✓ Email copied to clipboard"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    const langIcon = document.getElementById('lang-icon');
    const htmlEl = document.documentElement;
    
    let currentLang = localStorage.getItem('language');

    if (!currentLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.toLowerCase().startsWith('es')) {
            currentLang = 'es';
        } else {
            currentLang = 'en';
        }
    }
    
    function setLanguage(lang) {
        currentLang = lang;
        htmlEl.lang = lang;
        localStorage.setItem('language', lang);
        
        if (lang === 'es') {
            langIcon.innerHTML = `<img src="assets/img/GBP.png" alt="UK Flag" class="lang-flag"> <span>EN</span>`;
        } else {
            langIcon.innerHTML = `<img src="assets/img/CLP.png" alt="Chile Flag" class="lang-flag"> <span>ES</span>`;
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    setLanguage(currentLang);

    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(newLang);
    });
});