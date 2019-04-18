import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions';

class PostsNew extends Component {
  render() {
    return (
      <div>
        <form>
          <input />
        </form>
      </div>
    );
  }
}
export default reduxForm({ form: 'newPostForm' })(
  connect(null, { createPost })(PostsNew)
);
