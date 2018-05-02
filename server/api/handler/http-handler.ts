import * as bcrypt from "bcryptjs";
import { Request, Response } from "express";
import * as HttpStatus from "http-status";
import * as jwt from "jwt-simple";
import * as _ from "lodash";
import { callback } from "testdouble";

const config = require("../../config/env/config")();

class HttpHandler {

  public static defaultResponse(
    request: Request,
    response: Response,
    _callback) {
    _callback()
      .then((data) => response.status(HttpStatus.OK)
        .json({ payload: data }))
      .catch((error) => response.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ payload: error }));
  }

  public static authSuccess(
    response: Response,
    credentialFromUser: any,
    userFromDb: any) {
    const isMatch = bcrypt.compareSync(
      credentialFromUser.password,
      userFromDb.password
    );
    if (isMatch) {
      const payload = { id: userFromDb.id };
      const objectToResponse = {
        token: jwt.encode(payload, config.secret)
      };
      response
        .status(HttpStatus.OK)
        .json(objectToResponse)
        .end();
    } else {
      response.sendStatus(HttpStatus.UNAUTHORIZED);
    }
  }

  public static authFail(response: Response, error) {
    response.sendStatus(HttpStatus.UNAUTHORIZED).end();
  }

  constructor() {
    throw new Error("HttpHandler cannot be instantiated");
  }

}

export default HttpHandler;
