const express=require('express');
const app=express();
const routes=require('./routes/routes.js');


require('./config');
app.use(express.json());
app.use(routes);


app.listen(4000,()=>{
    console.log('Express server is running at port 4000');
});