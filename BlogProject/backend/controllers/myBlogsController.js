const Post = require("../models/postSchema");
const myBlogsController = async (req, res) => {
  const email = req.body.email;
  try {
    const blogs = await Post.find({ email }); 
    // console.log(blogs);
    res.status(200).json({ success: true, blogs });
    
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
module.exports = myBlogsController;
