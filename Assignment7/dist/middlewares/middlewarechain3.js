"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareChain3 = void 0;
class MiddlewareChain3 {
    static middleware(req, res, next) {
        console.log('Hi, I am middleware 3');
        next();
    }
}
exports.MiddlewareChain3 = MiddlewareChain3;
