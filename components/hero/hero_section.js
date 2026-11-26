const hero_tech_items = [
  {
    sigla: 'JS',
    nombre: 'JavaScript',
    color: '#f7df1e',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M0 0h24v24H0V0zm22.5 19.5c-.2-1.2-.9-2-2.1-2.4-.6-.2-1.3-.2-1.9-.1-1 .2-1.7.8-1.9 1.8-.1.5 0 1 .4 1.3.4.3 1 .4 1.6.3.5-.1.9-.4 1.1-.9.2-.4.1-.9-.2-1.2-.3-.3-.8-.4-1.2-.2-.3.1-.5.4-.5.7 0 .2.1.4.3.5.2.1.4.1.6 0 .2-.1.3-.3.3-.5 0-.1 0-.2-.1-.3-.1-.1-.2-.2-.4-.2-.1 0-.3.1-.3.2 0 .1.1.2.2.2.1 0 .2 0 .2-.1.1 0 .1-.1.1-.2 0-.1-.1-.2-.2-.2-.1 0-.2 0-.2.1M12 5.5c-3.6 0-6 1.7-6 4.5 0 1.4.6 2.5 1.8 3.2-.3.1-.6.3-.8.5-.5.5-.7 1.1-.6 1.8.1.6.5 1.1 1.1 1.4-.2.4-.3.8-.3 1.3 0 1.5 1.2 2.5 3 2.8v-1.2c-1.2-.3-1.8-.8-1.8-1.6 0-.4.1-.7.4-1 .3-.2.6-.3 1-.3.3 0 .6.1.9.3.3.2.5.5.6.9.1.3.1.6.1.9V18h1.2v-2.3c0-.4 0-.8-.1-1.2-.2-.6-.5-1.1-1-1.5-.4-.3-.9-.5-1.4-.6 1.3-.6 2-1.7 2-3.2 0-1.2-.5-2.2-1.4-2.9-.8-.6-1.8-.9-3-.9z"/></svg>',
  },
  {
    sigla: 'Py',
    nombre: 'Python',
    color: '#3776ab',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c-3 0-2.8 1.3-2.8 1.3v1.4h2.9v.4H6.5S4 4.8 4 8c0 0-.3 3.2 2.8 3.2h1.4v-1.9s-.1-2.5 2.5-2.5h2.9s2.4 0 2.4-2.3V3.4S16.4 2 12 2zm-1.6 1.2a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4zM12 22c3 0 2.8-1.3 2.8-1.3v-1.4h-2.9v-.4h5.6s2.5.3 2.5-3c0 0 .3-3.2-2.8-3.2h-1.4v1.9s.1 2.5-2.5 2.5H9.4s-2.4 0-2.4 2.3v1.1S7.6 22 12 22zm1.6-1.2a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z"/></svg>',
  },
  {
    sigla: 'Fl',
    nombre: 'Flask',
    color: '#000000',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/></svg>',
  },
  {
    sigla: 'Io',
    nombre: 'Ionic',
    color: '#3880ff',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 2 12l10 10 10-10L12 2zm0 3.5L18.5 12 12 18.5 5.5 12 12 5.5zm0 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/></svg>',
  },
  {
    sigla: 'GH',
    nombre: 'GitHub Actions',
    color: '#2088ff',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"/></svg>',
  },
  {
    sigla: 'Git',
    nombre: 'Git',
    color: '#f05032',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 11.5 12.5.5a1.5 1.5 0 0 0-2.1 0L8.3 2.6l2.6 2.6a1.8 1.8 0 0 1 2.1 2.9l2.5 2.5a1.8 1.8 0 1 1-1.1 1.1l-2.3-2.3v6.1a1.8 1.8 0 1 1-1.5 0V9.4a1.8 1.8 0 0 1-.9-2.4L7 4.4 1.9 9.5a1.5 1.5 0 0 0 0 2.1l11 11a1.5 1.5 0 0 0 2.1 0l10.5-10.5a1.5 1.5 0 0 0 0-2.1z"/></svg>',
  },
  {
    sigla: 'TS',
    nombre: 'TypeScript',
    color: '#3178c6',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="16" font-size="10" font-family="sans-serif" font-weight="700" text-anchor="middle">TS</text></svg>',
  },
  {
    sigla: 'N',
    nombre: 'Next.js',
    color: '#000000',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><text x="12" y="16" font-size="10" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="currentColor" stroke="none">N</text></svg>',
  },
  {
    sigla: 'V',
    nombre: 'Vue.js',
    color: '#42b883',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4 2 20h4l6-10 6 10h4L12 4z"/></svg>',
  },
  {
    sigla: 'D',
    nombre: 'Django',
    color: '#0c4b33',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><text x="12" y="17" font-size="14" font-family="sans-serif" font-weight="700" text-anchor="middle">D</text></svg>',
  },
  {
    sigla: 'SQL',
    nombre: 'SQL',
    color: '#336791',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
  },
  {
    sigla: 'Rs',
    nombre: 'Rust',
    color: '#dea584',
    svg: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>',
  },
  {
    sigla: 'API',
    nombre: 'API RESTful',
    color: '#0ea5e9',
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/></svg>',
  },
];

function init_hero_section() {
  const hero_section = document.getElementById('hero');
  if (!hero_section) return;

  hero_section.className = 'hero-section hero-layout';
  hero_section.innerHTML = `
    <div class="hero-text">
      <p class="hero-greeting" data-i18n="hero_greeting">Hola, mi nombre es</p>
      <h1 class="hero-name">Manuel Calderón<span class="accent">.</span></h1>
      <h2 class="hero-role" data-i18n="hero_subtitle">Construyo soluciones de software robustas.</h2>
      <p class="hero-description" data-i18n="hero_bio">Analista programador especializado en automatización con Python e Inteligencia Artificial, con certificaciones de Google.</p>
      <div class="hero-social">
        <a class="hero-social-link" href="https://github.com/Manashtov" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"/></svg>
        </a>
        <a class="hero-social-link" href="mailto:mana.calderon@protonmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>
        </a>
      </div>
    </div>
    <div class="hero-tech-grid" id="hero-tech-grid" aria-label="Tecnologías"></div>
  `;

  render_hero_techs();
}

function render_hero_techs() {
  const grid = document.getElementById('hero-tech-grid');
  if (!grid) return;

  hero_tech_items.forEach((tech, index) => {
    const cell = document.createElement('div');
    cell.className = 'hero-tech-cell';
    cell.style.setProperty('--tech-color', tech.color);
    cell.style.setProperty('--cell-delay', `${0.4 + index * 0.1}s`);
    const icon_html = tech.svg
      ? `<span class="hero-tech-icon hero-tech-icon--svg">${tech.svg}</span>`
      : `<span class="hero-tech-icon">${tech.sigla}</span>`;
    cell.innerHTML = `
      ${icon_html}
      <span class="hero-tech-name">${tech.nombre}</span>
    `;
    grid.appendChild(cell);
  });
}

document.addEventListener('DOMContentLoaded', init_hero_section);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { init_hero_section, hero_tech_items };
}