"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../ utils/config"));
class AuthMiddleware {
    static generateToken(user) {
        return jsonwebtoken_1.default.sign({ user }, config_1.default);
    }
    static auth(req, res, next) {
        const user = req.body;
        const token = AuthMiddleware.generateToken(user);
        res.json(token);
    }
}
exports.default = AuthMiddleware;
