const errorHandlerMiddleware=(err,req,res,next)=>{
    console.log(`hi this is ${err}`);
    res.send(err);
    next();
}

module.exports=errorHandlerMiddleware;