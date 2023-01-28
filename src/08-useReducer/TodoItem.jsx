import React from 'react';

export const TodoItem = ({ description, onDeleteTodo, id }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{description}</span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
        Borrar
      </button>
    </li>
  );
};
