import * as Chai from "chai";
import * as mocha from "mocha";
import * as td from "testdouble";
const supertest = require("supertest");
import App from "../../../api/api";

const app = App;
const request = supertest;
const expect = Chai.expect;
const testDouble = td;

export { app, request, expect, testDouble };
