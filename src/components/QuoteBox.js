import React, { Component } from "react";

class QuoteBox extends Component {
  render() {
    if (this.props.quote !== null) {
      return (
        <div>
          <div className="card" style={{ maxWidth: "500px" }}>
            <div className="card-body">
              <blockquote className="blockquote mb-0 quote"> 
                <p>{this.props.quote.quote}</p>
                <footer className="blockquote-footer" style={styles.author}>
                  {this.props.quote.author}
                </footer>
              </blockquote>
              <button
                type="button"
                className="btn btn-outline-secondary"
                style={styles.newQuoteButton}
                onClick={this.props.handleNewQuoteClick}
              >
                Get new quote
              </button>
              <button
                type="button"
                className="btn btn-light"
                style={styles.twitterButton}
              >
                <a
                  className="twitter-share-button"
                  href={`https://twitter.com/intent/tweet?hashtags=quote,inspirational&text="${
                    this.props.quote.quote
                  }"\u00A0${this.props.quote.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" style={{fontSize: '26px'}}/>
                </a>
              </button>
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
    textAlign: "right",
    marginBottom: 15
  },
  newQuoteButton: {
    float: "right"
  },
  twitterButton: {
    float: "left"
  }
};

export default QuoteBox;
