import { Application, Request, Response } from "express";
import AuthConfig from "../../auth-config";
import UserRoutes from "../../modules/user/user-routes";
import TokenRoutes from "../auth/token-routes";

class Routes {

  private userRouter: UserRoutes;
  private tokenRoute: TokenRoutes;
  private auth: AuthConfig;

  constructor(application: Application, auth: AuthConfig) {
    this.userRouter = new UserRoutes();
    this.tokenRoute = new TokenRoutes();
    this.auth = auth;
    this.initRoutes(application);
  }

  private initRoutes(application: Application): void {
    this.userRouter.routes(application, this.auth);
    this.tokenRoute.routes(application);
  }

}

export default Routes;
