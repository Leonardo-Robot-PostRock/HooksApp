import React, { useReducer, useState } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del tiempo',
    done: false
  }
];
export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = { type: 'Add Todo', payload: todo };
    dispatchTodo(action)
  };


  return (
    <>
      <h1>
        TodoApp {todos.length}
        <small> pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
