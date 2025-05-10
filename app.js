import './src/style.css'
import { renderCobis } from './src/js/cobis.js';
import { renderHome } from './src/js/home.js';

renderVista('home');

// Lógica para manejar la navegación y renderizar el contenido dinámico
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const vista = item.getAttribute('data-vista');
    renderVista(vista);
  });
});

function renderVista(vista) {
  const contenedor = document.getElementById('contenedor-vista');

  // Limpiar el contenedor antes de renderizar una nueva vista
  contenedor.innerHTML = '';

  // Renderizar la vista correspondiente
  if (vista === 'home') {
    renderHome(contenedor);
  } else if (vista === 'cobis') {
    renderCobis(contenedor);
  } else if (vista === 'info') {
    renderInfo(contenedor);
  } else if (vista === 'contacto') {
    renderContacto(contenedor);
  }
}
