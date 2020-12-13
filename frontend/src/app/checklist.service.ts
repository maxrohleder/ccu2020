import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { MockChecklist } from './mock-objects/checklistData';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GET_CHECKLIST_ROUTE } from '../environments/api';
import { Observable, of } from 'rxjs';

export type ChecklistItem = {
  title: string;
  text: string;
  allchecked: boolean;
  check: any[];
};

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  constructor(private http: HttpClient) {}

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

    //TODO send to backend

    return this.checklist;
  }

  getCheckList(input): Observable<ChecklistItem[]> {
    if (environment.useBackend) {
      // use backend
      return this.http.get<ChecklistItem[]>(GET_CHECKLIST_ROUTE);
    } else {
      // mocking posts for now
      return of(MockChecklist);
    }
  }
  //TODO FROM BACK-END
  clearCheckList(): any[] {
    this.checklist = [];
    console.log('Checklist Reset');
    return this.checklist;
  }
}
