import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import PostField from './PostField';
import formFields from './formFields';
import $ from 'jquery';
import './PostForm.css';
import validate from './formValidate';

class PostForm extends Component {
  componentDidMount() {
    // const yolo = (e) => {
    //   console.log('e ', e);
    // };
    // $(document).ready(() => {
    //   console.log('select', $('select'));
    //   $('select').material_select();
    //   $('select').on('change', yolo);
    // });
    // $(this.selectTag).material_select();
    // $(this.selectTag).on('change', this.)
  }

  renderFields() {
    const fields = formFields.map((data, index) => (
      <Field key={index} {...data} component={PostField} />
    ));
    return <div className="row">{fields}</div>;
  }

  renderItemsField({ fields, meta: { error, submitFailed } }) {
    return (
      <div className="row" style={{ marginBottom: '0px' }}>
        <a
          className="waves-effect waves-light btn col s3 offset-s9"
          onClick={() => fields.push({})}
          style={{ marginBottom: '50px' }}
        >
          <i className="material-icons left">add</i>Add Item
        </a>
        {fields.map((item, index) => (
          <div key={index} className="row" style={{ marginLeft: '0.25em' }}>
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
              style={{ marginTop: '15px' }}
            >
              <i className="material-icons">delete</i>
            </a>
          </div>
        ))}
      </div>
    );
  }

  renderFileField(field) {
    return (
      <div className="file-field input-field " style={{ marginBottom: '5px' }}>
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

  render() {
    const { handleSubmit, onPostSubmit } = this.props;

    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <form onSubmit={handleSubmit(onPostSubmit)}>
          {this.renderFields()}

          <FieldArray className="row" name="items" component={this.renderItemsField} />
          <Field name="file" label="file" component={this.renderFileField} />

          <div className="row">
            <Link to="/posts" className="red btn-flat white-text" style={{}}>
              Cancel
            </Link>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              style={{ float: 'right' }}
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
  form: 'postForm',
  validate,
  // destroyOnUnmount: false
})(PostForm);
