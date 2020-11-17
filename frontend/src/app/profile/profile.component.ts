import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  constructor(private account: AccountService) {}
  user = {
    first: this.account.first,
    last: this.account.first,
    bday: null, //this.account.bday,
    adress: null, //this.account.adress,
    email: this.account.email,
    phone: null, ////this.account.phone,
    loggedIn: null, //this.account.loggedIn //TODO
    vaccinations: [],
    passport: [],
    insurance: [],
    license: [],
  };

  ngOnInit(): void {
    //for test
    this.user['first'] = 'Max';
    this.user['last'] = 'Rohleder';
    this.user['bday'] = '19.04.1970';
    this.user['adress'] = 'Kaiserstraße 122, 76231 Karlsruhe, Germany';
    this.user['email'] = 'wasEinDude@uni-lisboa.io';
    this.user['phone'] = '+49 666 420 69';
    this.user['loggedIn'] = true;

    this.user['vaccinations'].push('Hae­mo­phi­lus In­flu­enzae-Typ-B');
    this.user['vaccinations'].push('Po­lio­mye­li­tis-Impf­stof­fe');
    this.user['vaccinations'].push('Ge­bär­mut­ter­hals­krebs-Impf­stof­fe');

    this.user['passport'].push('Deutsch');
    this.user['passport'].push('USA');

    this.user['insurance'].push('Hoden Sack Versicherung');
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
    this.user['vaccinations'].push('Hae­mo­phi­lus In­flu­enzae-Typ-B');
    console.log('vaccination added !');
  }
  addPassport(): void {
    this.user['passport'].push('USA');
    console.log('passport added !');
  }
  addInsurance(): void {
    this.user['insurance'].push('Haaraufall Versicherung');
    console.log('insurance added !');
  }
  addLicense(): void {
    this.user['license'].push('License-Typ-C');
    console.log('license added !');
  }

  //edit profile func
  edit(): void {
    console.log('TODO: edit'); //TOOD maybe route
  }
}
