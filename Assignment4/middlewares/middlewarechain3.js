const middlewarechain3=(req,res,next)=>{
    console.log('Hi i am middleware 3');
    next();
}

module.exports=middlewarechain3;