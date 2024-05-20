const middlewarechain1=(req,res,next)=>{
    console.log('Hi i am middleware 1');
    next();
}

module.exports=middlewarechain1;