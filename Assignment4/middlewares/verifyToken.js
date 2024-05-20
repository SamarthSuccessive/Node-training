const accessToken=(req,res,next)=>{
    const bearerheader=req.headers.authorization;
    if(typeof bearerheader !== 'undefined')
    {
        const bearer=bearerheader.split(" ");
        const token=bearer[1];
        req.token=token;
        next();
    }
    else{
        res.send({result:"Token is not valid"});
    }
};

module.exports={accessToken};