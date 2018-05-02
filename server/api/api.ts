import * as bodyParser from "body-parser";
import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";
import AuthConfig from "../auth-config";
import { errorHandlerApi } from "./error-handler-api";
import Routes from "./routes/routes";

class Api {

  public express: express.Application;
  private authConfig: AuthConfig;

  constructor() {
    this.express = express();
    this.authConfig = new AuthConfig();
    this.express.use(morgan("dev"));
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(errorHandlerApi);
    this.express.use(this.authConfig.initialize());
    const routes = new Routes(this.express, this.authConfig);
  }

}

export default new Api().express;
