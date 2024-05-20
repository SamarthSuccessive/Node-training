"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const customLogMiddleware_1 = __importDefault(require("../middlewares/customLogMiddleware"));
const errorHandlerMiddleware_1 = __importDefault(require("../middlewares/errorHandlerMiddleware"));
const middlewarechain1_1 = __importDefault(require("../middlewares/middlewarechain1"));
const middlewarechain2_1 = require("../middlewares/middlewarechain2");
const middlewarechain3_1 = require("../middlewares/middlewarechain3");
const customHeaderMidddleware_1 = __importDefault(require("../middlewares/customHeaderMidddleware")); // Typo in "Midddleware"?
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../ utils/config"));
const HealthCheckMiddleware_1 = __importDefault(require("../middlewares/HealthCheckMiddleware"));
const router = express_1.default.Router();
router.use(customHeaderMidddleware_1.default.setCustomHeader("X-Custom-Header", "Custom-Value"));
router.use(HealthCheckMiddleware_1.default.HealthCheckMiddleware);
router.post("/postdata", authMiddleware_1.default.auth);
router.post("/gettingdata", (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send("Authorization header is missing");
        }
        const token = authHeader.split(" ")[1];
        const verified = jsonwebtoken_1.default.verify(token, config_1.default);
        console.log(verified);
        if (verified) {
            return res.send("Successfully Verified");
        }
        else {
            return res.status(401).send("Invalid token");
        }
    }
    catch (error) {
        return res.status(401).send("Invalid token");
    }
});
router.get("/customlog", customLogMiddleware_1.default.customLogsMiddleware);
router.get("/middlewarechaining", middlewarechain1_1.default.middleware, middlewarechain2_1.MiddlewareChain2.middleware, middlewarechain3_1.MiddlewareChain3.middleware, (req, res, next) => {
    console.log("I am the last middleware");
});
router.use(errorHandlerMiddleware_1.default.errorHandlerMiddleware);
exports.default = router;
