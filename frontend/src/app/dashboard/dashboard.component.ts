import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  constructor(private account: AccountService) {}

  user = this.account.email;

  startPlace = new FormControl();
  endPlace = new FormControl();
  startDate = new FormControl();
  endDate = new FormControl();

  ngOnInit(): void {}

  submit(): void {
    console.log('startPlac: ' + this.startPlace.value);
    console.log('endPlace: ' + this.endPlace.value);
    console.log('startDate: ' + this.startDate.value);
    console.log('endDate: ' + this.endDate.value);

    console.log('user: ' + this.user);
  }
  goToProfile(): void {
    console.log('hello world');
  }
}
