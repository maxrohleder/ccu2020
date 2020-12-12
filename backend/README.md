# Objective

This backend shall serve the purose of storing user specific information for the covid travel buddy.

All transferred data objects shall be typed in front and backend.

# Quickstart

In folder /backend:

'npm i'
'npm start'

# Project Setup

![](https://media.prod.mdn.mozit.cloud/attachments/2016/12/06/14456/6a97461a03a5329243b994347c47f12b/MVC%20Express.png)

We are using the Controller Router setup endorsed by express. There is one controller for each router. A Router groups routes by their theme.

When adding a route, always see which theme it matches. If none fits; create a new theme with a router and controller.

Themes:

- News
- Settings

## News

This theme will handle all requests corresponding to retrieving non-user specific information. E.g. the Covid-19 News per country or city are returned here from a database which is to be filled with webscrapping.

## Settings

This theme is supporting all set/get requests to user specific information. E.g. the users home country or saved travel information will be stored here in addition to storing it in the cookies. If this info is not found in browser local storage it will be retrieved from this backend.

## Complete Routes Overview

GET /api/news
GET /api/settings

# Coding guidelines and concepts

- We will store all global settings in a .env file and load them using [dotenv](https://www.npmjs.com/package/dotenv). (preload using "$ node -r dotenv/config your_script.js")

- all custom datastructures are to be typed end-to-end (using express and node types)

- Controllers: a set of methods called by the server for specific client requests. **One controller for one thematic.**

- Routes and Routers: A route is a link from a client request to a controller method. Routes are structures by routers. **There is exactly one Route per thematic.**

# Links

- [nodemon](https://www.npmjs.com/package/nodemon) will automatically reload the backend when file changes occur

- this [basic express tutorial](https://medium.com/javascript-in-plain-english/typescript-node-js-express-js-create-a-backend-application-f5110dbe5c19) will help you setup the controller/router scheme.
