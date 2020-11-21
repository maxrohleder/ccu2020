import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  constructor(private account: AccountService) {}

  user = {
    first: this.account.first,
    last: this.account.first,
    email: this.account.email,
    loggedIn: null, //this.account.loggedIn //TODO
  };
  input = {
    startPlace: new FormControl(),
    endPlace: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
  };

  ngOnInit(): void {
    this.user['first'] = 'Max'; //for  test
    this.user['loggedIn'] = true; //for  test
  }

  submit(): void {
    console.log('startPlac: ' + this.input['startPlace'].value);
    console.log('endPlace: ' + this.input['endPlace'].value);
    console.log('startDate: ' + this.input['startDate'].value);
    console.log('endDate: ' + this.input['endDate'].value);

    console.log('user: ' + this.user.first);
    this.user.loggedIn = !this.user.loggedIn; //test
  }
  goToProfile(): void {
    console.log('hello world');
  }
}
