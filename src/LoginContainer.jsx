import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

export default function LoginContainer() {
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: 'sample',
    });
  };

  return (
    <LoginForm
      fields={fields}
      onChange={handleChangeInput}
      onSubmit={handleSubmit}
    />
  );
}
