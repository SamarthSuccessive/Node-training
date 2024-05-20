let totallimit=5;
let timelimit=10;
let currenttime=0;
const obj={};

const rateLimiternew=(req,res,next)=>{

    if(obj.hasOwnProperty(req.ip)===true)
    {
        obj[req.ip]=obj[req.ip]+1;
        if(obj[req.ip]>totallimit && (Date.now()/1000-currenttime)<timelimit)
        {
            return res.send("Rate limit exceeded");
        }

    }
    else{
        obj[req.ip]=1;
        currenttime=Date.now()/1000;
    }
    next();
};

module.exports=rateLimiternew;