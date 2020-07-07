var firebase = require('firebase');

const firebaseClientConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "568146757245",
  appId: "XXX",
  measurementId: "XXX"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseClientConfig);
}


const authRef = firebase.auth();
const email = "xxxxx@xxxx.com";
const password = "xxxxx";

const newUserData = await authRef.createUserWithEmailAndPassword(email, password);

