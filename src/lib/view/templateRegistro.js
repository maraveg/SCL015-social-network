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
    <input type="text" id="signup-name" placeholder="Nombre Usuario">
      <div id="email-icon">
      <img src="" alt="">
      <input type="Email" id="signup-email" placeholder="Correo">
    </div>
    <div id="password-icon">
      <img src="" alt="">
      <input type="Password" id="signup-password" placeholder="Contraseña">
      </div>
    <button id="signup-button" href="#/wall" >Crear Cuenta</button>
    <p>¿Ya tienes una cuenta? <a href="#/login"><strong>Ingresa aquí</strong></a></p>
    `;
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
  firebase.auth().createUserWithEmailAndPassword(email, password, userName)
    .then((userCredential) => {
      console.log(userCredential);
      // const signUp = firebase.auth().currentUser;
      // signUp.updateProfile({
      //     displayName: firstName, lastName
      // })
      // signUp.sendVerificationEmail();
      // alert("Revisa el email de verificación que te enviamos");
      // window.location.href = "";
    });
};
// <a href="#/wall"><button id="ingreso">Inicio Sesión</button></a>
const auth = firebase.auth();