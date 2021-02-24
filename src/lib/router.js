import { meetUs } from '../lib/view/templateConocenos.js';
import { aside } from '../lib/view/templateCostado.js';
import { editPost } from '../lib/view/templateEditar.js';
import { access } from '../lib/view/templateEntrada.js';
// import { home } from '../view/templateHome.js';
import { logIn } from '../lib/view/templateInicioSesion.js';
import { menu } from './view/templateMenu.js';
import { wall } from '../lib/view/templateMuro.js';
import { navBar } from '../lib/view/templateNavegacion.js';
import { create } from '../lib/view/templateNuevoPost.js';
import { profile } from '../lib/view/templatePerfil.js';
import { about } from '../lib/view/templateQueEs.js';
import { signUp } from '../lib/view/templateRegistro.js';
import { routes } from '../lib/view/templateRutas.js';
// import { timeline } from '../view/templateTimeline.js';

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } else if (hash === '#/login') {
    return showTemplate(hash);
  } else if (hash === '#/signup') {
    return showTemplate(hash);
  } else if (hash === '#/wall') {
    return showTemplate(hash);
  } else if (hash === '#/nav') {
    return showTemplate(hash);
  } else if (hash === '#/newpost') {
    return showTemplate(hash);
  } else if (hash === '#/about') {
    return showTemplate(hash);
  } else if (hash === '#/aside') {
    return showTemplate(hash);
  } else if (hash === '#/menu') {
    return showTemplate(hash);
  } else if (hash === '#/meet') {
    return showTemplate(hash);
  } else if (hash === '#/editpost') {
    return showTemplate(hash);
  } else if (hash === '#/profile') {
    return showTemplate(hash);
  } else if (hash === '#/routes') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '':
      containerRoot.appendChild(access());
      break;
    case '#/':
      containerRoot.appendChild(access());
      break;
    case '#/login':
      containerRoot.appendChild(logIn());
      break;
    case '#/signup':
      containerRoot.appendChild(signUp());
      break;
    case '#/about':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(about());
      containerRoot.appendChild(aside());
      break;
    case '#/wall':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(wall());
      containerRoot.appendChild(aside());
      break;
    case '#/newpost':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(create());
      containerRoot.appendChild(aside());
      break;
    case '#/menu':
      containerRoot.appendChild(navBar());
      containerRoot.innerHtml = menu();
      break;
    case '#/meet':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(meetUs());
      break;
    case '#/editpost':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(editPost());
      break;
    case '#/profile':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(profile());
      break;
    case '#/routes':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(routes());
      break;
    default:
      containerRoot.innerHTML = '<h2>No existe :c</h2>';
  }
};
