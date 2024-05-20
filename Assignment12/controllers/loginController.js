const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Student = require("../models/studentSchema");

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const stud = await Student.findOne({ email: email });
      const token = jwt.sign({ email: newStud.email }, process.env.SECRET_KEY);
      res.json({
        status: "SUCCESS",
        stud: stud,
        token: token,
      });
    }
  } catch (err) {
    res.json({
      status: "Fail",
      message: err.message,
    });
  }
};

module.exports = loginController;
