import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export class TodoApp extends React.Component {
  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
    // The startLogout function is the last one in the actions.jsx file.
  }
  render () {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
          // The ".bind(this)" is necessary because React does not have autobinding in its class model.
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

// The Redux.connect() function connects the Redux store to the <TodoApp> component.
export default Redux.connect()(TodoApp);
