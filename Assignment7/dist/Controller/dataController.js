"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.addData = void 0;
const mockData_1 = __importDefault(require("../ utils/mockData"));
const addData = (req, res) => {
    const newData = req.body;
    if (!newData || typeof newData.username !== 'string' || typeof newData.email !== 'string' || typeof newData.password !== 'string') {
        return res.status(400).json({ error: 'Invalid data format' });
    }
    mockData_1.default.push(newData);
    res.send(mockData_1.default);
};
exports.addData = addData;
const getData = (req, res, next) => {
    res.json(mockData_1.default);
};
exports.getData = getData;
