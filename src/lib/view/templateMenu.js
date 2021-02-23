export const menu = () => {
  const divMenu = document.createElement("div");
    const viewMenu = `
    </style>
    <nav class="navbar navbar-expand-lg navbar-dark bg-lightgray">
    <div class="container-fluid navigation-bar">
      <a class="navbar-brand" href="#/channels">
        <img src="./assets/logo.png">
      </a>
      <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <div class="profileimg">
                <img src="./assets/user_saraGutierrez.jpg" width="40px" />
              </div>
            </a>
            <ul class="dropdown-menu mini" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#/editprofile">Configurar perfil</a></li>
              <li><a class="dropdown-item" href="#/language">Configurar idioma</a></li>
              <li><a class="dropdown-item" href="#/inbox">Ayuda</a></li>
              <li><a class="dropdown-item" href="#/">Cerrar Sesión</a></li>
            </ul>
          </li>
        </ul>
    </div>
  </nav>
      `;
    divMenu.innerHTML = viewMenu;
    return divMenu;
};