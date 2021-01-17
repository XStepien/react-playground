/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  addTodo,
  editTodo,
  fetchAllTodos,
  removeTodo,
} from '../actions/todosActions';

export const todosAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    loading: 'idle',
    actionStatus: 'idle',
  }),
  extraReducers: {
    // TODO: use the "Builder Callback" Notation
    [fetchAllTodos.pending]: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [fetchAllTodos.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        todosAdapter.setAll(state, action.payload);
        state.loading = 'success';
      }
    },
    [fetchAllTodos.rejected]: (state) => {
      if (state.loading === 'pending') {
        state.loading = 'error';
      }
    },
    // Post one todo
    [addTodo.pending]: (state) => {
      if (state.actionStatus === 'idle') {
        state.actionStatus = 'pending';
      }
    },
    [addTodo.fulfilled]: (state, action) => {
      if (state.actionStatus === 'pending') {
        todosAdapter.addOne(state, action.payload);
        state.actionStatus = 'idle';
      }
    },
    // Edit one todo
    [editTodo.pending]: (state) => {
      if (state.actionStatus === 'idle') {
        state.actionStatus = 'pending';
      }
    },
    [editTodo.fulfilled]: (state, action) => {
      if (state.actionStatus === 'pending') {
        todosAdapter.upsertOne(state, action.payload);
        state.actionStatus = 'idle';
      }
    },
    // Remove one todo
    [removeTodo.pending]: (state) => {
      if (state.actionStatus === 'idle') {
        state.actionStatus = 'pending';
      }
    },
    [removeTodo.fulfilled]: (state, action) => {
      if (state.actionStatus === 'pending') {
        todosAdapter.removeOne(state, action.payload);
        state.actionStatus = 'idle';
      }
    },
  },
});

export default todoSlice.reducer;
