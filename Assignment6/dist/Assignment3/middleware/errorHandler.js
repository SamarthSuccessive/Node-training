"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); 
const errorhandler = (error, req, res, next) => {
    res.status(406).send(error.message);
};
exports.default = errorhandler;
