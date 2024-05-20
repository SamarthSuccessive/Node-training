"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessToken = void 0;
// interface CustomRequest extends Request {
//     token?: string;
// }
const accessToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        if (bearer.length === 2 && bearer[0] === 'Bearer') {
            req.headers.token = bearer[1];
            next();
        }
        else {
            res.status(403).json({ error: 'Invalid Authorization header format' });
        }
    }
    else {
        res.status(403).json({ error: 'Authorization header missing' });
    }
};
exports.accessToken = accessToken;
