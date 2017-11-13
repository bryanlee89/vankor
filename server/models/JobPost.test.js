const mongoose = require('mongoose');
const JobPost = require('./JobPost');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
// connect to mongoDB
mongoose.connect(keys.mongoURI);

// const jobPostSchema = new Schema({
//   title: { type: String, required: true },
//   author: { type: Schema.Types.ObjectId, ref: 'User' },
//   type: String,
//   short_desc: String,
//   desc: String,
//   // comments: [{ body: String, date: Date }],
//   date_created: { type: Date, default: Date.now },
//   date_updated: { type: Date, default: Date.now },
//   deleted: { type: Boolean, default: false },
//   // meta: {
//   //   votes: Number,
//   //   favs: Number,
//   // },
// });

describe('JobPost', () => {
  beforeEach((done) => {
    done();
  });

  describe('Given a valid post', () => {
    it('should create the post', (done) => {
      const post = new JobPost({
        title: 'My test post',
        date_created: Date.now(),
      });
      post.save().then((doc) => {
        expect(doc.title).toBe(post.title);
        expect(doc.date_created).toBe(post.date_created);
        done();
      });
    });
  });
});
