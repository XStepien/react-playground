import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setVisibilityFilter,
  VisibilityFilters,
} from '../../reducers/filtersReducer';

const TodoListFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.visibilityFilter);

  const updateFilter = ({ target: { value } }) => {
    dispatch(setVisibilityFilter(value));
  };

  return (
    <>
      Filter:
      <select
        defaultValue={filter}
        onBlur={updateFilter}
        onChange={updateFilter}
      >
        <option value={VisibilityFilters.SHOW_ALL}>All</option>
        <option value={VisibilityFilters.SHOW_COMPLETED}>Completed</option>
        <option value={VisibilityFilters.SHOW_ACTIVE}>Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
