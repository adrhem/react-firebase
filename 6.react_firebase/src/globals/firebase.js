import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA9HT87_w4SBgsKD-HywRdrDid_xb15dyg",
  authDomain: "react-course-2018b.firebaseapp.com",
  databaseURL: "https://react-course-2018b.firebaseio.com",
  projectId: "react-course-2018b",
  storageBucket: "react-course-2018b.appspot.com",
  messagingSenderId: "413273000415",
};

export default firebase.initializeApp(config);