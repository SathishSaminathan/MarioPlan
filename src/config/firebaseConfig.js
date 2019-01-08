import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA_uSX7K9uFVKr0ocWpH5fBPqkR0WFwl9Q",
  authDomain: "marioplan-f90a4.firebaseapp.com",
  databaseURL: "https://marioplan-f90a4.firebaseio.com",
  projectId: "marioplan-f90a4",
  storageBucket: "marioplan-f90a4.appspot.com",
  messagingSenderId: "254677240835"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
