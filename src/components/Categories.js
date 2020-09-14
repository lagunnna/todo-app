import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Route, Link, Switch, useRouteMatch,
} from 'react-router-dom';

import { Category } from './Category';
import { Todos } from './Todos';
import { Form } from './Form';
import { toggleCategory } from '../state-management/actions';

const CategoriesComponent = ({ data, toggle }) => {
  const match = useRouteMatch();
  const [currentCategory, setCurrentCategory] = useState('');

  const onClickLink = (event) => {
    setCurrentCategory(event.target.dataset.category);

    toggle(currentCategory);
  };

  return (
    <div className="container">
      <nav className="categoryList">
        {data.map((category) => (
          <li key={category.id}>
            <Link to={`${match.url}/${category.text}`} data-category={category.text} onClick={onClickLink}>
              <Category category={category} />
            </Link>
          </li>
        ))}
      </nav>

      <Switch>
        {data.map((category) => (
          <Route path={`${match.path}/${category.text}`}>
            <Form category={category.text} />
            <Todos category={category.text} />
          </Route>
        ))}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({ data: state.categoriesReducer.categories });

export const Categories = connect(mapStateToProps, { toggle: toggleCategory })(CategoriesComponent);
