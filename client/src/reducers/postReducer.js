import { FETCH_ALL_POSTS, FETCH_POST } from '../actions/types';

export default function (state = {}, action) {
  console.log(action);
  // console.log(state);
  switch (action.type) {
    case FETCH_ALL_POSTS:
      // Make posts object
      const posts = {};
      action.posts.forEach((post) => {
        posts[post._id] = post;
      });
      return posts;
    case FETCH_POST:
      return {
        ...state,
        [action.payload._id]: action.payload,
      };
    default:
      return state;
  }
}
