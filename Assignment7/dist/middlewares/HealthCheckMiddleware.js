"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthCheckMiddleware {
    static HealthCheckMiddleware(req, res, next) {
        // res.status(200).json({ status: "OK" });
        console.log("okk api is running");
    }
}
exports.default = HealthCheckMiddleware;
