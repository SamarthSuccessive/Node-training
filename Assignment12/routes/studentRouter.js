const express = require("express");

const getStudentController = require("../controllers/getStudentControler");
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const verifyToken = require("../middlewares/verifyToken");
const SecurityHeaders = require('../middlewares/securityHeader');
const router = express.Router();
router.use(SecurityHeaders.setHeaders);
router.post("/signup", signupController);
router.post("/login", loginController);

router.get("/api/getStudents", verifyToken, getStudentController);

module.exports = router;
