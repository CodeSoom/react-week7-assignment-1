import React from 'react';

import { useDispatch } from 'react-redux';

import { setAccessToken } from './actions';

export default function TokenContainer() {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken');

  dispatch(setAccessToken({ accessToken }));

  return (
    <div>hello</div>
  );
}
