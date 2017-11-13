const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobPostSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  type: String,
  short_desc: String,
  desc: String,
  // comments: [{ body: String, date: Date }],
  date_created: { type: Date, default: Date.now },
  date_updated: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  // meta: {
  //   votes: Number,
  //   favs: Number,
  // },
});

module.exports = mongoose.model('jobPosts', jobPostSchema);
