// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9IPGVKKmd5CnFotJUCHWNOJP5Qxn5rDE",
  authDomain: "loginreactfirebase-817ab.firebaseapp.com",
  projectId: "loginreactfirebase-817ab",
  storageBucket: "loginreactfirebase-817ab.appspot.com",
  messagingSenderId: "215634168001",
  appId: "1:215634168001:web:e869a97d2ba70c7580ec40",
  measurementId: "G-D22KNCNZY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);