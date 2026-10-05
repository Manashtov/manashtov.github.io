/* 
  Archivo: js/projects-data.js
  Propósito: Colección de datos de proyectos ordenados por prioridad técnica.
  Autor: Manashtov
*/

const projectsData = [
    {
        id: 6,
        title: "ComparaCL",
        description: {
            es: "Plataforma web scraper para cotizar y comparar precios de hardware y componentes de PC en Chile. Automatiza la extracción de datos de múltiples tiendas, normalizando la información para servirla a través de una API REST propia hacia una interfaz moderna, categorizada y con filtros avanzados.",
            en: "Web scraper platform to quote and compare PC hardware prices in Chile. Automates data extraction from multiple stores, normalizing information to serve it via a custom REST API to a modern, categorized interface with advanced filters."
        },
        tech: ["Python", "Flask", "Web Scraping", "JavaScript ES6+", "Tailwind CSS", "API REST", "CI/CD", "GitHub Actions"],
        link: "#",
        images: [
            "assets/projects/compara/1.png",
            "assets/projects/compara/2.png",
            "assets/projects/compara/3.png"
        ],
        status: { es: "Completado", en: "Completed" }
    },
    {
        id: 1,
        title: "CLZip",
        description: {
            es: "Herramienta de compresión y archivado multiplataforma, alternativa open source a PeaZip. Diseñada con arquitectura por capas e incluye un instalador profesional con Inno Setup.",
            en: "Cross-platform compression and archiving tool, open-source alternative to PeaZip. Designed with layered architecture and includes a professional Inno Setup installer."
        },
        tech: ["Python 3", "PyQt6", "zipfile", "tarfile", "shutil", "CI/CD", "GitHub Actions", "Inno Setup 6", "PowerShell"],
        link: "https://github.com/Manashtov/CLZip",
        images: [
            "assets/projects/CLZip/clzip.png",
            "assets/projects/CLZip/clzip 2.png",
            "assets/projects/CLZip/clzip 3.png",
            "assets/projects/CLZip/clzip 4.png"
        ],
        status: { es: "Completado", en: "Completed" }
    },
    {
        id: 5,
        title: "MouseHub",
        description: {
            es: "Software de escritorio que emula la funcionalidad de Logitech G Hub para ratones genéricos. Permite el mapeo avanzado de botones, perfiles por aplicación y macros.",
            en: "Desktop software emulating Logitech G Hub functionality for generic mice. Allows advanced button mapping, per-application profiles, and macro execution."
        },
        tech: ["Python", "PyQt6", "pynput", "pywin32", "Hooks Nativos"],
        link: "#",
        images: [
            "assets/projects/mousehub/mouse 1.png",
            "assets/projects/mousehub/mouse 2.png",
            "assets/projects/mousehub/mouse 3.png",
            "assets/projects/mousehub/mouse 4.png"
        ],
        status: { es: "Completado", en: "Completed" }
    },
    {
        id: 2,
        title: "Conver6",
        description: {
            es: "Aplicación de escritorio para conversión de archivos de audio e imagen entre múltiples formatos. Cuenta con un pipeline de procesamiento desacoplado de la UI.",
            en: "Desktop application for audio and image file conversion across multiple formats. Features a processing pipeline decoupled from the UI."
        },
        tech: ["Python 3", "PyQt6", "pydub", "Pillow", "FFmpeg", "CI/CD", "GitHub Actions"],
        link: "https://github.com/Manashtov/conver6",
        images: [
            "assets/projects/conver6/conver6.png",
            "assets/projects/conver6/conver6_2.png"
        ],
        status: { es: "Completado", en: "Completed" }
    },
    {
        id: 3,
        title: "Lira Converter",
        description: {
            es: "Aplicación móvil de conversión de divisas en tiempo real. Se integra con la API REST de ExchangeRate-API para mantener los valores actualizados.",
            en: "Real-time currency conversion mobile app. Integrates with ExchangeRate-API REST service to keep values updated."
        },
        tech: ["Ionic", "Vue.js", "TypeScript", "REST API", "JSON"],
        link: "#",
        images: [
            "assets/projects/lira/lira 1.jpeg",
            "assets/projects/lira/lira 2.jpeg",
            "assets/projects/lira/lira 3.jpeg",
            "assets/projects/lira/lira 4.jpeg"
        ],
        status: { es: "Completado", en: "Completed" }
    },
    {
        id: 4,
        title: "Conversor de Temperatura",
        description: {
            es: "Aplicación móvil rápida y eficiente para la conversión instantánea entre diversas escalas térmicas (Celsius, Fahrenheit, Kelvin y Rankine).",
            en: "Fast and efficient mobile application for instant conversion between various thermal scales (Celsius, Fahrenheit, Kelvin, and Rankine)."
        },
        tech: ["Ionic", "Vue.js", "TypeScript"],
        link: "#",
        images: [
            "assets/projects/temp/temp 1.jpeg",
            "assets/projects/temp/temp 2.jpeg",
            "assets/projects/temp/temp 3.jpeg"
        ],
        status: { es: "Completado", en: "Completed" }
    }
];