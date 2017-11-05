import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../actions";
import PostListElement from "./PostListElement";
import "./PostListElement.css";

class PostList extends Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    //make loading page here
    if (!this.props.posts) {
      return '';
    }
    if (this.props.posts.length === 0) {
      return ''
    }
    console.log("this.props.posts", this.props.posts);
    const { posts } = this.props;
    console.log(typeof posts);
    // console.log(posts[0].created_at)
    // console.log(posts[0].created_at.toLocaleDateString("en-US"))
    const postItems = this.props.posts.map(post => {
      return <PostListElement {...post} />;
    });

    return <div>{postItems}</div>;
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}
export default connect(mapStateToProps, { fetchAllPosts })(PostList);
