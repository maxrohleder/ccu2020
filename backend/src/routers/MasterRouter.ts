import { Router } from "express";
import SettingsRouter from "./settings/SettingsRouter";
import DataRouter from "./data/DataRouter";
import ForumRouter from "./forum/ForumRouter";

class MasterRouter {
  private _router = Router();
  private _subrouterData = DataRouter;
  private _subrouterSettings = SettingsRouter;
  private _subrouterForum = ForumRouter;

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
    this._router.use("/forum", this._subrouterForum);
  }
}

export = new MasterRouter().router;
