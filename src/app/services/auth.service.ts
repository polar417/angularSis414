import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  getuser(){
    return this.auth.currentUser;
  }

  register(email:string, pass:string, nombre1:string, apellido:string){
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }
  
  loginwithcredentials(user:string, pass:string){
    return signInWithEmailAndPassword(this.auth, user, pass);
  }

  loginwithgoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  LogOut() {
    return signOut(this.auth);
  }
}
