import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  FirebaseuiAngularLibraryService,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';
import { Observable, of } from 'rxjs';
import { MockNotification } from './mock-objects/notificationData';
import { GET_NOTIFICATION_ROUTE } from '../environments/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export type AccountInfo = {
  isLoggedIn: boolean;
  name: string;
  email: string;
  emailVerified: boolean;
  picture: string;
};

export type NotificationData = {
  head: string;
  text: string;
  icon: string;
  time: string;
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    private http: HttpClient,
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
            picture:
              'https://avatars1.githubusercontent.com/u/65280810?s=400&v=4',
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

  getNotification(): Observable<NotificationData[]> {
    console.log('get country_data');
    //console.log(mockPosts);
    // Getting posts from backend
    /**
     * Uncomment this line to use the backend
     */
    if (environment.useBackend) {
      // retrieve the info from the backend
      return this.http.get<NotificationData[]>(GET_NOTIFICATION_ROUTE);
    } else {
      // mocking posts for now TODO use posts from backend
      return of(MockNotification);
    }
  }
}
