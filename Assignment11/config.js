const mongoose=require('mongoose');

const connect=mongose.connect('mongodb+srv://samarth:Password@football.otvumur.mongodb.net/test').then(()=>{
    console.log("Mongo db server started");
}).catch((err)=>{
    console.log("Error:",err);
});

module.exports=connect;