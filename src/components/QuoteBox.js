import React, { Component } from "react";

class QuoteBox extends Component {
  render () {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer" style={styles.author}>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
            <button style={styles.newQuoteButton}>Get new quote</button>
            <button style={styles.twitterButton}>Twitter</button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  author: {
    textAlign: 'right', 
    marginBottom: 15
  },
  newQuoteButton: {
    float: 'right'
  },
  twitterButton: {
    float: 'left'
  }
};

export default QuoteBox;
