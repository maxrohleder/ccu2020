import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Button } from 'protractor';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass'],
})
export class TravelComponent implements OnInit {
  constructor(private account: AccountService) {}

  seeChecklist = true;

  checklist = [];

  checklist1 = {
    checked1: false,
    checked2: false,
    checked3: false,
  };

  allchecked =
    this.checklist1['checked1'] &&
    this.checklist1['checked2'] &&
    this.checklist1['checked3'];

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

    //establish first test checkbox item //TODO get this datastructure from a service
    this.appendCheckList();
  }

  submit(): void {
    console.log('startPlac: ' + this.input['startPlace'].value);
    console.log('endPlace: ' + this.input['endPlace'].value);
    console.log('startDate: ' + this.input['startDate'].value);
    console.log('endDate: ' + this.input['endDate'].value);

    console.log('user: ' + this.user.first);
    this.user.loggedIn = !this.user.loggedIn; //test

    console.log(this.checklist);
  }
  appendCheckList(): void {
    var item1 = {
      name: 'Make appointment for Covid-19 Test',
      time: '72 hours',
      checked: false,
    };

    var item2 = {
      name: 'Conduct Covid-19 Test',
      time: '72 hours',
      checked: false,
    };
    var item3 = {
      name: 'Upload Covid-19 Test result',
      checked: false,
    };
    var item4 = {
      name: 'Receive QR-Code for entry',
      checked: false,
    };
    var ToDo1 = {
      title: 'Valid Identification Card',
      text: 'Check that validation is at least 6 weeks',
      allchecked: false,
      check: [],
    };

    console.log(item1);

    ToDo1.check.push(item1);
    ToDo1.check.push(item2);
    ToDo1.check.push(item3);
    ToDo1.check.push(item4);

    this.checklist.push(ToDo1);
    console.log(this.checklist);
  }

  goToCheckList(): void {
    this.seeChecklist = !this.seeChecklist; //test
  }
  goToProfile(): void {
    console.log('hello world');
  }
}
