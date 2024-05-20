const express=require('express')
const app=express();
const router=require('./routers/route');

const server=()=>{
    app.use(express.json());
    app.use(router);
    return app;
}

module.exports=server;