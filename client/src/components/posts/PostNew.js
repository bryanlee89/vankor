import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PostForm from "./PostForm";
import PostFormReview from "./PostFormReview";

class PostNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <PostFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    } else {
      return (
        <PostForm
          onPostSubmit={() => {
            this.setState({ showFormReview: true });
          }}
        />
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "reduxForm"
})(PostNew);
