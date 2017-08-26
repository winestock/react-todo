var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export class Todo extends React.Component {
  render () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    // If a todo is completed, then give it the classes 'todo todo-completed'. Else, give it the class 'todo'.
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id); --Before adding react-redux
          // 'dispatch' is a react-redux function.  In this case, dispatch runs the 'startToggleTodo' action in the app/actions/actions.jsx file.
          // That action is passed the ID of the todo and it is instructed to negate the value of the 'completed' variable.
          // The documentation for the 'actions' function is part of Redux, just like dispatch.
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
};

// The 'connect' function is provided by 'react-redux'.
// It connects the Redux store to the Todo component.
export default connect()(Todo);
