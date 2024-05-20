"use strict"; 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// const port 4001;
(0, server_1.default)().listen(4000, () => {
    console.log(`THe port is listening in the port 4000`);
});
