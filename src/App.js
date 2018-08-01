import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';
import data from './quotes.json';

class App extends Component {
  constructor (props) {
    super(props);
      this.state = {
        quote: null
      };
  }
  componentDidMount () {
    this.setState({quote: data.quotes[Math.floor(Math.random() * data.quotes.length)]});
  }

  handleNewQuoteClick () {
    this.setState({quote: data.quotes[Math.floor(Math.random() * data.quotes.length)]});
  }

  render () {    
    return (
      <div>
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
