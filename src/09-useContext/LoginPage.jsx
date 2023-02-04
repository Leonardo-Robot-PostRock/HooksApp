import React from 'react';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label='pre-user'>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: 123, name: 'Leonardo', email: 'leonardo@example.com' })}>
        Establecer usuario
      </button>
    </>
  );
};
