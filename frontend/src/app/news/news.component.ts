import { Component, OnInit } from '@angular/core';
import { CountryDataService } from '../country-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
})
export class NewsComponent implements OnInit {
  constructor(private countryDataService: CountryDataService) {}

  news_list = {};
  selectedCountry = 'Portugal';

  country_list = ['Germany', 'France', 'Portugal', 'Spain', 'USA'];

  ngOnInit(): void {
    this.news_list = this.countryDataService.getNews();
  }
  setCountry(country): void {
    this.selectedCountry = country;
  }
}
