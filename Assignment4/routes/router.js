const { addData ,getData} = require('../Controller/dataController');
const {authMiddleware}=require('../middlewares/authMiddleware');
const {accessToken}=require('../middlewares/verifyToken');
const express = require('express');
const secretKey=require('../ utils/config');
const jwt = require('jsonwebtoken');
const customLogMiddleware = require('../middlewares/customLogMiddleware');
const errorHandlerMiddleware = require('../middlewares/errorHandlerMiddleware');
const middlewarechain1 = require('../middlewares/middlewarechain1');
const middlewarechain2 = require('../middlewares/middlewarechain2');
const middlewarechain3 = require('../middlewares/middlewarechain3');
const { customHeaderMiddleware } = require('../middlewares/customHeaderMidddleware');
const rateLimit=require('../middlewares/rateLimiter');
const rateLimiternew = require('../middlewares/rateLImiternew');

const router = express.Router();
router.use(customHeaderMiddleware('X-Custom-Header', 'Custom-Value'));


router.post('/postdata', authMiddleware);

router.post('/gettingdata',accessToken,(req,res,next)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){res.send({result:"Invalid Token"})}
        else{
            res.json({
                message:"Data accessed",
                authData
            })
        }
    })
});

router.get('/customlog',customLogMiddleware);

router.get('/middlewarechaining',middlewarechain1,middlewarechain2,middlewarechain3,(req,res,next)=>{
    console.log("I am the last middleware");
    // res.send("I am the last middleware ")
});

router.get('/limitrate',rateLimit,(req,res,next)=>{
    res.send({message:"Hi there this is the rate limiter "});
});

router.use(errorHandlerMiddleware);
module.exports = router;