const validationRule = require('../config/validationRules.js');

const validateRequest = (req, res, next) => {
    const route = req.originalUrl; 

    if (!validationRule[route]) {
      return next(); 
    }
    
    const { error } = validationRule[route].validate(req.body);
  
    if (error) {
      return res.status(400).json({ message: error.details[0].message }); 
    }
    next(); 
  }
  
  module.exports = validateRequest;