import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import TextField from "./TextField";

import { requestLogin } from './actions';

export default function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value});
  }

  return (
    <>
      <TextField 
        label={'E-mail'}
        name='email'
        value={email}
        onChange={handleChange}
      />
      <TextField 
        label={'Password'}
        name='password'
        value={password}
        onChange={handleChange}
      />
      <button
        type='button'
        onClick={handleSubmit}
      >
        Log In
      </button>
    </>
  );
}