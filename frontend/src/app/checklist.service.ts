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

    //TODO 1----------------------------------------------------------------------------
    var item1 = {
      name: 'Make appointment for Covid-19 Test',
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
    //TODO 2----------------------------------------------------------------------------
    var item3 = {
      name: 'Conduct Covid-19 Test',
      time: '72 hours',
      checked: false,
    };
    var item4 = {
      name: 'Upload Covid-19 Test result',
      checked: false,
    };
    var item5 = {
      name: 'Receive QR-Code for entry',
      checked: false,
    };
    var ToDo2 = {
      title: 'Valid Identification Card',
      text: 'Check that validation is at least 6 weeks',
      allchecked: false,
      check: [],
    };
    ToDo2.check.push(item1);
    ToDo2.check.push(item2);
    ToDo2.check.push(item3);
    ToDo2.check.push(item4);

    this.checklist.push(ToDo2);
    //TODO 3----------------------------------------------------------------------------
    var ToDo3 = {
      title: 'Foreign Health Insurance',
      text: 'Check that validation is at least 6 weeks',
      allchecked: false,
      check: [],
    };
    ToDo3.check.push(item1);
    ToDo3.check.push(item2);
    this.checklist.push(ToDo3);
    //TODO 4----------------------------------------------------------------------------
    var ToDo4 = {
      title: 'Check Vaccination report ',
      text: 'Check that validation is at least 6 weeks.',
      allchecked: false,
      check: [],
    };
    ToDo4.check.push(item2);
    ToDo4.check.push(item3);
    ToDo4.check.push(item4);
    this.checklist.push(ToDo4);

    //console.log(this.checklist);
    return this.checklist;
  }

  clearCheckList(): any[] {
    this.checklist = [];
    console.log('Checklist Reset');
    return this.checklist;
  }
}
