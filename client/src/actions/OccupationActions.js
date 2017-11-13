import axios from 'axios';
import * as types from '../constants/ActionTypes';
import { CALL_API } from '../middlewares/api';
import { CREATE_POST } from '../constants/ActionTypes';

const receivePosts = posts => ({
  type: types.RECEIVE_OCCUPATION_POSTS,
  posts,
});
const createPostAction = post => ({
  type: types.CREATE_POST,
  post,
});
const updatePostAction = post => ({
  type: types.UPDATE_POST,
  post,
});
const deletePostAction = post => ({
  type: types.DELETE_POST,
  post,
});

let newId = 5;
const DELAY = 300;
const fakeData = [{ id: 1, name: 'post 1' }, { id: 3, name: 'post 3' }];
const fakeBackend = {
  getPosts: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeData);
      }, DELAY);
    }),
  createPost: () => {
    const createData = {
      id: newId++,
      name: `new post ${newId}`,
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(createData);
      }, DELAY);
    });
  },
};

export const createPost = postData => dispatch =>
  // TODO: Validate post data?

  // TODO: Call API /api/post/create
  axios
    .post('/api/jobs', postData)
    .then((result) => {
      console.log('create result ', result);
      dispatch(createPostAction(postData));
    })
    .catch((err) => {
      console.error(' Error create ', err);
      // TODO: dispatch error..
    });
export const updatePost = post => (dispatch) => {
  // fakeBackend.updatePost(post).then(() => {
  dispatch(updatePostAction(post));
  // });
};

export const deletePost = post => (dispatch) => {
  // fakeBackend.deletePost().then(() => {
  dispatch(deletePostAction(post));
  // });
};

export const fetchAllOccupationPosts = () => (dispatch) => {
  // Fetch data
  fakeBackend.getPosts().then((posts) => {
    console.log(' Fake Posts ', posts);
    dispatch(receivePosts(posts));
  });
};
