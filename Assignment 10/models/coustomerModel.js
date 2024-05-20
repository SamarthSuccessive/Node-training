const mongoose=require('mongoose');

const coustomerSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email address format',
        },
      },
    password:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Coustomer",coustomerSchema);