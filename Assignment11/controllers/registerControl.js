const user=require('../models/userSchema');
const bcrypt=require('bcrypt');

const registerControl=async(req,res,next)=>{
    const {email,password,role}=req.body;
    const salt=bcrypt.salt();
    const hashpassword=bcrypt.hash(password,salt);
    const newUser=new user(email,hashpassword,role);
    const result=await newUser.save();
    if(result)
    {
        res.status(200).json(result);
    }
    else{
        const err=new Error("There is Error in creating the user");
        res.send(err);
    }
    next();
}

module.exports=registerControl;