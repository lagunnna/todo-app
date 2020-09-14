import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchTodo } from '../state-management/actions';

const FormSearchTaskComponent = ({ submit }) => {
  const [inputSearchTask, setInputSearchTask] = useState('');
  const onInputChange = (event) => {
    setInputSearchTask(event.target.value);

    submit(inputSearchTask);
  };

  const clearValue = (event) => {
    event.preventDefault();
    setInputSearchTask('');
  };

  return (
    <form className="formSearch" onSubmit={clearValue}>
      <input value={inputSearchTask} onChange={onInputChange} />
      <button>delete</button>
    </form>
  );
};

export const FormSearchTask = connect(null, { submit: searchTodo })(FormSearchTaskComponent);
