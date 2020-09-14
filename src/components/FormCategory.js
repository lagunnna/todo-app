import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../state-management/actions';

const FormCategoryComponent = ({ submit }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setInputValue('');

    if (inputValue) {
      submit(inputValue);
    }
  };

  return (
    <form className="formCategory" onSubmit={onFormSubmit}>
      <input value={inputValue} onChange={onInputChange} />
      <button>add</button>
    </form>
  );
};

export const FormCategory = connect(null, { submit: addCategory })(FormCategoryComponent);
