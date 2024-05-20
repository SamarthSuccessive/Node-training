const jwt = require('jsonwebtoken');
const secretKey=require('../ utils/config');
const authMiddleware = (req, res, next) => {
    const user=req.body;
    jwt.sign({user},secretKey,(err,token)=>{
        res.json(token);
    })
  
};


module.exports={authMiddleware};