const Post=require('../models/postSchema');
const createController=async(req,res)=>{
const {title,discription,firebaseimage,user,email}=req.body;
// console.log(req.body);
if(!title || !discription || !firebaseimage || !user || !email)
{
    return res.status(400).json({error:"Empty fields"});
}

try{
    const newPost=await Post.create({title:title,discription:discription,firebaseimage:firebaseimage,user:user,email:email});
    res.status(200).json({
        success:true,
        newPost
    });
}catch(error)
{
    return res.status(500);
}

}

module.exports=createController;