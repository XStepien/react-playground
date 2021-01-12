import React, { Suspense } from 'react';
import './App.css';

import ErrorBoundary from './ErrorBoundary';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Suspense fallback={(<div>Loading...</div>)}>
            <TodoList />
          </Suspense>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
