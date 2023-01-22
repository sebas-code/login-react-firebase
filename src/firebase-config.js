
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



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

const auth = getAuth(app);

//!!! I need export modules
export {auth,app};

