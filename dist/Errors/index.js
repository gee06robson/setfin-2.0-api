"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrors = void 0;
var HandleErrors = /** @class */ (function () {
    function HandleErrors() {
    }
    HandleErrors.prototype.handle = function (err, request, response, next) {
        if (err instanceof Error) {
            return response.status(400).json({
                error: err.message
            });
        }
        return response.status(500).json({
            status: "error",
            message: "Internal Server Error"
        });
    };
    return HandleErrors;
}());
exports.HandleErrors = HandleErrors;
