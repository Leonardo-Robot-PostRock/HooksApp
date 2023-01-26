import React from 'react';
import { useForm } from '../hooks';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onSumbit = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onSumbit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
