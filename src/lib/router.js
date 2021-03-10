//import { meetUs } from './view/templateConocenos.js';
//import { aside } from './view/templateCostado.js';
//import { editPost } from './view/templateEditar.js';
import { access } from './view/templateEntrada.js';
// import { home } from '../view/templateHome.js';
import { logIn } from './view/templateInicioSesion.js';
import { menu } from './view/templateMenu.js';
import { wall } from './view/templateMuro.js';
import { navBar } from './view/templateNavegacion.js';
import { create } from './view/templateNuevoPost.js';
//import { profile } from './view/templatePerfil.js';
//import { about } from './view/templateQueEs.js';
import { signUp } from './view/templateRegistro.js';
//import { routes } from './view/templateRutas.js';
// import { timeline } from '../view/templateTimeline.js';

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/login') {
    return showTemplate(hash);
  } if (hash === '#/signup') {
    return showTemplate(hash);
  } if (hash === '#/wall') {
    return showTemplate(hash);
  } if (hash === '#/nav') {
    return showTemplate(hash);
  } if (hash === '#/newpost') {
    return showTemplate(hash);
  } if (hash === '#/about') {
    return showTemplate(hash);
  } if (hash === '#/aside') {
    return showTemplate(hash);
  } if (hash === '#/menu') {
    return showTemplate(hash);
  } if (hash === '#/meet') {
    return showTemplate(hash);
  } if (hash === '#/editpost') {
    return showTemplate(hash);
  } if (hash === '#/profile') {
    return showTemplate(hash);
  } if (hash === '#/routes') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
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
