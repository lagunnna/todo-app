import React from 'react';
import { connect } from 'react-redux';
import { deleteCategory } from '../state-management/actions';

const CategoryComponent = ({ category, remove }) => (
  <div className="category">
    <div>{category.text}</div>
    <button onClick={() => remove(category.id)}>x</button>
  </div>
);

export const Category = connect(null, { remove: deleteCategory })(CategoryComponent);
