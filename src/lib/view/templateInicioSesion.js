export const logIn = () => {
  const divLogIn = document.createElement('div');
  const viewLogIn = `
    <input type="image" id="BotonVolver" class="back" src="./assets/logo.png">
    <div id="back-logo">
    <img src="img/logo.png" alt="Petiperros-Logo">
    </div>
    <p>¡Hola! Bienvenido otra vez.
    Ingresa tus datos para iniciar sesión.</p>
    <div id="email-icon">
      <img src="" alt="">
      <input type="Email" id="email" placeholder="Correo">
    </div>
    <div id="password-icon">
      <img src="" alt="">
      <input type="Password" id="password" placeholder="Contraseña">
      </div>

    <button id="ingreso">Inicio Sesión</button>
    <p>¿No tienes una cuenta? <a href="#/signup"><strong>Registrate aquí</strong></a></p>
    `;
  divLogIn.innerHTML = viewLogIn;
  const loginForm = divLogIn.querySelector('#ingreso');
  loginForm.addEventListener('click', () => {
    window.location.href = '#/wall';
  });
  return divLogIn;
};

export const createAccount = () => {
  
  let email = document.querySelector('#text-mail').value;
  let password = document.querySelector('#text-password').value;  
  let region = document.querySelector('#region').value;
  console.log(region)
  let city = document.querySelector('#city').value;
  console.log(city)
  console.log(event)
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential)
      // const signUp = firebase.auth().currentUser;
      // signUp.updateProfile({
      //     displayName: firstName, lastName
      // })
      // signUp.sendVerificationEmail();
      // alert("Revisa el email de verificación que te enviamos");
      // window.location.href = "";
    }
    )
}
// <a href="#/wall"><button id="ingreso">Inicio Sesión</button></a>
