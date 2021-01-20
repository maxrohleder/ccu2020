# ccu2020 Team 5

This is the source code repository for the user centered design course 2020 at IST lisbon.

Project Backlog:
https://team-5-ccu.wixsite.com/website

## Covid Travel Buddy

In these difficult times, travelling has become very strenuous. This is largely due to regulations differing by region and often varying over time. We want to solve this issue by creating a simple web-app, that briefly informs about the circumstances of the destination country. Logically, our key user group will be travellers. That includes business travellers, tourists and exchange students.

The very first version of our Application **Covid Travel Buddy** is now released. See the screens below for a quick impression:

| The dashboard | Updated Information | Real Time Warnings | Travel Planning |
| :-----------: | :-----------------: | :----------------: | --------------- |

![Example views of Covid Travell Buddy](https://github.com/maxrohleder/ccu2020/blob/assets/img/collage.png)

## Quickstart

See here for prerequisites:
https://angular.io/guide/setup-local

(make sure to invoke all calls to angular and npm in folder /frontend)

After cloning the repository, **install** all dependencies: `npm i`

To **compile** and preview the project, run: `ng serve --open`

To create a **new component** called xyz, run: `ng generate component xyz` or `ng g c xyz`

## App views

- Dashboard View: (beinhaltet Kacheln, die zu Kernfunktionalität der App führen)
  - News (Newsfeed aller neuer Regulierungen etc)
  - Get Informed (Seite mit Auswahl von Land --> Infos zu Numbers und Regulationen, zusätzlich Activities etc)
  - Trips (Reiseplanung in Bezug auf Einschränkungen, Start-Zwischen-Ende)
- News
- Get Informed
- Trips
