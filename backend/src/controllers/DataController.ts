import { MockCountryData } from "../mock-objects/countryData";
import { MockNewsData } from "../mock-objects/newsData";
import { MockNotification } from "../mock-objects/notificationData";
class DataController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }

  getAllNews() {
    return MockNewsData;
  }

  getAllAlerts() {
    return MockNotification;
  }

  getAllCountryInfo() {
    return MockCountryData;
  }
}

export = new DataController();
