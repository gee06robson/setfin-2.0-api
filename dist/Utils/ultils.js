"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleDate = void 0;
var HandleDate = function (date) {
    var toBreak = date.split("/").reverse().join("/");
    toBreak = new Date(toBreak).toISOString();
    return toBreak;
};
exports.HandleDate = HandleDate;
