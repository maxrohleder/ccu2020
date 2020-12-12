import { CountryData } from './../country-data.service';
const Germany: CountryData = {
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
};

const France: CountryData = {
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
};
const Portugal: CountryData = {
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
};

const Spain: CountryData = {
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
  governmentLink: 'https://www.lamoncloa.gob.es/lang/en/Paginas/index.aspx',
  coronaLink: 'https://covid19.min-saude.pt',
  generalRestrictions: [],
  entryRestrictions: [],
  transitRestrictions: [],
  covidApp: [],
};

const USA: CountryData = {
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
};

export const MockCountryData: {} = {
  Germany: Germany,
  France: France,
  Portugal: Portugal,
  Spain: Spain,
  USA: USA,
};

const news1 = {
  text:
    'The state of emergency (estado de emergencia) has been in force since 9 November 2020 and will be extended every 15 days until further notice.',
};
const news2 = {
  head: 'Behavior in public',
  text:
    '- try to keep a distance of 1,5 m to each person- only groups of 5 people are allowed to gather outside except for the same household- if big groups can’t be avoided its mandatory to wear a mask',
};
const news3 = {
  head: 'Night-time curfew',
  text:
    '- during the week prohibited to leave the house after 11 pm- during the weekend prohibited to leave the house after 1 pm',
};
const news4 = {
  head: 'Travel documents',
  text:
    'For people with european citizenship the entryis permitted either one of the followingdocuments:',
};
const news5 = {
  text:
    '- passport: yes - temporary passport: yes - identification card: yes - temporary identification card: yes, if valid - children passport: yes',
};

MockCountryData['Portugal']['generalRestrictions'].push(news1);
MockCountryData['Portugal']['generalRestrictions'].push(news2);
MockCountryData['Portugal']['generalRestrictions'].push(news3);
MockCountryData['Portugal']['entryRestrictions'].push(news4);
MockCountryData['Portugal']['entryRestrictions'].push(news5);
MockCountryData['Portugal']['transitRestrictions'].push(news2);
MockCountryData['Portugal']['transitRestrictions'].push(news3);
MockCountryData['Portugal']['covidApp'].push(news2);
MockCountryData['Portugal']['covidApp'].push(news3);

MockCountryData['Germany']['generalRestrictions'].push(news1);
MockCountryData['Germany']['generalRestrictions'].push(news2);
MockCountryData['Germany']['generalRestrictions'].push(news3);
MockCountryData['Germany']['entryRestrictions'].push(news4);
MockCountryData['Germany']['entryRestrictions'].push(news5);
MockCountryData['Germany']['transitRestrictions'].push(news2);
MockCountryData['Germany']['transitRestrictions'].push(news3);
MockCountryData['Germany']['covidApp'].push(news2);
MockCountryData['Germany']['covidApp'].push(news3);
