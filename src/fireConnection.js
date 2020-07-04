import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyCX-OIW_oxFlTyW2poEg_Twu8qSEpQuwyo",
    authDomain: "threelif-db542.firebaseapp.com",
    databaseURL: "https://threelif-db542.firebaseio.com",
    projectId: "threelif-db542",
    storageBucket: "threelif-db542.appspot.com",
    messagingSenderId: "613372439720",
    appId: "1:613372439720:web:5409ca2c8b5c06edff269d",
    measurementId: "G-NB9FCHT0Z1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;