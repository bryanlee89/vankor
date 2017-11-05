const mongoose = require("mongoose");
const { Schema } = mongoose;
const ItemsSchema = require("./Item");

const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  postType: String,
  email: String,
  description: String,
  items: [ItemsSchema],
  phoneNumber: String,
  location: String,
  url: String,
  created_at: Date,
  upadated_at: Date,
  view_count: Number
});

mongoose.model("posts", postSchema);
