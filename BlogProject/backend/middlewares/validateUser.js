const {body} = require('express-validator');

const validateUser = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string'),
    body('email')
        .isEmail().withMessage('Email is not valid')
        .notEmpty().withMessage('Email is required'),
    body('password')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
        .matches(/[A-Za-z]/).withMessage('Password must contain at least one alphabetic character')
        .matches(/\d/).withMessage('Password must contain at least one numeric character')
        .matches(/[@$!%*?&]/).withMessage('Password must contain at least one special character'),
];
module.exports=validateUser;