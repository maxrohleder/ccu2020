import { ChecklistItem } from "../custom-types";
import { MockChecklist } from "../mock-objects/checklistData";

class SettingsController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }
  getGeneralChecklist(): ChecklistItem[] {
    return MockChecklist;
  }
}

export = new SettingsController();
