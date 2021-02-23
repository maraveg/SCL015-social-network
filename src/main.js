// Este es el punto de entrada de tu aplicacion
import { access } from './lib/view/templateEntrada.js';
// import { signUp } from './lib/view/templateRegistro.js';
// import { logIn } from './lib/view/templateInicioSesion.js';
// import { about } from './lib/view/templateQueEs.js';
// import { navBar } from './lib/view/templateNavegacion.js';
// import { wall } from './lib/view/templateMuro.js';
// import { create } from './lib/view/templateNuevoPost.js';
// import { editPost } from './lib/view/templateEditar.js';
// import { newComment } from './lib/view/templateComentar.js';
// import { menu } from './lib/view/templateMenu.js';
// import { sections } from './lib/view/templateCategorias.js';
// import { profile } from './lib/view/templatePerfil.js';
// import { aside } from './lib/view/templateCostado.js';
// import { meetUs } from './lib/view/templateConocenos.js';
// import { routes } from './lib/view/templateRutas.js';
// import { home } from './lib/view/templateHome.js';
// import { myFunction } from './lib/index.js';
import { changeRoute } from './lib/router.js';
// import { router } from '../lib/router.js';

// document.getElementById('root').appendChild(home()) = menu()

// document.getElementById('root').innerHTML = menu();
// document.getElementById('root').appendChild(access());
// document.getElementById('root').appendChild(signUp());
// document.getElementById('root').appendChild(logIn());
// document.getElementById('root').appendChild(about());
// document.getElementById('root').appendChild(navBar());
// document.getElementById('root').appendChild(wall());
// document.getElementById('root').appendChild(create());
// document.getElementById('root').appendChild(editPost());
// document.getElementById('root').appendChild(newComment());
// document.getElementById('root').appendChild(sections());
// document.getElementById('root').appendChild(profile());
// document.getElementById('root').appendChild(aside());
// document.getElementById('root').appendChild(meetUs());
// document.getElementById('root').appendChild(routes());
// document.getElementById('root').appendChild(home());

// const init = () => {
//   router('login');
//   // window.addEventListener("hashchange", () => {
//   //   myFunction();
//   //   changeRoute(window.location.hash);
//   //   });
// };
// window.addEventListener('load', init);

const init = () => {
  document.getElementById('root').appendChild(access());
  // window.location.href=  "/#"
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);

// window.addEventListener('load', () => {
//   changeRoute(window.location.hash);
// });

// window.addEventListener('hashchange', () => {
//   changeRoute(window.location.hash);
// });
// const init = () => {
//   document.getElementById('root').innerHTML = menu();
//   document.getElementById('root').appendChild(home());
//   window.addEventListener('hashchange', () => {
//     myFunction();
//     console.log(window.location.hash);
//     changeRoute(window.location.hash);
//   });
// };
// window.addEventListener('load', init);
