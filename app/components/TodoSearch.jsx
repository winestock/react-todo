var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class TodoSearch extends React.Component {
  render () {
    var {dispatch, showCompleted, searchText} = this.props;

    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
};

// The connect() function, provided by Redux, connects the state of the store to the <TodoSearch> component.
// In this case, it connects the completed todos and their text to <TodoSearch>.
export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
