const express=require('express');
const routes=express.Router();

routes.post('/seeder',(req,res,next)=>{
    res.send("Hi there");

});

module.exports=routes;
