"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomLogMiddleware {
}
CustomLogMiddleware.customLogsMiddleware = (req, res, next) => {
    console.log(`Request Method: ${req.method} URL: ${req.url}  Timestamp: ${new Date()}`);
    res.send("This is the custom log Middleware");
    next();
};
exports.default = CustomLogMiddleware;
