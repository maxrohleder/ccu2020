import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountInfo, AccountService } from '../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private account: AccountService) {
    account.accountUpdates().subscribe((info) => {
      this.UserInfo = info;
    });
  }

  UserInfo: AccountInfo = {
    name: '',
    emailVerified: false,
    email: '',
    picture: 'https://avatars1.githubusercontent.com/u/65280810?s=400&v=4',
    isLoggedIn: false,
  };
  home = false;

  ngOnInit(): void {
    this.UserInfo.picture =
      'https://avatars1.githubusercontent.com/u/65280810?s=400&v=4';
    this.UserInfo.isLoggedIn = false;
  }

  goToProfile(): void {
    this.router.navigate(['profile']);
  }
  goToDashboard(): void {
    this.router.navigate(['home']);
  }
  goToNotifications(): void {
    this.router.navigate(['notification']);
  }
  logOut(): void {
    // signs out and navigates to home
    this.account.logOut();
  }
}
