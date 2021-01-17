import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import store from './store';

test('renders todo list app', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const loadingScreen = screen.getByTestId('loader');
  expect(loadingScreen).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByTestId('todoListItem1')).toBeInTheDocument();
  });
});
