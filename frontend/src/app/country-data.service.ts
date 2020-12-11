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
      head: 'Portugal reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    var news3 = {
      head: 'France runs out of toilet paper and reduces selling of packages',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    var news4 = {
      head: 'Spain reopens restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    var news5 = {
      head: 'USA reopen restaurants after protests in several cities',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };
    var news6 = {
      head: 'Warning of anaphylaxis with Corona vaccination',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };

    var news7 = {
      head:
        'Consequences of the virus: Corona brings record drop in CO₂ emissions',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };
    var news8 = {
      head: 'Overview: What you need to know about Corona on Thursday',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };
    var news9 = {
      head:
        'Different from measles: Why there will be no compulsory Corona vaccination',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };
    var news10 = {
      head: 'Corona Lockdown: Which borders will remain closed?',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };
    var news11 = {
      head:
        'Corona pandemic: incidence value over 400 - These cities are shutting down!',
      link: 'https://www.nytimes.com',
      picture:
        'data:image/jpeg;base64,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',
      time: '04.11.2020',
    };
    var news12 = {
      head: 'Is the hard Corona lockdown coming before Christmas?',
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
    this.news_list['Germany'].push(news6);
    this.news_list['Germany'].push(news7);
    this.news_list['Germany'].push(news8);
    this.news_list['Germany'].push(news9);
    this.news_list['Germany'].push(news10);
    this.news_list['Germany'].push(news11);
    this.news_list['Germany'].push(news12);

    this.news_list['France'].push(news3);
    this.news_list['France'].push(news6);
    this.news_list['France'].push(news8);
    this.news_list['France'].push(news9);
    this.news_list['France'].push(news10);
    this.news_list['France'].push(news11);
    this.news_list['France'].push(news12);

    this.news_list['Portugal'].push(news2);
    this.news_list['Portugal'].push(news6);
    this.news_list['Portugal'].push(news8);
    this.news_list['Portugal'].push(news9);
    this.news_list['Portugal'].push(news10);
    this.news_list['Portugal'].push(news11);
    this.news_list['Portugal'].push(news12);

    this.news_list['Spain'].push(news4);
    this.news_list['Spain'].push(news6);
    this.news_list['Spain'].push(news7);
    this.news_list['Spain'].push(news10);
    this.news_list['Spain'].push(news11);
    this.news_list['Spain'].push(news12);

    this.news_list['USA'].push(news5);
    this.news_list['USA'].push(news7);
    this.news_list['USA'].push(news8);
    this.news_list['USA'].push(news9);
    this.news_list['USA'].push(news10);
    this.news_list['USA'].push(news11);
    this.news_list['USA'].push(news12);

    /*
    //ad7d5c6f04fb487ca8faf3560daba605
    //console.log(this.checklist);
    var url =
      'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=ad7d5c6f04fb487ca8faf3560daba605';
    var req = new Request(url);

    console.log('FETCH');
    const response = await fetch(req).then(function (response) {
      console.log(response.json());
    });

    console.log(response);
    */

    return this.news_list;
  }

  clearNewsList(): {} {
    this.news_list = [];
    console.log('clear all_posts');
    return this.news_list;
  }
}
