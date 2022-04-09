import { React, useCallback, useReducer } from 'react';
import { useLocalStorage } from 'react-use';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import AddButton from './AddButton';
import ClearButton from './ClearButton';
import TodoItem from './TodoItem';

const reducerData = (state, action) => {
  // return updated state based on `action.type`
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((item) => item.id !== action.payload);
    case 'EDIT':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        }
        return item;
      });
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

const StorageReducer = () => {
  const [storageTodo, setStorageTodo] = useLocalStorage('todoData', []);

  // memo this function to avoid re-rendering
  const reducerStorage = useCallback(
    (state, action) => {
      const newState = reducerData(state, action);
      setStorageTodo(newState);
      return newState;
    },
    [setStorageTodo],
  );

  return useReducer(reducerStorage, storageTodo);
};

function TodoList() {
  const [todoData, dispatch] = StorageReducer();
  return (
    <>
      <Paper sx={{ m: 'auto', mt: '5%', width: '80%' }} elevation={5}>
        {todoData.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            done={todo.done}
            updatedAt={new Date(todo.updatedAt).toUTCString()}
            handleDispatch={dispatch}
          />
        ))}
      </Paper>
      <Paper
        sx={{
          position: 'fixed', bottom: 0, left: 0, right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation>
          <BottomNavigationAction
            component="div"
            label="Add"
            icon={<AddButton handleDispatch={dispatch} />}
          />
          <BottomNavigationAction
            component="div"
            label="Clear"
            icon={<ClearButton handleDispatch={dispatch} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default TodoList;
