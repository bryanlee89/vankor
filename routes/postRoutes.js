const mongoose = require('mongoose');
const Post = mongoose.model("posts");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {

  app.get("/api/posts", async (req, res) => {
    const posts = await Post.find({})
    res.send(posts);
  });

  app.post("/api/posts", requireLogin, async (req, res) => {
    const { title, description, price, location, type } = req.body;

    const post = new Post({
      _user: req.user.id,
      title,
      description,
      price,
      location,
      type,
      created_at: Date.now()
    });

    try {
      await post.save();
    } catch (err) {
      res.status(422);
    }

    console.log(post);
    res.send(req.user);
  });
};
