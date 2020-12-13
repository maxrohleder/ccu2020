import dotenv from "dotenv";
import express from "express";

import MasterRouter from "./routers/MasterRouter";

// load all environment vairables. Use a production version for deployment
dotenv.config({ path: ".env" });

/**
 * Rest API implementation for the Covid Travel buddy. Routes defined in api.md
 * @description Contains the routing system with one router/controller pair per theme.
 */
class Server {
  public app = express();
  public router = MasterRouter;
}

// initialize server app
const server = new Server();
server.app.use("/api", server.router);

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () =>
    console.log(`> Listening http://localhost:${port}/`)
  );
})();
