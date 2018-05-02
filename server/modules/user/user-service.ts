import * as Bluebird from "bluebird";

const model = require("../../models");

export interface UserInterface {

  readonly id: number;
  name: string;
  email: string;
  password: string;

}

class UserService {

  public create(user: UserInterface) {
    return model.Users.create(user);
  }

  public updateById(id: number, user: any) {
    return model.Users.update(user, {
      where: { id },
      fields: ["name", "email", "password"],
      hooks: true,
      individualHooks: true
    }).then((users) => users);
  }

  public findAll(): Bluebird<UserInterface[]> {
    return model.Users.findAll({
      order: ["createdAt"]
    }).then(populateUsers);
  }

  public findById(id: number): Bluebird<UserInterface> {
    return model.Users.findOne({
      where: { id }
    }).then(populateUser);
  }

  public findByEmail(email: string): Bluebird<UserInterface> {
    return model.Users
      .findOne({ where: { email } })
      .then(populateUser);
  }

  public removeById(id: number) {
    return model.Users.destroy({
      where: { id }
    });
  }

}

export function populateUser({ id, name, email, password }): UserInterface {
  return { id, name, email, password };
}

export function populateUsers(data: any[]): UserInterface[] {
  return data.map(populateUser);
}

export default UserService;
