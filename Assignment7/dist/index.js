"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./server"));
dotenv_1.default.config();
const PORT = parseInt(process.env.PORT, 10) || 4001;
(0, server_1.default)().listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});
