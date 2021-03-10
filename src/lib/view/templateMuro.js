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
        <div class="new-channel-cont">
        </div>`;
        if (user && user.emailVerified === true) {
        if ((doc.data().author && user.emailVerified === true)) {
        outputData.innerHTML += `
        <div class="icon-pencil">
        <img type="image"  id="pencil" src="./assets/pencil.png">
        <img type="image"  id="trash" src="./assets/trash.png">
        </div>`;

    
      }
      } else {
      // User is signed out
      console.log('no existe usuario activo');
      // ...
      }
     outputData.innerHTML += `
     <div class="container-white">
        <div class="post-head">
        <p id="channel-print-name" >${doc.data().name}</p>
        <p id="channel-print-date" >${doc.data().Date.toDate().toLocaleDateString("es-CL")}</p>
        </div>
        <p id="channel-print" class="new-channel-description">${doc.data().Post}</p>
        <p id="channel-print" class="new-channel-description"> Id de cada post ${doc.id}</p>
        <p id="channel-print" class="new-channel-description"> Id del usuario activo ${doc.data().author}</p>
        <img type="image" class="icon-moon" src="./assets/moon.png">
        <img type="image" class="icon-commentary" src="./assets/commentary.png">
      </div>
        `;
  //       const modifyBtn = outputData.querySelector('#pencil')
  // //      const deleteBtn = outputData.querySelector('#trash')
  //     modifyBtn = outputData.querySelector('#pencil')
  // //      const deleteBtn = outputData.querySelector('#trash')
  //     modifyBtn.addEventListener('click', () => {
  //       erase(doc.id)
  //     });

     // deleteBtn.addEventListener('click', modify(doc.id))
    });
  
  });
}

// export const filtrar = (authorUid, doc.data()) => {
//   const user = firebase.auth().currentUser;
//   let idMatch;

//   if (doc.data().author === user.uid) {
//     idMatch = doc.data();
//   }
//   else {
//     idMatch = doc.data().filter(element => {
//       return element.keys.includes(user.uid);
//     });
//   }

//   return idMatch;

// }





// export const erase = ((id) => {
//   const db = firebase.firestore();
//   db.collection("posts").doc(id).delete().then(() => {
//   console.log("Document successfully deleted!");
// })
//     .catch((error) => {
//   console.error("Error removing document: ", error);
  
// });
// });
