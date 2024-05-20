const user=require('../models/userSchema');
const bcrypt=require('bcrypt');
const adminMiddleware=async(req,res,next)=>{
    const {email,password}=req.body;
    try{
        const dbuser=await user.findOne({email:email});
        if(dbuser && bcrypt.compare(password,dbuser.password) && dbuser.role=='admin')
        {
            next();
        }
        else{
            res.status(404).json({ message: "Invalid Credentials" });
        }
    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
}

module.exports=adminMiddleware;