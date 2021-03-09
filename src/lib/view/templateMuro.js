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
  const outputData = container.querySelector('#container-wall');
  db.collection("posts").orderBy('Date', 'desc').get().then((querySnapshot) => {
    outputData.innerHTML = ''
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      outputData.innerHTML += `
        <div class="new-channel-cont">
        <img type="image" class="icon-pencil" src="./assets/pencil.png">
        <img type="image" class="icon-pencil" src="./assets/trash.png">
        <p id="channel-print" class="new-channel-description">${doc.data().name}</p>
        <p id="channel-print" class="new-channel-description">${doc.data().Date.toDate().toLocaleDateString("es-CL")}</p>
        <p id="channel-print" class="new-channel-description">${doc.data().Post}</p>
        <p id="channel-print" class="new-channel-description">${doc.id}</p>
        <img type="image" class="icon-moon" src="./assets/moon.png">
        <img type="image" class="icon-commentary" src="./assets/commentary.png">
        </div>
    `;
    });
  });
}
