import React, { Component } from 'react';
import Counter from './Counter';
import CounterBar from './CounterBar';
import IncButtom from './IncButtom';
// import IncButtom from './IncButtom';


class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <CounterBar/>
        </div>
    );
  }
}

export default App;
