import { Router } from "express";
import SettingsRouter from "./settings/SettingsRouter";
import NewsRouter from "./news/NewsRouter";

class MasterRouter {
  private _router = Router();
  private _subrouterNews = NewsRouter;
  private _subrouterSettings = SettingsRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers
   */
  private _configure() {
    this._router.use("/news", this._subrouterNews);
    this._router.use("/settings", this._subrouterSettings);
  }
}

export = new MasterRouter().router;
