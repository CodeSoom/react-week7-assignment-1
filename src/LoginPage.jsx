import React from 'react';

import { useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

function LogoutFormContainer() {
  return (
    <p>
      로그인 성공
    </p>
  )
}

export default function LoginPage() {
  const { accessToken } = useSelector((state) => ({
    accessToken: state.accessToken,
  }));

  return (
    <>
      {accessToken ? (<LogoutFormContainer />) : (<LoginFormContainer />)}
    </>
  );
}
