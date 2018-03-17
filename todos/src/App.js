import React, { Component } from 'react';
import VisbleTodoList from './containers/VisbleTodoList';
import AddTodo from './containers/AddTodo';


class App extends Component {
  render() {
    return (
      <div>
        <VisbleTodoList/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;
