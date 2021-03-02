export const navBar = () => {
  const divNavBar = document.createElement('div');
  const viewNavBar = `
<style>
.navbar-nav .dropdown-menu {
  position: absolute;
}

.profileimg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
  /* commented for demo
  float: left;
  margin-left: 125px;
  margin-top: 20px;
  */
  
  /*for demo*/
  display:inline-block;
  vertical-align:middle;
}
.profileimg img{
  width:100%;
  height: 100%;
}
.navigation-bar .dropdown-toggle::after {
  display: none;
}
.navigation-bar .navbar-brand img {
  width: 100%;
}
.bg-lightgray {
  background-color: #fafafa;
}
.navbar-brand {
  width: 60%;
}
</style>
  <nav class="navbar navbar-expand-lg navbar-dark bg-lightgray">
  <div class="container-fluid navigation-bar">
    <a class="navbar-brand" href="#">
    <div id="container-wall">
  <div class="head-icons">
      <img id="logo" src="./assets/logo-sin-letras.png">
      <a href="#/acces"><img src="./assets/home.png" id="home-icon"></a><br>
      <a href="#/acces"><img src="./assets/plus.png" id="plus-icon"></a><br>
      <a href="#/acces"><img src="./assets/hamburger-menu.png" id="menu-icon"></a><br>
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDarkDropdownMenuLink">
          <li><a class="dropdown-item" href="#">Blog</a></li>
          <li><a class="dropdown-item" href="#/meet">Conocenos</a></li>
          <li><a class="dropdown-item" href="#/routes">Rutas</a></li>
          <li><a class="dropdown-item" href="#/profile">Perfil</a></li>
          <li><a class="dropdown-item" href="#">Salir</a></li>
        </ul>
      </li>
    </ul> 
  </div>
  
    </a>
    
  </div>
</nav>
    `;
  divNavBar.innerHTML = viewNavBar;
  return divNavBar;
};

