const createError = require('http-errors');
const errorHandlerMiddleware=(err, req, res, next)=>{

    if (!err.status) {
        err = createError(500, err.message);
      }
      res.status(err.status);
      res.send({
        error: {
          status: err.status,
          message: err.message
        }
      
    })
};

module.exports=errorHandlerMiddleware;