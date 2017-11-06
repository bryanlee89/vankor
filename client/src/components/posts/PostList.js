import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllPosts } from '../../actions';
import _ from 'lodash';
import PostListElement from './PostListElement';
import './PostListElement.css';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;
    // make loading page here
    if (_.isEmpty(posts)) {
      return '';
    }
    console.log('this.props.posts', posts);
    console.log(typeof posts);
    // console.log(posts[0].created_at)
    // console.log(posts[0].created_at.toLocaleDateString("en-US"))
    const postItems = [];
    _.each(posts, (post) => {
      postItems.push(<PostListElement {...post} />);
    });
    return <div>{postItems}</div>;
  }
}

function mapStateToProps(state) {
  const { posts } = state;
  // const { isFetching } = state.ui;
  // return { isFetching, posts };
  return { posts };
}
export default connect(mapStateToProps, { fetchAllPosts })(PostList);
