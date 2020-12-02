import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass'],
})
export class NotificationComponent implements OnInit {
  constructor(private account: AccountService) {}

  notification_list = [];

  ngOnInit(): void {
    this.notification_list = this.account.getNotifications();
  }
}
