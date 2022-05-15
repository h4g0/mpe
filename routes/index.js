"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var read_spreadsheet_1 = __importDefault(require("./read_spreadsheet/read_spreadsheet"));
var solver_1 = __importDefault(require("./solver/solver"));
var express = require("express");
var app = express.Router();
app.use("/readspreadsheet", read_spreadsheet_1.default);
app.use("/solver", solver_1.default);
exports.default = app;
