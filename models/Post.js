const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  description: String,
  price: Number,
  location: String,
  type: String,
  created_at: Date,
  upadated_at: Date
});

mongoose.model('posts', postSchema);
