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

    <button id="signup-button" href="#/wall" >Crear Cuenta</button>
    <div class="text-signup">
    <p id="text-signup">¿Ya tienes una cuenta? <a href="#/login"><strong>Ingresa aquí</strong></a></p>
    </div>
    <br>
  </div>`;
  divSignUp.innerHTML = viewSignUp;
  const loginForm = divSignUp.querySelector('#signup-button');
  loginForm.addEventListener('click', () => {
    window.location.href = '#/wall';
  });
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

  const db = firebase.firestore();
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential);
      // const userSignUp = firebase.auth().currentUser;

      db.collection('users').add({
        UserName: userName,
        Email: email,
        Uid: userCredential.user.uid,
        
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          window.location.href = '#/wall'
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      verify();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // userSignUp.sendVerificationEmail();
      // alert("Revisa el email de verificación que te enviamos");
    });
};

// <a href="#/wall"><button id="ingreso">Inicio Sesión</button></a>
// const auth = firebase.auth();
export const verify = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
  // email sent
    console.log('Enviando correo');
  }).catch((error) => {
  // An error happened.
  });
}
