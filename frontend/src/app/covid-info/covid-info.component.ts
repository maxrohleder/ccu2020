import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidInfoComponent implements OnInit {
  constructor(private _sanitizer: DomSanitizer) {}

  seeInformation = false;

  selectedCountry = 'Portugal';
  selectedCity = 'Lisbon';

  caseOverView = {
    total: 785.823,
    cured: 493.25,
    deaths: 12.452,
  };
  newInfections = {
    prevDay: '+ 22.504',
    lastSevenDay: '+ 131.379',
    weekly: '+ 6%',
  };

  src_name = null;
  newCity = new FormControl();

  countries = [
    'Germany',
    'France',
    'Portugal',
    'Spain',
    'Italy',
    'USA',
    'UK',
    'Russia',
    'Sweden',
    'Norway',
    'Finnland',
    'Australia',
  ];

  cities = ['München', 'Berlin', 'Hamburg', 'Ingolstadt', 'Karlsruhe'];

  ngOnInit(): void {
    console.log(this.countries);
    this.countries.sort();
  }
  setCountry(country): void {
    this.selectedCountry = country;
    console.log('selectedCountry: ', this.selectedCountry);
  }
  setCity(city): void {
    if (city == 'FORM') {
      this.cities.unshift(this.newCity.value);
      this.selectedCity = this.newCity.value;
      console.log('selectedCity: ', this.selectedCity);
    } else {
      this.selectedCity = city;
      console.log('selectedCity: ', this.selectedCity);
    }
  }
  getInformation(): void {
    if (this.selectedCity == null || this.selectedCountry == null) {
      alert('You need to select a country or city');
    } else {
      console.log(
        'Country: ' + this.selectedCountry + ' -> ' + this.selectedCity
      );
      this.src_name = this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://ourworldindata.org/grapher/total-deaths-covid-19?country=' +
          'USA' //TODO SWITCH TO SELCTED COUNTRY
      );
      this.seeInformation = true;
    }
  }
}
