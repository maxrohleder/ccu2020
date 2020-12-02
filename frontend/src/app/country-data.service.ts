import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  constructor() {}

  country_data = {};

  getCountryData(): {} {
    console.log('get country_data');

    //TODO FROM BACK-END
    this.country_data = {
      ...this.country_data,
      Germany: {
        short: 'DEU',
        cities: ['München', 'Berlin', 'Hamburg', 'Ingolstadt', 'Karlsruhe'],
        caseOverView: {
          total: 785.823,
          cured: 493.25,
          deaths: 12.452,
        },
        newInfections: {
          prevDay: '+ 22.504',
          lastSevenDay: '+ 131.379',
          weekly: '+ 6%',
        },
        governmentLink: 'https://www.bundesregierung.de/breg-en',
        coronaLink: 'https://covid19.min-saude.pt',
        generalRestrictions: [],
        entryRestrictions: [],
        transitRestrictions: [],
        covidApp: [],
      },
      France: {
        short: 'FRA',
        cities: ['Paris', 'Marseille', 'Nizza', 'Bordeaux', 'Lyon'],
        caseOverView: {
          total: 785.823,
          cured: 493.25,
          deaths: 12.452,
        },
        newInfections: {
          prevDay: '+ 22.504',
          lastSevenDay: '+ 131.379',
          weekly: '+ 6%',
        },
        governmentLink: 'https://www.gouvernement.fr/en/news',
        coronaLink: 'https://covid19.min-saude.pt',
        generalRestrictions: [],
        entryRestrictions: [],
        transitRestrictions: [],
        covidApp: [],
      },
      Portugal: {
        short: 'PRT',
        cities: ['Lisbon', 'Porto', 'Coinbra', 'Braga', 'Lagos'],
        caseOverView: {
          total: 785.823,
          cured: 493.25,
          deaths: 12.452,
        },
        newInfections: {
          prevDay: '+ 22.504',
          lastSevenDay: '+ 131.379',
          weekly: '+ 6%',
        },
        governmentLink: 'https://www.portugal.gov.pt/en/gc21',
        coronaLink: 'https://covid19.min-saude.pt',
        generalRestrictions: [],
        entryRestrictions: [],
        transitRestrictions: [],
        covidApp: [],
      },
      Spain: {
        short: 'ESP',
        cities: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia', 'Granada'],
        caseOverView: {
          total: 785.823,
          cured: 493.25,
          deaths: 12.452,
        },
        newInfections: {
          prevDay: '+ 22.504',
          lastSevenDay: '+ 131.379',
          weekly: '+ 6%',
        },
        governmentLink:
          'https://www.lamoncloa.gob.es/lang/en/Paginas/index.aspx',
        coronaLink: 'https://covid19.min-saude.pt',
        generalRestrictions: [],
        entryRestrictions: [],
        transitRestrictions: [],
        covidApp: [],
      },
      USA: {
        short: 'USA',
        cities: [
          'Washington D.C.',
          'New York',
          'Chicago',
          'Los Angeles',
          'San Francisico',
        ],
        caseOverView: {
          total: 785.823,
          cured: 493.25,
          deaths: 12.452,
        },
        newInfections: {
          prevDay: '+ 22.504',
          lastSevenDay: '+ 131.379',
          weekly: '+ 6%',
        },
        governmentLink: 'www.usa.gov',
        coronaLink: 'https://covid19.min-saude.pt',
        generalRestrictions: [],
        entryRestrictions: [],
        transitRestrictions: [],
        covidApp: [],
      },
    };

    var news1 = {
      text:
        'The state of emergency (estado de emergencia) has been in force since 9 November 2020 and will be extended every 15 days until further notice.',
    };
    var news2 = {
      head: 'Behavior in public',
      text:
        '- try to keep a distance of 1,5 m to each person- only groups of 5 people are allowed to gather outside except for the same household- if big groups can’t be avoided its mandatory to wear a mask',
    };
    var news3 = {
      head: 'Night-time curfew',
      text:
        '- during the week prohibited to leave the house after 11 pm- during the weekend prohibited to leave the house after 1 pm',
    };
    var news4 = {
      head: 'Travel documents',
      text:
        'For people with european citizenship the entryis permitted either one of the followingdocuments:',
    };
    var news5 = {
      text:
        '- passport: yes - temporary passport: yes - identification card: yes - temporary identification card: yes, if valid - children passport: yes',
    };

    this.country_data['Portugal']['generalRestrictions'].push(news1);
    this.country_data['Portugal']['generalRestrictions'].push(news2);
    this.country_data['Portugal']['generalRestrictions'].push(news3);
    this.country_data['Portugal']['entryRestrictions'].push(news4);
    this.country_data['Portugal']['entryRestrictions'].push(news5);
    this.country_data['Portugal']['transitRestrictions'].push(news2);
    this.country_data['Portugal']['transitRestrictions'].push(news3);
    this.country_data['Portugal']['covidApp'].push(news2);
    this.country_data['Portugal']['covidApp'].push(news3);

    this.country_data['Germany']['generalRestrictions'].push(news1);
    this.country_data['Germany']['generalRestrictions'].push(news2);
    this.country_data['Germany']['generalRestrictions'].push(news3);
    this.country_data['Germany']['entryRestrictions'].push(news4);
    this.country_data['Germany']['entryRestrictions'].push(news5);
    this.country_data['Germany']['transitRestrictions'].push(news2);
    this.country_data['Germany']['transitRestrictions'].push(news3);
    this.country_data['Germany']['covidApp'].push(news2);
    this.country_data['Germany']['covidApp'].push(news3);

    return this.country_data;
  }

  clearPosts(): {} {
    this.country_data = [];
    console.log('clear all_posts');
    return this.country_data;
  }
}
