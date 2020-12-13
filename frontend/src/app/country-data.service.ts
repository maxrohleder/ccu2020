import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MockCountryData } from './mock-objects/countryData';
import { MockNewsData } from './mock-objects/newsData';
import { GET_COUNTRY_DATA_ROUTE } from '../environments/api';
import { GET_NEWS_ROUTE } from '../environments/api';

export type CountryData = {
  short: string;
  cities: string[];
  caseOverView: {
    total: number;
    cured: number;
    deaths: number;
  };
  newInfections: {
    prevDay: string;
    lastSevenDay: string;
    weekly: string;
  };
  governmentLink: string;
  coronaLink: string;
  generalRestrictions: any[];
  entryRestrictions: any[];
  transitRestrictions: any[];
  covidApp: any[];
};

export type NewsData = {
  head: string;
  link: string;
  picture: string;
  time: string;
};

export type CountriesData = {
  Germany: CountryData;
  France: CountryData;
  Portugal: CountryData;
  Spain: CountryData;
  USA: CountryData;
};

export type NewsByCountriesData = {
  Germany: NewsData[];
  France: NewsData[];
  Portugal: NewsData[];
  Spain: NewsData[];
  USA: NewsData[];
};

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  constructor(private http: HttpClient) {}

  country_data = {};
  news_list = {};

  getCountryData(): Observable<CountriesData> {
    if (environment.useBackend) {
      // using backend
      return this.http.get<CountriesData>(GET_COUNTRY_DATA_ROUTE);
    } else {
      // mocking posts for now
      return of(MockCountryData);
    }
  }

  clearCountryData(): {} {
    this.country_data = [];
    console.log('clear all_posts');
    return this.country_data;
  }

  getNewsData(): Observable<NewsByCountriesData> {
    if (environment.useBackend) {
      // using backend
      return this.http.get<NewsByCountriesData>(GET_NEWS_ROUTE);
    } else {
      // mocking posts for now
      console.log(MockNewsData);
      return of(MockNewsData);
    }
  }

  clearNewsList(): {} {
    this.news_list = [];
    console.log('clear all_posts');
    return this.news_list;
  }
}
