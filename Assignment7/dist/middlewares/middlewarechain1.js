"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddlewareChain1 {
    static middleware(req, res, next) {
        console.log('Hi, I am middleware 1');
        next();
    }
}
exports.default = MiddlewareChain1;
