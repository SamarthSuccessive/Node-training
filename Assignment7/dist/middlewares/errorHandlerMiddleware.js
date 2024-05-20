"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandlerMiddleware {
}
ErrorHandlerMiddleware.errorHandlerMiddleware = (err, req, res, next) => {
    console.log(`hi this is ${err}`);
    res.send(err);
    next();
};
exports.default = ErrorHandlerMiddleware;
