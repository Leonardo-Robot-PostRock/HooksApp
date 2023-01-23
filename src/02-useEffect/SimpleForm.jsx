import React, { useEffect, useState } from 'react';
import Message from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Punk darkwave',
    mail: 'punk@example.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  useEffect(() => {
    console.log('useEffect called');

    return () => {};
  }, []);
  useEffect(() => {
    console.log('formState Changed');

    return () => {};
  }, [formState]);
  useEffect(() => {
    console.log('email Changed');

    return () => {};
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="leonardo@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {(username === 'strider2') && <Message />}
    </>
  );
};
