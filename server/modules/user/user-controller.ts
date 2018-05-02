import { Request, Response } from "express";
import * as HttpStatus from "http-status";
import * as _ from "lodash";
import HttpHandler from "../../api/handler/http-handler";
import UserService from "./user-service";

class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public findAll(request: Request, response: Response) {
    HttpHandler.defaultResponse(request, response,
      () => this.userService.findAll());
  }

  public create(request: Request, response: Response) {
    HttpHandler.defaultResponse(request, response,
      () => this.userService.create(request.body));
  }

  public findById(request: Request, response: Response) {
    const userId = parseInt(request.params.id, 10);
    HttpHandler.defaultResponse(request, response,
      () => this.userService.findById(userId));
  }

  public update(request: Request, response: Response) {
    const userId = parseInt(request.params.id, 10);
    const userToUpdate = request.body;
    HttpHandler.defaultResponse(request, response,
      () => this.userService.updateById(userId, userToUpdate));
  }

  public delete(request: Request, response: Response) {
    const userId = request.params.id;
    HttpHandler.defaultResponse(request, response,
      () => this.userService.removeById(userId));
  }
}

export default UserController;
