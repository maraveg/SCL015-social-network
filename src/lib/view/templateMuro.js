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
  db.collection("post").get().then((querySnapshot) => {
    outputData.innerHTML = ''
    querySnapshot.forEach((doc) => {
      outputData.innerHTML += `
    <div class="new-channel-cont">
    <img type="image" class="undraw_img" src="./assets/undraw_universe.png">
    <p id="channel-print" class="new-channel-description">${doc.data().post}</p>
    </div>
    `;
      console.log(doc.data());
    });
  });
}
