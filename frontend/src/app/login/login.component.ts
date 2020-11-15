import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FirebaseUISignInFailure,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.afAuth.authState.subscribe((d) =>
      console.log('Subscribing to auth changes', d)
    );
  }

  logout(): void {
    // show something to indicate sign out
    this.afAuth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult): void {
    console.log('successCallback', data);
    // for development of login redirect to main. later move login to /login
    // this.router.navigate(['']);
  }

  errorCallback(data: FirebaseUISignInFailure): void {
    console.warn('errorCallback', data);
  }

  uiShownCallback(): void {
    console.log('UI shown');
  }
}
