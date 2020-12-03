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
    this.afAuth.authState.subscribe((d) => {
      console.log('Subscribing to auth changes', d);
      this.isLoggedIn = true;
      this.email = d.email;
      this.emailVerified = d.emailVerified;
      this.name = d.displayName;
      this.picture = d.photoURL;
    });
  }

  name = '';
  first = '';
  last = '';
  email = '';
  emailVerified = false;
  picture = '';
  isLoggedIn = false;
  loginData: FirebaseUISignInSuccessWithAuthResult;

  notification_list = [];

  logOut(): void {
    this.afAuth.signOut();
    this.router.navigate(['']);
  }
  loginSucess(data: FirebaseUISignInSuccessWithAuthResult): void {
    // TODO extract user info
    this.loginData = data;
  }

  getNotifications(): any[] {
    console.log('getNotifications');
    var notification1 = {
      head: 'Flight cancellation',
      text: 'flight got cancelled',
      icon: 'airplanemode_inactive',
      time: 'now',
    };
    var notification2 = {
      head: 'Daily Case update',
      text: '+ 2400 new cases',
      icon: 'trending_up',
      time: 'now',
    };
    var notification3 = {
      head: 'Daily case update',
      text: '+ 2400 new cases in Berlin',
      icon: 'trending_up',
      time: '16min',
    };
    var notification4 = {
      head: 'Updated curfew from Monday on',
      text: '23:00 h in Berlin',
      icon: 'error_outline',
      time: '32min',
    };
    var notification5 = {
      head: 'Daily case update',
      text: '- 2400 new cases in Berlin',
      icon: 'trending_down',
      time: '1h 32min',
    };

    this.notification_list.push(notification1);
    this.notification_list.push(notification2);
    this.notification_list.push(notification3);
    this.notification_list.push(notification4);
    this.notification_list.push(notification5);
    this.notification_list.push(notification5);
    this.notification_list.push(notification1);
    this.notification_list.push(notification4);
    this.notification_list.push(notification3);

    return this.notification_list;
  }
}
