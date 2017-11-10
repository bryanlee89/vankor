import React from 'react';
import { connect } from 'react-redux';
import OccupationBoard from '../components/OccupationBoard';
import { fetchAllOccupationPosts, createPost, deletePost } from '../actions/OccupationActions';

// TODO: Move this logic to selector, use reselect to avoid recompuation
const getAllPosts = (state) => {
  const { allIds, byId } = state;
  return allIds && allIds.length > 0 ? allIds.map(id => byId[id]) : [];
};

const OccupationBoardContainer = props => <OccupationBoard {...props} />;
const mapStateToProps = (state, ownProps) => {
  const { posts } = state.occupation;
  console.log(' mapStateToProps ', posts);
  return {
    posts: getAllPosts(posts),
  };
};
export default connect(mapStateToProps, {
  getAllPosts: fetchAllOccupationPosts,
  createPost,
  deletePost,
})(OccupationBoardContainer);
