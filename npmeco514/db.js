require("firebase/firestore");
firebase.initializeApp({
    apiKey: 'AIzaSyDxeP9IlRqclOwlMuyNR7ER0rPueEVAVqI',
    authDomain: 'flutterapplication-dbfb7.firebaseapp.com',
    projectId: 'flutterapplication-dbfb7'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

// db.collection("items").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});