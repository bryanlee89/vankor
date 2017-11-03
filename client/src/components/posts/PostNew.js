import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import PostForm from "./PostForm";
import * as actions from "../../actions";

class PostNew extends Component {
  render() {
    const submitPost = this.props.submitPost;
    return <PostForm onPostSubmit={() => submitPost(this.props.form.values, this.props.history)} />;
  }
}
function mapStateToProps(state) {
  return { form: state.form.postForm };
}

PostNew = connect(mapStateToProps, actions)(withRouter(PostNew));

export default reduxForm({
  form: "reduxForm"
})(PostNew);
