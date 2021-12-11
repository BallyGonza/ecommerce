import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBLDHbEp8-b-6PtluEpQztXwaDhmL9jTWY",
    authDomain: "ecommerce-5722a.firebaseapp.com",
    projectId: "ecommerce-5722a",
    storageBucket: "ecommerce-5722a.appspot.com",
    messagingSenderId: "771915479552",
    appId: "1:771915479552:web:a4f4b6497f1e1165eb36e5",
    measurementId: "G-2NGYVPBRXM"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}