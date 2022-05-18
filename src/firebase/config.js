import app from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBszWYGdkiVkCdOf-9qxvQjaFH53xAgZGg",
  authDomain: "job-finder-2642d.firebaseapp.com",
  projectId: "job-finder-2642d",
  storageBucket: "job-finder-2642d.appspot.com",
  messagingSenderId: "991888918398",
  appId: "1:991888918398:web:4694fbf803b4643918952f"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const auth = firebase.auth();

export{ firebase, firestore,  app, auth}