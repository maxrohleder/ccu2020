import { Component, OnInit } from '@angular/core';
import {
  CountryDataService,
  NewsData,
  NewsByCountriesData,
} from '../country-data.service';

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
    this.countryDataService
      .getNewsData()
      .subscribe((n: NewsByCountriesData) => {
        this.news_list = n;
      });
  }
  setCountry(country): void {
    this.selectedCountry = country;
  }
}
