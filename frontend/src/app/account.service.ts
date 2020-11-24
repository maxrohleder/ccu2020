import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  FirebaseUIModule,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((d) =>
      console.log('Subscribing to auth changes', d)
    );
  }

  first = '';
  last = '';
  email = '';
  loginData: FirebaseUISignInSuccessWithAuthResult;

  logOut(): void {
    this.afAuth.signOut();
    this.router.navigate(['']);
  }
  loginSucess(data: FirebaseUISignInSuccessWithAuthResult): void {
    // TODO extract user info
    this.loginData = data;
  }
}