import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../state-management/actions';

const TodoComponent = ({ todo, remove, toggle }) => {
  const onChange = () => {
    toggle(todo.id);
  };

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={onChange} />
      {todo.text}
      <button onClick={() => remove(todo.id)}>x</button>
    </li>
  );
};

export const Todo = connect(null, { remove: deleteTodo, toggle: toggleTodo })(TodoComponent);
