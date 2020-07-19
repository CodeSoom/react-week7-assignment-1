import React from 'react';

import { useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';
import LogoutFormContainer from './LogoutFormContainer';

export default function LoginPage() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  return (
    <>
      {accessToken
        ? (<LogoutFormContainer />)
        : (<LoginFormContainer />)}
    </>
  );
}
