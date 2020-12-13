import {
  CountriesData,
  NewsByCountriesData,
  NotificationData,
} from "../custom-types";
import { MockCountryData } from "../mock-objects/countryData";
import { MockNewsData } from "../mock-objects/newsData";
import { MockNotification } from "../mock-objects/notificationData";
class DataController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }

  getAllNews(): NewsByCountriesData {
    console.log("News Requested");
    return MockNewsData;
  }

  getAllAlerts(): NotificationData[] {
    console.log("Notifications Requested");
    return MockNotification;
  }

  getAllCountryInfo(): CountriesData {
    console.log("Contriesdata Requested");
    return MockCountryData;
  }
}

export = new DataController();
