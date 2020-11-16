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

  ngOnInit(): void {}

  goToProfile(): void {
    this.router.navigate(['profile']);
  }
  goToDashboard(): void {
    this.router.navigate(['home']);
  }
  logOut(): void {
    // signs out and navigates to home
    this.account.logOut();
  }
}
