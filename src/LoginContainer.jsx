import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

import { requestLogin } from './actions';

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
    const { email, password } = fields;
    dispatch(requestLogin({ email, password }));
  };

  return (
    <LoginForm
      fields={fields}
      onChange={handleChangeInput}
      onSubmit={handleSubmit}
    />
  );
}
