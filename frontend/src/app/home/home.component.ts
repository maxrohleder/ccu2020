import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToTravel(): void {
    this.router.navigate(['travel']);
  }
  goToNews(): void {
    this.router.navigate(['news']);
  }
  goToForum(): void {
    this.router.navigate(['forum']);
  }
  goToInfo(): void {
    this.router.navigate(['info']);
  }
}
