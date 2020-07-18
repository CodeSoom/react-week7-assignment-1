import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../store/actions';

import LoginFormContainer from './LoginFormContainer';

import Session from '../components/Session';
import Button from '../components/Button';

import { get } from '../utils';

export default function SessionContainer() {
  const { accessToken } = useSelector(get('session'));
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    accessToken
      ? (
        <>
          <Session accessToken={accessToken} />
          <Button name="Log out" onClick={handleLogout} />
        </>
      )
      : <LoginFormContainer />
  );
}
