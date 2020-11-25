import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AccountService } from '../account.service';
import { ChecklistService } from '../checklist.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass'],
})
export class TravelComponent implements OnInit {
  constructor(
    private account: AccountService,
    private checklistService: ChecklistService
  ) {}

  seeChecklist = false;

  checklist = [];

  user = {
    first: this.account.first,
    last: this.account.first,
    email: this.account.email,
    loggedIn: null, //this.account.loggedIn //TODO
  };

  button = {
    plane: false,
    car: false,
    bus: false,
    boat: false,
    extra: false,
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
  }
  buttonOnClick(id): void {
    this.button[id] = !this.button[id];
    console.log(id + ': ' + this.button[id]);
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
    this.checklist = this.checklistService.appendCheckList();
  }

  checkAll(item): void {
    item.allchecked = !item.allchecked;
    //console.log(item.allchecked);

    for (var box_index in item.check) {
      item.check[box_index].checked = !item.check[box_index].checked;
      //console.log(item.check[box_index]);
    }
  }

  goToCheckList(): void {
    //console.log(this.checklist);
    //console.log(this.checklist);
    if (this.seeChecklist == false) {
      var data = {
        user: this.user,
        button: this.button,
        input: this.input,
      };
      this.checklist = this.checklistService.getCheckList(data);
    } else {
      this.checklist = this.checklistService.clearCheckList();
    }

    this.seeChecklist = !this.seeChecklist; //switch checklist view
  }
}
