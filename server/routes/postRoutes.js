const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const keys = require("../config/keys");

cloudinary.config({
  cloud_name: keys.cloudinaryConfig.cloud_name,
  api_key: keys.cloudinaryConfig.api_key,
  api_secret: keys.cloudinaryConfig.api_secret
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: process.env.NODE_ENV === "production" ? "vankor-prod" : "vankor-dev",
  allowedFormats: ["jpg", "png"]
});

const parser = multer({ storage: storage });
const mongoose = require("mongoose");
const Post = mongoose.model("posts");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get("/api/posts", async (req, res) => {
    const posts = await Post.find({});
    res.send(posts.reverse());
  });

  app.get("/api/posts/:id", async (req, res) => {
    // const query = Post.where({ _id: req.params.id });
    try {
      const post = await Post.findById(req.params.id, {});
      res.send(post);
    } catch (err) {
      res.status(404);
      res.send({ error: "Not Found" });
    }
  });

  app.post(
    "/api/posts",
    requireLogin,
    parser.array("images"),
    async (req, res) => {
      const {
        title,
        postType,
        email,
        description,
        phoneNumber,
        location
      } = req.body;

      const items = JSON.parse(req.body.items);

      const post = new Post({
        _user: req.user.id,
        title,
        postType,
        email,
        description,
        items,
        phoneNumber,
        location,
        url: req.files.map(file => file.url),
        created_at: Date.now()
      });

      console.log("post", post);
      console.log(req.files);

      try {
        await post.save();
      } catch (err) {
        res.status(422);
      }

      // console.log(req.body);
      // console.log(req.files);
      res.send(req.user);
    }
  );
};
