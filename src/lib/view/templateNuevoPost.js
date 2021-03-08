export const create = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `
  <div class="container p-4">
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <p id="create-title" class="h4">Nueva Publicación</p>

          <form id="channels-form">
            <div class="form-group">
            </div>
            <div class="form-group">
              <textarea id="create-text" rows="3" class="form-control" placeholder="Nueva Publicacion" autofocus></textarea>
            </div>

            <button type="button" class="btn btn-create" id="btn-send-form">
              Crear
            </button>

          </form>
        </div>
      </div>
    </div>
    <!-- Tasks List -->
    <div class="col-md-6" id="channel-container"></div>
  </div>
</div>
     `;
  divCreate.innerHTML = viewCreate;

  const db = firebase.firestore();// var que guarda la data
  const author = firebase.auth().currentUser;
  const userEmail = author.email;
  console.log(userEmail);
  console.log(author, 'holaaa');
  const authorUid = author.uid;
  console.log(authorUid, 'uid del usuario');

  const taskForm = divCreate.querySelector('#btn-send-form');
  console.log(taskForm);
  // const taskForm = document.getElementById("task-form");

  taskForm.addEventListener('click', e => {
    const newText = document.getElementById('create-text').value;
    // db.collection('canales').get().then((item) => {

    db.collection('posts').add({
      Post: newText,
      author: authorUid,
      name: author.displayName,

      // user: {
      //   UserName: userName,
      //   Email: email,
      // Uid: users.Uid,

      // },
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        window.location.href = '#/wall'
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
    // console.log("hola", item)
    // });

    // displayChannels(divChannelCard, db);
  })// se cierra el evento click
  // displayChannels(divChannelCard, db);
  return divCreate;
};

// se cierra la funcion que imprime el elemento div con Html

// export const createChannels = () => {
//   const divCreteChannels = document.createElement('div');
//   const viewCreteChannels = `
//     <div id="crea-channel-arrow">
//     <a class="navbar-brand" href="#/channels">
//     <img src="./assets/left-arrow.png" id="channel-arrow">
//     <p id="text-create">Crea un nuevo canal</p>
//     </a>
//     </div>
//     <img src="" alt="">
//     <div id="Box-channels"></div>
//     <img src="" alt="" id="image-Usuaria">
// `;
//   divCreteChannels.innerHTML = viewCreteChannels;

//   return divCreteChannels;
// };

