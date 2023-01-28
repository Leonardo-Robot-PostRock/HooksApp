import React, { useReducer, useState } from 'react';
import { useEffect } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    return () => {};
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = { type: 'Add Todo', payload: todo };
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: 'Remove Todo',
      payload: id
    });
  };

  const handleToggleTodo = (id) => {
    console.log({ id });
    dispatchTodo({
      type: 'Toggle Todo',
      payload: id
    });
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
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
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
