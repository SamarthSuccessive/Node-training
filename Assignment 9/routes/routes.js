const express = require("express");
const router = express.Router();
const user = require("../models/userModel");
const { body, validationResult } = require("express-validator");

router.post(
  "/add-data",
  [
    body("name").isLength({ min: 3, max: 50 }).isString().notEmpty(),
    body("rollno").toInt().notEmpty(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, rollno } = req.body;
    const newuser = new user({ name: name, rollno: rollno });
    const result = await newuser.save();
    res.send(`Result from the database: ${result}`);
  }
);

module.exports = router;
