var express = require('express');
var router = express.Router();
var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDxeP9IlRqclOwlMuyNR7ER0rPueEVAVqI",
  authDomain: "flutterapplication-dbfb7.firebaseapp.com",
  databaseURL: "https://flutterapplication-dbfb7.firebaseio.com",
  projectId: "flutterapplication-dbfb7",
  storageBucket: "flutterapplication-dbfb7.appspot.com",
  messagingSenderId: "136701331497"
};
firebase.initializeApp(config);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/data', async function(req, res, next) {
  try {
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();
      let URL;
      let labels;
      let location;
      let allData = [];
      console.log("FireBase DB Initialized");
      // Disable deprecated features
      db.settings({
          timestampsInSnapshots: true
      });

      let data = await db.collection('items').get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.data());
            allData.push(doc.data());
          });
        })
        .catch((err) => {
          console.log('Error getting documents', err);
        });
        console.log("Show me the data", allData);
        console.log("Show me the top of the list !!!", allData[0]);
        console.log("Show me the latitude", allData[0]['location']['latitude']);
      res.render('data', { title: 'All Data', data:data, URL:URL, labels:labels, location:location});
  } catch (err) {
      console.error(err);
      res.render('error', { error: err });
  }
});

module.exports = router;
