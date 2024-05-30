const Post = require('../models/postSchema');

const blogsController = async (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = 6; 
  const skip = (page - 1) * limit;

  try {
    const blogs = await Post.find({})
      .sort({ createdAt: -1 }) 
      .skip(skip)
      .limit(limit);


    res.status(200).json({
      success: true,
      blogs
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = blogsController;
