import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {
  constructor() {}

  country_data = {};
  news_list = {};

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

  clearCountryData(): {} {
    this.country_data = [];
    console.log('clear all_posts');
    return this.country_data;
  }

  getNews(): {} {
    console.log('getNews');

    var news1 = {
      head: 'Germany reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    var news2 = {
      head: 'Germany reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    var news3 = {
      head: 'Germany runs out of toilet paper and reduces selling of packages',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    var news4 = {
      head: 'Germany reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    this.news_list = {
      ...this.news_list,
      Germany: [],
      France: [],
      Portugal: [],
      Spain: [],
      USA: [],
    };

    this.news_list['Germany'].push(news1);
    this.news_list['Germany'].push(news2);
    this.news_list['Germany'].push(news3);
    this.news_list['Germany'].push(news4);

    this.news_list['France'].push(news1);
    this.news_list['France'].push(news2);

    this.news_list['Portugal'].push(news1);
    this.news_list['Portugal'].push(news2);
    this.news_list['Portugal'].push(news4);

    this.news_list['Spain'].push(news1);

    this.news_list['USA'].push(news1);
    this.news_list['USA'].push(news4);

    return this.news_list;
  }
  clearNewsList(): {} {
    this.news_list = [];
    console.log('clear all_posts');
    return this.news_list;
  }
}
