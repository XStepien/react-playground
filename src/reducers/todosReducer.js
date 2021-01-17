/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  fetchAllTodos,
  addTodo,
  editTodo,
  removeTodo,
} from '../actions/todosActions';

export const todosAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
});

function isPendingAction(action) {
  return action.type.endsWith('Todo/pending');
}

function isRejectedAction(action) {
  return action.type.endsWith('Todo/rejected');
}

function isFulfilledAction(action) {
  return action.type.endsWith('Todo/fulfilled');
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    loading: 'idle',
    actionStatus: 'idle',
    currentActionTodoId: null,
  }),
  extraReducers: (builder) => {
    builder
      // Case fetch todos pending
      .addCase(fetchAllTodos.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
        }
      })
      // Case fetch todos fulfilled
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          todosAdapter.setAll(state, action.payload);
          state.loading = 'success';
        }
      })
      // Case fetch todos rejected
      .addCase(fetchAllTodos.rejected, (state) => {
        if (state.loading === 'pending') {
          state.loading = 'error';
        }
      })
      // Case add todo fulfilled
      .addCase(addTodo.fulfilled, (state, action) => {
        if (state.actionStatus === 'pending') {
          todosAdapter.addOne(state, action.payload);
          state.actionStatus = 'idle';
        }
      })
      // Case edit todo fulfilled
      .addCase(editTodo.fulfilled, (state, action) => {
        if (state.actionStatus === 'pending') {
          todosAdapter.upsertOne(state, action.payload);
          state.actionStatus = 'idle';
        }
      })
      // Case remove todo fulfilled
      .addCase(removeTodo.fulfilled, (state, action) => {
        if (state.actionStatus === 'pending') {
          todosAdapter.removeOne(state, action.payload);
          state.actionStatus = 'idle';
        }
      })
      // Case pending action
      .addMatcher(isPendingAction, (state, action) => {
        if (state.actionStatus === 'idle') {
          state.actionStatus = 'pending';
          state.currentActionTodoId = action.meta.arg.id;
        }
      })
      // Case fulfilled action
      .addMatcher(isFulfilledAction, (state) => {
        state.currentActionTodoId = null;
      })
      // Case rejected action
      .addMatcher(isRejectedAction, (state) => {
        if (state.actionStatus === 'pending') {
          state.actionStatus = 'error';
        }
      });
  },
});

export default todoSlice.reducer;
