export type ForumPost = {
  text: string;
  upvote: number;
  voted: boolean;
  voted_up: boolean;
  voted_down: boolean;
  verified: boolean;
  creation: Date;
  replies: ForumPost[];
};

export type ChecklistItem = {
  title: string;
  text: string;
  allchecked: boolean;
  check: any[];
};

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

export type CountriesData = {
  Germany: CountryData;
  France: CountryData;
  Portugal: CountryData;
  Spain: CountryData;
  USA: CountryData;
};

export type NewsData = {
  head: string;
  link: string;
  picture: string;
  time: Date;
};

export type NewsByCountriesData = {
  Germany: NewsData[];
  France: NewsData[];
  Portugal: NewsData[];
  Spain: NewsData[];
  USA: NewsData[];
};

export type AccountInfo = {
  isLoggedIn: boolean;
  name: string;
  email: string;
  emailVerified: boolean;
  picture: string;
};

export type NotificationData = {
  head: string;
  text: string;
  icon: string;
  time: string;
};
