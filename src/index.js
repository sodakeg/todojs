/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import TodoList from './components/TodoList';

const init = () => {
  const setInitData = () => {
    // populate with initial data if empty
    if (window.localStorage.length === 0) {
      return import('./constants/initialTodoData').then(
        (data) => window.localStorage.setItem('todoData', JSON.stringify(data.default)),
      );
    }
    return Promise.resolve();
  };

  setInitData().then(() => {
    ReactDOM.render(
      <StyledEngineProvider injectFirst>
        <TodoList />
      </StyledEngineProvider>,
      document.getElementById('root'),
    );
  });
};

init();
