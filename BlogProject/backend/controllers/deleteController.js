const Post = require('../models/postSchema'); // Adjust the path to where your Post model is located

const deleteController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Post.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server error' });
  }
};

module.exports = deleteController;
