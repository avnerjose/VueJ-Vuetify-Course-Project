import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCKdVsBmx3RrgOS4j3RH9rHp71e4rn3TkY",
  authDomain: "todo-ninja-18ddd.firebaseapp.com",
  databaseURL: "https://todo-ninja-18ddd.firebaseio.com",
  projectId: "todo-ninja-18ddd",
  storageBucket: "todo-ninja-18ddd.appspot.com",
  messagingSenderId: "606789806295",
  appId: "1:606789806295:web:2f864ebac6470ef54c6892",
  measurementId: "G-3M6KC0DCK7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;