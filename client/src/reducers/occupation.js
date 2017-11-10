import { combineReducers } from 'redux';
import {
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  RECEIVE_OCCUPATION_POSTS,
} from '../constants/ActionTypes';

const byId = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
    case UPDATE_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      };
    case DELETE_POST: {
      const newState = { ...state };
      delete newState[action.post.id];
      return newState;
    }
    case RECEIVE_OCCUPATION_POSTS:
      return {
        ...state,
        ...action.posts.reduce((obj, post) => {
          obj[post.id] = post;
          return obj;
        }, {}),
      };
    default: {
      return state;
    }
  }
};

// Keeps track of all post ids in a list
const allIds = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.post.id];
    case DELETE_POST:
      return state.filter(id => id !== action.post.id);
    case RECEIVE_OCCUPATION_POSTS:
      return action.posts.map(post => post.id);
    default:
      return state;
  }
};

const posts = combineReducers({
  byId,
  allIds,
});

export default combineReducers({
  posts,
});
