import { MockChecklist } from "../mock-objects/checklistData";

class SettingsController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }
  getGeneralChecklist() {
    return MockChecklist;
  }
}

export = new SettingsController();
