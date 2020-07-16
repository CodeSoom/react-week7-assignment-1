import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders LoginForm', () => {
    const loginFields = {
      email: '',
      password: '',
    };
    const handleChangeLoginField = jest.fn();
    const handleSubmitLoginField = jest.fn();

    const { getByLabelText, getByRole } = render(<LoginForm
      loginFields={loginFields}
      onChangeLoginField={handleChangeLoginField}
      onSubmitLoginField={handleSubmitLoginField}
    />);

    expect(getByLabelText('E-mail')).toHaveAttribute('type', 'email');
    expect(getByLabelText('Password')).toHaveAttribute('type', 'password');

    expect(getByRole('button', { name: 'LogIn' })).toBeInTheDocument();
  });

  context('when change inputs', () => {
    const loginFields = {
      email: '',
      password: '',
    };
    const handleChangeLoginField = jest.fn();
    const handleSubmitLoginField = jest.fn();

    it('call ChangeLoginField', () => {
      const { getByLabelText } = render(<LoginForm
        loginFields={loginFields}
        onChangeLoginField={handleChangeLoginField}
        onSubmitLoginField={handleSubmitLoginField}
      />);

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
    const loginFields = {
      email: '',
      password: '',
    };
    const handleChangeLoginField = jest.fn();
    const handleSubmitLoginField = jest.fn();

    it('call SubmitLoginField', () => {
      const { getByRole } = render(<LoginForm
        loginFields={loginFields}
        onChangeLoginField={handleChangeLoginField}
        onSubmitLoginField={handleSubmitLoginField}
      />);

      fireEvent.click(getByRole('button', { name: 'LogIn' }));

      expect(handleSubmitLoginField).toBeCalledTimes(1);
    });
  });
});
