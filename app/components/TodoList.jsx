var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
  render () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      // TodoAPI.jsx is in 'app/api'.  It's the component that handles local storage.
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      // The '.map()' function takes each todo and puts it in its own <Todo> component.
      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
};

// The connect() function, provided by Redux, connects the state of the store to the component <TodoList>.
export default connect(
  (state) => {
    return state;
  }
)(TodoList);
