import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCBiNHtOjC3YYN2ntLQXqqjYXY6NEnjakc",
  authDomain: "recipeappbyme.firebaseapp.com",
  databaseURL: "https://recipeappbyme-default-rtdb.firebaseio.com",
  projectId: "recipeappbyme",
  storageBucket: "recipeappbyme.appspot.com",
  messagingSenderId: "182665185794",
  appId: "1:182665185794:web:dceee967480650779c351b",
  measurementId: "G-ET3RBY1K1S",
};

export const app = firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  projectAuth
    .signInWithPopup(provider)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithEmail = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
