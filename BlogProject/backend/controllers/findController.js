const post = require('../models/postSchema');

const findblog = async (req, res) => {
  const { id } = req.params; 
  if (!id) {
    return res.status(400).json({ message: "Not found params" });
  }
  const { email } = req.body;
  try {
    const blog = await post.findOne({ _id: id, email: email });
    // console.log(blog);
    if (blog) {
      return res.status(200).json({ success: "true", blog });
    } else {
      return res.status(400).json({ message: "No blog post found" });
    }
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = findblog;
