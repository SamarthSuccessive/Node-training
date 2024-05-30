const Post = require('../models/postSchema');

const likeController = async (req, res) => {
    const { blogId, email } = req.body;
    try {
        const post = await Post.updateOne(
            { _id: blogId },
            {
                $addToSet: { likes: email }
            }
        );
            // console.log(post);
        if (post.modifiedCount === 0) {
            await Post.updateOne(
                { _id: blogId },
                {
                    $pull: { likes: email }
                }
            );
        }
        res.status(200).json({ status:true,message: 'Like updated successfully' });
    } catch (error) {
        console.error('Error updating like:', error);
        res.status(500).json({ status:false,message: 'Internal server error' });
    }
};

module.exports = likeController;
