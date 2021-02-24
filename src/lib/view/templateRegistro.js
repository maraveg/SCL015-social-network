export const signUp = () => {
  const divSignUp = document.createElement('div');
  const viewSignUp = `
    <div id="back-logo">
    <img class="logo-not-letters" src="./assets/logo-sin-letras.png">
    </div>
    <p>Bienvenido a Patiperros.
    Completa los datos para crear tu cuenta.</p>
    <div id="user-icon">
    <img src="" alt="">
    <input type="text" id="nombre" placeholder="Nombre Usuario">
      <div id="email-icon">
      <img src="" alt="">
      <input type="Email" id="email" placeholder="Correo">
    </div>
    <div id="password-icon">
      <img src="" alt="">
      <input type="Password" id="password" placeholder="Contraseña">
      </div>
    <button id="registro" href="#/wall" >Crear Cuenta</button>
    <p>¿Ya tienes una cuenta? <a href="#/login"><strong>Ingresa aquí</strong></a></p>
    `;
  divSignUp.innerHTML = viewSignUp;
  const loginForm = divSignUp.querySelector('#registro');
  loginForm.addEventListener('click', () => {
    window.location.href = '#/wall';
  });
  return divSignUp;
};
