import { access } from './view/templateEntrada.js';
import { logIn } from './view/templateInicioSesion.js';
import { menu } from './view/templateMenu.js';
import { wall } from './view/templateMuro.js';
import { navBar } from './view/templateNavegacion.js';
import { create } from './view/templateNuevoPost.js';
import { signUp } from './view/templateRegistro.js';

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
      break;
    case '#/wall':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(wall());
      break;
    case '#/newpost':
      containerRoot.appendChild(navBar());
      containerRoot.appendChild(create());
      break;
    case '#/menu':
      containerRoot.appendChild(navBar());
      containerRoot.innerHtml = menu();
      break;
    case '#/meet':
      containerRoot.appendChild(navBar());
      break;
    case '#/editpost':
      containerRoot.appendChild(navBar());
      break;
    case '#/profile':
      containerRoot.appendChild(navBar());
      break;
    case '#/routes':
      containerRoot.appendChild(navBar());
      break;
    default:
      containerRoot.innerHTML = '<h2>No existe :c</h2>';
  }
};
