const express=require('express');
const routes=require('./routers/routes');
const app=express();
require('./config');

const playingteam=require('models/playingcountriesModel');

const data=[{name:"Harry",footballteam:"BBQ2"},{name:"Ram",footballteam:"BBQ3"}];

async function insertdata()
{
    await playingteam.create(data);
}

insertdata();

app.use(express.json());
app.use(routes);
app.listen(4000,()=>{
    console.log("Port will started at 4000");
});