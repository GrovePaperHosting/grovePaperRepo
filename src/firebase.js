// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1Rdf4FKlwM4p52OdeJcFmFgZ3TXmfYX8",
    authDomain: "grove-paper-50b62.firebaseapp.com",
    projectId: "grove-paper-50b62",
    storageBucket: "grove-paper-50b62.appspot.com",
    messagingSenderId: "507243131816",
    appId: "1:507243131816:web:b3a6e54b3bf17e0c38a39d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref();

export default storageRef;

