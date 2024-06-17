const express = require("express");
const Validation = require("../middlewares/Validation"); // Adjust the path as needed
const UserController = require("../Controllers/UserController"); // Adjust the path as needed
const ModuleController = require("../Controllers/ModuleController");
const multer = require("multer");
const authenticateToken = require("../middlewares/authenticateToken");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post(
  "/login",
  Validation.validateUser(),
  Validation.checkValidation,
  UserController.login
);

router.post("/signup", UserController.signup);

router.get("/getalldetails",authenticateToken, ModuleController.getall);

router.get("/getById/:id",authenticateToken,ModuleController.getbyid)

router.patch("/edit/:id",authenticateToken,ModuleController.updatebyid);

router.get("/getbulk",authenticateToken,ModuleController.getbulk);

router.get("/getbyuploadid/:uploadId",authenticateToken,ModuleController.getbyuploadid);

router.post("/create", authenticateToken,Validation.checkvalid, ModuleController.add);

router.post("/uploadfile",authenticateToken,upload.single("file"), ModuleController.upload);

module.exports = router;
