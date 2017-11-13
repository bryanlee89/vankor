import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { createPost } from '../actions/OccupationActions';

class OccupationForm extends Component {
  static propTypes = {
    form: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
    createPost: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };
  static defaultProps = {};

  onSubmit = () => {
    const { history, form } = this.props;
    this.props.createPost(form.values).then(
      () => {
        history.push('/jobs');
      },
      (err) => {
        console.log('Error submit');
      },
    );
  };

  render() {
    console.log(' Render yo', this.props);
    const {
      handleSubmit, pristine, reset, submitting,
    } = this.props;

    return (
      <form
        onSubmit={handleSubmit((data) => {
          console.log('Form is valid now', data);
          this.onSubmit(data);
        })}
      >
        <div>
          <label>Title</label>
          <div>
            <Field name="title" component="input" type="text" placeholder="Title" />
          </div>
        </div>
        <div>
          <label>Short Description</label>
          <div>
            <Field name="short_desc" component="input" type="text" placeholder="Short desc" />
          </div>
        </div>
        <div>
          <label>Job type</label>
          <div>
            <Field name="type" component="select">
              <option />
              <option value="fullTime">Full-time</option>
              <option value="partTime">Part-time</option>
              <option value="etc">Etc</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field name="employed" id="employed" component="input" type="checkbox" />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <Field name="desc" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ form }) => {
  console.log('form :: ', form);
  return { form: form.job };
};

export default _.flow(
  withRouter,
  connect(mapStateToProps, { createPost }),
  reduxForm({
    form: 'job',
  }),
)(OccupationForm);
