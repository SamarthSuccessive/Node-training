const post = require("../models/postSchema");
const updateController = async (req, res) => {
  const { email, title, discription } = req.body;
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Not found params" });
  }
  try {
    const result = await post.updateOne(
      { _id: id, email: email },
      { $set: { title: title, discription: discription } }
    );
    if (result) {
      res.status(200).json({ message: "Updated successfully" });
    } else {
      res.status(400).json({ message: "Something wrong Please try again !" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " });
  }
};

module.exports = updateController;
