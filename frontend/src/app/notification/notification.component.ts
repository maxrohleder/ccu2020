import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
})
export class NotificationComponent implements OnInit {
  constructor() {}

  notification_list = [];

  ngOnInit(): void {
    var notification1 = {
      head: 'Flight cancellation',
      text: 'flight got cancelled',
      icon: 'airplanemode_inactive',
      time: 'now',
    };
    var notification2 = {
      head: 'Daily Case update',
      text: '+ 2400 new cases',
      icon: 'trending_up',
      time: 'now',
    };
    var notification3 = {
      head: 'Daily case update',
      text: '+ 2400 new cases in Berlin',
      icon: 'trending_up',
      time: '16min',
    };
    var notification4 = {
      head: 'Updated curfew from Monday on',
      text: '23:00 h in Berlin',
      icon: 'error_outline',
      time: '32min',
    };
    var notification5 = {
      head: 'Daily case update',
      text: '- 2400 new cases in Berlin',
      icon: 'trending_down',
      time: '1h 32min',
    };

    this.notification_list.push(notification1);
    this.notification_list.push(notification2);
    this.notification_list.push(notification3);
    this.notification_list.push(notification4);
    this.notification_list.push(notification5);
    this.notification_list.push(notification5);
    this.notification_list.push(notification1);
    this.notification_list.push(notification4);
    this.notification_list.push(notification3);
  }
}
