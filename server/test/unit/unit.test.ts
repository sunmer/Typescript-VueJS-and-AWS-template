import UserService from "../../modules/user/user-service";
import { expect, testDouble } from "./config/helpers";

describe("User service", () => {

  const userTest = {
    id: 1,
    name: "New unit test",
    email: "usernewunit@email.com",
    password: "123456"
  };

  describe("UserService.create", () => {
    it("should create a new user", () => {
      const userService: UserService = new UserService();
      return userService.create(userTest).then((data) => {
        expect(data.dataValues).to.have.all.keys(
          ["email", "id", "name", "password", "updatedAt", "createdAt"]);
      });
    });
  });

  describe("UserService.findById", () => {
    it("should find a user by id", () => {
      const userService = new UserService();
      return userService.findById(userTest.id).then((user) => {
        expect(user.id).to.be.equal(userTest.id);
        expect(user.name).to.be.equal(userTest.name);
        expect(user.email).to.be.equal(userTest.email);
      });
    });
  });

  describe("UserService.findByEmail", () => {
    it("should find a user by email", () => {
      const userService = new UserService();
      return userService.findByEmail(userTest.email).then((user) => {
        expect(user.id).to.be.equal(userTest.id);
        expect(user.name).to.be.equal(userTest.name);
        expect(user.email).to.be.equal(userTest.email);
      });
    });
  });

  describe("UserService.updateById", () => {
    it("should update a user by their id", () => {
      const userToUpdated = {
        name: "new name",
        email: "newemailupdated@gmail.com"
      };
      const userService = new UserService();
      return userService.updateById(1, userToUpdated).then((usersUpdated) => {
        expect(usersUpdated[0]).to.be.equal(1);
      });
    });
  });

  describe("UserService.findAll", () => {
    it("should return a list of all users", () => {
      const userService = new UserService();
      return userService.findAll().then((users) => {
        expect(users).to.be.an("array");
        expect(users[0]).to.have.all.keys(["email", "id", "name", "password"]);
      });
    });
  });

  describe("UserService.removeById", () => {
    it("should remove a user by their id", () => {
      const userService = new UserService();
      return userService.removeById(1).then((data) => {
        expect(data).to.be.equal(1);
      });
    });
  });

});
