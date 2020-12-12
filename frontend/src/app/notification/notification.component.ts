import { Component, OnInit } from '@angular/core';
import { AccountService, NotificationData } from '../account.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
})
export class NotificationComponent implements OnInit {
  constructor(private account: AccountService) {}

  notification_list = [];

  ngOnInit(): void {
    this.account.getNotification().subscribe((n: NotificationData[]) => {
      this.notification_list = n;
    });
  }
}
