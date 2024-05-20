"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareChain2 = void 0;
class MiddlewareChain2 {
    static middleware(req, res, next) {
        console.log('Hi, I am middleware 2');
        res.send('Hi, I am middleware 2');
    }
}
exports.MiddlewareChain2 = MiddlewareChain2;
