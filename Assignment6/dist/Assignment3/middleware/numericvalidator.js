"use strict";  
Object.defineProperty(exports, "__esModule", { value: true });
const numericValidator = (req, res, next) => {
    const { rollno, age } = req.query;
    if (!isNaN(Number(rollno)) && !isNaN(Number(age))) {
        next();
    }
    else {
        next(new Error("The query is not numeric"));
    }
};
exports.default = numericValidator;
