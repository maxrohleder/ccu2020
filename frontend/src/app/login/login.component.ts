import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FirebaseUISignInFailure,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private account: AccountService, private router: Router) {}

  logout(): void {
    // signs out of authentication and redirects to login page
    this.account.logOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult): void {
    // store the login data in account service
    this.account.loginSucess(data);
    // navigate to dashboard
    this.router.navigate(['home']);
  }

  errorCallback(data: FirebaseUISignInFailure): void {
    console.warn('errorCallback', data);
  }

  uiShownCallback(): void {
    console.log('UI shown');
  }
}
