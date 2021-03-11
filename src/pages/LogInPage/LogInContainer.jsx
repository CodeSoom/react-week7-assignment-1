import React from 'react';

import { useDispatch } from 'react-redux';

import { setLoginFields, requestLogin } from '@actions';

import { useForm } from 'react-hook-form';

export default function LogInContainer() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(setLoginFields(data));
    dispatch(requestLogin({ logInField: data }));
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>식당 로그인:</legend>
          <label htmlFor="email">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={register({ required: true })}
          />
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={register({ required: true })}
          />
          <button type="submit">
            Log In
          </button>
          <br />
        </fieldset>
      </form>
    </div>
  );
}
