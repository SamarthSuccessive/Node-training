"use strict";  
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./Routes/userRouter"));
const app = (0, express_1.default)();
const server = () => {
    app.use(express_1.default.json());
    app.use(userRouter_1.default);
    return app;
};
exports.default = server;
