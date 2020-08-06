import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCZToKrcWtGFAY8ePPTg8cGjm8GgrDKDds",
    authDomain: "tinder-clone-14acb.firebaseapp.com",
    databaseURL: "https://tinder-clone-14acb.firebaseio.com",
    projectId: "tinder-clone-14acb",
    storageBucket: "tinder-clone-14acb.appspot.com",
    messagingSenderId: "280124931347",
    appId: "1:280124931347:web:72a639221a99ce83fa2ee6",
    measurementId: "G-QCXGMJ6056"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;