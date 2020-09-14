import React from 'react';
import { connect } from 'react-redux';
import './styles/ProgressBar.less';

export const ProgressBarComponent = ({ amount, amountComplited }) => {
  const filler = (amount && amountComplited) ? ((amountComplited * 100) / amount) : 0;

  return (
    <div className="progressBar">
      <div className="filler" style={{ width: `${filler}%` }} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  amount: state.todosReducer.todos.length,
  amountComplited: state.todosReducer.todos.filter((todo) => todo.done).length,
});

export const ProgressBar = connect(mapStateToProps)(ProgressBarComponent);

/*
const amountTodos = data.length;
const amountComplitedTodos = data.filter((todo) => todo.done).length;
const filler = (amountTodos && amountComplitedTodos)
    ? ((amountComplitedTodos * 100) / amountTodos) : 0;
*/
