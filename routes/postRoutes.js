const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const mongoose = require("mongoose");
const Post = mongoose.model("posts");
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.get("/api/posts", async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
  });

  app.post("/api/posts", requireLogin, upload.array('images'), async (req, res) => {
    // const { formData } = req.body;
    // let images = [];
    // if (req.files) {
    //   req.files.forEach(file => {
    //     images.push(file.filename);
    //   });
    // }
    //
    // console.log(images);
    //
    // console.log("Backend", req)
    // const post = new Post({
    //   _user: req.user.id,
    //   title,
    //   description,
    //   price,
    //   location,
    //   type,
    //   created_at: Date.now()
    // });
    //
    // try {
    //   await post.save();
    // } catch (err) {
    //   res.status(422);
    // }
    console.log(req.body);
    console.log(req.files);
    res.send(req.user);
  });
};
