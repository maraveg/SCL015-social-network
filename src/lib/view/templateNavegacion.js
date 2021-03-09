export const navBar = () => {
  const divNavBar = document.createElement('div');
  const viewNavBar = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-lightgray">
  <div class="container-fluid navigation-bar">
    <a class="navbar-brand" href="#/wall">

          <div class="head-icons">
              <img id="logo" src="./assets/logo-sin-letras.png">
              <a href="#/wall"><img src="./assets/home.png" id="home-icon"></a><br>
              <a href="#/newpost"><img src="./assets/plus.png" id="plus-icon"></a><br>
          </div>
    
    </a>
    <ul class="navbar-nav">
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <div class="menu-icon">
          <img src="./assets/hamburger-menu.png" id="menu-icon" width="40px">
        </div>
      </a>
      <ul class="dropdown-menu mini" aria-labelledby="navbarDarkDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Blog</a></li>
        <li><a class="dropdown-item" href="#/meet">Conocenos</a></li>
        <li><a class="dropdown-item" href="#/routes">Rutas</a></li>
        <li><a class="dropdown-item" href="#/profile">Perfil</a></li>
        <li><a id="close-sesion" class="dropdown-item" href="#">Salir</a></li>
      </ul>
    </li>
   </ul> 
    
  </div>
</nav>
    `;
  divNavBar.innerHTML = viewNavBar;
  const register = divNavBar.querySelector('#close-sesion');
  register.addEventListener('click', logout);
  return divNavBar;
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
