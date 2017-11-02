import { FETCH_ALL_POSTS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.payload || false;
    default:
      return state;
  }
}
