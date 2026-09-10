// Referencias a elementos del DOM
const alternarMenu = document.getElementById('alternarMenu');
const menuNavegacion = document.getElementById('menuNavegacion');
const botonIdioma = document.getElementById('botonIdioma');

// Control de menú de navegación
if (alternarMenu && menuNavegacion) {
    alternarMenu.addEventListener('click', () => {
        if (menuNavegacion.style.display === 'none') {
            menuNavegacion.style.display = 'flex';
        } else {
            menuNavegacion.style.display = 'none';
        }
    });
}

// Control de cambio de idioma (Español / Inglés)
let idiomaActual = 'es';

if (botonIdioma) {
    botonIdioma.addEventListener('click', () => {
        const elementosTraducibles = document.querySelectorAll('[data-es][data-en]');
        
        if (idiomaActual === 'es') {
            elementosTraducibles.forEach(el => {
                el.textContent = el.getAttribute('data-en');
            });
            botonIdioma.textContent = 'ES';
            idiomaActual = 'en';
        } else {
            elementosTraducibles.forEach(el => {
                el.textContent = el.getAttribute('data-es');
            });
            botonIdioma.textContent = 'EN';
            idiomaActual = 'es';
        }
    });
}
