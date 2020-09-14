import React from 'react';
import './styles/TodosContainer.less';

import { VisibilityFilter } from './VisibilityFilter';
import { ProgressBar } from './ProgressBar';
import { FormCategory } from './FormCategory';
import { Categories } from './Categories';
import { FormSearchTask } from './FormSearchTask';

export const TodosContainer = () => (
  <div className="todosContainer">
    <header>
      <VisibilityFilter />
      <FormSearchTask />
    </header>
    <ProgressBar />
    <FormCategory />
    <Categories />
  </div>
);
