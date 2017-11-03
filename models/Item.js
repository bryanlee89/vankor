const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemsSchema = new Schema({
  name: String,
  price: Number,
  sold: { type: Boolean, default: false },
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

module.exports = itemsSchema;
