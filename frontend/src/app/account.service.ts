import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  FirebaseuiAngularLibraryService,
  FirebaseUISignInSuccessWithAuthResult,
} from 'firebaseui-angular';
import { Observable } from 'rxjs';

export type AccountInfo = {
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
  news_list = {};

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

  getNews(): {} {
    console.log('getNews');

    var news1 = {
      head: 'Germany reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'https://static01.nyt.com/images/2020/12/04/business/00China-vaccine-illo/00China-vaccine-illo-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale',
      time: '04.11.2020',
    };

    var news2 = {
      head: 'Germany reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'https://static01.nyt.com/images/2020/12/04/business/00China-vaccine-illo/00China-vaccine-illo-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale',
      time: '04.11.2020',
    };

    var news3 = {
      head: 'Germany runs out of toilet paper and reduces selling of packages',
      link: 'https://www.nytimes.com',
      picture:
        'https://static01.nyt.com/images/2020/12/04/business/00China-vaccine-illo/00China-vaccine-illo-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale',
      time: '04.11.2020',
    };

    var news4 = {
      head: 'Germany reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'https://static01.nyt.com/images/2020/12/04/business/00China-vaccine-illo/00China-vaccine-illo-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale',
      time: '04.11.2020',
    };

    this.news_list = {
      ...this.news_list,
      Germany: [],
      Portugal: [],
    };

    this.news_list['Germany'].push(news1);
    this.news_list['Germany'].push(news2);
    this.news_list['Germany'].push(news3);
    this.news_list['Germany'].push(news4);
    this.news_list['Portugal'].push(news1);
    this.news_list['Portugal'].push(news1);
    this.news_list['Portugal'].push(news1);

    return this.news_list;
  }
}
