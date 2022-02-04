"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
require("dotenv/config");
var cors_1 = __importDefault(require("cors"));
var Errors_1 = require("./Errors");
var handleErrors = new Errors_1.HandleErrors();
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(handleErrors.handle);
app.listen(process.env.SERVER_PORT);
// app.listen(process.env.SERVER_PORT || 4000, () => {
//   console.log(["API-FINANCEIRO"], [`ACCESSIBLE AT DOOR ${process.env.SERVER_PORT}`])
// })
