const express=require('express');
require('dotenv').config()
const router=express.Router();

const coustomer=require('../models/coustomerModel');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const validateMiddleware = require('../middleware/validatemiddleware');
const secretkey=process.env.secretkey;

//for sign up 
router.post('/signup',async (req,res,next)=>{
    const {username,email}=req.body;
    const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(req.body.password,salt);


    const newCoustomer=new coustomer({
        username:username,
        email:email,
        password:hashedPassword
    })

    const result=await newCoustomer.save();
    if(result)
    {
        res.send(result);
    }
});

//for login 

router.post('/login',async (req,res,next)=>{
    const {username,email,password}=req.body;

    const user=await coustomer.findOne({
        username:username
    });

    const validPassword=await bcrypt.compare(password,user.password);
    if(!validPassword)
    {
        res.status(400).send("Invalid Password Try Again!!!");

    }
    else{
        //login authenticates ,now create a Jwt token and store
        jwt.sign({user},secretkey,(err,token)=>{
            if(err)
            {
                return res.send(err);
            }
            res.send(token);
        })
    }
    next();
});

router.get('/product',validateMiddleware,(req,res,next)=>{
    res.send(`${req.user.user.username}, You are validate`);
    next();
})
module.exports=router;