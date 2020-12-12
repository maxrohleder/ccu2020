import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from './../environments/environment';
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
  time: Date;
};

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  constructor() {}

  country_data = {};
  news_list = {};

  getCountryData(): Observable<{}> {
    console.log('get country_data');
    //console.log(mockPosts);
    // Getting posts from backend
    /**
     * Uncomment this line to use the backend
     */
    // return this.http.get<{}>(GET_COUNTRY_DATA_ROUTE);

    // mocking posts for now TODO use posts from backend
    console.log(MockCountryData);
    return of(MockCountryData);
  }

  clearCountryData(): {} {
    this.country_data = [];
    console.log('clear all_posts');
    return this.country_data;
  }

  getNewsData(): Observable<{}> {
    console.log('get country_data');
    //console.log(mockPosts);
    // Getting posts from backend
    /**
     * Uncomment this line to use the backend
     */
    // return this.http.get<{}>(GET_NEWS_ROUTE);

    // mocking posts for now TODO use posts from backend
    console.log(MockNewsData);
    return of(MockNewsData);
  }

  clearNewsList(): {} {
    this.news_list = [];
    console.log('clear all_posts');
    return this.news_list;
  }
}
