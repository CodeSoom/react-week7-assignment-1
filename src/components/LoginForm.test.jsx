import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChangeEmail = jest.fn();
  const handleChangePassword = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    handleChangeEmail.mockClear();
    handleChangePassword.mockClear();
    handleClick.mockClear();
  });

  const renderLogin = ({ email, password }) => render(
    <LoginForm
      email={email}
      password={password}
      onChangeEmail={handleChangeEmail}
      onChangePassword={handleChangePassword}
      onClick={handleClick}
    />,
  );
  context('with all fields', () => {
    const renderFullField = () => renderLogin({ email: 'email', password: 'passowrd' });

    it('all valid and clickable button', () => {
      renderFullField();

      screen.getAllByRole('textbox').forEach((input) => {
        expect(input).toHaveAttribute('aria-invalid', 'false');
      });
      expect(screen.getByRole('button', { name: 'Log in' })).toBeEnabled();
    });

    it('can click login button', () => {
      renderFullField();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByRole('button'));

      expect(handleClick).toBeCalled();
    });
  });

  context('without one field', () => {
    const renderOnlyIdField = () => renderLogin({ email: 'email' });

    it('password field is invalid. disabled button', () => {
      renderOnlyIdField();

      expect(screen.getByDisplayValue('email'))
        .toHaveAttribute('aria-invalid', 'false');
      expect(screen.getByPlaceholderText('PASSWORD'))
        .toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('button', { name: 'Log in' }))
        .toBeDisabled();
    });

    it('can not click login button', () => {
      renderOnlyIdField();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByRole('button'));

      expect(handleClick).not.toBeCalled();
    });
  });

  context('without all fields', () => {
    it('all field is invalid. disabled button', () => {
      renderLogin({ email: '', password: '' });

      screen.getAllByRole('textbox').forEach((input) => {
        expect(input).toHaveAttribute('aria-invalid', 'true');
      });
      expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();
    });
  });

  context('when change input', () => {
    it('called onChangeEmail', () => {
      renderLogin({ email: '', password: '' });

      expect(handleChangeEmail).not.toBeCalled();

      fireEvent.change(
        screen.getByPlaceholderText('EMAIL'),
        { target: { value: 'email' } },
      );

      expect(handleChangeEmail).toBeCalled();
    });

    it('called onChangeEmail', () => {
      renderLogin({ email: '', password: '' });

      expect(handleChangePassword).not.toBeCalled();

      fireEvent.change(
        screen.getByPlaceholderText('PASSWORD'),
        { target: { value: 'password' } },
      );

      expect(handleChangePassword).toBeCalled();
    });
  });
});
