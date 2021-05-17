export const signUp = () => {
  const divSignUp = document.createElement('div');
  const viewSignUp = `
  <div class="signUp">
    <div class="head">
      <a class="back" href="#/">
      <img src="./assets/back.png" id="back-icon">
      </a>
      <img id="logo-right" src="./assets/logo-sin-letras.png">
    </div>
    <div class="text"><p id="welcome-text">Bienvenido a Patiperros. 
    Completa tus datos para crear tu cuenta.</p></div>
  
    <div class="user">
      <img src="./assets/user.png" id="user-icon">
      <input type="user" id="signup-name" placeholder="Usuario">
    </div>
    <div class="email-sign">
      <img src="./assets/e-mail.png" id="email-icon">
      <input type="Email" id="signup-email" placeholder="Correo">
    </div>
    <div class="password-sign">
      <img src="./assets/password.png" id="password-icon">
      <input type="Password" id="signup-password" placeholder="Contraseña">
    </div>

      <button id="signup-button"  >Crear Cuenta</button>
    <div class="text-signup">
      <p id="text-signup">¿Ya tienes una cuenta? <a href="#/login"><strong>Ingresa aquí</strong></a></p>
    </div>
    <br>
  </div>`;
  divSignUp.innerHTML = viewSignUp;
  const register = divSignUp.querySelector('#signup-button');
  register.addEventListener('click', createAccount);
  return divSignUp;
};

export const createAccount = () => {
  const userName = document.querySelector('#signup-name').value;
  const email = document.querySelector('#signup-email').value;
  const password = document.querySelector('#signup-password').value;

  console.log(userName);
  console.log(event);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      user.updateProfile({
        // componentes save here
        displayName: userName,

      }).then(function() {
        alert(userName, 'Se muestra');
        verify();
        console.log(user);
      }, function(error) {
        console.log(error);
      });
    }, function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        Alert('La contraseña es muy corta');
      } else if (errorCode == 'auth/invalid-email') {
        alert('El correo ingresado no es valido')
      } else {
        console.log(errorMessage);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const verify = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    // email sent
    alert( 'Revisa tu correo para activar tu cuenta');
    console.log('Enviando correo');
  }).catch((error) => {
    // An error happened.
  });
};
