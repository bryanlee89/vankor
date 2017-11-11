import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions";

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  render() {
    if (!this.props.posts) {
      return "";
    }
    // //make loading page here
    const { id } = this.props.match.params;
    if (!this.props.posts[id]) {
      return "";
    }
    const post = this.props.posts[id];
    // console.log(posts);
    return <div>Hello world = {post.title}</div>;
  }
}

function mapStateToProps({ posts }) {
  console.log(posts);
  return { posts };
}
export default connect(mapStateToProps, { fetchPost })(PostDetail);