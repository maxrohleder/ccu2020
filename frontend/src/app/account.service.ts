import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  FirebaseuiAngularLibraryService,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';
import { Observable } from 'rxjs';

type AccountInfo = {
  isLoggedIn: boolean;
  name: string;
  email: string;
  emailVerified: boolean;
  picture: string;
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseuiAngularLibraryService: FirebaseuiAngularLibraryService
  ) {
    firebaseuiAngularLibraryService.firebaseUiInstance.disableAutoSignIn();
    afAuth.authState.subscribe((response) => {
      if (response == null) {
        router.navigate(['']);
      } else {
        router.navigate(['home']);
      }
    });
  }

  accountInfo: AccountInfo = {
    name: '',
    email: '',
    emailVerified: false,
    picture: '',
    isLoggedIn: false,
  };

  notification_list = [];

  logOut(): void {
    this.afAuth.signOut();
    this.router.navigate(['']);
  }
  loginSucess(data: FirebaseUISignInSuccessWithAuthResult): void {
    // TODO extract user info
    console.log('login success callback');
  }

  // This function runs when subscribe() is called
  public accountUpdates(): Observable<AccountInfo> {
    return new Observable((observer) => {
      this.afAuth.authState.subscribe((response) => {
        if (response) {
          console.log('logged in :)', response.displayName);
          observer.next({
            isLoggedIn: true,
            name: response.displayName,
            email: response.email,
            emailVerified: response.emailVerified,
            picture: response.photoURL,
          });
        } else {
          console.log('logged out :(');
          observer.next({
            isLoggedIn: false,
            name: '',
            email: '',
            emailVerified: false,
            picture: '',
          });
        }
      });

      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe(): void {
          this.afAuth.authState.unsubscribe();
        },
      };
    });
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
