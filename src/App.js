import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';

class App extends Component {
  render () {
    return (
      <div>
        <div style={{position: 'relative'}}>
          <div className="box">
            <QuoteBox />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
