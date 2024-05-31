const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const validateUser = require("../middlewares/validateUser");
const checkValidation = require("../middlewares/checkValidation");
const createController = require("../controllers/createController");
const myBlogsController = require("../controllers/myBlogsController");
const likeController = require("../controllers/likeController");
const findController = require("../controllers/findController");
const updateController = require("../controllers/updateController");
const blogsController = require("../controllers/blogsController");
const authenticateToken = require("../middlewares/authenticateToken");
const deleteController = require("../controllers/deleteController");

router.post("/signup", validateUser, checkValidation, signupController);

router.post("/login", loginController);

router.post("/create", authenticateToken, createController);

router.get("/myblogs", authenticateToken, myBlogsController);

router.patch("/like", authenticateToken, likeController);

router.get("/findblog/:id", authenticateToken, findController);

router.patch("/update/:id", authenticateToken, updateController);

router.get("/blogs", authenticateToken, blogsController);

router.delete('/delete/:id',authenticateToken,deleteController);
module.exports = router;
