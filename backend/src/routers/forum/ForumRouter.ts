import { NextFunction, Request, Response, Router } from "express";
import ForumController from "../../controllers/ForumController";

class ForumRouter {
  private _router = Router();
  private _controller = ForumController;

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
    /**
     * This route returns all posts in the forum to display.
     */
    this._router.get(
      "/all",
      (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json(this._controller.getAllPosts());
      }
    );
  }
}

export = new ForumRouter().router;
