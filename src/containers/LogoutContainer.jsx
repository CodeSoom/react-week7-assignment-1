import React from 'react';

import { useDispatch } from 'react-redux';

import { deleteAccessToken } from 'src/actions';

export default function LogoutContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteAccessToken());
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>Log out</button>
    </div>
  );
}
