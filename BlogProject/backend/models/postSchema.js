const mongoose=require('mongoose');
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    discription: {
        type: String,
        required: true
    },
    firebaseimage:{
        type:String,
        required:true
    },
    user: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    likes: {
        type: [String], 
        default: []
      }
},{ timestamps: true });

module.exports= mongoose.model('post', PostSchema);

