import * as firebase from "firebase/app";
import "firebase/storage";
import "/firebase/firestore";

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

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export default (projectFirestore, projectStorage);
