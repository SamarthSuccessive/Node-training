const mongoose=require('mongoose');

const conn=mongoose.connect('mongodb+srv://samarth:Password@football.otvumur.mongodb.net/').then(()=>{
    return console.log('Mongodb is connected');
}).catch((err)=>{
return console.log('Error in connection of mongodb');
})

module.exports=conn;