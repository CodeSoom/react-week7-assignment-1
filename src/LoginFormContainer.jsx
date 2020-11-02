import React from 'react';
import LoginForm from './LoginForm';

export default function LoginFormContainer() {
  function handleSubmit() {
    // TODO: form dispatch 작성
  }

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
}
