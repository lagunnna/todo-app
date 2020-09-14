import React from 'react';
import { connect } from 'react-redux';
import { changeVisibilityFilter } from '../state-management/actions';
import { VISIBILITY_FILTERS } from '../state-management/constants';

const VisibilityFilterComponent = ({ change }) => (
  <div className="visibilityFilter">
    <label>
      all
      <input type="radio" name="filter" value="all" onChange={() => { change(VISIBILITY_FILTERS.ALL); }} />
    </label>
    <label>
      done
      <input type="radio" name="filter" value="done" onChange={() => { change(VISIBILITY_FILTERS.DONE); }} />
    </label>
    <label>
      in progress
      <input type="radio" name="filter" value="inProgress" onChange={() => { change(VISIBILITY_FILTERS.IN_PROGRESS); }} />
    </label>
  </div>
);

export const VisibilityFilter = connect(null,
  { change: changeVisibilityFilter })(VisibilityFilterComponent);
