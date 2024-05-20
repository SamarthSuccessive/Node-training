const mongoose=require('mongoose');

const conn=mongoose.connect("mongodb://localhost:27017/my_db")
.then(()=>{
console.log('MongoDB is connected');
})
.catch((err)=>{
   console.log("Error is ",err); 
})

module.exports=conn;