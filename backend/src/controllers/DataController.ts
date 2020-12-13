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
    return MockNewsData;
  }

  getAllAlerts(): NotificationData[] {
    return MockNotification;
  }

  getAllCountryInfo(): CountriesData {
    return MockCountryData;
  }
}

export = new DataController();
