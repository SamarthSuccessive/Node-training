const express=require('express');
const router=express.Router();
const registerControl=require('../controllers/registerControl');
const userControl=require('../controllers/userControl');
const adminControl=require('../controllers/adminControl');

router.post('/register',registerControl);
router.post("/user", userMiddleware, userControl);
router.post("/admin", adminMiddleware, adminControl);


module.exports=router;