import UserService from "../../modules/user/user-service";
import HttpHandler from "../handler/http-handler";

import { Application, Request, Response } from "express";
import * as _ from "lodash";

class TokenRoutes {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public routes(application: Application) {
    application.route("/api/auth")
      .post((request: Request, response: Response) =>
        this.auth(request, response));
  }

  public auth(request: Request, response: Response) {
    const credentials = {
      email: request.body.email,
      password: request.body.password
    };

    if (credentials.hasOwnProperty("email") &&
      credentials.hasOwnProperty("password")) {
      this.userService.findByEmail(credentials.email)
        .then(_.partial(HttpHandler.authSuccess, response, credentials))
        .catch(_.partial(HttpHandler.authFail, response));
    }
  }
}

export default TokenRoutes;
