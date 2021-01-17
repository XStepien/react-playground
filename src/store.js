import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './reducers/todosReducer';
import visibilityFilterReducer from './reducers/filtersReducer';

const reducer = {
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
};

const preloadedState = {};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // enhancers: [reduxBatch],
});

export default store;
