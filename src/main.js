import { access } from './lib/view/templateEntrada.js';
import { changeRoute } from './lib/router.js';

const init = () => {
  document.getElementById('root').appendChild(access());
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);
