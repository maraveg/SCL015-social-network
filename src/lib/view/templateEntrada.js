import { login } from '../index.js';

export const access = () => {
  const divAccess = document.createElement('div');
  const viewAccess = `
 
    <div id="container-enter">
      <div class="logo-letters"><img id="logo-letters" src="./assets/logo-letras.png"></div>
      <div class="img-watercolor"><img id="img-watercolor" src="./assets/img-acuarela.jpg"></div>
      <div id="botones">
        <a href="#/login"><button id="button-logIn">Inicia Sesión</button></a>
        <a href="#/signup"><button id="button-register">Registrate</button></a>
      </div>
      <div>
        <a id="login-google">Ingresa con</a>
        <input type="image" id="button-google" class="back" src="./assets/google.png">
      </div>
    </div>

    <div class="about-us">
    <a href="#/sobre" id="about-us" >¿Que es Patiperros?</a>
    </div>
  
    `;
  divAccess.innerHTML = viewAccess;

  const button = divAccess.querySelector('#login-google');
  button.addEventListener('click', () => {
    login();
  });
  return divAccess;
};
