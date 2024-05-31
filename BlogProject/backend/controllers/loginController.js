const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User =require('../models/userSchema');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if(!user)
  {
    return res.status(400).json({msg :'username not exist'})
  }
  try {
    if (await bcrypt.compare(password,user.password)) {
      const tokenDuration = 15 * 60 * 1000;
      const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY,{ expiresIn: '15m' });
      res.status(200).json({
        email:user.email,
        name:user.name,
        token: token,
        expiresIn: tokenDuration
      });
    }
  else{
    return res.status(400).json({status: "Fail",msg:'Password Do not match'});
  }
}
  catch (err) {
    return res.status(500).json({
      status: "Fail",
      msg: `Error in Login`,
    });
  }
}

module.exports = loginController;