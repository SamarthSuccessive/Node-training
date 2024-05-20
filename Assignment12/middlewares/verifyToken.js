const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(200).send("Authorization header is missing");
  }

  try {
    const token = authHeader.split(" ")[1];

    console.log("token result =", jwt.verify(token, process.env.SECRET_KEY));
    next();
  } catch (err) {
    res.json({
      status: "FAIL",
      message: err.mess,
    });
  }
};

module.exports = verifyToken;
