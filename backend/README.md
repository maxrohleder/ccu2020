# Objective

This backend shall serve the purose of storing user specific information for the covid travel buddy.

All transferred data objects shall be typed in front and backend.

# Coding guidelines

- We will store all global settings in a .env file and load them using [dotenv](https://www.npmjs.com/package/dotenv). (preload using "$ node -r dotenv/config your_script.js")

- all custom datastructures are to be typed end-to-end (using express and node types)

# to make things easier

- [nodemon](https://www.npmjs.com/package/nodemon) will automatically reload the backend when file changes occur

- good tutorial [here](https://medium.com/javascript-in-plain-english/typescript-node-js-express-js-create-a-backend-application-f5110dbe5c19)
