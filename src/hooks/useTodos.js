import { useEffect, useReducer } from "react";
import todoReducer from '../08-useReducer/todoReducer';

export const useTodos = (initialState = []) => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        return () => { };
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

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
