export const access = () => {
  const divAccess = document.createElement('div');
  const viewAccess = `
    <div id="entrada">
        <img class="logo-letters" src="./assets/logo-letras.png">
        <img class="img-watercolor" src="./assets/img-acuarela.jpg">
      <div id="botones">
        <a href="#/login"><button id="ingreso">INICIO SESION</button></a>
        <a href="#/signup"><button id="ingreso">REGISTRO</button></a>
      </div>
      <div>
      <a href="#/login">Ingresa con</a>
      <input type="image" id="google-button" class="back" src="./assets/logo.png">
        <a href="#/sobre">¿Que es Patiperros?</a>
      </div>
    </div>
    // <div class="fb-like" 
    // data-href="http://localhost:5000/" 
    // data-width="25" 
    // data-layout="standard" 
    // data-action="like" 
    // data-size="small" 
    // data-share="true">
    // </div>
    `;
  divAccess.innerHTML = viewAccess;
//   FB.AppEvents.logPageView();
  
//  <button onclick='FB.AppEvents.logEvent("buttonClicked")'>
//   Click me
//  </button>
  return divAccess;
};
