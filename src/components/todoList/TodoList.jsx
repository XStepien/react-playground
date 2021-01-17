import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from './TodoItem';
import { selectFilteredTodos } from '../../selectors/todosSelectors';
import { fetchAllTodos } from '../../actions/todosActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todosIds = useSelector(selectFilteredTodos);
  const loading = useSelector(({ todos }) => todos.loading);

  // console.log({ loading });

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  useEffect(() => {
    if (loading === 'error') {
      throw new Error('An error occurred while fetching todos...');
    }
  });

  switch (loading) {
    case 'idle':
    case 'pending':
      return <div data-testid="loader">Loading...</div>;
    case 'success':
      return todosIds.map((todoItemId) => (
        <TodoItem key={todoItemId} id={todoItemId} />
      ));
    default:
      return null;
  }
};

export default TodoList;
