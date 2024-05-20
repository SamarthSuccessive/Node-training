function errorhandler(err, req, res, next)
{ 
    res.status(406).send(err.message);
}

module.exports=errorhandler;