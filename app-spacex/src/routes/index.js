
import Home from '../pages/Home';
import Launch from '../pages/Launch';
import Header from '../templates/Header';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/:id': Launch, // Representa un id de lanzamiento, ej: /5eb87cd9ffd86e000604b327
};

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : () => `<h2>Error 404</h2>`;
  content.innerHTML = await render();
};

export default router;