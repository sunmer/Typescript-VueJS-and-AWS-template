import { Application, Request, Response } from "express";
import * as HttpStatus from "http-status";
import AuthConfig from "../../auth-config";
import UserController from "./user-controller";

let userController: UserController;

class UserRoutes {

  constructor() {
    userController = new UserController();
  }

  public routes(application: Application, auth: AuthConfig) {
    application.route("/api/test")
      .get(function(request: Request, response: Response) {
          response.status(HttpStatus.OK).json("PING");
      });

    application.route("/api/users")
      .post((request: Request, response: Response) =>
        this.create(request, response));

    application.route("/api/users")
      .get((request: Request, response: Response) =>
        this.index(request, response));

    application.route("/api/users/:id")
      .all(auth.authenticate())
      .get((request: Request, response: Response) =>
        this.findOne(request, response))
      .put((request: Request, response: Response) =>
        this.updateOne(request, response))
      .delete((request: Request, response: Response) =>
        this.deleteOne(request, response));
  }

  public index(request: Request, response: Response) {
    userController.findAll(request, response);
  }

  public create(request: Request, response: Response) {
    userController.create(request, response);
  }

  public findOne(request: Request, response: Response) {
    userController.findById(request, response);
  }

  public updateOne(request: Request, response: Response) {
    userController.update(request, response);
  }

  public deleteOne(request: Request, response: Response) {
    userController.delete(request, response);
  }

}

export default UserRoutes;
