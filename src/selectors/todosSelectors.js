import { createSelector } from '@reduxjs/toolkit';
import { VisibilityFilters } from '../reducers/filtersReducer';
import { todosAdapter } from '../reducers/todosReducer';

export const {
  selectById: selectTodoById,
  selectIds: selectTodoIds,
  selectEntities: selectTodoEntities,
  selectAll: selectAllTodos,
  selectTotal: selectTotalTodos,
} = todosAdapter.getSelectors((state) => state.todos);

const selectFilter = (state) => state.visibilityFilter;

export const selectFilteredTodos = createSelector(
  [selectTodoIds, selectAllTodos, selectFilter],
  (todosId, allTodos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todosId;
      case VisibilityFilters.SHOW_COMPLETED:
        return Object.values(allTodos)
          .filter((t) => t.isCompleted)
          .map((t) => t.id);
      case VisibilityFilters.SHOW_ACTIVE:
        return Object.values(allTodos)
          .filter((t) => !t.isCompleted)
          .map((t) => t.id);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  },
);

export const selectTotalCompletedTodos = createSelector(
  selectTodoEntities,
  (todos) => Object.values(todos).filter((t) => t.isCompleted).length,
);
