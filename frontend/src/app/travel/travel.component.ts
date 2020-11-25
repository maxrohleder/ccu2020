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
    picture: null, //this.account.loggedIn //TODO
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
    //for  test
    this.user['first'] = 'Max';
    this.user['email'] = 'max@Roh.com';
    this.user['loggedIn'] = this.user['email'] != null;
    this.user['picture'] =
      'https://avatars1.githubusercontent.com/u/42830642?s=400&u=55ada5125493fefb7b50eb5a331c2f6e6b263f0b&v=4';
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
      var input_value = {
        startPlace: this.input['startPlace'].value,
        endPlace: this.input['endPlace'].value,
        startDate: this.input['startDate'].value,
        endDate: this.input['endDate'].value,
      };
      var data = {
        user: this.user,
        button: this.button,
        input: input_value,
      };

      var pass_button = false;
      var pass_form = true;
      //check if at least one button toggled
      for (var i in this.button) {
        pass_button = pass_button || this.button[i];
      }
      //check if all form filled
      for (var i in input_value) {
        var check = input_value[i] != null;
        //console.log(input_value[i], check);
        pass_form = pass_form && check;
      }
      console.log(pass_button);
      console.log(pass_form);

      //chk all data filled
      if (pass_button && pass_form) {
        //if all correct -> generate checklist
        this.checklist = this.checklistService.getCheckList(data);
        this.seeChecklist = !this.seeChecklist; //switch to checklist view
      } else {
        //propmt error messages
        if (!pass_button) {
          alert('You need to select at least one means of transport!');
        }
        if (!pass_form) {
          alert('You need to fill in the froms!');
        }
      }
    } else {
      this.checklist = this.checklistService.clearCheckList();
      this.seeChecklist = !this.seeChecklist; //switch back to travel view
    }
  }
}
