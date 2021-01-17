// todosActions
import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTodo, getAllTodos, postTodo, putTodo } from '../api/todoListApi';

export const fetchAllTodos = createAsyncThunk('todos/fetchTodos', async () =>
  getAllTodos(),
);

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) =>
  postTodo(todo),
);

export const editTodo = createAsyncThunk('todos/editTodo', async (todo) =>
  putTodo(todo),
);

export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  const response = await deleteTodo(id);

  if (response.status === 200) {
    return id;
  }

  return false;
});
