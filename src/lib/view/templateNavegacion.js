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
      <img src="./assets/logo.png" />
    </a>
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="profileimg">
              <img src="https://cdn.pixabay.com/photo/2017/10/11/08/02/phone-2840244_1280.jpg" width="40px" />
            </div>
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
</nav>
    `;
  divNavBar.innerHTML = viewNavBar;
  return divNavBar;
};
