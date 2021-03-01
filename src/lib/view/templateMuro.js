export const wall = () => {
  const divWall = document.createElement('div');
  const viewWall = `
     <div class="container-wall">
     
     </div>
    `;
  divWall.innerHTML = viewWall;
  return divWall;
};
const displayChannels = (container, db) => {
  const outputData = container.querySelector('#channel-container');
  db.collection("channels").get().then((querySnapshot) => {
    outputData.innerHTML = '';
    querySnapshot.forEach((doc) => {
      outputData.innerHTML += `
    <div class="new-channel-cont">
    <img type="image" class="undraw_img" src="./assets/undraw_universe.png">
    <a href="#/posts" class="new-channel-tittle">#${doc.data().Title}</a>
    <p id="channel-print" class="new-channel-description">${doc.data().Description}</p>
  </div>
    `;
      console.log(doc.data());
    });
  });
};
