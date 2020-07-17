import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../store/actions';

import { get } from '../utils';

export default function LogoutPage() {
  const dispatch = useDispatch();

  const accessToken = useSelector(get('accessToken'));

  function handleClickLogout() {
    dispatch(logout());
  }

  return (
    <>
      <h2>LogOut 페이지</h2>
      {accessToken ? (
        <button type="button" onClick={handleClickLogout}>
          LogOut
        </button>
      ) : (
        <p>LogOut 되었습니다.</p>
      )}
    </>
  );
}
