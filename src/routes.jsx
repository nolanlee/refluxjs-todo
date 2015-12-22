import React from 'react'
import ReactRouter from 'react-router'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import TodoList from './components/TodoList'

var routes = (
  <ReactRouter.Route handler={TodoApp}>
    <ReactRouter.Route name="All" path="/" handler={TodoList} />
    <ReactRouter.Route name="Completed" path="/completed" handler={TodoList} />
    <ReactRouter.Route name="Active" path="/active" handler={TodoList} />
  </ReactRouter.Route>
);

ReactRouter.run(routes, function(Handler) {
  ReactDOM.render(<Handler/>, document.getElementById('todoapp'));
});

module.exports = routes;