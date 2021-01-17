import React from 'react';
import './App.css';

import ErrorBoundary from './ErrorBoundary';
import TodoList from './components/todoList/TodoList';
import TodoListStats from './components/todoList/TodoListStats';
import TodoListFilters from './components/todoList/TodoListFilters';
import TodoItemCreator from './components/todoList/TodoItemCreator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            <TodoList />
          </>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
