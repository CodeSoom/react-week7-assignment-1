import React, { useState } from 'react';

import LoginForm from './LoginForm';

export default function LoginContainer() {
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

  const handleSubmit = () => {};

  return (
    <LoginForm
      fields={fields}
      onChange={handleChangeInput}
      onSubmit={handleSubmit}
    />
  );
}
