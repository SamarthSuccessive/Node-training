const middlewarechain2=(req,res,next)=>{
    console.log('Hi i am middleware 2');
    res.send('Hi i am middleware 2');
    next();
}

module.exports=middlewarechain2;