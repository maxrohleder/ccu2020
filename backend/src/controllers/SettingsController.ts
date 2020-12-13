import { ChecklistItem } from "../custom-types";
import { MockChecklist } from "../mock-objects/checklistData";

class SettingsController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }
  getGeneralChecklist(): ChecklistItem[] {
    console.log("Checklist Requested");
    return MockChecklist;
  }
}

export = new SettingsController();
