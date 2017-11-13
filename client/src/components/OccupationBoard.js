import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class OccupationBoard extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({})),
    createPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    getAllPosts: PropTypes.func.isRequired,
  };
  static defaultProps = {
    posts: [],
  };

  componentDidMount() {
    this.props.getAllPosts();
  }
  createPost = (e) => {
    e.preventDefault();
    this.props.createPost();
  };
  deletePost = (id) => {
    this.props.deletePost(id);
  };

  renderPosts() {
    const { posts } = this.props;
    return posts.map(post => (
      <div key={post.id}>
        <button
          onClick={() => {
            this.deletePost(post);
          }}
        >
          Delete this post{' '}
        </button>
        <div>Id: {post.id}</div>
        <div>name : {post.name}</div>
      </div>
    ));
  }

  render() {
    console.log('OccuationBoard render', this.props);
    const { posts } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col s10">
            <SearchBar />
          </div>
          <button onClick={this.createPost}>Create post </button>
          <Link to="/occupation/new" className="waves-effect waves-light btn-large ">
            <i className="large material-icons">add</i>
          </Link>
          <div className="col s2" style={{ textAlign: 'center', marginTop: '15px' }}>
            {posts.length === 0 ? 'No posts' : this.renderPosts()}
          </div>
        </div>
      </div>
    );
  }
}

export default OccupationBoard;
