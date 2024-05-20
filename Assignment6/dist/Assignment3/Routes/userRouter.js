"use strict";  
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const validationSchema_1 = __importDefault(require("../middleware/validationSchema"));
const errorHandler_1 = __importDefault(require("../middleware/errorHandler"));
const numericvalidator_1 = __importDefault(require("../middleware/numericvalidator"));
const router = express_1.default.Router();
router.post("/register", validationSchema_1.default, errorHandler_1.default, (req, res) => {
    res.send("Validation Successful");
});
router.get("/name", numericvalidator_1.default, errorHandler_1.default, (req, res, next) => {
    res.send("The queries is correct .It is numeric");
});
exports.default = router;
