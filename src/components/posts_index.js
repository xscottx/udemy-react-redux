import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  componentDidMount() {
    // lifecycle method that will be immediately called after rendered
    // componentWillMount is lifecycle method that will call before rendered
    this.props.fetchPosts();
  }

  renderPosts() {
      return _.map(this.props.posts, post => {
        return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        )
      })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function matchStateToProps(state) {
  return { posts: state.posts };
}

export default connect(matchStateToProps, { fetchPosts })(PostsIndex);
