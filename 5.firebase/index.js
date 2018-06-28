
var firebase = require("firebase");
require("firebase/firestore");

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);


var db = firebase.firestore();
db.collection("campuses").get().then((result) => {
  console.log("============================");
  console.log("ALL DOCS");
  console.log("============================");
  result.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});

var docRef = db.collection("campuses").doc("cucei");

docRef.get().then(function(doc) {
  console.log("============================");
  console.log("SPECIFIC DOC");
  console.log("============================");
    if (doc.exists) {
        console.log(doc.data());
    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log(error);
});


db.collection("campuses").doc("cucei").set({
  location:  new firebase.firestore.GeoPoint(20.6570536,-103.3271426),
  name: "CUCEI 2",
})
.then(function() {
  console.log("============================");
  console.log("SET");
  console.log("============================");

  var docRef = db.collection("campuses").doc("cucei");
  docRef.get().then(function(doc) {
      if (doc.exists) {
          console.log(JSON.stringify(doc.data()));
      } else {
          console.log("No such document!");
      }
  }).catch(function(error) {
      console.log(error);
  });

})
.catch(function(error) {
  console.error(error);
});


db.collection("campuses").where("name", "==", 'CUCEI 2')
  .get()
  .then(function(result) {
    console.log("============================");
    console.log("QUERY");
    console.log("============================");
    result.forEach(function(doc) {
      console.log(doc.id, " => ", JSON.stringify(doc.data()));
    });
  })
  .catch(function(error) {
    console.log(error);
  });



db.collection("campuses").doc("cucea").delete().then(function() {
  console.log("============================");
  console.log("DELETED");
  console.log("============================");
}).catch(function(error) {
  console.error(error);
});


var doc = db.collection('campuses').doc('cucei');
var observer = doc.onSnapshot(docSnapshot => {
  
  console.log("============================");
  console.log("MODIFIED cucei");
  console.log("============================");
  console.log(JSON.stringify(docSnapshot.data()));
}, err => {
  console.log(`Encountered error: ${err}`);
});


