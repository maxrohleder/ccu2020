import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  constructor(private account: AccountService) {
    account.accountUpdates().subscribe((AccInfo) => {
      console.log('image url:', AccInfo.picture);
      this.user.first = AccInfo.name.split(' ')[0];
      this.user.last = AccInfo.name.split(' ')[1];
      this.user.email = AccInfo.email;
      this.user.loggedIn = AccInfo.isLoggedIn;
      this.user.picture = AccInfo.picture;
    });
  }
  user = {
    first: '',
    last: '',
    bday: '', //this.account.bday,
    adress: '', //this.account.adress,
    picture: 'https://avatars2.githubusercontent.com/u/24854741?s=400&v=4',
    email: '',
    phone: '', ////this.account.phone,
    loggedIn: null, //this.account.loggedIn
    vaccinations: [],
    passport: [],
    insurance: [],
    license: [],
  };

  newEntry = new FormControl();

  ngOnInit(): void {
    //for test
    this.user['first'] = 'Max';
    this.user['last'] = 'Rohleder';
    this.user['bday'] = '19.04.1998';
    this.user['adress'] = 'Kaiserstraße 122, 76231 Karlsruhe, Germany';
    this.user['email'] = 'sample.email@tecnicoulisboa.pt';
    this.user['phone'] = '+351 123 12 12';
    this.user['loggedIn'] = true;

    this.user['vaccinations'].push('Hae­mo­phi­lus In­flu­enzae-Typ-B');
    this.user['vaccinations'].push('Po­lio­mye­li­tis-Impf­stof­fe');
    this.user['vaccinations'].push('Ge­bär­mut­ter­hals­krebs-Impf­stof­fe');

    this.user['passport'].push('Deutsch');
    this.user['passport'].push('USA');

    this.user['insurance'].push('Boden Versicherung');
    this.user['insurance'].push('Haaraufall Versicherung');
    this.user['insurance'].push('Ge­bär­mut­ter­hals­krebs Versicherung');

    this.user['license'].push('License-Typ-A');
    this.user['license'].push('License-Typ-B');
    this.user['license'].push('License-Typ-C');
    this.user['license'].push('License-Typ-D');
  }

  //test func
  submit(): void {
    this.user.loggedIn = !this.user.loggedIn; //test
    console.log('vaccinations' + this.user['vaccinations']); //test
  }

  addVaccine(): void {
    if (this.newEntry.value != null || this.newEntry.value != undefined) {
      this.user['vaccinations'].push(this.newEntry.value);
      console.log('vaccination added !' + this.newEntry.value);
      this.newEntry.reset();
    }
  }
  addPassport(): void {
    if (this.newEntry.value != null || this.newEntry.value != undefined) {
      this.user['passport'].push(this.newEntry.value);
      console.log('passport added !');
      this.newEntry.reset();
    }
  }
  addInsurance(): void {
    if (this.newEntry.value != null || this.newEntry.value != undefined) {
      this.user['insurance'].push(this.newEntry.value);
      console.log('insurance added !');
      this.newEntry.reset();
    }
  }
  addLicense(): void {
    if (this.newEntry.value != null || this.newEntry.value != undefined) {
      this.user['license'].push(this.newEntry.value);
      console.log('license added !');
      this.newEntry.reset();
    }
  }

  logOut(): void {
    this.account.logOut();
  }
}
