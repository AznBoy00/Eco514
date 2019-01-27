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
router.get('/data', function(req, res, next) {
  try {
      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();
      
      // Disable deprecated features
      db.settings({
          timestampsInSnapshots: true
      });
      
      let data = db.collection("items").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
          });
      });

      res.render('data', { title: 'All Data', data:data});
  } catch (err) {
      console.error(err);
      res.render('error', { error: err });
  }
});

module.exports = router;
