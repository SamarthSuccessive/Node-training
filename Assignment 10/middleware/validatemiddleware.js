const jwt=require('jsonwebtoken');
require('dotenv').config();

const secretkey=process.env.secretkey;
const validateMiddleware=(req,res,next)=>{
    const getauthheader=req.headers.authorization;
    const token=getauthheader.split(" ")[1];
    jwt.verify(token,secretkey,(err,user)=>{
        if(err)
        {
            return res.sendStatus(400);
        }
        req.user=user;
        // console.log(req.user);
        next();
    });
}

module.exports=validateMiddleware;