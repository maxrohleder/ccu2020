import { Router } from "express";
import SettingsRouter from "./settings/SettingsRouter";
import DataRouter from "./data/DataRouter";

class MasterRouter {
  private _router = Router();
  private _subrouterData = DataRouter;
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
    this._router.use("/data", this._subrouterData);
    this._router.use("/settings", this._subrouterSettings);
  }
}

export = new MasterRouter().router;
