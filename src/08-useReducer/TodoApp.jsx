import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      description: 'Recolectar la piedra del alma',
      done: false
    },
    {
      id: new Date().getTime() * 3,
      description: 'Recolectar la piedra del alma',
      done: false
    }
  ];
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </>
  );
};
