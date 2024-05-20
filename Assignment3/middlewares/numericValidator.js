function numericValidator(req,res,next)
{
    const {rollno,age}=req.query;
    if(!isNaN(rollno) && !isNaN(age))
    {
        next();
    }
    else{
        next(new Error("The query is not numeric"));
    }
}

module.exports=numericValidator;