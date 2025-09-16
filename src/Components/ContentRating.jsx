import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      dislikes: 0
    };
  }

  // define event handlers as class properties
  handleLike = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  };

  handleDisLike = () => {
    this.setState(prevState => ({
      dislikes: prevState.dislikes + 1
    }));
  };

  render() {
    return (
      <div className='content-rating'>
        <p>
          React is a JavaScript library for building interactive user interfaces by breaking the UI into reusable components that automatically update when their data (state) changes.
        </p>

        <div className='rating-buttons'>
          <button className="like-button" onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>

          <button className="dislike-button" onClick={this.handleDisLike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
