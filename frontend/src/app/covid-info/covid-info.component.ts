import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CountryDataService, CountriesData } from '../country-data.service';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CovidInfoComponent implements OnInit {
  constructor(
    private _sanitizer: DomSanitizer,
    private CountryDataService: CountryDataService
  ) {}

  seeInformation = false;
  selectedCountry = 'Portugal';
  selectedCity = 'Lisbon';
  last_updated = '14.12.2020';
  src_name = null;
  newCity = new FormControl();

  countries = ['Germany', 'France', 'Portugal', 'Spain', 'USA'];

  country_data = {};

  ngOnInit(): void {
    console.log(this.countries);
    this.countries.sort();

    this.CountryDataService.getCountryData().subscribe(
      (countryData: CountriesData) => {
        console.log(countryData);
        this.country_data = countryData;
      }
    );
  }
  setCountry(country): void {
    this.selectedCountry = country;
    this.selectedCity = this.country_data[country]['cities'][0];
    console.log('selectedCountry: ', this.selectedCountry);
  }
  setCity(city): void {
    if (city == 'FORM') {
      this.country_data[this.selectedCountry]['cities'].unshift(
        this.newCity.value
      );

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
      var lookup =
        this.country_data[this.selectedCountry]['short'] != undefined
          ? this.country_data[this.selectedCountry]['short']
          : 'USA';

      this.src_name = this._sanitizer.bypassSecurityTrustResourceUrl(
        'https://ourworldindata.org/grapher/total-deaths-covid-19?country=' +
          lookup //TODO SWITCH TO SELCTED COUNTRY
      );
      this.seeInformation = true;
    }
  }
}
