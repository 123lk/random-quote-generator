import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';
import data from './data.json';
import './index.css';

class App extends Component {
  constructor (props) {
    super(props);
      this.state = {
        quote: null,
        backgroundImage: null
      };
  }

  componentDidMount () {
    this.setState({
      quote: data.quotes[Math.floor(Math.random() * data.quotes.length)], 
      backgroundImage: data.imageUrls[Math.floor(Math.random() * data.imageUrls.length)].url
    });
  }

  handleNewQuoteClick () {
    this.setState({ 
      quote: data.quotes[Math.floor(Math.random() * data.quotes.length)],
      backgroundImage: data.imageUrls[Math.floor(Math.random() * data.imageUrls.length)].url
    });
  }

  render () {  
    return (
      <div className='background' style={{backgroundImage: `url(${this.state.backgroundImage})`, transition: 'background-image 1s linear'}}>
        <div style={{position: 'relative'}}>
          <div className="box">
            <QuoteBox quote={this.state.quote} handleNewQuoteClick={this.handleNewQuoteClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
