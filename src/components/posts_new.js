import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    const {meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}  shortcut below to pull all properties within field.input by using ...
          {...field.input}
        />
        <div className="text-help">
            {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title"
          component={this.renderField}
        />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf'}
  const errors = {};

  // validate the inputs from the 'values'
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 chars";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = 'Enter some content please';
  }
  // if errors is empty, the form is fine to submit, if nonempty and form will not submit
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew);
