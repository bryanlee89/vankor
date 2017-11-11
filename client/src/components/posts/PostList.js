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
      return "";
    }
    const { posts } = this.props;
    const postItems = posts.map((post, index) => {
      return <PostListElement key={index} {...post} />;
    });

    return <div>{postItems}</div>;
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}
export default connect(mapStateToProps, { fetchAllPosts })(PostList);
