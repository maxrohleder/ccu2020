import { NotificationData } from "../custom-types";

const notification1: NotificationData = {
  head: "Flight cancellation",
  text: "flight got cancelled",
  icon: "airplanemode_inactive",
  time: "now",
};

const notification2: NotificationData = {
  head: "Daily Case update",
  text: "+ 2400 new cases",
  icon: "trending_up",
  time: "now",
};
const notification3: NotificationData = {
  head: "Daily case update",
  text: "+ 2400 new cases in Berlin",
  icon: "trending_up",
  time: "16min",
};
const notification4: NotificationData = {
  head: "Updated curfew from Monday on",
  text: "23:00 h in Berlin",
  icon: "error_outline",
  time: "32min",
};
const notification5: NotificationData = {
  head: "Daily case update",
  text: "- 2400 new cases in Berlin",
  icon: "trending_down",
  time: "1h 32min",
};

export const MockNotification: NotificationData[] = [];

MockNotification.push(notification1);
MockNotification.push(notification2);
MockNotification.push(notification3);
MockNotification.push(notification4);
MockNotification.push(notification5);
MockNotification.push(notification5);
MockNotification.push(notification1);
MockNotification.push(notification4);
MockNotification.push(notification3);
