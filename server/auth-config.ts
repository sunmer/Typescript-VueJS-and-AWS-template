import * as passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import UserService from "./modules/user/user-service";
const config = require("./config/env/config")();
import * as _ from "lodash";

class AuthConfig {

  private _userService: UserService;
  private _options: any;

  constructor() {
    this._userService = new UserService();
    this._options = {
      secretOrKey: config.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeader()
    };

    passport.use(new Strategy(this._options, (jwtPayload, done) => {
      this._userService
        .findById(jwtPayload.id)
        .then((user) => {
          if (!_.isEmpty(user)) {
            done(null, {
              id: user.id,
              email: user.email
            });
          } else {
            done(null, false);
          }

          return null;
        })
        .catch((error) => done(error, null));
    }));
  }

  public initialize() {
    return passport.initialize();
  }

  public authenticate() {
    return passport.authenticate("jwt", { session: false });
  }

}

export default AuthConfig;
