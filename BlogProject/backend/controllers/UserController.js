const Post = require("../models/postSchema");

class UserController {
  async blogsController(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = 6;
      const skip = (page - 1) * limit;
      const blogs = await Post.find({})
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      res.status(200).json({
        success: true,
        blogs,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  async deleteController(req, res) {
    try {
      const { id } = req.params;
      const blog = await Post.findOne({ _id: id });
      if (blog) {
        const result = await Post.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "Post not found" });
        }
        res
          .status(200)
          .json({ success: true, message: "Post deleted successfully" });
      } else {
        res.status(400).json({ message: "Blog post not found " });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server error" });
    }
  }

  async createController(req, res) {
    try {
      const { title, description, firebaseimage, user, email } = req.body;
      const newPost = await Post.create({
        title,
        description,
        firebaseimage,
        user,
        email,
      });
      res.status(201).json({
        message: "Post created successfully",
        newPost,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal Server error" });
    }
  }

  async findBlogController(req, res) {
    try {
      const { id } = req.params;
      const { email } = req.body;
      const blog = await Post.findOne({ _id: id, email });
      if (blog) {
        return res.status(200).json({ success: true, blog });
      } else {
        return res.status(404).json({ message: "No blog post found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async likeController(req, res) {
    const { blogId, email } = req.body;
    try {
      const post = await Post.findOne({ _id: blogId });

      if (!post) {
        return res
          .status(404)
          .json({ status: false, message: "Blog not found" });
      }
      const isLiked = post.likes.includes(email);
      const query = isLiked
        ? { $pull: { likes: email } }
        : { $addToSet: { likes: email } };
      await Post.updateOne({ _id: blogId }, query);
      res
        .status(200)
        .json({ status: true, message: "Like updated successfully" });
    } catch (error) {
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  }

  async myBlogsController(req, res) {
    try {
      console.log(req.body);
      const { email } = req.body;
      const blogs = await Post.find({ email });
      res.status(200).json({ success: true, blogs });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }

  async updateController(req, res) {
    const { email, title, description } = req.body;
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Not found params" });
    }

    try {
      const result = await Post.updateOne(
        { _id: id, email },
        { $set: { title, description } }
      );
      if (result.nModified > 0) {
        res.status(200).json({ message: "Updated successfully" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new UserController();
