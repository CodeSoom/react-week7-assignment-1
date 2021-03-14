import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import given from 'given2';

import LoginForm from './LogInForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const onSubmit = jest.fn();
  const register = jest.fn();
  const handleLogout = jest.fn();

  given('accessToken', () => '');

  const renderLoginForm = () => render((
    <LoginForm
      token={given.accessToken}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      handleLogout={handleLogout}
    />
  ));

  it('renders LoginForm', () => {
    renderLoginForm();

    expect(screen.getByLabelText('E-Mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders logout button', () => {
    given('accessToken', () => '123123');

    renderLoginForm();

    expect(screen.getByRole('button', {
      name: 'Log out',
    })).toBeInTheDocument();
  });

  it('calls handleLogout function upon clicking log out', () => {
    given('accessToken', () => '123123');

    renderLoginForm();

    fireEvent.click(screen.getByRole('button', {
      name: 'Log out',
    }));

    expect(handleLogout).toBeCalled();
  });
});
