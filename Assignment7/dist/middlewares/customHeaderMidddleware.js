"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomHeaderMiddleware {
    static setCustomHeader(headerName, headerValue) {
        return (req, res, next) => {
            req.headers.headerName = headerValue;
            next();
        };
    }
}
exports.default = CustomHeaderMiddleware;
