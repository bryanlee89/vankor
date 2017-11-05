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
    console.log("this.props", this.props.posts);
    const { posts } = this.props;
    console.log(typeof posts)
    // console.log(posts[0].created_at)
    // console.log(posts[0].created_at.toLocaleDateString("en-US"))

    return (
      <div>
        <PostListElement />
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}
export default connect(mapStateToProps, { fetchAllPosts })(PostList);
