import React, {Component} from 'react'
import TodoList from '../components/TodoList';
import {connect} from 'react-redux';

class VisbleTodoList extends Component {
    todos = [
        { id: 1, text: 'foo'},
        { id: 2, text: 'bar'}
    ]
    render(){
        return <TodoList todos={this.props.todos}/>
    }
}
const mapStatToProps = (state) => ({todos: state})
export default connect(mapStatToProps)(VisbleTodoList);