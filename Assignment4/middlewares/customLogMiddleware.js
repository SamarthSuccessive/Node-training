const customLogMiddleware=(req,res,next)=>{
    console.log(
        `Request Method: ${req.method} URL: ${req.url}  Timestamp: ${new Date()}`
      );
      res.send("This is the custom log Middleware");
      next();

}

module.exports=customLogMiddleware;