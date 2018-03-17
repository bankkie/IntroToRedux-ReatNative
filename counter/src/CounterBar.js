import React, { Component } from 'react';
import { connect } from 'react-redux'
import { inc } from './actions';
import { accumulate } from './actions';
import { accPush } from './actions';
import { reset } from './actions';
import { incWithDelay } from './actions'


class CounterBar extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.inc}>Click</button>
        <button onClick={this.props.incWithDelay}>incWithDelay</button>
        <button onClick={this.props.reset}>Reset</button>
        <button onClick={this.props.accumulate}>Acc</button>
        <button onClick={this.props.accPush}>Push</button>
        </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        reset: () => dispatch(reset()),
        incWithDelay: () => dispatch(incWithDelay()),
        accPush: () => dispatch(accPush()),
        accumulate: () => dispatch(accumulate())
    }
}

export default connect(null, mapDispatchToProps)(CounterBar);
