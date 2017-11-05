import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import PostForm from "./PostForm";
import * as actions from "../../actions";

class PostNew extends Component {
  submit = () => {
    // TODO: Validate this form before post
    this.props.submitPost(this.props.form.values, this.props.history);
  };
  render() {
    return <PostForm onPostSubmit={this.submit} />;
  }
}
function mapStateToProps(state) {
  return { form: state.form.postForm };
}

PostNew = connect(mapStateToProps, actions)(withRouter(PostNew));

export default reduxForm({
  form: "reduxForm"
})(PostNew);
