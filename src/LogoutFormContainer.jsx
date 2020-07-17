import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import LogoutForm from './LogoutForm';

import { setAccessToken } from './actions';

export default function LogoutFormContainer() {
  const dispatch = useDispatch();

  const { loginFields: { email }} = useSelector((state) => ({
    loginFields: state.loginFields,
  }));

  function handleClick() {
    dispatch(setAccessToken(''));
  }

  return (
    <LogoutForm 
      email={email} 
      onClick={handleClick}
    />
  )
}