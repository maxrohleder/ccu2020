import { NextFunction, Request, Response, Router } from "express";
import DataController from "../../controllers/DataController";

class DataRouter {
  private _router = Router();
  private _controller = DataController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.defaultMethod());
    });
  }
}

export = new DataRouter().router;
