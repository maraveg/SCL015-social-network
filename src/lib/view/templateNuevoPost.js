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

  const db = firebase.firestore();// data saved
  const author = firebase.auth().currentUser;
  const userEmail = author.email;
  console.log(userEmail);
  console.log(author, 'holaaa');
  const authorUid = author.uid;
  console.log(authorUid, 'uid del usuario');
  const date = new Date();
  const taskForm = divCreate.querySelector('#btn-send-form');
  console.log(taskForm);

  taskForm.addEventListener('click', e => {
    const newText = document.getElementById('create-text').value;

    db.collection('posts').add({
      name: author.displayName,
      Date: date,
      Post: newText,
      author: authorUid,

    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        window.location.href = '#/wall'
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
  return divCreate;
};
