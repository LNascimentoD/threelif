import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCTwJQ17IO8mudZwzJdYwNpNCDzY6wnCSE",
    authDomain: "reactapp-5ecef.firebaseapp.com",
    databaseURL: "https://reactapp-5ecef.firebaseio.com",
    projectId: "reactapp-5ecef",
    storageBucket: "reactapp-5ecef.appspot.com",
    messagingSenderId: "883453830850",
    appId: "1:883453830850:web:1167c32dc477698e567d5b",
    measurementId: "G-DKV28JRFLE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;