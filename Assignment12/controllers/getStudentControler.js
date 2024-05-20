const Student = require("../models/studentSchema");

const getStudentController = async (req, res) => {
  try {
    const allStud = await Student.find();

    res.json({
      ststus: "SUCCESS",
      allStud: allStud,
    });
  } catch (err) {
    res.json({
      status: "FAIL",
      message: err.message,
    });
  }
};

module.exports = getStudentController;
