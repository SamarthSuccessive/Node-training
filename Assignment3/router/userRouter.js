const express = require("express");

const bodyParser = require('body-parser');
const validationmiddleware=require('../middlewares/validationSchema');
const errorhandler=require('../middlewares/errorHandler');
const countryValidator=require('../middlewares/countryValidator');
const numericValidator=require('../middlewares/numericValidator');
const validateRequest = require("../middlewares/validateRequest.js");

const router = express.Router();

router.post('/register', validationmiddleware,errorhandler,(req, res) => {
    res.send("Validation Successful");
});

router.get('/name',numericValidator,errorhandler,(req,res,next)=>{
    res.send("The queries is correct .It is numeric");   
});

router.get('/client', countryValidator, (req, res, next) => {
    res.send("Validate");
});

router.post("/validate", validateRequest, (req, res) => {
    res.json({message: "user validated!"})
});

