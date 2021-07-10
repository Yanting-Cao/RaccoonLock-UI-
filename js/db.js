import firebase from "firebase/app";
var config = {
    apiKey: "AIzaSyD3QWwmDnP0kIMlcZbPzi0YY0ERE4Ch9kk",
    authDomain: "raccoonlock.firebaseapp.com",
    databaseURL: "https://raccoonlock-default-rtdb.firebaseio.com/",
    storageBucket: "raccoonlock.appspot.com",
    projectId: "raccoonlock"
};

  firebase.initializeApp(config);

  // Get a reference to the database service
const database = firebase.firestore();
const settings = {
    timestampsInSnapshots: true,
  };
  database.settings(settings);
  
  export default firebase;
  
  export {
    database,
  };
