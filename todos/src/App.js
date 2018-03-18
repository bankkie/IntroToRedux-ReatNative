import React, { Component } from 'react';
import VisbleTodoList from './containers/VisbleTodoList';
import AddTodo from './containers/AddTodo';
import VisibilityFilterBar from './components/VisibilityFilterBar';


class App extends Component {
  render() {
    return (
      <div>
        <VisbleTodoList/>
        <VisibilityFilterBar/>
        <AddTodo/>
      </div>
    );
  }
}

export default App;
