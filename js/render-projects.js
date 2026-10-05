/* 
  Archivo: js/render-projects.js
  Propósito: Renderizado, solución de bug de strings SVG, y Lightbox con flechas y Swipe.
  Autor: Manashtov
*/

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');
    const modalLink = document.getElementById('modal-link');
    const modalClose = document.getElementById('modal-close');
    const thumbsContainer = document.getElementById('modal-thumbnails');
    const galPrev = document.getElementById('gal-prev');
    const galNext = document.getElementById('gal-next');
    const imgContainer = document.querySelector('.gallery-img-container');
    
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lbPrev = document.getElementById('lightbox-prev');
    const lbNext = document.getElementById('lightbox-next');
    
    let currentProjectIndex = 0;
    let currentImageIndex = 0;
    let currentLang = document.documentElement.lang || 'es';

    // SVG Codificado de forma segura para evitar romper el HTML (Solución Bug "Sin imagen")
    const fallbackSVG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23132f4c'/%3E%3Ctext x='50%25' y='50%25' fill='%2366b2ff' font-family='sans-serif' font-size='20' text-anchor='middle' dy='.3em'%3ESin imagen%3C/text%3E%3C/svg%3E";

    function getProjectImages(p) {
        if (Array.isArray(p.images) && p.images.length > 0) return p.images;
        if (p.image) return [p.image];
        return [];
    }

    window.addEventListener('languageChanged', (e) => {
        currentLang = e.detail.lang;
        renderCards();
        if (modal.open) openModal(currentProjectIndex);
    });

    function renderCards() {
        grid.innerHTML = '';
        projectsData.forEach((project, index) => {
            const statusText = project.status[currentLang];
            const isPlaceholder = project.status.es !== "Completado";
            const cardClass = isPlaceholder ? 'project-card card-placeholder' : 'project-card';
            
            const techChips = project.tech.map(t => `<span class="chip chip-small chip-bold">${t}</span>`).join('');
            const images = getProjectImages(project);
            const coverSrc = images.length > 0 ? images[0] : fallbackSVG;

            const card = document.createElement('article');
            card.className = cardClass;
            card.style.userSelect = "none";

            card.innerHTML = `
                <div class="project-image-container">
                    <span class="project-status">${statusText}</span>
                    <img src="${coverSrc}" alt="${project.title}" draggable="false" onerror="this.src='${fallbackSVG}'">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description[currentLang].substring(0, 85)}...</p>
                    <div class="chips-container">${techChips}</div>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(index));
            grid.appendChild(card);
        });
    }

    function openModal(index) {
        currentProjectIndex = index;
        currentImageIndex = 0;
        const p = projectsData[index];
        
        modalTitle.textContent = p.title;
        modalDesc.textContent = p.description[currentLang];
        modalTech.innerHTML = p.tech.map(t => `<span class="chip chip-bold">${t}</span>`).join('');
        
        if (p.link && p.link !== "#") {
            modalLink.href = p.link;
            modalLink.style.display = 'inline-block';
        } else {
            modalLink.style.display = 'none';
        }

        updateGalleryView(p);
        
        document.body.classList.add('no-scroll');
        if (!modal.open) modal.showModal();
    }

    function updateGalleryView(project) {
        const images = getProjectImages(project);
        thumbsContainer.innerHTML = '';

        if (images.length === 0) {
            modalImg.src = fallbackSVG;
            galPrev.style.display = 'none';
            galNext.style.display = 'none';
            lbPrev.style.display = 'none';
            lbNext.style.display = 'none';
            return;
        }

        const hasMultiple = images.length > 1;
        galPrev.style.display = hasMultiple ? 'flex' : 'none';
        galNext.style.display = hasMultiple ? 'flex' : 'none';
        lbPrev.style.display = hasMultiple ? 'flex' : 'none';
        lbNext.style.display = hasMultiple ? 'flex' : 'none';

        modalImg.src = images[currentImageIndex];
        modalImg.onerror = () => { modalImg.src = fallbackSVG; };

        if (hasMultiple) {
            images.forEach((imgUrl, idx) => {
                const thumb = document.createElement('img');
                thumb.src = imgUrl;
                thumb.className = `thumb-item ${idx === currentImageIndex ? 'active' : ''}`;
                thumb.alt = `Miniatura ${idx + 1}`;
                thumb.addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentImageIndex = idx;
                    updateGalleryView(project);
                    if (lightbox.open) lightboxImg.src = images[currentImageIndex];
                });
                thumbsContainer.appendChild(thumb);
            });
        }
    }

    function prevGalleryImage() {
        const images = getProjectImages(projectsData[currentProjectIndex]);
        if (images.length > 1) {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
            updateGalleryView(projectsData[currentProjectIndex]);
            if (lightbox.open) lightboxImg.src = images[currentImageIndex];
        }
    }

    function nextGalleryImage() {
        const images = getProjectImages(projectsData[currentProjectIndex]);
        if (images.length > 1) {
            currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            updateGalleryView(projectsData[currentProjectIndex]);
            if (lightbox.open) lightboxImg.src = images[currentImageIndex];
        }
    }

    // Navegación click (Galería y Lightbox)
    galPrev.addEventListener('click', (e) => { e.stopPropagation(); prevGalleryImage(); });
    galNext.addEventListener('click', (e) => { e.stopPropagation(); nextGalleryImage(); });
    lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevGalleryImage(); });
    lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextGalleryImage(); });

    // Navegación Teclado
    document.addEventListener('keydown', (e) => {
        if (modal.open || lightbox.open) {
            if (e.key === 'ArrowLeft') prevGalleryImage();
            if (e.key === 'ArrowRight') nextGalleryImage();
        }
    });

    // Navegación Swipe
    let touchStartX = 0;
    let touchEndX = 0;
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextGalleryImage();
        if (touchEndX > touchStartX + 50) prevGalleryImage();
    }
    imgContainer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
    imgContainer.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); }, {passive: true});
    lightboxImg.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
    lightboxImg.addEventListener('touchend', e => { touchEndX = e.changedTouches[0].screenX; handleSwipe(); }, {passive: true});

    // Abrir/Cerrar Lightbox
    imgContainer.addEventListener('click', () => {
        const images = getProjectImages(projectsData[currentProjectIndex]);
        if (images.length === 0) return;
        lightboxImg.src = images[currentImageIndex];
        lightbox.showModal();
    });
    lightboxClose.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.close(); });

    // Modales Generales
    modalClose.addEventListener('click', () => modal.close());
    modal.addEventListener('close', () => document.body.classList.remove('no-scroll'));
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.close(); });
    
    document.getElementById('modal-prev').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : projectsData.length - 1;
        openModal(currentProjectIndex);
    });
    document.getElementById('modal-next').addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex < projectsData.length - 1) ? currentProjectIndex + 1 : 0;
        openModal(currentProjectIndex);
    });

    renderCards();
});