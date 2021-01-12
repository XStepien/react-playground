import React from 'react';

import { useRecoilValue, useRecoilCallback } from 'recoil';
import filteredTodoListState from '../../recoil/todoList/selectors/filteredTodoListState';
import todoListState from '../../recoil/todoList/atoms/withTodoList';

import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { editTodo, removeTodo } from '../../api/todoListApi';

const TodoList = () => {
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  const handleOnEdit = useRecoilCallback(({ set }) => async (params) => {
    await editTodo(params);
    set(todoListState, (arg) =>
      arg.map((a) => (a.id === params.id ? params : a))
    );
  });

  const handleOnDelete = useRecoilCallback(({ set }) => async (id) => {
    await removeTodo(id);
    set(todoListState, (arg) => arg.filter((a) => a.id !== id));
  });

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodoList.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          item={todoItem}
          onUpdate={handleOnEdit}
          onDelete={handleOnDelete}
        />
      ))}
    </>
  );
};

export default TodoList;
