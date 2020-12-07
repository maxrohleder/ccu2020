import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent implements OnInit {
  constructor(private account: AccountService) {}

  news_list = {};
  selectedCountry = 'Portugal';

  countries = ['Germany', 'France', 'Portugal', 'Spain', 'USA'];

  ngOnInit(): void {
    this.news_list = this.account.getNews();
  }
}
//<img [src]="news.picture" alt="profil" />
