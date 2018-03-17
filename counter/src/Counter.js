import React, {Component} from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    state = {green: false}
    componentWillReceiveProps(nextProps){
        if(nextProps.val > this.props.val){
            this.setState({green: true})
        }

    }

    componentDidUpdate(){
        if(this.state.green){
            if(this.__prevTimeout){
            clearTimeout(this.__prevTimeout)
            }
            this.__prevTimeout = setTimeout(() => this.setState({green: false}), 2000)
        }
    }

    render() {
        return (
            <div style={{color: this.state.green ? 'green' : 'black'}}>
                {this.props.val}
            </div>
        );
    }
}

let mapStateTProps = (state) => {
    return {val: state.val}
}

export default connect(mapStateTProps)(Counter);