import { ChecklistItem } from "../custom-types";

var item1 = {
  name: "Make appointment for Covid-19 Test",
  checked: false,
};
var item2 = {
  name: "Go see doctor",
  checked: false,
};
var item3 = {
  name: "Conduct Covid-19 Test",
  time: "72 hours",
  checked: false,
};
var item4 = {
  name: "Upload Covid-19 Test result",
  checked: false,
};
var item5 = {
  name: "Receive QR-Code for entry",
  checked: false,
};

const ToDo1: ChecklistItem = {
  title: "Valid Identification Card",
  text: "Check that validation is at least 6 weeks",
  allchecked: false,
  check: [],
};
const ToDo2: ChecklistItem = {
  title: "Negative Covid-19 Test",
  text: "Check that validation is at least 6 weeks",
  allchecked: false,
  check: [],
};
const ToDo3: ChecklistItem = {
  title: "Foreign Health Insurance",
  text: "Check that validation is at least 6 weeks",
  allchecked: false,
  check: [],
};
const ToDo4: ChecklistItem = {
  title: "Check Vaccination report ",
  text: "Check that validation is at least 6 weeks.",
  allchecked: false,
  check: [],
};

export const MockChecklist: ChecklistItem[] = [];

ToDo1.check.push(item1);
ToDo1.check.push(item2);
MockChecklist.push(ToDo1);

ToDo2.check.push(item1);
ToDo2.check.push(item2);
ToDo2.check.push(item3);
ToDo2.check.push(item4);
MockChecklist.push(ToDo2);

ToDo3.check.push(item1);
ToDo3.check.push(item2);
ToDo3.check.push(item5);
MockChecklist.push(ToDo3);

ToDo4.check.push(item2);
ToDo4.check.push(item3);
ToDo4.check.push(item4);
MockChecklist.push(ToDo4);
