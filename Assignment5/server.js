const express=require('express');
const app=express();
const userroute=require('./routes/myroutes')
const errorHandlerMiddleware=require('./middleware/errormiddleware');

const server=()=>{
    app.use(express.json());
    app.use(userroute);
    app.use(errorHandlerMiddleware);
    return app;
};

module.exports=server;