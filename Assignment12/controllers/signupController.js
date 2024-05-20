const jwt = require("jsonwebtoken");
const Student = require("../models/studentSchema");
const dotenv = require("dotenv");
dotenv.config();

const bcrypt = require("bcrypt");
const signupController = async (req, res) => {
  try {
    const { studentName, studentAge, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);

    const newStud = await Student.create({
      studentName,
      studentAge,
      email,
      password: hashedPass,
    });

    res.status(201).json({
      status: "SUCCESS",

      data: {
        newStud: newStud,
      },
    });
  } catch (err) {
    res.json({
      status: "Fail",
      message: err.message,
    });
  }
};

module.exports = signupController;
