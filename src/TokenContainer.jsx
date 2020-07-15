import React from 'react';

import { useDispatch } from 'react-redux';

import { setAccessToken } from './actions';

import RoutePage from './RoutePage';

export default function TokenContainer() {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    dispatch(setAccessToken({ accessToken }));
  }

  return (
    <RoutePage />
  );
}
