export const logIn = () => {
  const divLogIn = document.createElement('div');
  const viewLogIn = `
    <div class="logIn">
    <input type="image" id="back-icon" class="back" src="./assets/back.png">
    <img id="logo-right" src="./assets/logo-sin-letras.png">
    </div>
    <p id="hello-text">¡Hola! Bienvenido otra vez.
    Ingresa tus datos para iniciar sesión.</p>
    <div id="email-icon">
      <img src="" alt="">
      <input type="Email" id="login-email" placeholder="Correo">
    </div>
    <div id="password-icon">
      <img src="" alt="">
      <input type="Password" id="login-password" placeholder="Contraseña">
      </div>

    <button id="login-buton">Inicio Sesión</button>
    <p id="dont-account">¿No tienes una cuenta? <a href="#/signup"><strong>Registrate aquí</strong></a></p>
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
  const logEmail = document.querySelector('#login-email').value;
  const logPassword = document.querySelector('#login-password').value;
  firebase.auth().signInWithEmailAndPassword(logEmail, logPassword)
    // .then((user) => {
    //   console.log(user);
    // // Signed in
    // // ...
    // })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const observer = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('existe usuario activo');
      console.log(user);
      logged(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const displayName = user.displayName;
      const email = user.email;
      console.log('**************');
      console.log(user.emailVerified);
      console.log('**************');

      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      // User is signed out
      console.log('no existe usuario activo');
      // ...
    }
  });
};
observer();

export const logged = (user) => {
  const divContainer = document.getElementById('container');
  if (user.emailVerified) {
    const viewContainer = `
    <p>¡Bienvenido!</p>
    <button id="logout-buton">Cerrar Sesión</button>
    `;
    divContainer.innerHTML = viewContainer;
  }
  const logoutClick = divContainer.querySelector('#logout-buton');
  logoutClick.addEventListener('click', logout);
  return divContainer;
};

export const logout = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('Saliendo...');
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
      console.log(error);
    });
};
// <a href="#/wall"><button id="ingreso">Inicio Sesión</button></a>
