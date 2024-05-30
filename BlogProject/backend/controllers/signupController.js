const User =require('../models/userSchema');
const bcrypt=require('bcrypt');
const signupController=async(req,res)=>{
try{
const {name,email,password}=req.body;
const hashedPass=await bcrypt.hash(password,10)
// console.log('body =', req.body);
const newUser=await User.create({
    name:name,
    email:email,
    password:hashedPass
})
res.json({
    newUser:newUser
})

}
catch(err){
res.json({
    message:err.message
})
}
}


module.exports=signupController;