export const wall = () => {
  const divWall = document.createElement('div');
  const viewWall = `
     <div id="container-wall">
     </div>
    `;
  divWall.innerHTML = viewWall;
  const db = firebase.firestore();

  displayPost(divWall, db)
  return divWall;
};

const displayPost = (container, db) => {
  const user = firebase.auth().currentUser;
console.log(user, 'array user');
  const outputData = container.querySelector('#container-wall');
  db.collection("posts").orderBy('Date', 'desc').get().then((querySnapshot) => {
    outputData.innerHTML = ''
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      outputData.innerHTML += `
    <div class="new-channel-cont">`;
      if (user && user.emailVerified === true) {
        if ((doc.data().author && user.emailVerified === true)) {
        outputData.innerHTML += `<img type="image" class="icon-pencil" src="./assets/pencil.png">`;
      }
      } else {
      // User is signed out
      console.log('no existe usuario activo');
      // ...
    }
     outputData.innerHTML += `<p id="channel-print" class="new-channel-description">${doc.data().name}</p>
    <p id="channel-print" class="new-channel-description">${doc.data().Date.toDate().toLocaleDateString("es-CL")}</p>
    <p id="channel-print" class="new-channel-description">${doc.data().Post}</p>
    <p id="channel-print" class="new-channel-description"> Id de cada post ${doc.id}</p>
    <p id="channel-print" class="new-channel-description"> Id del usuario activo ${doc.data().author}</p>
    <img type="image" class="icon-moon" src="./assets/moon.png">
    <img type="image" class="icon-commentary" src="./assets/commentary.png">
    </div>
    `;
    });
  });
}
