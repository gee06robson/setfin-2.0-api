"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var ensureAuthenticated = function (request, response, next) {
    var _a;
    var authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            error: "token.invalid"
        });
    }
    var _b = authToken.split(" "), token = _b[1];
    try {
        var _c = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET), sub = _c.sub, user = _c.user;
        request.user_id = sub,
            request.unit_id = (_a = user.unity) === null || _a === void 0 ? void 0 : _a.id;
        return next();
    }
    catch (error) {
        return response.status(401).json({
            error: "token.expired"
        });
    }
};
exports.ensureAuthenticated = ensureAuthenticated;
