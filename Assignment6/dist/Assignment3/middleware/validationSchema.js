"use strict"; 
Object.defineProperty(exports, "__esModule", { value: true });
const validationmiddleware = (req, res, next) => {
    const { password, name, emailid } = req.body;
    if (!password || !name || !emailid) {
        next(new Error('Name, email, and password are required fields'));
    }
    if (password.length < 7) {
        next(new Error('Password should be of length greater than 7'));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailid)) {
        next(new Error('correct the emailid'));
    }
    next();
    // console.log("hii there  i am AFTER NEXT")
};
exports.default = validationmiddleware;
