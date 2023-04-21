import React from 'react'
import LoginForm from '../auth/LoginForm'
import { auth } from '../firebase/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";
import { useAuthCtx } from '../store/AuthProvider';

function LoginPage() {

const {login, ui} = useAuthCtx()

function userLoginFire({email, password}){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log('pavyko', user);
      login(user)
      ui.showSuccess()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      ui.showError()
    });

}
  


  return (
    <div>
        <h1>Login</h1>
        <LoginForm onLogin={userLoginFire}/>
    </div>
  )
}

export default LoginPage