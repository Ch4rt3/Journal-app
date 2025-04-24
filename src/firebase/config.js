// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtgUpxTBrM5pFzKKwl6qCsP9K05HPa2rw",
  authDomain: "proy-react-e273f.firebaseapp.com",
  projectId: "proy-react-e273f",
  storageBucket: "proy-react-e273f.firebasestorage.app",
  messagingSenderId: "801294561574",
  appId: "1:801294561574:web:ddcdb6c128a996e10dd1e7",
  measurementId: "G-154P5V38CW"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );