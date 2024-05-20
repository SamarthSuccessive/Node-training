const server=require('./server');
require('dotenv').config();
const port=process.env.port;
require('./config');

server().listen(port,()=>{
    console.log(`Hi I am listening at Port: ${port}`)
});