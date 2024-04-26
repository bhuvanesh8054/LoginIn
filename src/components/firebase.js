// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3qZbNVqZrki-mxEFMvm-McfJbMoFHEfk",
  authDomain: "learndcrack-4e325.firebaseapp.com",
  projectId: "learndcrack-4e325",
  storageBucket: "learndcrack-4e325.appspot.com",
  messagingSenderId: "885943866911",
  appId: "1:885943866911:web:6361d8e19de18c8faf672a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;