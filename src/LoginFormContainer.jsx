import React from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const handleClick = () => {
    // TODO: fetch login() action
    dispatch();
  };

  const handleChange = () => {
    dispatch({
      type: 'loginFieldChange',
      payload: {
        name: 'email',
        value: 'tester@example.com',
      },
    });
  };

  return (
    <LoginForm onClick={handleClick} onChange={handleChange} />
  );
}
