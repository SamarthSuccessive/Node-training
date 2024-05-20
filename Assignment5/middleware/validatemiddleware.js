const validatemiddleware=(req,res,next)=>{

    const bookid=req.query.bookid;
    const name=req.query.bookname;

    if(!bookid || !name)
    {
        next(createError(400,'query params not found'));
    }
    if(bookid <0 )
    {
        next(createError(400,'Validation Error in Bookid'))
    }
    if(name==='HarryPotter')
    {
        next(createError(401,'Unauthrised Book name'));
    }
    next();
}
module.exports=validatemiddleware;