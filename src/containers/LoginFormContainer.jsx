import React from 'react';

import { useDispatch } from 'react-redux';

import {
  setSessionInput,
  login,
} from '../store/actions';

import LoginForm from '../components/LoginForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  function handleChangeInput(ev) {
    const { name, value } = ev.target;
    dispatch(setSessionInput(name, value));
  }

  function handleSubmitForm(ev) {
    ev.preventDefault();
    dispatch(login());
  }

  return (
    <LoginForm onChange={handleChangeInput} onSubmit={handleSubmitForm} />
  );
}
