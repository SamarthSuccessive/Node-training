const mongoose=require('mongoose');


const studentSchema=mongoose.Schema({

studentName:{
    type:String,
    required:true
},

studentAge:{
    type:Number,
    required:true
},
email:{
   type:String,
   required:true,
   unique:true
},
password:{
    type:String,
    required:true,
  
}

});

const Student=mongoose.model('Student',studentSchema);
module.exports=Student;