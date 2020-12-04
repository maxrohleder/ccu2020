import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor() {}

  checklist = [];

  appendCheckList(): any[] {
    console.log('appendCheckList');

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

    ToDo1.check.push(item1);
    ToDo1.check.push(item2);
    ToDo1.check.push(item3);
    ToDo1.check.push(item4);

    this.checklist.push(ToDo1);
    //console.log(this.checklist);

    //TODO VLT ZUM BACK-END SCHICKN

    return this.checklist;
  }

  //TODO FROM BACK-END
  getCheckList(input): any[] {
    console.log('getCheckList');

    //TODO FROM BACK-END
    //TODO SOME STUFF WITH input
    console.log(input);

    var item1 = {
      name: 'Make appointment for Covid-19 Test',
      time: '72h',
      checked: false,
    };
    var item2 = {
      name: 'Go see doctor',
      checked: false,
    };
    var ToDo1 = {
      title: 'Valid Identification Card',
      text: 'Check that validation is at least 6 weeks',
      allchecked: false,
      check: [],
    };

    ToDo1.check.push(item1);
    ToDo1.check.push(item2);
    this.checklist.push(ToDo1);
    //console.log(this.checklist);

    this.appendCheckList();
    this.appendCheckList();
    return this.checklist;
  }

  clearCheckList(): any[] {
    this.checklist = [];
    console.log('Checklist Reset');
    return this.checklist;
  }
}
