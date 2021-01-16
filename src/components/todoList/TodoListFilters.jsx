import React from 'react';

import { useRecoilState } from 'recoil';

import todoListFilterState, {
  FILTER_STATES,
} from '../../recoil/todoList/atoms/withTodoListFilterState';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select
        defaultValue={filter}
        onBlur={updateFilter}
        onChange={updateFilter}
      >
        <option value={FILTER_STATES.ALL}>All</option>
        <option value={FILTER_STATES.COMPLETED}>Completed</option>
        <option value={FILTER_STATES.UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
