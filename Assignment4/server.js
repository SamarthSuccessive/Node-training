const express=require('express');
const app=express();
const router=require('./routes/router');
// const { customHeaderMiddleware } = require('./middlewares/customHeaderMidddleware');


const server=()=>{
    //parsing
    // app.use(customHeaderMiddleware('X-Custom-Header', 'Custom-Value'));
    app.use(express.json());
    app.use(router);
    return app;

}

module.exports=server;