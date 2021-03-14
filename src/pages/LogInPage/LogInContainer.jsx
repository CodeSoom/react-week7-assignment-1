import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

import { requestLogin, logOut } from '@actions';
import { get } from '../../utils/utils';
import { saveItem } from '../../services/storage';

import LogInForm from './LogInForm';

export default function LogInContainer() {
  const accessToken = useSelector(get('accessToken'));

  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(requestLogin({ logInFields: data }));
  };

  function handleLogOut() {
    dispatch(logOut());
    saveItem('accessToken', '');
  }

  return (
    <LogInForm
      token={accessToken}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      handleLogout={handleLogOut}
    />
  );
}
