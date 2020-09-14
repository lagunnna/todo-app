import React from 'react';
import { connect } from 'react-redux';
import { Todo } from './Todo';
import { VISIBILITY_FILTERS } from '../state-management/constants';

const TodosComponent = ({ category, data }) => (
  <ul className="todoList">
    {data.filter((todo) => todo.category === category).map((todo) => (
      <Todo todo={todo} key={todo.id} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  data: state.todosReducer.todos.filter((todo) => {
    if (state.todosReducer.visibilityFilter === VISIBILITY_FILTERS.DONE) {
      return todo.done;
    }
    if (state.todosReducer.visibilityFilter === VISIBILITY_FILTERS.IN_PROGRESS) {
      return !todo.done;
    }
    return true;
  }).filter((todo) => todo.text.includes(state.todosReducer.todoSearch)),
});

export const Todos = connect(mapStateToProps)(TodosComponent);
