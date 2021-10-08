import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA84AEy8PeTaZsyl1Ja_f-UDGhwRoS08xI",
    authDomain: "eduedu-53743.firebaseapp.com",
    projectId: "eduedu-53743",
    storageBucket: "eduedu-53743.appspot.com",
    messagingSenderId: "475409073655",
    appId: "1:475409073655:web:51079b5360d48a34f25af2",
    measurementId: "G-PD4LC3NF3B"
});

const db = firebaseApp.firestore()

export { db }