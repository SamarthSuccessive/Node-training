const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const checkValidation = require("../middlewares/checkValidation");
const validateUser = require("../middlewares/validateUser");
const loginController = require("../controllers/loginController");
const authenticateToken = require("../middlewares/authenticateToken");
const signupController = require("../controllers/signupController");
const { param,body } = require("express-validator");

router.post("/login", checkValidation, validateUser, loginController);
router.post("/signup", signupController);
router.get("/blogs", authenticateToken, userController.blogsController);
router.delete("/posts/:id", authenticateToken, userController.deleteController);
router.post(
  "/create",
  authenticateToken,
  [
    body("title").notEmpty().withMessage("Title is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("firebaseimage")
      .notEmpty()
      .withMessage("Firebase image URL is required"),
    body("user").notEmpty().withMessage("User is required"),
    body("email").isEmail().withMessage("Valid email is required"),
  ],
  userController.createController
);

router.get(
  "/blogs/:id",
  authenticateToken,
  [param("id").notEmpty().withMessage("ID parameter is required")],
  userController.findBlogController
);
router.patch("/like", authenticateToken, userController.likeController);
router.get("/myblogs", authenticateToken, userController.myBlogsController);
router.patch("/update/:id", authenticateToken, userController.updateController);

module.exports = router;
