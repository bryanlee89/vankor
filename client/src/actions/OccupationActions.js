import * as types from '../constants/ActionTypes';

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

export const createPost = () => (dispatch) => {
  // TODO: Validate post data?

  // TODO: Call API /api/post/create
  fakeBackend.createPost().then((post) => {
    dispatch(createPostAction(post));
  });
};

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
