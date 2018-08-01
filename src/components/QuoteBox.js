import React, { Component } from "react";

class QuoteBox extends Component {
  render () { 
    if (this.props.quote !== null) {
      return (
        <div>
          <div className="card">
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{this.props.quote.quote}</p>
                <footer className="blockquote-footer" style={styles.author}>{this.props.quote.author}</footer>
              </blockquote>
              <button style={styles.newQuoteButton} onClick={this.props.handleNewQuoteClick}>Get new quote</button>
              <button style={styles.twitterButton}><a className="twitter-share-button"
              href={`https://twitter.com/intent/tweet?hashtags=quote,inspirational&text="${this.props.quote.quote}"\u00A0${this.props.quote.author}`} target="_blank" rel="noopener noreferrer">
            Tweet</a></button>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
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
