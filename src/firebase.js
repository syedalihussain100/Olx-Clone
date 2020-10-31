// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC4M6CsVX8NnEaEH6DPz5LhGt3h9iDlrUo",
  authDomain: "olx-clone-aa735.firebaseapp.com",
  databaseURL: "https://olx-clone-aa735.firebaseio.com",
  projectId: "olx-clone-aa735",
  storageBucket: "olx-clone-aa735.appspot.com",
  messagingSenderId: "210112481449",
  appId: "1:210112481449:web:3fbd2b6e5ff11fe3e081b8",
  measurementId: "G-PNJ0MXWMW0",
});

const auth = firebase.auth();

export { auth };
