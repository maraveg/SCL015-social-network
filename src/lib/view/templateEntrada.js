export const access = () => {
  const divAccess = document.createElement('div');
  const viewAccess = `
    <h3>Patiperros</h3>
    <section id="entrada">
      <div id="logo">
        <img class="logo" src="./assets/logo.png">
      </div>
        <img class="paisajeAcuarela" src="./assets/letras.lol.png">
      <div id="botones">
        <a href="#/login"><button id="ingreso">INICIO SESION</button></a>
        <a href="#/signup"><button id="ingreso">REGISTRO</button></a>
      </div>
      <div>
      <a href="#/login">Ingresa con</a>
      <input type="image" id="google-button" class="back" src="./assets/logo.png">
        <a href="#/sobre">¿Que es Patiperros?</a>
      </div>
    </section>
    `;
  divAccess.innerHTML = viewAccess;
  return divAccess;
};
