const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const conn=mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("MongoDB is connected");

})
.catch((err)=>{
    console.log("MongoDB connection error",err);
})

module.exports=conn;