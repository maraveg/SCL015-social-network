export const create = () => {
  const divCreate = document.createElement('div');
  const viewCreate = `
    <p>Nuevo Posteo</p>
     `;
  divCreate.innerHTML = viewCreate;
  return divCreate;
};

const db = firebase.firestore();// var que guarda la data

const taskForm = divCreateChannelCard.querySelector('#btn-send-form');
console.log(taskForm);
//const taskForm = document.getElementById("task-form");

taskForm.addEventListener('click', e => {
  const title = document.getElementById('channel-title').value;
  const description = document.getElementById('channel-description').value;

  // db.collection('canales').get().then((item) => {

  db.collection("channels").add({
    Title: title,
    Description: description})
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      window.location.href = '#/channels'
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  // console.log("hola", item)
  // });

  // displayChannels(divChannelCard, db);

}) // se cierra el evento click
//displayChannels(divChannelCard, db);
return divCreateChannelCard;
};// se cierra la funcion que imprime el elemento div con Html




export const createChannels = () => {
const divCreteChannels = document.createElement("div");
const viewCreteChannels = `
    <div id="crea-channel-arrow">
    <a class="navbar-brand" href="#/channels">
    <img src="./assets/left-arrow.png" id="channel-arrow">
    <p id="text-create">Crea un nuevo canal</p>
    </a>
    </div>
    <img src="" alt="">
    <div id="Box-channels"></div>
    <img src="" alt="" id="image-Usuaria">
`;
divCreteChannels.innerHTML = viewCreteChannels;

return divCreteChannels;
};