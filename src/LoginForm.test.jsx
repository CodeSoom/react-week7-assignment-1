import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const loginFields = {
    email: '',
    password: '',
  };

  const handleChangeLoginField = jest.fn();
  const handleSubmitLoginField = jest.fn();

  function renderLoginForm() {
    return render(
      <LoginForm
        loginFields={loginFields}
        onChangeLoginField={handleChangeLoginField}
        onSubmitLoginField={handleSubmitLoginField}
      />,
    );
  }

  beforeEach(() => {
    handleChangeLoginField.mockClear();
    handleSubmitLoginField.mockClear();
  });

  it('renders LoginForm', () => {
    const { getByLabelText, getByRole } = renderLoginForm();

    expect(getByLabelText('E-mail')).toHaveAttribute('type', 'email');
    expect(getByLabelText('Password')).toHaveAttribute('type', 'password');

    expect(getByRole('button', { name: 'LogIn' })).toBeInTheDocument();
  });

  context('when change inputs', () => {
    it('call ChangeLoginField', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'newEmail' },
      });

      expect(handleChangeLoginField).toBeCalledTimes(1);

      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'newPassword' },
      });

      expect(handleChangeLoginField).toBeCalledTimes(2);
    });
  });

  context('when click [Login] button', () => {
    it('call SubmitLoginField', () => {
      const { getByRole } = renderLoginForm();

      fireEvent.click(getByRole('button', { name: 'LogIn' }));

      expect(handleSubmitLoginField).toBeCalledTimes(1);
    });
  });
});
