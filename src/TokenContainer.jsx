import React from 'react';

import { useDispatch } from 'react-redux';

import { setAccessToken } from './actions';

import { getToken } from './services/accessTokenRepository';

import RoutePage from './RoutePage';

export default function TokenContainer() {
  const dispatch = useDispatch();

  const accessToken = getToken();

  if (accessToken) {
    dispatch(setAccessToken({ accessToken }));
  }

  return (
    <RoutePage />
  );
}
