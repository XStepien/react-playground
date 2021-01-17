/* eslint-disable no-param-reassign */
import {
  createEntityAdapter,
  createSlice,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import {
  fetchAllTodos,
  addTodo,
  editTodo,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
        }
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          todosAdapter.setAll(state, action.payload);
          state.loading = 'success';
        }
      })
      .addCase(fetchAllTodos.rejected, (state) => {
        if (state.loading === 'pending') {
          state.loading = 'error';
        }
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        if (state.actionStatus === 'pending') {
          todosAdapter.addOne(state, action.payload);
          state.actionStatus = 'idle';
        }
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        if (state.actionStatus === 'pending') {
          todosAdapter.upsertOne(state, action.payload);
          state.actionStatus = 'idle';
        }
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        if (state.actionStatus === 'pending') {
          todosAdapter.removeOne(state, action.payload);
          state.actionStatus = 'idle';
        }
      })
      .addMatcher(isPending, (state) => {
        if (state.actionStatus === 'idle') {
          state.actionStatus = 'pending';
        }
      })
      .addMatcher(isRejected, (state) => {
        if (state.actionStatus === 'pending') {
          state.actionStatus = 'error';
        }
      });
  },
});

export default todoSlice.reducer;
