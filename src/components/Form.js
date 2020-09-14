import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../state-management/actions';

const FormComponent = ({ category, submit }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setInputValue('');

    if (inputValue) {
      submit(inputValue, category);
    }
  };

  return (
    <form className="formTask" onSubmit={onFormSubmit}>
      <input value={inputValue} onChange={onInputChange} />
      <button>add</button>
    </form>
  );
};

export const Form = connect(null,
  { submit: addTodo })(FormComponent);
