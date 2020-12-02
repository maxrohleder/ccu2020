import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private account: AccountService) {}

  picture_url = this.account.picture;

  ngOnInit(): void {
    this.picture_url =
      'https://avatars1.githubusercontent.com/u/65280810?s=400&v=4'; //TOFO FIX ACCOUNT SERVICE PIC
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
