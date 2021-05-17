export const logIn = () => {
  const divLogIn = document.createElement('div');
  const viewLogIn = `

  <div class="logIn">
    <div class="head">
      <a class="back" href="#/">
      <img src="./assets/back.png" id="back-icon">
      </a>
      <img id="logo-right" src="./assets/logo-sin-letras.png">
    </div>
    
    <div class="text"><p id="hello-text">¡Hola! Bienvenido otra vez.
      Ingresa tus datos para iniciar sesión.</p>
    </div>
    <div class="email">
      <img src="./assets/e-mail.png" id="email-icon">
      <input type="Email" id="login-email" placeholder="Correo">
    </div>
    <div id="">
    <div class="password">
      <img src="./assets/password.png" id="password-icon">
      <input type="Password" id="login-password" placeholder="Contraseña">
    </div>
    </div>

       <button id="login-buton">Inicio Sesión</button>
    <div class="dont-account">
      <p id="dont-account">¿No tienes una cuenta? <a href="#/signup"><strong>Registrate aquí</strong></a></p>
    </div>
      <br>
  </div>
    <div id="container"></div>
    `;
  divLogIn.innerHTML = viewLogIn;
  const loginForm = divLogIn.querySelector('#login-buton');
  loginForm.addEventListener('click', fbLogin);
  // window.location.href = '#/wall';
  return divLogIn;
};

export const fbLogin = () => {
  console.log('funcion fblogin');
  const logEmail = document.querySelector('#login-email').value;
  const logPassword = document.querySelector('#login-password').value;
  firebase.auth().signInWithEmailAndPassword(logEmail, logPassword)
    .then((user) => {
      console.log({ prueba: user })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user && user.emailVerified === true) {
      console.log('existe usuario activo');
      window.location.href = '#/wall'
    } else {
      // User is signed out
      console.log('no existe usuario activo');
      // ...
    }
  });
};
observer();
