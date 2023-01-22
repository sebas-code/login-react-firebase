import React, {useState} from 'react';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

//Firebase Modules 
import {auth} from '../src/firebase-config'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

//If user is null go home but have any value go login
function App() {
  const [usuario, Setusuario ] = useState(null)
  return (
    <div className="">
      {usuario ? <Home/> : <Login/> }
        
    </div>
  );
}

export default App;
