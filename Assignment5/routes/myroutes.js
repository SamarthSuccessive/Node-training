const express=require('express');
const router = express.Router();
const createError = require('http-errors');
const validatemiddleware=require('../middleware/validatemiddleware');
// router.use((req,res,next)=>{
//     res.send(createError(400,'Bad Request'));
// })

router.get('/401',(req,res,next)=>{
    if(!req.user)
    {
        next(createError(401,'Unauthourised'));
    }
});

router.get('/403',(req,res,next)=>{
    const isauth=false;
    if(!isauth)
    {
            next(createError(403,'Forbidden'));
    }
})

router.get('/400',(req,res,next)=>{
    const { parameter } = req.query;
    if (!parameter) {
       next(createError(400,'Parameter is missing'));
    } else {
        res.send('Parameter received: ' + parameter);
    }
})

router.get('/200',(req,res,next)=>{
    res.send("200 oK ");
})



router.get('/',(req,res,next)=>{
    next(createError(500, 'Internal Server Error'));
});

router.get('/asynchronuserror',async (req,res,next)=>{

        setTimeout(() => {
            try {
              throw new Error('BROKEN')
            } catch (err) {
              next(err)
            }
          }, 100)
});


router.get('/checkvalidation',validatemiddleware,(req,res,next)=>{
    res.send("All validation checks are passed");
});

module.exports = router;