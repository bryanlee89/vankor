import axios from 'axios';
import * as actionTypes from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};

export const fetchAllPosts = () => async (dispatch) => {
  // TODO : Add a spinner when fetching items from server
  // dispatch({ type: actionTypes.FETCH_POSTS_REQUEST });
  const res = await axios.get('/api/posts');

  dispatch({ type: actionTypes.FETCH_ALL_POSTS, posts: res.data });
};

export const fetchPost = id => async (dispatch) => {
  const res = await axios.get(`/api/posts/${id}`);

  dispatch({ type: actionTypes.FETCH_POST, payload: res.data });
};

export const submitPost = (data, history) => async (dispatch) => {
  const formData = new FormData();

  console.log("Data", data);

  Object.entries(data).forEach(([key, value]) => {
    if (key === 'file') {
      for (const file of value) {
        formData.append('images', file, file.name);
      }
    } else if (key === 'items') {
      const jsonValue = JSON.stringify(value);
      formData.append(key, jsonValue);
    } else {
      formData.append(key, value);
    }
  });

  const config = {
    headers: { 'content-type': 'multipart/form-data' },
  };

  const res = await axios.post('/api/posts', formData, config);

  history.push('/posts');
  dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
};
