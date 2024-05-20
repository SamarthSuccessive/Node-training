const mongoose=require('mongoose');


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 3,
        maxlength: 50
    },
    rollno:{
        type:Number,
        required:true
    }
});


module.exports=mongoose.model('User',userSchema);