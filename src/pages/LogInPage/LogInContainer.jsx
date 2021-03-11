import React from 'react';

import { useDispatch } from 'react-redux';

import { setLoginFields, requestLogin } from '@actions';

import { useForm } from 'react-hook-form';
import LogInForm from './LogInForm';

export default function LogInContainer() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(setLoginFields(data));
    dispatch(requestLogin({ logInField: data }));
  };

  return (
    <LogInForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
}
