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
    this._router.get(
      "/allCountries",
      (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(this._controller.getAllCountryInfo());
      }
    );

    this._router.get(
      "/news",
      (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(this._controller.getAllNews());
      }
    );

    this._router.get(
      "/alerts",
      (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(this._controller.getAllAlerts());
      }
    );
  }
}

export = new DataRouter().router;
