import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCI4NR64Uw6y0_C90pCGJxKt6_jLf32n6k",
    authDomain: "project5-modul9.firebaseapp.com",
    projectId: "project5-modul9",
    storageBucket: "project5-modul9.appspot.com",
    messagingSenderId: "989564536106",
    appId: "1:989564536106:web:db54b5e4e66b958e73ca53"
});

const FIREBASE = firebase;

export default FIREBASE;