import React, { Component } from "react";
import { reduxForm, Field, FieldArray } from "redux-form";
import { Link } from "react-router-dom";
import PostField from "./PostField";
import formFields from "./formFields";
import $ from "jquery";

class PostForm extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $("select").material_select();
    });
  }
  renderItemsField({ fields, meta: { error, submitFailed } }) {
    return (
      <div className="row" style={{ marginBottom: "0px" }}>
        <a
          className="waves-effect waves-light btn col s3 offset-s9"
          onClick={() => fields.push({})}
          style={{ marginBottom: "50px" }}
        >
          <i className="material-icons left">add</i>Add Item
        </a>
        {fields.map((item, index) => {
          return (
            <div key={index} className="row" style={{ marginLeft: "0.25em" }}>
              <Field
                size="input-field col s7"
                name={`${item}.name`}
                type="text"
                component={PostField}
                label={`item #${index + 1}`}
              />
              <Field
                size="input-field col s3"
                name={`${item}.price`}
                type="text"
                component={PostField}
                label="price"
              />
              <a
                className="btn-floating btn-small waves-effect waves-light red"
                onClick={() => fields.remove(index)}
                style={{ marginTop: "15px" }}
              >
                <i className="material-icons">delete</i>
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  renderFileField(field) {
    return (
      <div className="file-field input-field " style={{ marginBottom: "5px" }}>
        <div className="btn">
          <span>File</span>
          <input type="file" multiple onChange={field.input.onChange} />
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Upload one or more files"
          />
        </div>
      </div>
    );
  }

  renderFields() {
    const fields = formFields.map(
      ({ size, name, label, type, style, placeholder }, index) => {
        return (
          <Field
            key={index}
            size={size}
            name={name}
            label={label}
            type={type}
            style={style}
            placeholder={placeholder}
            component={PostField}
          />
        );
      }
    );
    return <div className="row">{fields}</div>;
  }

  render() {
    const { handleSubmit, onPostSubmit } = this.props;

    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <form onSubmit={handleSubmit(onPostSubmit)}>
          {this.renderFields()}

          <FieldArray
            className="row"
            name="items"
            component={this.renderItemsField}
          />
          <Field name="file" label="file" component={this.renderFileField} />

          <div className="row">
            <Link to="/posts" className="red btn-flat white-text" style={{}}>
              Cancel
            </Link>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              style={{ float: "right" }}
            >
              Submit
              <i className="material-icons right">done</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "postForm",
  // destroyOnUnmount: false
})(PostForm);
